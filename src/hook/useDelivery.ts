import { isPhone } from "@janda-com/front";
import { useEffect, useState } from "react";
import { DeliveryInput } from "../type/api";
import { Validater } from "../utils/Validater";

const defaultData: DeliveryInput = {
    address: "",
    addressDetail: "",
    receiverName: "",
    receiverPhone: "",
    receiverSmaeWithBuyer: true,
    deliveryPrice: 0,
};

export const useDeliveryForm = (
    defaultInfo: Partial<DeliveryInput> = defaultData
) => {
    const [deliveryInfo, setDeliveryInfo] = useState<DeliveryInput>({
        ...defaultData,
        ...defaultInfo,
    });

    const deliverValidate = new Validater([
        {
            value: deliveryInfo.address,
            failMsg: "주소값을 입력 해주세요",
            id: "AddressInput",
        },
        {
            value: deliveryInfo.addressDetail,
            failMsg: "상세 주소값을 입력 해주세요",
            id: "AddressDetailInput",
        },
        {
            value: deliveryInfo.receiverName,
            failMsg: "수신자 명을 입력 해주세요.",
            id: "ReceiverNameInput",
        },
        {
            value: isPhone(deliveryInfo.receiverPhone),
            failMsg: "수신자 연락처가 올바르지 않습니다.",
            id: "ReceiverPhoneInput",
        },
    ]);

    useEffect(() => {
        if (deliveryInfo.receiverSmaeWithBuyer)
            setDeliveryInfo({
                ...deliveryInfo,
                ...defaultInfo,
            });
    }, [deliveryInfo.receiverSmaeWithBuyer]);

    return { deliveryInfo, setDeliveryInfo, deliverValidate };
};
