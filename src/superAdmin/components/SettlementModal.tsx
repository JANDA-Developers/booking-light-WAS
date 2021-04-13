import { IUseModal, JDmodal } from '@janda-com/front';
import React from 'react';
import { settlementMallList_SettlementMallList_items } from '../../type/api';
import { COUNT_GEN } from '../../type/const';
import { completeMsg } from '../../utils/onCompletedMessage';
import { SettlementHistoryTable } from "../../page/settlementHistory/components/SettlementHistoryTable"
import { useSettlementTransfer, useSettlementTransferCancel, useSettlementTransferList } from '../../hook/useSettlement';
import { SettlementTransferForm } from './SettlementTransferForm';


export interface ISettlementModalInfo {
    submall: settlementMallList_SettlementMallList_items
}

interface IProp {
    modalHook: IUseModal<ISettlementModalInfo>
}

export const SettlementModal: React.FC<IProp> = ({ modalHook }) => {
    const submall = modalHook.info?.submall

    const { items } = useSettlementTransferList({
        fixingFilter: {
            submallId__eq: submall?._id
        }
    }, { skip: !submall });
    const [serviceTemplateDelete] = useSettlementTransferCancel({
        onCompleted: ({ SettlementTransferCancel }) => {
            if (completeMsg(SettlementTransferCancel, "지급 신청취소")) {
                modalHook.closeModal();
            }
        }
    });

    return <JDmodal
        head={{
            title: "서브몰 지급하기"
        }}
        {...modalHook} >
        <SettlementTransferForm mb settlementMallId={submall?._id || ""} />
        <SettlementHistoryTable histories={items} />
    </JDmodal>;
};
