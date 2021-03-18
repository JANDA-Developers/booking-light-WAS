import { Flex, JDbutton, JDcard, JDcontainer, JDlabel, JDpageHeader, JDpagination, Mb, SkipUpdate, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';
import { getProductDeleteHandle, useProductDelete, useProductList } from '../../hook/useProduct';
import { me_Me_stores_items, productList_ProductList_items, _ProductFilter, _ProductSort } from '../../type/api';
import { completeMsg } from '../../utils/utils';
import { ProductTable, TproductRowData } from './component/ProductTable';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { Paths } from '../../MainRouter';
import JDsearchBar from '../../atom/SearchBar';
import { ItemRadio } from '../../component/itemRadio/ItemRadio';
import Pagination from '../../component/pagination/Pagination';

interface IProps { }

type IDetailRouteProp = { itemId?: string }

export const ProductList: React.FC<IProps> = () => {
    const history = useHistory()
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();

    const { selectedStore, me } = useContext(AppContext);

    const productListHook = useProductList({
        initialFilter: {
            _itemId__eq: itemId,
            _ownerId__eq: me?._id
        }
    })
    const { items, filter, setFilter, paginatorHook, getLoading } = productListHook;

    const { handleDelete } = getProductDeleteHandle()

    const handleSelectItem = (item?: me_Me_stores_items) => {
        setFilter({
            ...filter,
            _itemId__eq: item?._id
        })
    }

    const toDetail = (itemId?: string) => {
        history.push(Paths.productDetail + "/" + itemId);
    }

    const handleEdit = (product: Partial<productList_ProductList_items>) => {
        toDetail(product._itemId)
    }

    const itemIdFilter = filter._itemId__eq;

    return <div>
        <JDpageHeader title="상품 생성하기" desc="아이템에 상품을 등록하세요." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <JDlabel txt="아이템 리스트" />
            <ItemRadio handleSelectItem={handleSelectItem} itemIdFilter={itemIdFilter} />
            <JDsearchBar<_ProductFilter, _ProductSort> searchOps={[{
                label: "상품코드",
                value: "code__eq"
            }]}  {...productListHook} />
            <Mb />
            <SkipUpdate skip={getLoading}>
                <JDcard mb foot={<CardBtn hide={!itemIdFilter} onClick={() => { toDetail(itemIdFilter) }} thema="primary">추가하기</CardBtn>} head="상품리스트" >
                    <ProductTable handleDelete={({ _id }) => { handleDelete(_id) }} handleEdit={handleEdit} products={items} />
                </JDcard>
            </SkipUpdate>
            <Pagination   {...paginatorHook} />
        </JDcontainer>
    </div>;
};

export default ProductList;