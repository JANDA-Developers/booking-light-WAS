import {
    Bold,
    Flex,
    IJDalignProp,
    isLast,
    JDalign,
    JDbox,
} from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import React from "react";
import {
    productList_ProductList_items_ProductBooking,
    productList_ProductList_items_ProductBooking_usageDetails,
} from "../../../../type/api";
import { IUseBookingsInput } from "../../../../hook/useBookingInput";
import { MMDDhhmm } from "../../../../utils/dateFormat";
import {
    CapacityDetail,
    CapacityShoppingDetail,
    CapacityDateRangeDetail,
} from "./CapacityDetail";
import {
    getAvailableCountFromProducts,
    getSumPrice,
} from "../../../../utils/productBookingUtils";

interface ICpacityProp extends IDiv {
    bookingsInputHook: IUseBookingsInput;
    product: productList_ProductList_items_ProductBooking;
}

//하나의 상품의 캐파시티를 보여줌
//  Cpacity Selecter
export const Capacity: React.FC<ICpacityProp> = ({
    product,
    bookingsInputHook,
    ...props
}) => {
    const { usageDetails, dateRangeForUse } = product;
    const { capacityChangeMaster, findCpacity } = bookingsInputHook;

    const handleCapacityChange = (
        cd: productList_ProductList_items_ProductBooking_usageDetails
    ) => (num: number) => {
        capacityChangeMaster(product, cd, num);
    };

    return (
        <JDbox mr mb className="capacity" {...props}>
            <Bold>{MMDDhhmm(dateRangeForUse?.from)}부터</Bold>
            <Bold mb={"small"}>{MMDDhhmm(dateRangeForUse?.to)}까지</Bold>
            <Flex between>
                {usageDetails.map((cd, index) => (
                    <CapacityDetail
                        isLast={isLast(index, usageDetails)}
                        onChange={handleCapacityChange(cd)}
                        count={findCpacity(product._id, cd.key)?.count || 0}
                        key={cd.key}
                        usageDetail={cd}
                    />
                ))}
            </Flex>
        </JDbox>
    );
};
export const CapacitySelecter = Capacity;

interface IShoppingGoodsProps extends IJDalignProp {
    bookingsInputHook: IUseBookingsInput;
    product: productList_ProductList_items_ProductBooking;
}

export const ShoppingGoodsSelecters: React.FC<IShoppingGoodsProps> = ({
    product,
    bookingsInputHook,
    ...props
}) => {
    const {
        capacityChangeMaster,
        bookingInputs,
        findCpacity,
    } = bookingsInputHook;
    const { usageDetails } = product;

    const handleCapacityChange = (
        cd: productList_ProductList_items_ProductBooking_usageDetails
    ) => (num: number) => {
        capacityChangeMaster(product, cd, num);
    };

    const countDetails = bookingInputs.flatMap(
        (bookingInput) => bookingInput.countDetails
    );

    const selectedUsages = usageDetails.filter((ud) =>
        countDetails.find((cd) => cd?.key === ud.key)
    );

    return (
        <JDalign {...props}>
            {selectedUsages.map((cd, index) => (
                <CapacityShoppingDetail
                    isLast={isLast(index, usageDetails)}
                    onChange={handleCapacityChange(cd)}
                    count={findCpacity(product._id, cd.key)?.count || 0}
                    key={cd.key}
                    usageDetail={cd}
                />
            ))}
        </JDalign>
    );
};

interface IRangeDateProps extends IJDalignProp {
    products: productList_ProductList_items_ProductBooking[];
    bookingsInputHook: IUseBookingsInput;
}

export const CpacityRangeDateSelecter: React.FC<IRangeDateProps> = ({
    products,
    bookingsInputHook,
    ...props
}) => {
    const { capacityChangeMaster } = bookingsInputHook;

    const handleCapacityChange = (num: number) => {
        products.forEach((product) => {
            const prod = product.usageDetails[0];
            const capacity = { ...prod, count: 0 };
            capacityChangeMaster(product, capacity, num);
        });
    };

    const count =
        bookingsInputHook.bookingInputs[0]?.countDetails?.[0]?.count || 0;

    // const selectedUsages = usageDetails.filter((ud) =>
    //     countDetails.find((cd) => cd?.key === ud.key)
    // );

    const maxCount = getAvailableCountFromProducts(products);
    const price = getSumPrice(products);

    return (
        <JDalign {...props}>
            <CapacityDateRangeDetail
                label="객실"
                maxCount={maxCount}
                price={price}
                onChange={handleCapacityChange}
                count={count}
            />
        </JDalign>
    );
};

export const CpacityTimeSelecter: React.FC<IRangeDateProps> = ({
    products,
    bookingsInputHook,
    ...props
}) => {
    const { capacityChangeMaster } = bookingsInputHook;

    const handleCapacityChange = (num: number) => {
        products.forEach((product) => {
            const prod = product.usageDetails[0];
            const capacity = { ...prod, count: 0 };
            capacityChangeMaster(product, capacity, num);
        });
    };

    const count =
        bookingsInputHook.bookingInputs[0]?.countDetails?.[0]?.count || 0;

    // const selectedUsages = usageDetails.filter((ud) =>
    //     countDetails.find((cd) => cd?.key === ud.key)
    // );

    const maxCount = getAvailableCountFromProducts(products);
    const price = getSumPrice(products);

    return (
        <JDalign {...props}>
            <CapacityDateRangeDetail
                label="예약인원"
                maxCount={maxCount}
                price={price}
                onChange={handleCapacityChange}
                count={count}
            />
        </JDalign>
    );
};
