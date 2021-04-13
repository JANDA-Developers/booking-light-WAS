import { JDselect } from '@janda-com/front';
import { JDselectProps } from '@janda-com/front/dist/components/select/SelectBox';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { productList_ProductList_items_ProductBooking, productList_ProductList_items_ProductBooking_capacityDetails } from '../../../../../../type/api';

interface IProp extends Omit<JDselectProps, "onChnage">, JDatomExtentionSet {
    onChange: (product: productList_ProductList_items_ProductBooking, detail: productList_ProductList_items_ProductBooking_capacityDetails) => void;
    selcetedValue?: string; // capacity detail key;
    products: productList_ProductList_items_ProductBooking[]
}

export const DetailCapcitySelecter: React.FC<IProp> = ({ products, onChange, selcetedValue, ...props }) => {
    const details = products.flatMap(prod => prod.capacityDetails);

    const options = details.map(detail => ({
        label: detail.label,
        value: detail.key
    }))

    const selectedOption = options.find(op => op.value === selcetedValue);

    return <JDselect onChange={(op) => {
        const selectedProd = products.find(prod => prod.capacityDetails.find(cd => cd.key === op.value));
        const selectedDetail = details.find(detail => detail.key === op.value);

        if (!op.value) return;

        if (!selectedProd) {
            throw Error("selectedProd is not exsit");
        }
        if (!selectedDetail) {
            throw Error("selectedDetail is not exsit");
        }

        onChange(selectedProd, selectedDetail);
    }}
        placeholder="상품 선택하기"
        selectedOption={null}
        options={options}
        {...props} />;
};
