import { JDbadge } from "@janda-com/front";
import { IJDbadge } from "@janda-com/front/dist/components/badge/Badge";
import React, { useContext } from "react";
import {
    productFindById_ProductFindById_ProductBooking_usageDetails,
    productList_ProductList_items,
    productList_ProductList_items_ProductBooking,
} from "../../../../../type/api";
import { isItemSoldOut } from "../../../../../utils/productBookingUtils";
import { BuypageContext } from "../helper/context";
import { IBuypageProductData } from "../helper/productMap";

interface IProp extends IJDbadge {
    bundle: IBuypageProductData;
    isSoldOut?: boolean;
}

// 리팩토링: 사실 결정은 바깥 함수에서 하는게 좋을듯 ~
export const SoldOutBadge: React.FC<IProp> = ({
    bundle,
    isSoldOut: decidedFromOutside,
    ...props
}) => {
    const { noPayMethod } = useContext(BuypageContext);
    const { products } = bundle;

    const Badge = (
        <JDbadge thema="error" {...props}>
            {noPayMethod ? "마감" : "품절"}
        </JDbadge>
    );
    if (decidedFromOutside) {
        return Badge;
    }
    const isSoldOut = isItemSoldOut(products);
    if (!isSoldOut) return null;
    return Badge;
};
