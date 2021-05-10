import {
    JDicon,
    autoComma,
    Bold,
    Col,
    Flex,
    Grid,
    JDbutton,
    Large,
    Small,
    JDcard,
    JDhorizen,
    isEmpty,
    Validater,
    useModal,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext, useState } from "react";
import { AttributeInputs } from "../../../../component/attributeInputs/AttributeInputs";
import { BackStepBar } from "../../../../component/backstepBar/BackstepBar";
import { EditorView } from "../../../../component/editor/EditorView";
import { ThumbsSlider } from "../../../../component/ThumbsSlider/ThumbsSlider";
import { useBookingsInput } from "../../../../hook/useBookingInput";
import { useBuypageDetail } from "../../../../hook/useBuypageDetail";
import { useCopy } from "../../../../hook/useCopy";
import { findUnFilledAttribute } from "../../../../utils/attribute";
import { cutStr } from "../../../../utils/cutStr";
import { BuypageContext } from "../buypageList/helper/context";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import BuyPageTimePurchase from "../buypagePurchase/BuyPageTimePurchase";
import { TimeBlock } from "../components/TimeBlock";
import { TimeCapacityPickerModal } from "../components/TimeCapacityPickerModal";
import { BuyPageDetailBase } from "./BuyPageDetailBase";

interface IProp {
    defaultFrom: Date | null;
    defaultTo: Date | null;
    setDetailItem: ISet<IBuypageProductData | undefined>;
    item?: IBuypageProductData;
}

export const BuypageTimeDetail: React.FC<IProp> = ({
    defaultFrom,
    defaultTo,
    item,
    setDetailItem,
}) => {
    if (!item) return null;
    const buypageDetailHook = useBuypageDetail({ defaultAttrs: item.attrs });
    const {
        bookingsInputHook,
        ValidateNodes,
        setStep,
        step,
    } = buypageDetailHook;
    const { noPayMethod } = useContext(BuypageContext);
    const timeCpacityModalHook = useModal();
    const priceSum = bookingsInputHook.priceSum;
    const totalPrice = priceSum;

    const { validate } = new Validater([
        {
            value: !isEmpty(bookingsInputHook.bookingInputs),
            failMsg: "시간을 선택해 주세요.",
        },
        ...ValidateNodes,
    ]);

    const handlePurchase = () => {
        if (!validate()) return;
        setStep("purchase");
    };

    return (
        <div>
            {step === "pick" && (
                <BackStepBar
                    mb
                    label="뒤로가기"
                    onClick={() => {
                        setDetailItem(undefined);
                    }}
                />
            )}
            <BuyPageDetailBase
                buypageDetailHook={buypageDetailHook}
                item={item}
                totalPrice={totalPrice}
                handlePurchase={handlePurchase}
                CapacitySelectPlace={
                    <div>
                        <JDbutton
                            mb
                            thema="primary"
                            onClick={timeCpacityModalHook.openModal}
                            size="long"
                            mode="border"
                        >
                            시간선택하기
                        </JDbutton>
                        <Flex>
                            {bookingsInputHook.bookingInputs.map(
                                (bi, index) => (
                                    <TimeBlock
                                        mr={"tiny"}
                                        mb
                                        priceShow={!noPayMethod}
                                        key={bi.productId + "selectedTimeBlock"}
                                        index={index}
                                        item={bi.productOrigin as any}
                                    />
                                )
                            )}
                        </Flex>
                    </div>
                }
                hide={step !== "pick"}
            />
            {step === "purchase" && (
                <BuyPageTimePurchase
                    handleBackStep={() => {
                        setStep("pick");
                    }}
                    buypageDetailHook={buypageDetailHook}
                />
            )}
            <TimeCapacityPickerModal
                item={item}
                bookingsInputHook={bookingsInputHook}
                defaultTo={defaultTo || new Date()}
                defaultFrom={defaultFrom || new Date()}
                itemId={item._id}
                modalHook={timeCpacityModalHook}
            />
        </div>
    );
};

export default BuypageTimeDetail;
