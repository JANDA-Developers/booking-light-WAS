import { JDbadge } from '@janda-com/front';
import { IJDbadge } from '@janda-com/front/dist/components/badge/Badge';
import React from 'react';
import { productFindById_ProductFindById_ProductBooking_usageDetails, productList_ProductList_items, productList_ProductList_items_ProductBooking } from '../../../../../type/api';
import { IBuypageProductData } from '../helper/productMap';

interface IProp extends IJDbadge {
    bundle: IBuypageProductData
}

export const SoldOutBadge: React.FC<IProp> = ({ bundle, ...props }) => {
    const { products } = bundle;
    const isSoldOut = isItemSoldOut(products);
    if (!isSoldOut) return null;
    return <JDbadge thema="error" {...props}>품절</JDbadge>;
};

const isItemSoldOut = (products: productList_ProductList_items_ProductBooking[]) => {
    const unSoldOutProduct = products.find(product => !isProductSoudOut(product))
    return !unSoldOutProduct;
}
const isProductSoudOut = (product: productList_ProductList_items_ProductBooking) => {
    const unSoldOut = product.usageDetails.find(ud => !isUsageFull(ud));
    return !unSoldOut
}
const isUsageFull = (usage: productFindById_ProductFindById_ProductBooking_usageDetails) => {
    return usage.usageRatio === 1;
}