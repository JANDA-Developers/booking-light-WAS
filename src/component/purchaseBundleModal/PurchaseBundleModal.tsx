import { IUseModal, JDmodal, useModal } from '@janda-com/front';
import React from 'react';
import { usePurchaseBundleCancel, usePurchaseBundleFindById, usePurchaseBundleRefund, usePurchaseBundleSetPaymentStatus, usePurchaseBundleSetRefundStatus, usePurchaseFindById } from '../../hook/usePurchase';
import { Paymethod, Status } from '../../type/api';
import { completeMsg } from '../../utils/onCompletedMessage';
import { ModalBtn } from '../btns/ModalBtn';
import { IPromptInfo, PormptModal } from '../promptModal/PromptModal';
import { PurchaseBundleViewer } from '../purchaseBunldeViewer/PurhcaseBundleViewer';
import { IRefundModalInfo, RefundModal } from '../refundModal/RefundModal';

export interface IPurchaseBundleModalInfo {
    bundleId: string;
}

interface IProp {
    modalHook: IUseModal<IPurchaseBundleModalInfo>;
}

export const PurchaseBundleModal: React.FC<IProp> = ({ modalHook }) => {
    const { bundleId } = modalHook.info || {};
    const refundModalHook = useModal<IRefundModalInfo>();
    const promptModalHook = useModal<IPromptInfo>()

    const [refundStatusChange] = usePurchaseBundleSetRefundStatus();
    const [paymentStatusChange] = usePurchaseBundleSetPaymentStatus();
    const [cancel] = usePurchaseBundleCancel({
        onCompleted: ({ PurchaseBundleCancel }) => {
            completeMsg(PurchaseBundleCancel, "취소완료", "취소실패")
        }
    })

    const cancelCallBack = (message: string) => {
        cancel({
            variables: {
                message,
                purchaseBundleId: bundleId
            }
        })
    }

    const handleCancel = () => {
        promptModalHook.openModal({
            callBack: cancelCallBack,
            messageLabel: "취소사유",
            text: "취소사유를 입력 해주세요."
        })
    }
    const { item } = usePurchaseBundleFindById(bundleId);
    const isBankPay = item?.paymethod === Paymethod.BANK_TRANSFER;
    const isPayReady = item?.paymentStatus === Status.PENDING;

    const handleRefundCard = () => {
        if (!item) return;
        refundModalHook.openModal({
            bundleId: item._id,
            priceOrigin: item.pricePaymentCompleted - item.priceRefundCompleted
        })
    }

    const changeToBankRefund = (message: string) => {
        paymentStatusChange({
            variables: {
                input: {
                    status: Status.COMPLETED,
                    message
                },
                purchaseBundleId: item?._id
            }
        })
    }

    const handleRefundBank = () => {
        if (!item) return;
        promptModalHook.openModal({
            callBack: changeToBankRefund,
            messageLabel: "환불사유",
            text: "환불 사유를 입력 해주세요."
        })
    }

    const confirmPaymentCallBack = () => {
        refundStatusChange({
            variables: {
                input: {
                    status: Status.COMPLETED,
                    message: ""
                },
                purchaseBundleId: item?._id
            }
        })
    }

    if (!item) return null;
    return <JDmodal foot={
        <div>
            <ModalBtn thema="warn" mr onClick={handleCancel}>취소하기</ModalBtn>
            <ModalBtn thema="black" mr onClick={isBankPay ? handleRefundBank : handleRefundCard}>환불하기</ModalBtn>
            <ModalBtn hide={!isBankPay || !isPayReady} onClick={confirmPaymentCallBack}>입금완료</ModalBtn>
        </div>
    } {...modalHook} head={{ title: "구매 자세히보기" }}  >
        <PurchaseBundleViewer isAdmin mode="border" bundle={item} />
        <PormptModal modalHook={promptModalHook} />
        <RefundModal onSucess={refundModalHook.closeModal} modalHook={refundModalHook} />
    </JDmodal>
};