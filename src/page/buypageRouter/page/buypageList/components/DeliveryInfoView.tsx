import { autoComma, IJDalignProp, JDalign, Small, Tiny } from '@janda-com/front';
import React from 'react';
import { Fdelivery } from '../../../../../type/api';

export const deliverInfoDefault = {
    fee: 0,
    lowerPrice: 0,
    overFreePrice: 0
}

interface IProp extends IJDalignProp {
    delivery: Omit<Fdelivery, "__typename">
}

export const DeliveryInfoViewer: React.FC<IProp> = ({ delivery, ...props }) => {
    const { fee, lowerPrice, overFreePrice } = delivery;
    if (!fee) return <JDalign {...props}>배송비 무료</JDalign>
    return <JDalign {...props} >
        <JDalign mb="small">배송비 {autoComma(fee)}</JDalign>
        {overFreePrice && <Small color="error">*{autoComma(overFreePrice)}원 이상 배송비무료</Small>}
        {lowerPrice && <Small>*{autoComma(lowerPrice)}원 이상 주문가능</Small>}
    </JDalign>;
};
