import { autoComma, JDbutton } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { productList_ProductList_items, productList_ProductList_items_usageDetails } from '../../../../type/api';

interface IProp extends IDiv {
    isSelected: boolean;
    onSelect: () => void;
    product: productList_ProductList_items
}

//하나의 상품의 캐파시티를 보여줌
export const Capacity: React.FC<IProp> = ({ product, isSelected, onSelect, ...props }) => {
    const { usageDetails } = product;

    return <div {...props} >
        {usageDetails.map(cd => <span key={cd.key}>
            {cd.label + ":" + autoComma(cd.price)}
        </span>)}
    </div>;
};

interface IProps extends IButtonProps {
    cpacity: productList_ProductList_items_usageDetails;
}


//하나의 상품의 캐파시티중 하나의 디테일 상품을 보여줌 
export const CapacityDetail: React.FC<IProps> = ({ cpacity, ...props }) => {
    const { label, price, usage, capacityCount } = cpacity;

    const isFull = usage > capacityCount;

    return <JDbutton {...props} disabled={isFull}> {label} {usage / capacityCount} {autoComma(price)}</JDbutton>
}