import { autoComma, Bold, instanceOfA, JDbox, Tiny } from '@janda-com/front';
import React from 'react';
import { Info } from '../../atom/Info';
import { Fbooking, purchaseBundleFindById_PurchaseBundleFindById_purchases } from '../../type/api';
import { hhmmRange, MMDDhhmmRange } from '../../utils/dateFormat';

interface IProp {
    purchase: purchaseBundleFindById_PurchaseBundleFindById_purchases
}

export const PurchaseBookingViewer: React.FC<IProp> = ({ purchase }) => {

    const product = purchase.purchasedProduct;

    return <JDbox >
        <Tiny>{purchase.itemName}</Tiny>
        <Bold mb="tiny">
            {MMDDhhmmRange(product.dateRangeForUse)}
        </Bold>
        <Info label={"수량"} value={purchase.count.toString()} />
        <Info label="가격">
            {autoComma(purchase.pricePaymentPending) + "원"}
        </Info>
    </JDbox>;
};
