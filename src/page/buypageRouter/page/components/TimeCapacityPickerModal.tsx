import {
    deepCopy,
    Flex,
    IUseModal,
    JDalign,
    JDbutton,
    JDdayPicker,
    JDlabel,
    JDmodal,
    JDmodalConfigProps,
    JDpolicyViewer,
    JDselect,
    TimePerMs,
    useDayPicker,
    WindowSize,
    WindowSizeNumber,
} from "@janda-com/front";
import React, { useContext, useEffect } from "react";
import { useProductList } from "../../../../hook/useProduct";
import { BuypageContext } from "../buypageList/helper/context";
import dayjs from "dayjs";
import {
    startOfDate,
    startOfMonth,
    endOfMonth,
} from "../../../../utils/dateFormat";
import { TimeBlock } from "./TimeBlock";
import {
    FproductBooking,
    productList_ProductList_items_ProductBooking,
    productList_ProductList_items_ProductBooking_dateRangeForUse,
} from "../../../../type/api";
import {
    IBookingInputData,
    IUseBookingsInput,
    useBookingsInput,
} from "../../../../hook/useBookingInput";
import {
    IBuypageProductData,
    productMap,
} from "../buypageList/helper/productMap";
import { endOfDay } from "date-fns";
import { ModalBtn } from "../../../../component/btns/ModalBtn";
import { DATE } from "../../../../type/const";
import {
    checkIsDisableDay,
    ProductBookingUtils,
    rangeCheck,
} from "../../../../utils/productBookingUtils";
import { CpacityTimeSelecter } from "./Capacity";

export interface IPrivacyModalInfo extends JDmodalConfigProps {
    policy: string;
    onAgree: () => void;
}

interface IProp {
    item: IBuypageProductData;
    defaultFrom: Date;
    bookingsInputHook: IUseBookingsInput;
    defaultTo: Date;
    itemId: string;
    modalHook: IUseModal<IPrivacyModalInfo>;
}

export const TimeCapacityPickerModal: React.FC<IProp> = ({
    bookingsInputHook,
    modalHook,
    defaultFrom,
    defaultTo,
    itemId,
}) => {
    const isMobile = window.innerWidth < WindowSizeNumber.PHABLET;
    const context = useContext(BuypageContext);
    const {
        noPayMethod,
        configure: { salesDates },
    } = context;
    const dayPickerHook = useDayPicker(defaultFrom, defaultTo);

    const useDateFilter = {
        dateRangeForUse_from__gte: startOfMonth(dayPickerHook.from),
        dateRangeForUse_to__lte: endOfMonth(dayPickerHook.from),
    };

    const productListHook = useProductList({
        fixingFilter: {
            _itemId__eq: itemId,
        },
        initialFilter: {
            ...useDateFilter,
        },
        initialViewCount: 999999999,
    });

    const { items } = productListHook;

    const filteredItems = items.filter((item) => {
        return rangeCheck(
            item,
            dayPickerHook.from?.setHours(12).valueOf() || 0
        );
    });

    const selectedProducts = bookingsInputHook.bookingInputs.map(
        (bi) => bi.productOrigin as FproductBooking
    );

    const hasTimeDiff = checkHasDiffTime(filteredItems);
    const hasPriceDiff = checkHasDiffPrice(filteredItems);
    const hasCpacityDiff = checkHasDiffCpacity(filteredItems);

    useEffect(() => {
        bookingsInputHook.setBookingInputs([]);
    }, [dayPickerHook.from?.valueOf()]);

    const { info } = modalHook;
    return (
        <JDmodal
            foot={
                <Flex>
                    <ModalBtn
                        thema="primary"
                        mr
                        onClick={modalHook.closeModal}
                        label="선택완료"
                        size="long"
                    />
                    <ModalBtn
                        thema="grey2"
                        onClick={bookingsInputHook.empty}
                        label="선택해제"
                        size="long"
                    />
                </Flex>
            }
            head={{
                title: "날짜 및 시간 선택하기",
            }}
            fullInMobile
            {...modalHook}
            {...info}
        >
            <JDalign mb>
                <div>
                    <JDlabel txt="날짜선택" />
                    <JDdayPicker
                        mr
                        mb
                        calenaderPosition="left"
                        isRange={false}
                        disabledDays={checkIsDisableDay(salesDates, items)}
                        {...dayPickerHook}
                    />
                </div>
                <div>
                    <JDlabel txt="시간선택" />
                    <Flex wrap>
                        {ProductBookingUtils.sortByDateRangeForSale(
                            filteredItems
                        ).map((item, index) => (
                            <TimeBlock
                                mb
                                hover
                                onClick={() => {
                                    const detail = deepCopy(
                                        item.capacityDetails[0]
                                    );
                                    detail.count = 1;
                                    const targetProduct: IBookingInputData = {
                                        itemId: item._itemId,
                                        productId: item._id,
                                        productOrigin: item,
                                        attrs: item.attrs,
                                        priceOrigin: 0,
                                        countDetails: [detail],
                                    };
                                    bookingsInputHook.toggleProduct(
                                        targetProduct
                                    );
                                }}
                                text={"center"}
                                mr="small"
                                showEnd={hasTimeDiff}
                                priceShow={!hasPriceDiff && !noPayMethod}
                                capacityShow={true}
                                key={item._id + "timeblock"}
                                item={item}
                                selected={
                                    !!bookingsInputHook.findBookingInput(
                                        item._id
                                    )
                                }
                                index={index}
                            />
                        ))}
                    </Flex>
                </div>
            </JDalign>
            <JDlabel txt="인원선택" />
            <CpacityTimeSelecter
                products={selectedProducts}
                bookingsInputHook={bookingsInputHook}
            />
        </JDmodal>
    );
};

const checkHasDiffTime = (
    itmes: productList_ProductList_items_ProductBooking[]
) => {
    const getDiff = (item: productList_ProductList_items_ProductBooking) => {
        const useRange = item?.dateRangeForUse;
        return useRange?.from - useRange?.to;
    };
    let firstTIme = getDiff(itmes[0]);

    for (const item of itmes) {
        if (firstTIme !== getDiff(item)) {
            return true;
        }
    }
    return false;
};
const checkHasDiffPrice = (
    itmes: productList_ProductList_items_ProductBooking[]
) => {
    const getPrice = (item: productList_ProductList_items_ProductBooking) => {
        return item?.price;
    };
    let firstPrice = getPrice(itmes[0]);

    for (const item of itmes) {
        if (firstPrice !== getPrice(item)) {
            return true;
        }
    }
    return false;
};

const checkHasDiffCpacity = (
    itmes: productList_ProductList_items_ProductBooking[]
) => {
    const getCpacity = (item: productList_ProductList_items_ProductBooking) => {
        return item?.capacity;
    };
    let firstPrice = getCpacity(itmes[0]);

    for (const item of itmes) {
        if (firstPrice !== getCpacity(item)) {
            return true;
        }
    }
    return false;
};
