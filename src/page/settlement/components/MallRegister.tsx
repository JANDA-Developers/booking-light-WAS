import { InputText, JDbutton, JDcard, JDradioButton, useInput, useRadioButton, Validater } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../../context';
import { useSettlementMallCreate } from '../../../hook/useSettlement';
import { BankCode } from '../../../type/api';
import { BANK_OPS } from '../../../type/const';
import { completeMsg } from '../../../utils/onCompletedMessage';

interface IProp { }

export const MallRegister: React.FC<IProp> = () => {
    const { me } = useContext(AppContext)
    const [settlementCreate] = useSettlementMallCreate({
        onCompleted: ({ SettlementMallCreate }) => {
            completeMsg(SettlementMallCreate, "서브몰 등록에 성공 하였습니다.", "등록에 실패 했습니다. 입력값중 잘못된 값이 없는지 확인 바랍니다.")
        }
    });

    const accountHolderHook = useInput("");
    const accountNumberHook = useInput("");
    const radioButtonHook = useRadioButton([], BANK_OPS)
    const selectedBank = radioButtonHook.selectedValues[0];
    const busiNumberHook = useInput("");

    const { validate } = new Validater([{
        value: accountHolderHook.value,
        failMsg: "계좌주 값을 입력 해주세요.",
    }, {
        value: accountNumberHook.value,
        failMsg: "계좌번호 값을 입력해주세요.",
    }, {
        value: busiNumberHook.value,
        failMsg: "사업자번호를 입력 해주세요.",
    }, {
        value: !!selectedBank,
        failMsg: "은행을 선택 해주세요.",
    }])

    const handleCreateSettlement = () => {
        if (validate())
            settlementCreate({
                variables: {
                    input: {
                        accountHolder: accountHolderHook.value,
                        accountNumber: accountNumberHook.value,
                        bankCode: selectedBank as BankCode,
                        brcNumber: busiNumberHook.value,
                        submallId: me!._id,
                        submallName: me!.company || me!.name,
                    }
                }
            })
    }

    return <JDcard foot={
        <JDbutton thema="primary" onClick={handleCreateSettlement} >등록하기</JDbutton>
    } head="수급수단 등록하기">
        <InputText mb label="은행주" {...accountHolderHook} />
        <InputText mb label="계좌번호" {...accountNumberHook} />
        <InputText placeholder="-없이 입력 바랍니다." mb label="사업자번호" {...busiNumberHook} />
        <JDradioButton btnProps={{ mode: "border", mr: "small", mb: "small" }} only {...radioButtonHook} />
    </JDcard>;
};
