import { InputText, Flex, IJDalignProp, JDbutton, JDdayPicker, useDayPicker, useInput } from '@janda-com/front';
import React from 'react';
import { useSettlementTransfer } from '../../hook/useSettlement';
import { completeMsg } from '../../utils/onCompletedMessage';

interface IProp extends IJDalignProp {
    settlementMallId: string;
}

export const SettlementTransferForm: React.FC<IProp> = ({ settlementMallId, ...props }) => {
    const amountHook = useInput(0)
    const dateHook = useDayPicker(null, null);

    const [settlementTranfer] = useSettlementTransfer({
        onCompleted: ({ SettlementTransfer }) => {
            completeMsg(SettlementTransfer, "지급 신청완료")
        }
    });

    const handleCreate = () => {
        settlementTranfer({
            variables: {
                input: {
                    amount: amountHook.value,
                    settlementDate: dateHook.from,
                    duplicateCheck: true,
                    settlementMallId
                }
            }
        })
    }

    return <Flex vCenter {...props}>
        <InputText mr label="지급양" comma {...amountHook} />
        <JDdayPicker mr label="지급 예약일" {...dateHook} mode="input" />
        <JDbutton onClick={handleCreate} thema="primary" label="지급하기" />
    </Flex>;
};
