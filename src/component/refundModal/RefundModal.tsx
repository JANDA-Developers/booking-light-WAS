import { InputText, IUseModal, JDcheckBox, JDmodal, JDswitch, useCheckBox, useInput, Validater } from '@janda-com/front';
import React, { useState } from 'react';
import { usePurchaseBundleRefund } from '../../hook/usePurchase';
import { completeMsg } from '../../utils/onCompletedMessage';
import { ModalBtn } from '../btns/ModalBtn';

export interface IRefundModalInfo {
    priceOrigin: number;
    bundleId: string;
}

interface IProp {
    modalHook: IUseModal<IRefundModalInfo>
    onSucess: () => void;
}

export const RefundModal: React.FC<IProp> = ({ modalHook, onSucess }) => {
    const { priceOrigin = 0, bundleId } = modalHook.info || {};
    const refundHook = useCheckBox(true);
    const amtHook = useInput(priceOrigin);

    const [refund] = usePurchaseBundleRefund({
        onCompleted: ({ PurchaseBundleRefund }) => {
            if (completeMsg(PurchaseBundleRefund, "환불 완료")) {
                onSucess()
            };
        }
    });

    const { validate } = new Validater([{
        value: amtHook.value,
        failMsg: "환불 가격을 입력 해주세요"
    }])

    const handleRefund = () => {
        if (validate()) {
            refund({
                variables: {
                    amount: priceOrigin,
                    purchaseBundleId: bundleId
                }
            })
        }
    }

    return <JDmodal head={{ title: "환불하기" }} foot={
        <ModalBtn onClick={handleRefund} label="환불하기" />
    } {...modalHook} >
        <JDswitch mb label="전체환불" {...refundHook} />
        <InputText disabled={refundHook.checked} comma label="환불금액" {...amtHook} />
    </JDmodal>;
};
