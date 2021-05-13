import React from "react";
import { usePurchase } from "../../../../hook/usePay";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { ProductSelectViewer } from "../components/ProductSelectViewer";
import { BuyPagePurchaseBase } from "./BuypagePurchaseBase";

interface IProp extends IBuypagePurchaseCommon {
    handleBackStep: () => void;
}

export const BuyPagePurchase: React.FC<IProp> = ({
    buypageDetailHook,
    handleBackStep,
}) => {
    const { bookingsInputHook } = buypageDetailHook;
    const { bookingInputs } = bookingsInputHook;

    const usePurchaseHook = usePurchase({
        buypageDetailHook,
    });

    return (
        <div>
            <BuyPagePurchaseBase
                handleBackStep={handleBackStep}
                PriceViewer={
                    <ProductSelectViewer
                        mode="border"
                        head={"선택 상품확인"}
                        mb
                        bookingInputs={bookingInputs}
                    />
                }
                {...usePurchaseHook}
            />
        </div>
    );
};

export default BuyPagePurchase;
