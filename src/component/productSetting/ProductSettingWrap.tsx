import { useMutation, useQuery } from "@apollo/client";
import { usePagination } from "@janda-com/front";
import { IPageInfo, ISet } from "@janda-com/front/dist/types/interface";
import React, { useState } from "react";
import { PRODUCT_DELETE, PRODUCT_UPDATE, PRODU_CTCREATE } from "../../apollo/mutations";
import { PRODUCT_LIST } from "../../apollo/queries";
import { productCreate, productCreateVariables, productDelete, productDeleteVariables, productList, productListVariables, productList_ProductList_items, productList_ProductList_pageInfo, productUpdate, productUpdateVariables, _ProductFilter, _ProductSort } from "../../type/api";
import extractDoc, { extractPageDoc } from "../../utils/dataExtraction";
import { IProduct } from "./interface";
import ProductSetting from "./ProductSetting";

export interface IProductWrapContext {
    page: number;
    setPage: (page: number) => void;
    sort: _ProductSort[] | undefined;
    setSort: ISet<_ProductSort[] | undefined>;
    filter: _ProductFilter | undefined;
    setFilter: ISet<_ProductFilter | undefined>;
    createProduct: (variables: productCreateVariables) => void;
    deleteProduct: (variables: productDeleteVariables) => void;
    updateProduct: (variables: productUpdateVariables) => void;
    loading: {
        total: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    items: productList_ProductList_items[];
    pageInfo: IPageInfo | productList_ProductList_pageInfo;
}

const ProductSettingWrap: React.FC = () => {
    const { page, setPage } = usePagination(0);
    const [filter, setFilter] = useState<_ProductFilter>();
    const [sort, setSort] = useState<_ProductSort[]>();

    const { data, loading: get_loading } = useQuery<productList, productListVariables>(PRODUCT_LIST, {
        variables: {
            pagingInput: {
                pageItemCount: 20,
                pageNumber: page
            },
            filter,
            sort
        }
    })

    const { items, pageInfo } = extractPageDoc(data, "ProductList", "items", [] as IProduct[]);

    const [productCreateMu, { loading: create_loading }] = useMutation<productCreate, productCreateVariables>(PRODU_CTCREATE, {
        onCompleted: () => { }
    });

    const [productDeleteMu, { loading: delete_loading }] = useMutation<productDelete, productDeleteVariables>(PRODUCT_DELETE, {
        onCompleted: () => { }
    });

    const [productUpdateMu, { loading: update_loading }] = useMutation<productUpdate, productUpdateVariables>(PRODUCT_UPDATE, {
        onCompleted: () => { }
    });


    const createProduct = (variables: productCreateVariables) => {
        productCreateMu({
            variables
        })
    }

    const deleteProduct = (variables: productDeleteVariables) => {
        productDeleteMu({
            variables
        })
    }

    const updateProduct = (variables: productUpdateVariables) => {
        productUpdateMu({
            variables
        })
    }

    const total_loading = update_loading || create_loading || delete_loading || get_loading;

    const context: IProductWrapContext = {
        page,
        setPage,
        sort,
        setSort,
        filter,
        setFilter,
        createProduct,
        deleteProduct,
        updateProduct,
        loading: {
            total: total_loading,
            create: create_loading,
            update: update_loading,
            delete: delete_loading
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

