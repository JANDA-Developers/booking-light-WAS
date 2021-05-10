import { Flex, JDbutton, JDselect, Mr, opFind } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { isEmpty } from "lodash";
import React, { useContext, useState } from "react";
import { useHistory } from "react-router";
import { FloatCircle } from "../../../../component/FloatCircle/FloatCircle";
import { JDicon } from "../../../../component/icons/Icons";
import Pagination from "../../../../component/pagination/Pagination";
import { useBasket } from "../../../../hook/useBasket";
import { _CategorySort } from "../../../../type/api";
import { BASKET } from "../../../../utils/Basket";
import { BuyPagePaths } from "../../BuyPageRouter";
import { BuyPageSearchBar } from "../components/BuyPageSearchBar";
import { useBuypageList } from "../hook/useBuypageList";
import { BuypageProductShoppingCard } from "./components/BuyPageProductShoppingCard";
import { BuypageShoppingDetail } from "../buypageDetail/BuyPageShoppingDetail";
import { SoldOutBadge } from "./components/SoldOutBadge";
import { BuypageContext, BuypageShoppingContext } from "./helper/context";
import { IBuypageProductData, productMap } from "./helper/productMap";

interface IProp {}

export const BuyPageShopping: React.FC<IProp> = () => {
    const { itemCats, store, configure } = useContext(BuypageContext);
    const { updateComponent: updateBasket } = useBasket();
    const [selectedBundle, setDetailBundle] = useState<IBuypageProductData>();
    const { SHOPPING_MALL } = configure;
    const { useBasket: _useBasket, useSearchFilter } = SHOPPING_MALL;
    const history = useHistory();
    const {
        itemFilter,
        productBundles,
        setItemFilter,
        handleBuyPageItemSearch,
        itemPageInfo,
        itemPaginationHook,
    } = useBuypageList();

    const filterCat = itemFilter.categoryId__eq;

    const isSelected = (catId?: string) => catId === filterCat;

    const handleToDetial = (item: IBuypageProductData) => () => {
        setDetailBundle(item);
    };

    const handleFilterCat = (cat?: IselectedOption) => {
        itemFilter.categoryId__eq = cat?.value;
        setItemFilter({ ...itemFilter });
    };

    const handleShoppingCart = () => {
        history.push(BuyPagePaths.purchase);
    };

    const isMobile = window.innerWidth < 500;

    return (
        <BuypageShoppingContext.Provider
            value={{
                updateBasket,
            }}
        >
            <div style={{ position: "relative" }}>
                {!selectedBundle && (
                    <div>
                        <Flex mb hide={isMobile}>
                            <JDbutton
                                hide={isEmpty(itemCats)}
                                mr="small"
                                size="small"
                                padding="small"
                                label="전체보기"
                                thema={
                                    isSelected(undefined)
                                        ? "primary"
                                        : undefined
                                }
                                onClick={() => {
                                    handleFilterCat(undefined);
                                }}
                            />
                            {itemCats.map((cat) => (
                                <JDbutton
                                    key={cat.value}
                                    thema={
                                        isSelected(cat.value)
                                            ? "primary"
                                            : undefined
                                    }
                                    onClick={() => {
                                        handleFilterCat(cat);
                                    }}
                                    mr="small"
                                    size="small"
                                    padding="small"
                                    label={cat.label}
                                />
                            ))}
                        </Flex>
                        {isMobile && (
                            <JDselect
                                mb
                                onChange={handleFilterCat}
                                selectedOption={opFind(filterCat, itemCats)}
                                options={itemCats}
                            />
                        )}
                        {useSearchFilter && (
                            <BuyPageSearchBar
                                useSearchFilter
                                mb
                                onSearch={handleBuyPageItemSearch}
                            />
                        )}
                        <Flex
                            wrap
                            oneone
                            className="buyPageShopping__itemsList"
                        >
                            {productBundles.map((item) => (
                                <BuypageProductShoppingCard
                                    className="buyPageShopping__item"
                                    hover
                                    mr
                                    mb
                                    key={item._id}
                                    item={item}
                                    onClick={handleToDetial(item)}
                                >
                                    <SoldOutBadge
                                        size="small"
                                        mr
                                        bundle={item}
                                    />
                                </BuypageProductShoppingCard>
                            ))}
                            <Mr className="buyPageShopping__item" />
                            <Mr className="buyPageShopping__item" />
                            <Mr className="buyPageShopping__item" />
                            <Mr className="buyPageShopping__item" />
                            <Mr className="buyPageShopping__item" />
                            <Mr className="buyPageShopping__item" />
                        </Flex>
                        <Flex center>
                            <Pagination
                                {...itemPaginationHook}
                                totalPageCount={itemPageInfo.totalPageCount}
                            />
                        </Flex>
                    </div>
                )}
                <BuypageShoppingDetail
                    key={selectedBundle?._id}
                    setDetailItem={setDetailBundle}
                    item={selectedBundle}
                />
                {_useBasket && (
                    <FloatCircle
                        bottom={30}
                        right={300}
                        onClick={handleShoppingCart}
                        position="fixed"
                        className="shoppingCircle"
                    >
                        <JDicon
                            badge={
                                BASKET.getItemCount()
                                    ? BASKET.getItemCount().toString()
                                    : undefined
                            }
                            size="normal"
                            icon="shoppingCart"
                        />
                    </FloatCircle>
                )}
            </div>
        </BuypageShoppingContext.Provider>
    );
};

export default BuyPageShopping;
