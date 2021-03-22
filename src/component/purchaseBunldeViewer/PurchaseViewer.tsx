import { autoComma, Bold, JDbox, Tiny } from '@janda-com/front';
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
        <Bold mb="tiny">
            {MMDDhhmmRange(purchase.purchasedProduct.dateRangeForUse)}
        </Bold>
        <Info label={"수량"} value={purchase.count.toString()} />
        <Info label="가격">
            {autoComma(purchase.pricePaymentPending) + "원"}
        </Info>
    </JDbox>;
};
