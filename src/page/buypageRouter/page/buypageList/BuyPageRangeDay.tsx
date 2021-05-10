import {
    autoComma,
    Flex,
    getFromUrl,
    JDalign,
    JDdayPickerModal,
    JDphotoModal,
    Mb,
    Mr,
    selectOpCreater,
    TPhotoModalInfo,
    useDayPicker,
    useModal,
} from "@janda-com/front";
import React, { useContext, useEffect, useMemo, useState } from "react";
import { useProductList } from "../../../../hook/useProduct";
import { BuypageContext } from "./helper/context";
import { IBuypageProductData, productMap } from "./helper/productMap";
import { BuyPageProductBundle } from "./components/BuyPageProductBundle";
import { BuyPageSearchBar } from "../components/BuyPageSearchBar";
import { useHistory } from "react-router";
import BuyPageDetail from "../buypageDetail/BuyPageDetail";
import {
    itemList_ItemList_items_ItemBooking,
    productList_ProductList_items_ProductBooking,
    _IItemFilter,
} from "../../../../type/api";
import { integratedItemSearch } from "../../../../utils/integratedItemSearch";
import { useItemList } from "../../../../hook/useItem";
import { isEmpty } from "lodash";
import { Empty } from "../../../../atom/Empty";
import BuypageRangeDayDetail from "../buypageDetail/BuypageRangeDayDetail";
import { DATE, today } from "../../../../type/const";
import dayjs from "dayjs";
import JDdayPicker from "../../../../atom/dayPicker/DayPicker";
import { useResizeDetector } from "react-resize-detector";
import {
    checkIsDisableDay,
    getAvailableCountFromProducts,
    getSumPrice,
    haveDateRangeProduct,
    isItemSoldOutRange,
} from "../../../../utils/productBookingUtils";
import BuypageDateRangePicker from "../components/BuyPageDateRangePicker";
import { yyyymmdd } from "../../../../utils/dateFormat";
import { Info } from "../../../../atom/Info";
import { JDicon } from "../../../../component/icons/Icons";
import { useBuypageList } from "../hook/useBuypageList";

interface IProp {}

//실제 판매페이지
export const BuypageRangeDay: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>();
    const { ref, width, height } = useResizeDetector();
    const {
        configure: { RESERVATION_NORMAL },
    } = context;
    const { useRangeFilter, useSearchFilter } = RESERVATION_NORMAL;
    const dayPickerModalHook = useModal();
    const {
        detailItem,
        productBundles: _productBundles,
        setDetailItem,
        dayPickerHook,
        handleBuyPageItemSearch,
        useDateFilter,
    } = useBuypageList();

    const getPrice = (item: IBuypageProductData) => getSumPrice(item.products);

    const handleImgView = (item: IBuypageProductData) => () => {
        modalHook.openModal({
            images: item.images.map((img) => img.uri),
        });
    };

    const handleToDetail = (item: IBuypageProductData) => () => {
        setDetailItem(item);
    };

    const productBundles = _productBundles.filter((bundle) =>
        haveDateRangeProduct(bundle.products, {
            from: useDateFilter.dateRangeForUse_from__gte,
            to: useDateFilter.dateRangeForUse_to__lte,
        })
    );

    return (
        <div>
            {detailItem && (
                <BuypageRangeDayDetail
                    setDetailItem={setDetailItem}
                    item={detailItem}
                    key={detailItem._id}
                />
            )}
            {!detailItem && (
                <div ref={ref}>
                    <JDdayPickerModal
                        modalHook={dayPickerModalHook}
                        {...dayPickerHook}
                    />
                    <BuypageDateRangePicker
                        children
                        dayPickerHook={dayPickerHook}
                        handleDateClick={dayPickerModalHook.openModal}
                    />
                    <Mb />
                    <BuyPageSearchBar
                        useRangeFilter={useRangeFilter}
                        useSearchFilter={useSearchFilter}
                        onSearch={handleBuyPageItemSearch}
                        mb
                    />
                    {productBundles.map((item) => (
                        <BuyPageProductBundle
                            soldOut={isItemSoldOutRange(item.products)}
                            Price={
                                <Flex vCenter>
                                    <JDalign mr="small">
                                        {autoComma(getPrice(item))}
                                    </JDalign>
                                    <JDicon icon="won" />{" "}
                                </Flex>
                            }
                            onDetail={handleToDetail(item)}
                            onImgView={handleImgView(item)}
                            key={item._id}
                            bundle={item}
                        >
                            <Info
                                mb="tiny"
                                label="예약가능한 방"
                                value={getAvailableCountFromProducts(
                                    item.products
                                ).toString()}
                            />
                        </BuyPageProductBundle>
                    ))}
                    <Empty
                        empty={productBundles}
                        msg={`${yyyymmdd(dayPickerHook.from)} ~ ${yyyymmdd(
                            dayPickerHook.to
                        )} 까지 숙박 가능한 방이 없습니다.`}
                    />
                </div>
            )}
            <JDphotoModal modalHook={modalHook} />
        </div>
    );
};

export default BuypageRangeDay;
