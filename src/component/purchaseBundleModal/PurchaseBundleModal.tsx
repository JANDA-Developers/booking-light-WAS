import { IUseModal, JDmodal } from '@janda-com/front';
import React from 'react';
import { usePurchaseBundleCancel, usePurchaseBundleFindById, usePurchaseFindById } from '../../hook/usePurchase';
import { completeMsg } from '../../utils/onCompletedMessage';
import { ModalBtn } from '../btns/ModalBtn';
import { PurchaseBundleViewer } from '../purchaseBunldeViewer/PurhcaseBundleViewer';

export interface IPurchaseBundleModalInfo {
    bundleId: string;
}

interface IProp {
    modalHook: IUseModal<IPurchaseBundleModalInfo>;
}

export const PurchaseBundleModal: React.FC<IProp> = ({ modalHook }) => {
    const { bundleId } = modalHook.info || {};
    const [cancelMu] = usePurchaseBundleCancel({
        onCompleted: ({ PurchaseBundleCancel }) => {
            completeMsg(PurchaseBundleCancel, "취소완료", "취소실패")
        }
    })

    const handleCancel = () => { }

    const { item } = usePurchaseBundleFindById(bundleId)
    if (!item) return null;
    return <JDmodal foot={<ModalBtn onClick={handleCancel}>취소하기</ModalBtn>} {...modalHook} head={{ title: "구매 자세히보기" }}  >
        <PurchaseBundleViewer isAdmin mode="border" bundle={item} />
    </JDmodal>;
};