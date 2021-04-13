import { JDicon, autoComma, Bold, Col, Flex, Grid, JDbutton, JDcontainer, JDslide, JDslider, Large, Small, toast, JDcard, JDhorizen, Mb, isEmpty } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext, useState } from 'react';
import { ImgSlider } from '../../../../../atom/Imgslider';
import { BackStepBar } from '../../../../../component/backstepBar/BackstepBar';
import { EditorView } from '../../../../../component/editor/EditorView';
import { AttributeInput } from '../../../../../component/formCreater/components/AttributeInput';
import PhotoFrame from '../../../../../component/photoFrame/PhotoFram';
import { ThumbsSlider } from '../../../../../component/ThumbsSlider/ThumbsSlider';
import { useBookingsInput } from '../../../../../hook/useBookingInput';
import { useCopy } from '../../../../../hook/useCopy';
import { FitemBooking } from '../../../../../type/api';
import { Ratio } from '../../../../../type/const';
import { findUnFilledAttribute } from '../../../../../utils/attribute';
import { BASKET } from '../../../../../utils/Basket';
import { cutStr } from '../../../../../utils/cutStr';
import { Validater } from '../../../../../utils/Validater';
import { BuyPagePurchase } from '../../buypagePurchase/BuyPagePurchase';
import { BuyPageShoppingPurchase, deliveryPriceGet } from '../../buypagePurchase/BuyPageShoppingPurchase';
import { Capacity, ShoppingGoodsSelecters } from '../../components/Capacity';
import { BuypageContext, BuypageShoppingContext } from '../helper/context';
import { IBuypageProductData } from '../helper/productMap';
import { deliverInfoDefault, DeliveryInfoViewer } from './DeliveryInfoView';
import { DetailCapcitySelecter } from './productSelecter/DetailCapcitySelecter';

interface IProp {
    setDetailItem: ISet<IBuypageProductData | undefined>
    item?: IBuypageProductData
}

export const BuypageShoppingDetail: React.FC<IProp> = ({ item, setDetailItem }) => {
    if (!item) return null;

    const { store: { buypage }, updateBasket } = useContext(BuypageContext);
    const deliveryInfo = buypage.delivery;
    const { descriptionDetail, name, price, description, images, thumbNail: _thumbNail } = item;
    const [step, setStep] = useState<"pick" | "purchase">("pick")
    const [attrs, setAttrs] = useCopy(item.attrs);
    const bookingsInputHook = useBookingsInput([]);
    const priceSum = bookingsInputHook.priceSum;

    const unFilledForm = findUnFilledAttribute(attrs);
    const { validate } = new Validater([{
        value: !isEmpty(bookingsInputHook.bookingInputs),
        failMsg: "상품을 선택해주세요.",
    }, {
        value: !unFilledForm,
        failMsg: '필수 입력칸을 채워주세요.',
        id: unFilledForm?.key + "input"
    }])

    const handleAddBracket = () => {
        if (!validate()) return;
        BASKET.addItems(bookingsInputHook.bookingInputs.map(bk => ({ ...bk, attrs })))
        toast("장바구니에 추가 되었습니다.")
        updateBasket();
    }


    const deliveryPrice = deliveryPriceGet(deliveryInfo, priceSum);
    const totalPrice = deliveryPrice + priceSum;

    const handlePurchase = () => {
        if (!validate()) return;
        setStep("purchase");
    }

    return <div>
        {step === "pick" &&
            <BackStepBar mb label="뒤로가기" onClick={() => {
                setDetailItem(undefined)
            }} />
        }
        <JDcard hide={step !== "pick"}>
            <Grid>
                <Col lg={12} full={6}>
                    <ThumbsSlider images={images.map(img => img.uri)} />
                </Col>
                <Col lg={12} full={6}>
                    <Bold mb size="large">{name}</Bold>
                    <Small>{cutStr(description, 40)}</Small>
                    <Large mb> <JDicon icon="won" /> {autoComma(price)}</Large>
                    <DeliveryInfoViewer mb delivery={deliveryInfo || deliverInfoDefault} />
                    <DetailCapcitySelecter
                        mb
                        selcetedValue={undefined}
                        onChange={(prod, detail) => {
                            if (!bookingsInputHook.findCpacity(prod._id, detail.key))
                                bookingsInputHook.capacityChangeMaster(prod, detail, 1)
                        }}
                        products={item.products}
                    />
                    {bookingsInputHook.bookingInputs.map(bookingInput =>
                        <ShoppingGoodsSelecters
                            mb
                            key={bookingInput.productId}
                            product={bookingInput.productOrigin as any}
                            bookingsInputHook={bookingsInputHook}
                        />
                    )}
                    <JDhorizen margin={3} />
                    {attrs.map(attr => <div key={attr.key}>
                        <AttributeInput onChange={(val) => {
                            attr.value = val;
                            setAttrs([
                                ...attrs
                            ])
                        }} attribute={attr} />
                        <Mb />
                    </div>
                    )}
                    <Flex mb typho={{ size: "large", weight: 600 }} end >합계 {autoComma(totalPrice)}</Flex>
                    <Flex>
                        <JDbutton mode="flat" br="square" onClick={handleAddBracket} size="longLarge" mr thema="black">장바구니</JDbutton>
                        <JDbutton mode="flat" br="square" onClick={handlePurchase} size="longLarge" thema="primary">구매하기</JDbutton>
                    </Flex>
                </Col>
            </Grid>
            <JDhorizen margin={4} />
            <EditorView model={descriptionDetail} />
        </JDcard>
        {step === "purchase" &&
            <BuyPageShoppingPurchase handleBackStep={() => {
                setStep("pick")
            }} bookingsInputHook={bookingsInputHook} attributes={[]} />
        }
    </div>;
};
