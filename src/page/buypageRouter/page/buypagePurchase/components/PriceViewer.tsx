import { autoComma, Flex, JDtypho } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";

interface IProp {
    optionsPrice?: number;
    DeliveryPriceView?: TElements;
    productPrice?: number;
    totalPrice: number;
}

export const CommonPriceViewer: React.FC<IProp> = ({
    totalPrice,
    DeliveryPriceView,
    optionsPrice,
    productPrice,
}) => {
    return (
        <div>
            <Flex hide={!productPrice} mb="small">
                <JDtypho mr>상품금액</JDtypho>
                <div>{autoComma(productPrice)} 원</div>
            </Flex>
            <Flex hide={!optionsPrice} mb="small">
                <JDtypho mr>옵션금액</JDtypho>
                <div>{autoComma(optionsPrice)} 원</div>
            </Flex>
            <Flex hide={!DeliveryPriceView} mb>
                <JDtypho mr>배송비</JDtypho>
                {DeliveryPriceView}
            </Flex>
            <Flex typho={{ size: "large" }}>
                <JDtypho mr>최종금액</JDtypho>
                <JDtypho color="error">{autoComma(totalPrice)} 원</JDtypho>
            </Flex>
        </div>
    );
};
