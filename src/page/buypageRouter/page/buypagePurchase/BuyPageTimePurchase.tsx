import { Flex } from "@janda-com/front";
import React from "react";
import { usePurchase } from "../../../../hook/usePay";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { TimeBlock } from "../components/TimeBlock";
import { BuyPagePurchaseBase } from "./BuyPagePurchaseBase";
import { CommonPriceViewer } from "./components/PriceViewer";

interface IProp extends IBuypagePurchaseCommon {
    handleBackStep: () => void;
}

export const BuyPageTimePurchase: React.FC<IProp> = ({
    buypageDetailHook,
    handleBackStep,
}) => {
    const { bookingsInputHook } = buypageDetailHook;

    const usePurchaseHook = usePurchase({
        buypageDetailHook,
    });

    const { optionsAndProductsPrice } = usePurchaseHook;

    return (
        <BuyPagePurchaseBase
            handleBackStep={handleBackStep}
            PriceViewer={
                <CommonPriceViewer totalPrice={optionsAndProductsPrice} />
            }
            SelectViewer={
                <Flex>
                    {bookingsInputHook?.bookingInputs.map((bi, index) => (
                        <TimeBlock
                            mr={"tiny"}
                            mb
                            priceShow
                            key={bi.productId + "selectedTimeBlock"}
                            index={index}
                            item={bi.productOrigin as any}
                        />
                    ))}
                </Flex>
            }
            {...usePurchaseHook}
        />
    );
};

export default BuyPageTimePurchase;
