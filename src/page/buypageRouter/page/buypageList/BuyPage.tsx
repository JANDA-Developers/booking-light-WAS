import { JDphotoModal, TPhotoModalInfo, useModal } from "@janda-com/front";
import React, { useContext } from "react";
import { BuypageContext } from "./helper/context";
import { IBuypageProductData, productMap } from "./helper/productMap";
import { BuyPageProductBundle } from "./components/BuyPageProductBundle";
import { BuyPageSearchBar } from "../components/BuyPageSearchBar";
import { useHistory } from "react-router";
import BuyPageDetail from "../buypageDetail/BuyPageDetail";
import { _IItemFilter } from "../../../../type/api";
import { isEmpty } from "lodash";
import { Empty } from "../../../../atom/Empty";
import { useBuypageList } from "../hook/useBuypageList";

interface IProp {}

//실제 판매페이지
export const BuyPage: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>();
    const { push } = useHistory();
    const {
        store,
        configure: { RESERVATION_NORMAL },
    } = context;
    const { useSearchFilter } = RESERVATION_NORMAL;

    const {
        dayPickerHook,
        productBundles: _productBundles,
        detailItem,
        productListHook,
        setDetailItem,
        handleBuyPageItemSearch,
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

    //장바구니로 이어지는 구매하기
    return (
        <div>
            {detailItem && (
                <BuyPageDetail
                    setDetailItemId={setDetailItem}
                    productListHook={productListHook}
                    key={detailItem._id}
                    itemId={detailItem._id}
                />
            )}
            {!detailItem && (
                <div>
                    <BuyPageSearchBar
                        dayPickerHook={dayPickerHook}
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
                        size="large"
                        empty={productBundles}
                        msg="해당날짜에 판매중인 상품이 없습니다."
                    />
                </div>
            )}
            <JDphotoModal modalHook={modalHook} />
        </div>
    );
};

export default BuyPage;
