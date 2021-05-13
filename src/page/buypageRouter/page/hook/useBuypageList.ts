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
import { _ProductFilter } from "../../../../type/api";
import { genProductDateFilter } from "../helpers/productListFiltert";

export const useBuypageList = () => {
    const { store, configure, isShoppingType, isDateRangeMall } =
        useContext(BuypageContext);
    const [detailItem, setDetailItem] = useState<IBuypageProductData>();

    let from = DATE.today;
    let to = DATE.today;
    if (isDateRangeMall) {
        from = DATE.today;
        to = DATE.tomorrow;
    }
    const dayPickerHook = useDayPicker(from, to);

    const useDateFilter = genProductDateFilter(from, to, {
        isDateRangeMall,
        isShoppingType,
    });

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

    const productListHook = useProductList(
        {
            fixingFilter: {
                _storeId__eq: store._id,
            },
            initialViewCount: 999999999,
        },
        { skipInit: true }
    );
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
        if (!productListHook.getLoading) {
            productListHook.setFilter({
                ...useDateFilter,
            });

            productListHook.getData();
        }
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
