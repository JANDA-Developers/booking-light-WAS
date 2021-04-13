import { Flex, IUseModal, JDalign, JDbutton, JDdayPicker, JDmodal, JDmodalConfigProps, JDpolicyViewer, TimePerMs, useDayPicker } from '@janda-com/front';
import React, { useContext } from 'react';
import { useProductList } from '../../../../hook/useProduct';
import { BuypageContext } from '../buypageList/helper/context';
import dayjs from "dayjs";
import { startOfDate, startOfMonth, endOfMonth } from '../../../../utils/dateFormat';
import { TimeBlock } from './TimeBlock';
import { productList_ProductList_items_ProductBooking, productList_ProductList_items_ProductBooking_dateRangeForUse } from '../../../../type/api';
import { IUseBookingsInput, useBookingsInput } from '../../../../hook/useBookingInput';
import { IBuypageProductData, productMap } from '../buypageList/helper/productMap';
import { endOfDay } from 'date-fns';

export interface IPrivacyModalInfo extends JDmodalConfigProps {
    policy: string;
    onAgree: () => void;
}

interface IProp {
    item: IBuypageProductData
    defaultFrom: Date;
    bookingsInputHook: IUseBookingsInput;
    defaultTo: Date;
    itemId: string;
    modalHook: IUseModal<IPrivacyModalInfo>
}

export const TimeCapacityPickerModal: React.FC<IProp> = ({ bookingsInputHook, modalHook, defaultFrom, defaultTo, itemId }) => {
    const context = useContext(BuypageContext);
    const dayPickerHook = useDayPicker(defaultFrom, defaultTo);

    const useDateFIlter = {
        dateRangeForUse_from__gte: startOfMonth(dayPickerHook.from),
        dateRangeForUse_to__lte: endOfMonth(dayPickerHook.from)
    }

    const productListHook = useProductList({
        fixingFilter: {
            _itemId__eq: itemId,
        },
        initialFilter: {
            ...useDateFIlter
        },
        initialViewCount: 999999999
    })

    const { items } = productListHook;

    const rangeCheck = (item: productList_ProductList_items_ProductBooking, val: number): boolean => {
        const dateStart = dayjs(val).startOf("day").valueOf();
        const dateEnd = dayjs(val).endOf("day").valueOf();
        return (item.dateRangeForUse?.from >= dateStart) && (item.dateRangeForUse?.to <= dateEnd);
    }

    const checkIsDisableDay = (day: Date) => {
        const val = day.valueOf();
        if (val < new Date().valueOf()) return true;
        const availableItem = items.find(item => rangeCheck(item, val));
        return !availableItem
    }

    const filteredItems = items.filter(item => {
        return rangeCheck(item, dayPickerHook.from?.setHours(12).valueOf() || 0);
    })

    const hasTimeDiff = checkHasDiffTime(filteredItems);
    const hasPriceDiff = checkHasDiffPrice(filteredItems);
    const hasCpacityDiff = checkHasDiffCpacity(filteredItems);

    const { info } = modalHook;
    return <JDmodal head={{
        title: "날짜 및 시간 선택하기"
    }} fullInMobile  {...modalHook} {...info} >
        <JDalign mb>
            <JDdayPicker calenaderPosition="left" isRange={false} disabledDays={checkIsDisableDay} {...dayPickerHook} />
        </JDalign>
        <Flex>
            {filteredItems.map((item, index) =>
                <TimeBlock
                    hover
                    onClick={() => {
                        bookingsInputHook.addProduct({
                            itemId: item._itemId,
                            productId: item._id,
                            productOrigin: item,
                            attrs: item.attrs,
                            priceOrigin: 0,
                        })
                    }}
                    text={"center"}
                    mr="small"
                    showEnd={hasTimeDiff}
                    priceShow={hasPriceDiff}
                    capacityShow={hasCpacityDiff}
                    key={item._id + "timeblock"}
                    item={item}
                    selected={!!bookingsInputHook.findBookingInput(item._id)}
                    index={index}
                />)}
        </Flex>
    </JDmodal>;
};

const checkHasDiffTime = (itmes: productList_ProductList_items_ProductBooking[]) => {
    const getDiff = (item: productList_ProductList_items_ProductBooking) => {
        const useRange = item?.dateRangeForUse;
        return useRange?.from - useRange?.to
    }
    let firstTIme = getDiff(itmes[0]);

    for (const item of itmes) {
        if (firstTIme !== getDiff(item)) {
            return true;
        }
    }
    return false;
}
const checkHasDiffPrice = (itmes: productList_ProductList_items_ProductBooking[]) => {
    const getPrice = (item: productList_ProductList_items_ProductBooking) => {
        return item?.price
    }
    let firstPrice = getPrice(itmes[0]);

    for (const item of itmes) {
        if (firstPrice !== getPrice(item)) {
            return true;
        }
    }
    return false;
}

const checkHasDiffCpacity = (itmes: productList_ProductList_items_ProductBooking[]) => {
    const getCpacity = (item: productList_ProductList_items_ProductBooking) => {
        return item?.capacity
    }
    let firstPrice = getCpacity(itmes[0]);

    for (const item of itmes) {
        if (firstPrice !== getCpacity(item)) {
            return true;
        }
    }
    return false;
}