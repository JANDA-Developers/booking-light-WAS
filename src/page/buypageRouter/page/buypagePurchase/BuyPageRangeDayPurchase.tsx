import { Flex, autoComma, JDtypho } from "@janda-com/front";
import React from "react";
import { usePurchase } from "../../../../hook/usePay";
import { storeFindByCode_StoreFindByCode_buypage_delivery } from "../../../../type/api";
import { getStartAndEndUse } from "../../../../utils/productBookingUtils";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import { DayRangeProductViewer } from "../components/DayRangeProductsViewer";
import { BuyPagePurchaseBase } from "./BuypagePurchaseBase";
import { CommonPriceViewer } from "./components/PriceViewer";

interface IProp extends IBuypagePurchaseCommon {
    item: IBuypageProductData;
    handleBackStep: () => void;
}

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
                <CommonPriceViewer totalPrice={optionsAndProductsPrice} />
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
