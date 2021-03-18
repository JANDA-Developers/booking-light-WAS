import { useMutation, useQuery } from '@apollo/client';
import { InputText, arraySum, autoComma, Flex, isPhone, JDbutton, JDcard, JDselect, JDtypho, Large, useInput, useSelect, Validater } from '@janda-com/front';
import { stringifyUrl } from 'query-string';
import React, { useContext, useState } from 'react';
import { Router, useHistory, useLocation, useParams } from 'react-router';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { CardBtn } from '../../../../component/btns/ModalBtn';
import { useBasket } from '../../../../hook/useBasket';
import { IBookingInputData } from '../../../../hook/useBookingInput';
import { usePurchaseBundleCreate } from '../../../../hook/usePurchase';
import { useAnnonymouseVerifi } from '../../../../hook/useUser';
import NiceElments from '../../../../nice/NiceElments';
import { VerificationTarget } from '../../../../type/api';
import { PAY_METHOD_OPS } from '../../../../type/const';
import { BASKET } from '../../../../utils/Basket';
import { completeMsg } from '../../../../utils/onCompletedMessage';
import { BuyPagePaths } from '../../BuyPageRouter';
import { BuypageContext } from '../buypageList/helper/context';
import { AnonyPurchaseForm } from '../components/AnonyPurchaseForm';
import { ProductSelectViewer } from '../components/ProductSelectViewer';
import { getProductPurchaseParam } from '../helpers/queryparamsGen';

interface IProp {
    purchaseProduct?: IBookingInputData[]
}

export const BuyPagePurchase: React.FC<IProp> = ({ purchaseProduct }) => {
    const { store, isLogined, configure } = useContext(BuypageContext)
    const { RESERVATION_NORMAL: { useBasket: isUseBasket } } = configure;
    const history = useHistory();
    const { search } = useLocation();
    const { updateComponent } = useBasket();
    const verificationHook = useAnnonymouseVerifi(VerificationTarget.PHONE);
    const [purchaseBundleCreate] = usePurchaseBundleCreate({
        onCompleted: ({ PurchaseBundleCreate }) => {
            completeMsg(PurchaseBundleCreate, "구매가 완료되었습니다.");
        }
    });
    const availablePayMethods = PAY_METHOD_OPS.filter(op => configure.payMethods?.includes(op.value));

    const messageHook = useInput("");
    const paymethodHook = useSelect(availablePayMethods[0], availablePayMethods)
    const userInfoHook = useState({
        name: "",
        phoneNumber: ""
    })

    // const purchaseProduct = getProductPurchaseParam(search);
    // console.log({ purchaseProduct });

    //번들 후 헤더에서 키를 뺴냄
    //REST API를 호출한다.

    const items = BASKET.getItems();

    const [info, setInfo] = userInfoHook;

    const { validate } = new Validater([{
        value: info.name,
        failMsg: "예약자 성함을 입력 해주세요",
        id: "NameInput"
    }, {
        value: isPhone(info.phoneNumber),
        failMsg: "연락처가 올바르지 않습니다.",
        id: "PhoneNumberInput"
    }, {
        value: verificationHook.verifiData?.isVerified,
        failMsg: "본인인증을 진행 해주세요",
    },
    {
        value: paymethodHook.selectedOption?.value,
        failMsg: "결제수단을 선택 해주세요",
    }])


    const fullList = items.concat(purchaseProduct || []);
    const totalPrice = arraySum(fullList.map(list => list.priceOrigin || 0));
    const hanldePurchase = () => {
        if (validate()) {

            purchaseBundleCreate({
                variables: {
                    input: {
                        purchaseContact: info.phoneNumber,
                        purchaserName: info.name,
                        bookingInputs: fullList.map(item => ({
                            itemId: item.itemId,
                            productId: item.productId,
                            countDetails: item.countDetails,
                            priceOrigin: item.priceOrigin
                        })),
                        purchaserMessage: messageHook.value,
                        paymethod: paymethodHook.selectedOption!.value,
                        priceOrigin: totalPrice,
                    }
                }
            }).then(({ data }) => {
                const { data: _data, ok } = data?.PurchaseBundleCreate || {}
                if (ok) {
                    history.push(BuyPagePaths.sucess + "/" + _data?._id)
                }
            })
        }
    }

    //장바구니에 담아둔것들과 방금 선택한것을 한번에 구매해야한다.

    return <div >
        <NiceElments />
        {/* 선택아이템 */}
        {purchaseProduct && <ProductSelectViewer head={"선택 상품확인"} mb bookingInputs={purchaseProduct} />}
        {/* 장바구니 아이템 */}
        {isUseBasket && <ProductSelectViewer head={"장바구니 상품확인"} mb bookingInputs={BASKET.getItems() as IBookingInputData[]} />}
        {isLogined ? <span /> : <AnonyPurchaseForm mb userInfoHook={userInfoHook} verificationHook={verificationHook} />}
        <JDcard foot={
            <CardBtn thema="primary" onClick={hanldePurchase} size="long" label="구매하기" />
        } head={"결제선택"}>
            <JDselect mb label="결제방법" {...paymethodHook} />
            <InputText textarea mb label="예약자메모" {...messageHook} />
            <Flex vCenter between>최종결제 금액 <Large color="error">{autoComma(totalPrice)} KRW</Large></Flex>
        </JDcard>
    </div>;
};
