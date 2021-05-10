import { getFromUrl, useDayPicker } from "@janda-com/front";
import { useContext, useEffect, useState } from "react";
import { useItemList } from "../../../../hook/useItem";
import { useProductList } from "../../../../hook/useProduct";
import { DATE } from "../../../../type/const";
import { integratedItemSearch } from "../../../../utils/integratedItemSearch";
import { BuypageContext } from "../buypageList/helper/context";
import {
    IBuypageProductData,
    productMap,
} from "../buypageList/helper/productMap";
import dayjs from "dayjs";
import { BuyPageType } from "../../../../type/enum";

interface IuseBuypageConfig {}

export const useBuypageList = () => {
    const { store, configure } = useContext(BuypageContext);
    const [detailItem, setDetailItem] = useState<IBuypageProductData>();

    const isRangeType = configure.type === BuyPageType.DAY_RANGE;

    let from = DATE.today;
    let to = DATE.today;
    if (isRangeType) {
        from = DATE.today;
        to = DATE.tomorrow;
    }
    const dayPickerHook = useDayPicker(from, to);

    const useDateFilter = {
        dateRangeForUse_from__gte: dayjs(dayPickerHook.from || new Date())
            .startOf("day")
            .valueOf(),
        dateRangeForUse_to__lte: dayjs(dayPickerHook.to || new Date())
            .add(isRangeType ? -1 : 1, "day")
            .endOf("day")
            .valueOf(),
    };

    const {
        items,
        filter: itemFilter,
        setFilter: setItemFilter,
        paginatorHook: itemPaginationHook,
        pageInfo: itemPageInfo,
    } = useItemList({
        fixingFilter: {
            _storeId__eq: store._id,
        },
    });

    const productListHook = useProductList({
        fixingFilter: {
            _storeId__eq: store._id,
        },
        initialViewCount: 999999999,
    });
    const { items: products } = productListHook;

    const productBundles = productMap(items, products as any);

    const urlItemId = getFromUrl("itemId");

    const handleBuyPageItemSearch = (value: string) => {
        const integratedFilter = integratedItemSearch(value);
        setItemFilter({
            ...itemFilter,
            ...integratedFilter,
        });
    };

    useEffect(() => {
        const target = productBundles.find((item) => item._id === urlItemId);
        if (!target) return;
        setDetailItem(target);
    }, [urlItemId, productBundles.length]);

    useEffect(() => {
        if (!productListHook.getLoading)
            productListHook.setFilter({
                ...useDateFilter,
            });
    }, [dayPickerHook.from?.valueOf(), dayPickerHook.to?.valueOf()]);

    console.log({ dayPickerHook });

    return {
        itemPageInfo,
        itemPaginationHook,
        itemFilter,
        setItemFilter,
        useDateFilter,
        dayPickerHook,
        detailItem,
        productListHook,
        setDetailItem,
        productBundles,
        handleBuyPageItemSearch,
    };
};
