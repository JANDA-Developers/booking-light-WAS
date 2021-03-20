import { JDtypho, Tiny } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React from 'react';
import { productList_ProductList_items_usageDetails } from '../../../../type/api';

interface IProp extends IJDtyphoProp {
    capacityDetail: productList_ProductList_items_usageDetails
}

export const RemainViewer: React.FC<IProp> = ({ capacityDetail, ...props }) => {
    const remain = capacityDetail.capacityCount - capacityDetail.usage;

    return <JDtypho text="right"  {...props} size="superTiny">({remain + "개 " + "남음"})</JDtypho>;
};
