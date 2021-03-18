import { JDbox, Tiny } from '@janda-com/front';
import React from 'react';
import { Info } from '../../atom/Info';
import { Fpurchase } from '../../type/api';
import { hhmmRange, MMDDhhmmRange } from '../../utils/dateFormat';

interface IProp {
    purchase: Fpurchase
}

export const PurchaseViewer: React.FC<IProp> = ({ purchase }) => {
    return <JDbox >
        <Tiny>{purchase.itemName}</Tiny>
        {MMDDhhmmRange(purchase.purchasedProduct.dateRangeForUse)}
        <Info label={"수량"} value={purchase.count.toString()} />
    </JDbox>;
};
