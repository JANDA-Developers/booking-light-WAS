import { Flex, autoComma, JDtypho } from "@janda-com/front";
import React from "react";
import { usePurchase } from "../../../../hook/usePay";
import { storeFindByCode_StoreFindByCode_buypage_delivery } from "../../../../type/api";
import { getStartAndEndUse } from "../../../../utils/productBookingUtils";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import { DayRangeProductViewer } from "../components/DayRangeProductsViewer";
import { BuyPagePurchaseBase } from "./BuyPagePurchaseBase";

interface IProp extends IBuypagePurchaseCommon {
    item: IBuypageProductData;
    handleBackStep: () => void;
}

export const deliveryPriceGet = (
    deliveryInfo: storeFindByCode_StoreFindByCode_buypage_delivery | null,
    priceSum: number
) => {
    const { fee, overFreePrice } = deliveryInfo || {};
    if (!fee) return 0;
    if (overFreePrice) {
        const isOver = priceSum >= overFreePrice;
        if (isOver) return 0;
    }
    return fee;
};

export const BuyPageRangeDayPurchase: React.FC<IProp> = ({
    item,
    buypageDetailHook,
    handleBackStep,
}) => {
    const { bookingsInputHook } = buypageDetailHook;
    const count =
        bookingsInputHook?.bookingInputs?.[0]?.countDetails?.[0]?.count || 0;
    const { startTme, endTime } = getStartAndEndUse(item.products);

    const usePurchaseHook = usePurchase({
        buypageDetailHook,
    });

    const { optionsAndProductsPrice } = usePurchaseHook;

    return (
        <BuyPagePurchaseBase
            handleBackStep={handleBackStep}
            {...usePurchaseHook}
            PriceViewer={
                <Flex typho={{ size: "large" }}>
                    <JDtypho mr>최종금액</JDtypho>
                    <JDtypho color="error">
                        {autoComma(optionsAndProductsPrice)} 원
                    </JDtypho>
                </Flex>
            }
            SelectViewer={
                <DayRangeProductViewer
                    start={startTme}
                    end={endTime}
                    count={count}
                    item={item}
                />
            }
        />
    );
};

export default BuyPageRangeDayPurchase;
