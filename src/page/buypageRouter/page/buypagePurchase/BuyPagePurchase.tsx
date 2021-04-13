import { InputText, arraySum, autoComma, Flex, JDcard, JDselect, Large } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { CardBtn } from '../../../../component/btns/ModalBtn';
import { IBookingInputData } from '../../../../hook/useBookingInput';
import { usePurchase } from '../../../../hook/usePay';
import NiceElments from '../../../../nice/NiceElments';
import {
    itemFindById_ItemFindById_ItemBooking_attrs,
    purchaseBundleCreate_PurchaseBundleCreate_data
} from '../../../../type/api';
import { BASKET } from '../../../../utils/Basket';
import { BuyPagePaths } from '../../BuyPageRouter';
import { getNiceProperty } from '../../utils/getNiceProperty';
import { BuypageContext } from '../buypageList/helper/context';
import { AnonyPurchaseForm } from '../components/AnonyPurchaseForm';
import { ProductSelectViewer } from '../components/ProductSelectViewer';

interface IProp {
    purchaseProduct?: IBookingInputData[]
    attributes: itemFindById_ItemFindById_ItemBooking_attrs[]
}

export const BuyPagePurchase: React.FC<IProp> = ({ purchaseProduct, attributes }) => {
    const { store, configure } = useContext(BuypageContext)
    const buypage = store.buypage;

    const toSucessPage = (data: purchaseBundleCreate_PurchaseBundleCreate_data) => {
        history.push(BuyPagePaths.sucess + "/" + data._id)
    }

    const { verificationHook, paymethodHook, niceAuthData, hanldePurchase, anonyUserInfo, info, userInfoHook, messageHook } = usePurchase({ buypage, configure, purchaseProduct: purchaseProduct || [], attributes, onSucess: toSucessPage });
    const history = useHistory();

    const items = BASKET.getItems();

    const fullList = items.concat(purchaseProduct || []);
    const totalPrice = arraySum(fullList.map(list => list.priceOrigin || 0));

    return <div >
        <NiceElments
            {...getNiceProperty({
                anonyUserInfo,
                niceAuthData,
                store
            })}
        />
        {/* 선택아이템 */}
        {purchaseProduct && <ProductSelectViewer head={"선택 상품확인"} mb bookingInputs={purchaseProduct} />}
        {/* 장바구니 아이템 */}
        <JDcard head="비회원 예약하기" mb>
            <AnonyPurchaseForm userInfoHook={userInfoHook} verificationHook={verificationHook} />
        </JDcard>
        <JDcard foot={
            <CardBtn thema="primary" onClick={hanldePurchase} size="long" label="구매하기" />
        } head={"결제선택"}>
            <JDselect mb label="결제방법" {...paymethodHook} />
            <InputText textarea mb label="예약자메모" {...messageHook} />
            <Flex vCenter between>최종결제 금액 <Large color="error">{autoComma(totalPrice)} KRW</Large></Flex>
        </JDcard>
    </div>;
};
