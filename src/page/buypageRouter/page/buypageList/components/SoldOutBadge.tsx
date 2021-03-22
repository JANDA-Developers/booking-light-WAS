import { JDbadge } from '@janda-com/front';
import React from 'react';
import { Fproduct_usageDetails, productList_ProductList_items } from '../../../../../type/api';
import { IBuypageProductData } from '../helper/productMap';

interface IProp {
    bundle: IBuypageProductData
}

export const SoldOutBadge: React.FC<IProp> = ({ bundle }) => {
    const { products } = bundle;
    const isSoldOut = isItemSoldOut(products);
    if (!isSoldOut) return null;
    return <JDbadge thema="error">품절</JDbadge>;
};

const isItemSoldOut = (products: productList_ProductList_items[]) => {
    const unSoldOutProduct = products.find(product => !isProductSoudOut(product))
    return !unSoldOutProduct;
}
const isProductSoudOut = (product: productList_ProductList_items) => {
    const unSoldOut = product.usageDetails.find(ud => !isUsageFull(ud));
    return !unSoldOut
}
const isUsageFull = (usage: Fproduct_usageDetails) => {
    return usage.usageRatio === 1;
}