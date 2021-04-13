import { IJDalignProp, JDalign, JDbox, Small, Tiny } from '@janda-com/front';
import classNames from 'classnames';
import React from 'react';
import { productList_ProductList_items_ProductBooking } from '../../../../type/api';
import { hhmm, hhmmRange } from '../../../../utils/dateFormat';

interface IProp extends IJDalignProp {
    item: productList_ProductList_items_ProductBooking
    index: number;
    showEnd?: boolean;
    priceShow?: boolean;
    capacityShow?: boolean;
    selected?: boolean;
}

export const TimeBlock: React.FC<IProp> = ({ selected, className, item, index, capacityShow, showEnd, priceShow, ...props }) => {
    const { price, dateRangeForUse, capacity } = item;
    const { from, to } = dateRangeForUse || { from: new Date(), to: new Date() }

    const timeShow = from ? hhmm(from) : hhmmRange(from, to);

    const classes = classNames('timeBlock', className, {
        'timeblock--selected': selected
    })

    return <JDbox className={classes} {...props}>
        <Small onClick={props.onClick}>
            {index} 회
            <div>
                {timeShow}
            </div>
            <Tiny hide={!priceShow}>{price}원</Tiny>
            <Tiny hide={!capacityShow}>{capacity}남음</Tiny>
        </Small>
    </JDbox>;
};
