import { IUseModal, JDmodal, useModal } from "@janda-com/front";
import React, { useContext } from "react";
import AppContext from "../../context";
import {
    usePurchaseBundleCancel,
    usePurchaseBundleFindById,
    usePurchaseBundleSetPaymentStatus,
} from "../../hook/usePurchase";
import { Paymethod, Status } from "../../type/api";
import { completeMsg } from "../../utils/onCompletedMessage";
import { ModalBtn } from "../btns/ModalBtn";
import { IPromptInfo, PormptModal } from "../promptModal/PromptModal";
import { PurchaseBundleViewer } from "../purchaseBunldeViewer/PurhcaseBundleViewer";
import { IRefundModalInfo, RefundModal } from "../refundModal/RefundModal";

export interface IPurchaseBundleModalInfo {
    bundleId: string;
}

interface IProp {
    modalHook: IUseModal<IPurchaseBundleModalInfo>;
}

export const PurchaseBundleModal: React.FC<IProp> = ({ modalHook }) => {
    const { isNonProfit } = useContext(AppContext);
    const { bundleId } = modalHook.info || {};
    const refundModalHook = useModal<IRefundModalInfo>();
    const promptModalHook = useModal<IPromptInfo>();

    const [paymentStatusChange] = usePurchaseBundleSetPaymentStatus({
        onCompleted: ({ PurchaseBundleSetPaymentStatus }) => {
            completeMsg(PurchaseBundleSetPaymentStatus, "업데이트 완료");
        },
    });

    const [cancel] = usePurchaseBundleCancel({
        onCompleted: ({ PurchaseBundleCancel }) => {
            completeMsg(PurchaseBundleCancel, "취소완료", "취소실패");
        },
    });

    const { item } = usePurchaseBundleFindById(bundleId);
    const needCheckDeposit =
        item?.paymethod === Paymethod.BANK_TRANSFER ||
        item?.paymethod === Paymethod.CASH;
    const isPayReady = item?.paymentStatus === Status.PENDING;
    const isCancled = item?.paymentStatus === Status.CANCELED;
    const isRefundPending = item?.refundStatus === Status.PENDING;

    const cancelCallBack = (message: string) => {
        cancel({
            variables: {
                message,
                purchaseBundleId: bundleId,
            },
        });
    };

    // 결제완료처리
    const handleConfirmBankDeposit = () => {
        paymentStatusChange({
            variables: {
                input: {
                    status: Status.COMPLETED,
                    message: "",
                },
                purchaseBundleId: item?._id,
            },
        });
    };

    // 카드취소 환불 모달 오픈
    const handleRefund = () => {
        if (!item) return;
        refundModalHook.openModal({
            bundleId: item._id,
            priceOrigin: item.pricePaymentCompleted - item.priceRefundCompleted,
        });
    };

    // 캔슬 처리
    const handleCancel = () => {
        promptModalHook.openModal({
            callBack: cancelCallBack,
            messageLabel: "취소사유",
            title: "취소사유를 입력 해주세요.",
        });
    };

    if (!item) return null;
    return (
        <JDmodal
            foot={
                <div>
                    <ModalBtn
                        hide={isRefundPending}
                        thema="error"
                        mr
                        onClick={handleCancel}
                    >
                        취소하기
                    </ModalBtn>
                    <ModalBtn
                        hide={!isRefundPending}
                        thema="black"
                        mr
                        onClick={handleRefund}
                    >
                        환불하기
                    </ModalBtn>
                    <ModalBtn
                        hide={!needCheckDeposit || !isPayReady}
                        onClick={handleConfirmBankDeposit}
                    >
                        {isNonProfit ? "예약승인" : "입금완료"}
                    </ModalBtn>
                    {/* <ModalBtn hide={!needCheckDeposit || isPayReady || isCancled} onClick={handleCancelBankDeposit}>입금취소</ModalBtn> */}
                </div>
            }
            {...modalHook}
            head={{ title: "구매 자세히보기" }}
        >
            <PurchaseBundleViewer isAdmin mode="border" bundle={item} />
            <PormptModal modalHook={promptModalHook} />
            <RefundModal
                onSucess={refundModalHook.closeModal}
                modalHook={refundModalHook}
            />
        </JDmodal>
    );
};
