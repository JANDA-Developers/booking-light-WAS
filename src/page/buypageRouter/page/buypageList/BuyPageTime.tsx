import {
    JDphotoModal,
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
import { _IItemFilter } from "../../../../type/api";
import { integratedItemSearch } from "../../../../utils/integratedItemSearch";
import { useItemList } from "../../../../hook/useItem";
import { isEmpty } from "lodash";
import { Empty } from "../../../../atom/Empty";
import BuypageTimeDetail from "../buypageDetail/BuyPageTimeDetail";
import { DATE, today } from "../../../../type/const";
import dayjs from "dayjs";
import JDdayPicker from "../../../../atom/dayPicker/DayPicker";
import { useResizeDetector } from "react-resize-detector";
import { checkIsDisableDay } from "../../../../utils/productBookingUtils";
import { useBuypageList } from "../hook/useBuypageList";

interface IProp {}

//실제 판매페이지
export const BuyPageTime: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>();
    const { push } = useHistory();
    const { ref, width } = useResizeDetector();
    const {
        configure: { TIME_MALL, salesDates },
    } = context;
    const { useSearchFilter } = TIME_MALL;
    const {
        handleBuyPageItemSearch,
        dayPickerHook,
        detailItem,
        productBundles: _productBundles,
        setDetailItem,
    } = useBuypageList();

    const productBundles = _productBundles.filter(
        (bundle) => !isEmpty(bundle.products)
    );

    const handleImgView = (item: IBuypageProductData) => () => {
        modalHook.openModal({
            images: item.images.map((img) => img.uri),
        });
    };

    const handleToDetail = (item: IBuypageProductData) => () => {
        setDetailItem(item);
    };

    const isMobile = (width || window.innerWidth) < 700;

    //장바구니로 이어지는 구매하기
    return (
        <div>
            {detailItem && (
                <BuypageTimeDetail
                    defaultFrom={dayPickerHook.from}
                    defaultTo={dayPickerHook.to}
                    setDetailItem={setDetailItem}
                    item={detailItem}
                    key={detailItem._id}
                />
            )}
            {!detailItem && (
                <div ref={ref}>
                    <JDdayPicker
                        mb
                        disabledDays={checkIsDisableDay(salesDates)}
                        isRange={false}
                        {...dayPickerHook}
                        mode={isMobile ? undefined : "horizen"}
                    />
                    <BuyPageSearchBar
                        useSearchFilter={useSearchFilter}
                        onSearch={handleBuyPageItemSearch}
                        mb
                    />
                    {productBundles.map((item) => (
                        <BuyPageProductBundle
                            onDetail={handleToDetail(item)}
                            onImgView={handleImgView(item)}
                            key={item._id}
                            bundle={item}
                        />
                    ))}
                    <Empty
                        empty={productBundles}
                        msg="해당날짜에 판매중인 상품이 없습니다."
                    />
                </div>
            )}
            <JDphotoModal modalHook={modalHook} />
        </div>
    );
};

export default BuyPageTime;
