import { JDicon, autoComma, Bold, Col, Flex, Grid, JDbutton, Large, Small, JDcard, JDhorizen, Mb, isEmpty, Validater, useModal } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext, useState } from 'react';
import { AttributeInputs } from '../../../../component/attributeInputs/AttributeInputs';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { EditorView } from '../../../../component/editor/EditorView';
import { AttributeInput } from '../../../../component/formCreater/components/AttributeInput';
import { ThumbsSlider } from '../../../../component/ThumbsSlider/ThumbsSlider';
import { useBookingsInput } from '../../../../hook/useBookingInput';
import { useCopy } from '../../../../hook/useCopy';
import { findUnFilledAttribute } from '../../../../utils/attribute';
import { cutStr } from '../../../../utils/cutStr';
import { BuypageContext } from '../buypageList/helper/context';
import { IBuypageProductData } from '../buypageList/helper/productMap';
import { BuyPageShoppingPurchase } from '../buypagePurchase/BuyPageShoppingPurchase';
import { ShoppingGoodsSelecters } from './Capacity';
import { TimeCapacityPickerModal } from './TimeCapacityPickerModal';

interface IProp {
    setDetailItem: ISet<IBuypageProductData | undefined>
    item?: IBuypageProductData
}

export const BuypageTimeDetail: React.FC<IProp> = ({ item, setDetailItem }) => {
    if (!item) return null;

    const { } = useContext(BuypageContext);
    const { descriptionDetail, name, price, description, images, thumbNail: _thumbNail } = item;
    const [step, setStep] = useState<"pick" | "purchase">("pick")
    const [attrs, setAttrs] = useCopy(item.attrs);
    const bookingsInputHook = useBookingsInput([]);
    const timeCpacityModalHook = useModal();
    const priceSum = bookingsInputHook.priceSum;
    const totalPrice = priceSum;

    const unFilledForm = findUnFilledAttribute(attrs);
    const { validate } = new Validater([{
        value: !isEmpty(bookingsInputHook.bookingInputs),
        failMsg: "상품을 선택해주세요.",
    }, {
        value: !unFilledForm,
        failMsg: '필수 입력칸을 채워주세요.',
        id: unFilledForm?.key + "input"
    }])

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
                    <Large mb> <JDicon icon="won" />
                        {/* // LowesT Price */}
                        {autoComma(price)}
                    </Large>
                    {/* // Time Capacity Picker Modal */}
                    <JDhorizen margin={3} />
                    <AttributeInputs attrs={attrs} setAttrs={setAttrs} />
                    <JDbutton onClick={timeCpacityModalHook.openModal} size="long" mode="border" >시간선택하기</JDbutton>
                    <Flex mb typho={{ size: "large", weight: 600 }} end >합계 {autoComma(totalPrice)}</Flex>
                    <Flex>
                        <JDbutton mode="flat" br="square" onClick={handlePurchase} size="longLarge" thema="primary">구매하기</JDbutton>
                    </Flex>
                </Col>
            </Grid>
            <JDhorizen margin={4} />
            <EditorView model={descriptionDetail} />
            <TimeCapacityPickerModal
                item={item}
                bookingsInputHook={bookingsInputHook}
                defaultTo={new Date()}
                defaultFrom={new Date()}
                itemId={item._id}
                modalHook={timeCpacityModalHook}
            />
        </JDcard>
        {step === "purchase" &&
            <BuyPageShoppingPurchase handleBackStep={() => {
                setStep("pick")
            }} bookingsInputHook={bookingsInputHook} attributes={[]} />
        }
    </div>;
};

export default BuypageTimeDetail