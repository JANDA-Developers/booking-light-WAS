import { useMutation, useQuery } from "@apollo/client";
import { IUseSelect, usePagination } from "@janda-com/front";
import { IPageInfo, IselectedOption, ISet } from "@janda-com/front/dist/types/interface";
import React, { useState } from "react";
import { PRODUCT_DELETE, PRODUCT_UPDATE, PRODU_CTCREATE } from "../../apollo/mutations";
import { PRODUCT_LIST } from "../../apollo/queries";
import { productCreate, productCreateVariables, productList_ProductList_items, productList_ProductList_pageInfo, productUpdate, productUpdateVariables, _ProductFilter, _ProductSort, productDeleteVariables, productDelete } from "../../type/api";
import ProductSetting from "./ProductSetting";
import { TfnMu } from "../../type/interface";
import { IUseStoreSelect, useStoreSelect } from "../../hook/useStore";
import { isEmpty } from "lodash";
import { getOperationName } from "@apollo/client/utilities";
import { useProductList } from "../../hook/useProductList";
import { useProductps } from "../../hook/useProductps";


export interface IProductWrapContext {
    page: number;
    setPage: (page: number) => void;
    sort: _ProductSort[];
    setSort: ISet<_ProductSort[]>;
    filter: _ProductFilter;
    setFilter: ISet<_ProductFilter>;
    productCreate: TfnMu<productCreateVariables>;
    productDelete: TfnMu<productDeleteVariables>;
    productUpdate: TfnMu<productUpdateVariables>;
    loading: {
        total: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    storeSelectHook: IUseStoreSelect;
    items: productList_ProductList_items[];
    pageInfo: IPageInfo | productList_ProductList_pageInfo;
}

const ProductSettingWrap: React.FC = () => {
    const storeSelectHook = useStoreSelect();
    if (isEmpty(storeSelectHook.storeptions)) throw Error("No store. you can't visit here");

    const { items, loading: get_loading, pageInfo, paginatorHook, setFilter, setSort, setViewCount, viewCount, filter, sort } = useProductList({
        initialFilter: {
            _storeId_eq: storeSelectHook.selectedOption?.value || ""
        }
    })

    const [productCreateMu, { loading: createLoading }] = useMutation<productCreate, productCreateVariables>(PRODU_CTCREATE, {
        onCompleted: () => { },
        refetchQueries: [getOperationName(PRODUCT_LIST) || ""],
    });

    const [deleteProductMu, { loading: deleteLoading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_DELETE, {
        onCompleted: () => { },
        refetchQueries: [getOperationName(PRODUCT_LIST) || ""],
    });

    const [productUpdateMu, { loading: updateLoading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_UPDATE, {
        onCompleted: () => { },
        refetchQueries: [getOperationName(PRODUCT_LIST) || ""],
    });


    const productCreate: TfnMu<productCreateVariables> = (variables: productCreateVariables, onSuccess) => {
        productCreateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductCreate.ok)
                onSuccess?.()
        })
    }

    const productDelete: TfnMu<productDeleteVariables> = (variables: productDeleteVariables, onSuccess) => {
        deleteProductMu({
            variables
        }).then((data) => {
            if (data.data?.ProductDelete.ok)
                onSuccess?.()
        })
    }

    const productUpdate: TfnMu<productUpdateVariables> = (variables: productUpdateVariables, onSuccess) => {
        productUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductUpdate.ok)
                onSuccess?.()
        })
    }

    const total_loading = updateLoading || createLoading || deleteLoading || get_loading;

    const context: IProductWrapContext = {
        page: paginatorHook.page,
        setPage: paginatorHook.setPage,
        sort,
        setSort,
        filter,
        storeSelectHook,
        setFilter,
        productCreate,
        productDelete,
        productUpdate,
        loading: {
            total: total_loading,
            create: createLoading,
            update: updateLoading,
            delete: deleteLoading
        },
        items,
        pageInfo
    }

    // const ProductSettingContext = React.createContext<IProductSettingContext>({});
    {/* <ProductSettingContext.Provider value={}>
    </ProductSettingContext.Provider> */}


    return <ProductSetting context={context} />

}

export default ProductSettingWrap

