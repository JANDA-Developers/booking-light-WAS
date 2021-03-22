import { Flex, getAllFromUrl, JDcard, JDcontainer, JDhorizen, Large, Mb, toast, updateURLParameter, WindowSize, WindowSizeNumber } from '@janda-com/front';
import { cloneDeep, isEmpty } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ImgSlider } from '../../../../atom/Imgslider';
import { CardBtn } from '../../../../component/btns/ModalBtn';
import { EditorView } from '../../../../component/editor/EditorView';
import { AttributeInput } from '../../../../component/formCreater/components/AttributeInput';
import { useBookingsInput } from '../../../../hook/useBookingInput';
import { useCopy } from '../../../../hook/useCopy';
import { useItemFindById } from '../../../../hook/useItem';
import { TUseProductList } from '../../../../hook/useProduct';
import { _ProductFilter } from '../../../../type/api';
import { Ratio } from '../../../../type/const';
import { BASKET } from '../../../../utils/Basket';
import { BuypageContext } from '../buypageList/helper/context';
import { Capacity } from '../components/Capacity';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { ISet } from '@janda-com/front/dist/types/interface';
import { generateProductPurchaseParam } from '../helpers/queryparamsGen';
import { BuyPagePurchase } from '../buypagePurchase/BuyPagePurchase';
import { Validater } from '../../../../utils/Validater';

type IDetailRouteProp = { itemId?: string }
interface IProp {
    setDetailItemId: ISet<string>
    productListHook: TUseProductList
    itemId?: string;
}
2
export const BuyPageDetail: React.FC<IProp> = ({ setDetailItemId, itemId, productListHook }) => {
    const { location } = useHistory();
    const context = useContext(BuypageContext);
    const { store, configure } = context;
    const { RESERVATION_NORMAL: { useBasket, texts } } = configure;

    const [step, setStep] = useState<"pick" | "purchase">("pick")

    const { item } = useItemFindById(itemId);

    const { items } = productListHook;
    const history = useHistory();

    const bookingsInputHook = useBookingsInput([]);
    const [attributes, setAttributes] = useCopy(item?.attrs || []);
    const { bookingInputs, setBookingInputs } = bookingsInputHook;

    const handleAddBracket = () => {
        BASKET.addItems([
            ...bookingsInputHook.bookingInputs
        ])
        toast("장바구니에 추가 되었습니다.")
    }


    const unFilledForm = attributes.find(attr => {
        const unFilled = attr.require && !attr.value
        if (unFilled) {
            return true;
        }
        return !!unFilled
    });

    const { validate } = new Validater([
        {
            value: !isEmpty(bookingInputs),
            failMsg: '선택된 상품이 없습니다.',
            id: "ProductSelect"
        }, {
            value: !unFilledForm,
            failMsg: '필수 입력칸을 채워주세요.',
            id: unFilledForm?.key + "input"
        }])


    const handlePurchase = () => {
        if (!validate()) return;

        const selectProductParams = bookingInputs.map(bi => ({ ...bi, attrs: attributes }));
        const link = generateProductPurchaseParam("", selectProductParams)
        console.log({ link });
        // history.push({
        //     pathname: BuyPagePaths.purchase,
        //     search: link
        // });
        setStep("purchase");
    }

    useEffect(() => {
        if (item) {
            setBookingInputs([]);
            setAttributes(cloneDeep(item?.attrs || []))
        }
    }, [item?._id])

    console.log({ attributes });

    return <JDcontainer verticalPadding className="buyPageSetDetail__container" size={WindowSize.lg}>
        <BackStepBar go={() => {
            if (step === "pick")
                setDetailItemId("")
            else {
                setStep("pick")
            }
        }} mb label="뒤로가기" />
        <div>
            <Flex hide={step !== "pick"} oneone >
                <JDcard style={{ width: "100%" }} foot={
                    <Flex>
                        <CardBtn hide={!useBasket} mr onClick={handleAddBracket} thema="grey4">장바구니</CardBtn>
                        <CardBtn onClick={handlePurchase} thema="primary" size="long">{texts.purchase.kr}</CardBtn>
                    </Flex>
                } head={item?.name} >
                    <ImgSlider photoProps={{ ratio: Ratio['16:9'] }} imgs={item?.images.map(img => img.uri)} />
                    <Mb mb="large" />
                    <Large mb weight={600}>{item?.name}</Large>
                    <EditorView model={item?.descriptionDetail} />
                    <Large id="ProductSelect" mb>{texts.productSelectLabel.kr}</Large>
                    <Flex wrap>
                        {items.map(product =>
                            <Capacity bookingsInputHook={bookingsInputHook} key={product._id} product={product} />
                        )}
                    </Flex>
                    <JDhorizen margin={3} />
                    <div >
                        <Large mb>{texts.addtionalInput.kr}</Large>
                        {attributes?.map(attr => <div>
                            <AttributeInput onChange={(val) => {
                                attr.value = val;
                                setAttributes([
                                    ...attributes
                                ])
                            }} key={attr.key} attribute={attr} />
                            <Mb />
                        </div>
                        )}
                    </div>
                    {/* <ProductSelectViewer bookingInputs={bookingsInputHook.bookingInputs} /> */}
                </JDcard >
            </Flex>
        </div>
        {step === "purchase" ?
            <BuyPagePurchase purchaseProduct={bookingsInputHook.bookingInputs} /> : undefined
        }
    </JDcontainer>
};



export default BuyPageDetail;