import { Flex, JDbutton, JDselect, Mr, opFind } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { isEmpty } from 'lodash';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router';
import { FloatCircle } from '../../../../component/FloatCircle/FloatCircle';
import { JDicon } from '../../../../component/icons/Icons';
import Pagination from '../../../../component/pagination/Pagination';
import { useBasket } from '../../../../hook/useBasket';
import { useItemList } from '../../../../hook/useItem';
import { useProductList } from '../../../../hook/useProduct';
import { itemList_ItemList_items_ItemBooking, _CategorySort } from '../../../../type/api';
import { today } from '../../../../type/const';
import { ICSS } from '../../../../type/interface';
import { BASKET } from '../../../../utils/Basket';
import { integratedItemSearch } from '../../../../utils/integratedItemSearch';
import { BuyPagePaths } from '../../BuyPageRouter';
import { BuyPageSearchBar } from '../components/BuyPageSearchBar';
import { BuypageProductShoppingCard } from './components/BuyPageProductShoppingCard';
import { BuypageShoppingDetail } from './components/BuyPageShoppingDetail';
import { BuypageContext, BuypageShoppingContext } from './helper/context';
import { IBuypageProductData, productMap } from './helper/productMap';

interface IProp { }

export const BuyPageShopping: React.FC<IProp> = () => {
    const { itemCats, store, configure } = useContext(BuypageContext);
    const { updateComponent: updateBasket } = useBasket();
    const [selectedBundle, setDetailBundle] = useState<IBuypageProductData>();
    const { SHOPPING_PAGE } = configure;
    const { useBasket: _useBasket, useSearchFilter } = SHOPPING_PAGE;
    const history = useHistory();

    const { items, filter, setFilter, fetchMore, pageInfo, paginatorHook } = useItemList({
        fixingFilter: {
            // _storeId__eq: store._id
        }
    });
    const { items: products } = useProductList({
        fixingFilter: {
            // _storeId__eq: store._id,
            // dateRangeForSale_from__lte: today,
            // dateRangeForSale_to__gte: today
        },
        initialViewCount: 999999999
    })

    const filterCat = filter.categoryId__eq;

    const isSelected = (catId?: string) => catId === filterCat;

    const handleToDetial = (item: IBuypageProductData) => () => {
        setDetailBundle(item);
    }

    const productBundles = productMap(items, products);

    const handleBuyPageSearch = (value: string) => {
        const integratedFilter = integratedItemSearch(value);
        setFilter({
            ...filter,
            ...integratedFilter
        })
    }

    const handleFilterCat = (cat?: IselectedOption) => {
        filter.categoryId__eq = cat?.value;
        setFilter({ ...filter });
    }


    const handleShoppingCart = () => {
        history.push(BuyPagePaths.purchase);
    }

    const isMobile = window.innerWidth < 500;

    return <BuypageShoppingContext.Provider value={{
        updateBasket
    }}>
        <div style={{ position: "relative" }}>
            {!selectedBundle && <div>
                <Flex mb hide={isMobile}>
                    <JDbutton
                        hide={isEmpty(itemCats)}
                        mr="small"
                        size="small"
                        padding="small"
                        label="전체보기"
                        thema={
                            isSelected(undefined) ? "primary" : undefined
                        }
                        onClick={() => { handleFilterCat(undefined) }}

                    />
                    {itemCats.map(cat =>
                        <JDbutton
                            key={cat.value}
                            thema={
                                isSelected(cat.value) ? "primary" : undefined
                            }
                            onClick={() => { handleFilterCat(cat) }}
                            mr="small"
                            size="small"
                            padding="small"
                            label={cat.label}
                        />
                    )}
                </Flex>
                {isMobile &&
                    <JDselect mb onChange={handleFilterCat}
                        selectedOption={opFind(filterCat, itemCats)}
                        options={itemCats}
                    />
                }
                {useSearchFilter &&
                    <BuyPageSearchBar useSearchFilter mb onSearch={handleBuyPageSearch} />
                }
                <Flex wrap oneone className="buyPageShopping__itemsList"  >
                    {productBundles.map(item =>
                        <BuypageProductShoppingCard
                            className="buyPageShopping__item"
                            hover
                            mr
                            mb
                            key={item._id}
                            onClick={handleToDetial(item)}
                            item={item}
                        />
                    )}
                    <Mr className="buyPageShopping__item" />
                    <Mr className="buyPageShopping__item" />
                    <Mr className="buyPageShopping__item" />
                    <Mr className="buyPageShopping__item" />
                    <Mr className="buyPageShopping__item" />
                    <Mr className="buyPageShopping__item" />
                </Flex>
                <Flex center>
                    <Pagination {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
                </Flex>
            </div>
            }
            <BuypageShoppingDetail key={selectedBundle?._id} setDetailItem={setDetailBundle} item={selectedBundle} />
            {_useBasket && <FloatCircle bottom={30} right={300} onClick={handleShoppingCart} position="fixed" className="shoppingCircle" >
                <JDicon badge={BASKET.getItemCount() ? BASKET.getItemCount().toString() : undefined} size="normal" icon="shoppingCart" />
            </FloatCircle>
            }
        </div>
    </BuypageShoppingContext.Provider>
};

export default BuyPageShopping;