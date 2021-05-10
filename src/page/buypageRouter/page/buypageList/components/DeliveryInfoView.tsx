import {
    autoComma,
    Flex,
    IJDalignProp,
    JDalign,
    JDselect,
    opFind,
    Small,
    Tiny,
    InputText,
    autoHypen,
} from "@janda-com/front";
import React from "react";
import { Info } from "../../../../../atom/Info";
import { Fdelivery, FdeliveryInfo } from "../../../../../type/api";
import { StatusOption } from "../../../../../type/const";

export const deliverInfoDefault = {
    fee: 0,
    lowerPrice: 0,
    overFreePrice: 0,
};

interface IProp extends IJDalignProp {
    delivery: Omit<Fdelivery, "__typename">;
}

export const DeliveryPriceInfoViewer: React.FC<IProp> = ({
    delivery,
    ...props
}) => {
    const { fee, lowerPrice, overFreePrice } = delivery;
    if (!fee) return <JDalign {...props}>배송비 무료</JDalign>;
    if (overFreePrice && fee >= overFreePrice)
        return (
            <Flex vCenter {...props}>
                <Tiny
                    hide={!fee}
                    style={{ textDecoration: "line-through" }}
                    mr="tiny"
                >
                    {autoComma(fee)}원
                </Tiny>{" "}
                배송비무료
            </Flex>
        );
    return (
        <JDalign {...props}>
            <JDalign mb="small">배송비 {autoComma(fee)}</JDalign>
            {overFreePrice && (
                <Small color="error">
                    *{autoComma(overFreePrice)}원 이상 배송비무료
                </Small>
            )}
            {lowerPrice ? (
                <Small>*{autoComma(lowerPrice)}원 이상 주문가능</Small>
            ) : undefined}
        </JDalign>
    );
};

interface IDeliveryViewerProp extends Omit<IJDalignProp, "onChange"> {
    delivery: Omit<FdeliveryInfo, "__typename">;
    editable?: boolean;
    onChange?: (data: Omit<FdeliveryInfo, "__typename">) => void;
}

export const DeliveryInfoViewer: React.FC<IDeliveryViewerProp> = ({
    editable,
    delivery,
    onChange,
    ...props
}) => {
    if (editable) {
        return (
            <div>
                <InputText
                    onChange={(val: any) => {
                        delivery.address = val;
                        onChange?.(delivery);
                    }}
                    mb
                    label="주소"
                    value={delivery.address}
                />
                <InputText
                    onChange={(val: any) => {
                        delivery.addressDetail = val;
                        onChange?.(delivery);
                    }}
                    mb
                    label="상세주소"
                    value={delivery.addressDetail}
                />
                <InputText
                    onChange={(val: any) => {
                        delivery.receiverName = val;
                        onChange?.(delivery);
                    }}
                    mb
                    label="수신자"
                    value={delivery.receiverName}
                />
                <InputText
                    onChange={(val: any) => {
                        delivery.receiverPhone = val;
                        onChange?.(delivery);
                    }}
                    mb
                    label="수신자 연락처"
                    value={autoHypen(delivery.receiverPhone)}
                />
                <JDselect
                    mb
                    label="배송상태"
                    onChange={(op) => {
                        delivery.deliveryStatus = op.value;
                        onChange?.(delivery);
                    }}
                    options={StatusOption}
                    selectedOption={opFind(
                        delivery.deliveryStatus,
                        StatusOption
                    )}
                />
            </div>
        );
    }

    return (
        <Flex>
            <Info label="주소" value={delivery.address} />
            <Info label="상세주소" value={delivery.addressDetail} />
            <Info label="배송비" value={autoComma(delivery.deliveryPrice)} />
            <Info label="수신자" value={delivery.receiverName} />
            <Info
                label="수신자 연락처"
                value={autoHypen(delivery.receiverPhone)}
            />
            <Info label="배송상태" value={autoHypen(delivery.deliveryStatus)} />
        </Flex>
    );
};
