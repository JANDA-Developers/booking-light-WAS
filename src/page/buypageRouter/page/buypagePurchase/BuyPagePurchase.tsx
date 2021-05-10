import React, { useContext } from "react";
import { IBookingInputData } from "../../../../hook/useBookingInput";
import { usePurchase } from "../../../../hook/usePay";
import { itemFindById_ItemFindById_ItemBooking_attrs } from "../../../../type/api";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { BuypageContext } from "../buypageList/helper/context";
import { ProductSelectViewer } from "../components/ProductSelectViewer";
import { BuyPagePurchaseBase } from "./BuyPagePurchaseBase";

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
