import {
    autoComma,
    IJDalignProp,
    JDalign,
    JDbox,
    Small,
    Tiny,
} from "@janda-com/front";
import classNames from "classnames";
import React, { useContext } from "react";
import { productList_ProductList_items_ProductBooking } from "../../../../type/api";
import { hhmm, hhmmRange } from "../../../../utils/dateFormat";
import { BuypageContext } from "../buypageList/helper/context";

interface IProp extends IJDalignProp {
    item: productList_ProductList_items_ProductBooking;
    index: number;
    showEnd?: boolean;
    priceShow?: boolean;
    capacityShow?: boolean;
    selected?: boolean;
}

export const TimeBlock: React.FC<IProp> = ({
    selected,
    className,
    item,
    index,
    capacityShow,
    showEnd,
    priceShow,
    onClick,
    ...props
}) => {
    const { noPayMethod } = useContext(BuypageContext);
    const { dateRangeForUse, capacityDetails, usageDetails } = item;
    const target = capacityDetails[0];
    const usage = usageDetails[0];
    const { price, count } = target;
    const { from, to } = dateRangeForUse || {
        from: new Date(),
        to: new Date(),
    };

    const timeShow = from ? hhmm(from) : hhmmRange(from, to);
    const remain = count - (usage?.usage || 0);

    const classes = classNames("timeBlock", className, {
        "timeblock--selected": selected,
        "timeblock--disabled": remain < 1,
    });

    return (
        <JDbox className={classes} {...props}>
            <Small onClick={onClick}>
                {index + 1} 회<div>{timeShow}</div>
                {!noPayMethod && (
                    <Tiny hide={!priceShow}>{autoComma(price)}원</Tiny>
                )}
                <Tiny hide={!capacityShow}>{count - usage.usage}남음</Tiny>
            </Small>
        </JDbox>
    );
};
