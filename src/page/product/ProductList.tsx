import { Flex, JDbutton, JDcard, JDcontainer, JDdoc, JDdocHeader, JDlabel, JDpageHeader, JDpagination, Mb, useModal, WindowSize } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import AppContext from '../../context';
import { useProductDelete, useProductList } from '../../hook/useProduct';
import { me_Me_stores_items, productList_ProductList_items, _ProductFilter, _ProductSort } from '../../type/api';
import { completeMsg } from '../../utils/utils';
import { IProductModalInfo, ProductModal } from './component/ProductModal';
import { ProductCreater } from './component/ProductCreater';
import { ProductTable, TproductRowData } from './component/ProductTable';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { Paths } from '../../MainRouter';
import JDsearchBar from '../../atom/SearchBar';

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
    const { items, filter, setFilter, paginatorHook } = productListHook;

    const [deleteMu] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            completeMsg(ProductDelete, "상품삭제완료", "상품삭제실패")
        }
    });


    const handleDelete = (prod: TproductRowData) => () => {
        if (confirm(`정말로 상품을 삭제하십니까?`))
            deleteMu({
                variables: {
                    productId: prod._id
                }
            })
    }

    const handleSelectItem = (item?: me_Me_stores_items) => () => {
        setFilter({
            ...filter,
            _itemId__eq: item?._id
        })
    }

    const toDetail = (productId?: string, itemId?: string) => {
        let toString = productId ? `${productId}` : `create/${itemId}`;
        history.push(Paths.productDetail + "/" + toString);
    }

    const handleEdit = (product: Partial<productList_ProductList_items>) => {
        toDetail(product._id)
    }

    const handleView = (product: Partial<productList_ProductList_items>) => {
    }

    const itemIdFilter = filter._itemId__eq;

    return <div>
        <JDpageHeader title="상품 생성하기" desc="아이템에 상품을 등록하세요." />
        <JDcontainer size={WindowSize.full}>
            <JDlabel txt="아이템 리스트" />
            <Flex mb wrap >
                <JDbutton mr thema={undefined === itemIdFilter ? "primary" : undefined} onClick={handleSelectItem(undefined)}>전체보기</JDbutton>
                {selectedStore?.items?.map(item =>
                    <JDbutton key={item._id} mr thema={item._id === itemIdFilter ? "primary" : undefined} onClick={handleSelectItem(item)}>{item.name}</JDbutton>
                )}
            </Flex>
            <JDsearchBar<_ProductFilter, _ProductSort> searchOps={[{
                label: "상품코드",
                value: "code__eq"
            }]}  {...productListHook} />
            <Mb />
            <JDcard mb foot={<CardBtn hide={!itemIdFilter} onClick={() => { toDetail(undefined, itemIdFilter) }} thema="primary">추가하기</CardBtn>} head="상품리스트" >
                <ProductTable handleView={handleView} handleDelete={handleDelete} handleEdit={handleEdit} products={items} />
            </JDcard>
            <JDpagination {...paginatorHook} />
        </JDcontainer>
    </div>;
};

// {
//     label: "오픈타임",
//     value: "",
//     type: "dateRange"
// }, {
//     label: "사용시간",
//     value: "dateRangeForUse_gte",
//     type: "dateRange"
// }]
export default ProductList;