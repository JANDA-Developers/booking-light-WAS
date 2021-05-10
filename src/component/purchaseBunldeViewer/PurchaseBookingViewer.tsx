import {
    autoComma,
    Bold,
    IJDalignProp,
    instanceOfA,
    JDbox,
    Tiny,
} from "@janda-com/front";
import React, { useContext } from "react";
import { Clip } from "../../atom/clip/Clip";
import { Info } from "../../atom/Info";
import AppContext from "../../context";
import {
    Fbooking,
    purchaseBundleFindById_PurchaseBundleFindById_purchases,
} from "../../type/api";
import { MMDDhhmmRange } from "../../utils/dateFormat";

interface IProp extends IJDalignProp {
    purchase: purchaseBundleFindById_PurchaseBundleFindById_purchases;
}

export const PurchaseBookingViewer: React.FC<IProp> = ({
    purchase,
    ...props
}) => {
    const { isNonProfit } = useContext(AppContext);
    const product = purchase.purchasedProduct;

    return (
        <JDbox {...props}>
            <Clip mb="tiny" size="tiny" style={{ width: "fit-content" }}>
                {purchase.purchasedProduct.code}
            </Clip>
            <Tiny>{purchase.itemName}</Tiny>
            <Bold mb="tiny">{MMDDhhmmRange(product.dateRangeForUse)}</Bold>
            <Info label={"수량"} value={purchase.count.toString()} />
            {!isNonProfit && (
                <Info label="가격">
                    {autoComma(purchase.pricePaymentPending) + "원"}
                </Info>
            )}
        </JDbox>
    );
};
