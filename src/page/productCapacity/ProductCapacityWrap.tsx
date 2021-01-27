import React from "react";
import { useProductList } from "../../hook/useProductList";
import { productList_ProductList_items, _ProductFilter, _ProductSort } from "../../type/api";
import { IUseListQuery } from "../../type/interface";
import { ProductCpacity } from "./ProductCapcity";

export interface ICapcitpyWrapContext {
    productListHook: IUseListQuery<_ProductSort, _ProductFilter, productList_ProductList_items>
}

export const ProductCapcityWrap = () => {

    const productListHook = useProductList()

    const context: ICapcitpyWrapContext = {
        productListHook
    }

    return <ProductCpacity context={context} />

}

export default ProductCapcityWrap