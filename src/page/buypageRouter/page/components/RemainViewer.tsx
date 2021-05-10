import { JDtypho, Tiny } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React, { useContext } from 'react';
import { productList_ProductList_items_ProductBooking_usageDetails } from '../../../../type/api';
import { BuypageContext } from '../buypageList/helper/context';

interface IProp extends IJDtyphoProp {
    countLabel?: string;
    usageDetail: productList_ProductList_items_ProductBooking_usageDetails
}

export const RemainViewer: React.FC<IProp> = ({ countLabel = "개", usageDetail, ...props }) => {
    const { configure } = useContext(BuypageContext);
    const texts = configure?.RESERVATION_NORMAL?.texts || {}
    const unit = texts?.countUnit.kr


    const remain = usageDetail.capacityCount - usageDetail.usage;

    return <JDtypho text="right"  {...props} size="superTiny">({remain + (unit || countLabel) + " " + "남음"})</JDtypho>;
};
