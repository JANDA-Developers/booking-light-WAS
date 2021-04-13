import { InputText, Flex, JDcard, useInput, Split, Validater } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Vertical } from '../../atom/Vertical';
import { useBillingMethodRegist } from '../../hook/useBilling';
import { completeMsg } from '../../utils/onCompletedMessage';
import { CardBtn } from '../btns/ModalBtn';

interface IProp extends IJDcardProps {
}

export const CardInfoRegister: React.FC<IProp> = ({ ...props }) => {
    const [regist] = useBillingMethodRegist({
        onCompleted: ({ BillingMethodRegist }) => {
            completeMsg(BillingMethodRegist, "결제수단 등록완료")
        }
    });
    const cardNoHook = useInput("");
    const cardPwHook = useInput("");
    const expMonthHook = useInput("");
    const expYearHook = useInput("");
    const idNoHook = useInput("");

    const { validate } = new Validater([{
        value: cardNoHook.value.length > 10,
        failMsg: "카드번호를 입력 해주세요",
        id: "CardNumInput"
    }, {
        value: cardPwHook.value.length > 1,
        failMsg: "패스워드 앞 2자리를 입력 해주세요",
        id: "CardPWInput"
    }, {
        value: expYearHook.value.length > 1,
        failMsg: "만료 년도를 입력 해주세요",
        id: "CardExpYear"
    }, {
        value: expMonthHook.value.length > 1,
        failMsg: "만료 월을 입력 해주세요",
        id: "CardExpMonth"
    }, {
        value: idNoHook.value.length > 1,
        failMsg: "주민번호/사업자번호 를 입력해주세요.",
        id: "IDInput"
    }])

    const handleRegist = () => {
        if (validate())
            regist({
                variables: {
                    input: {
                        cardNo: cardNoHook.value,
                        cardPw: cardPwHook.value,
                        expMonth: expMonthHook.value,
                        expYear: expYearHook.value,
                        idNo: idNoHook.value,
                    }
                }
            })
    }

    return <JDcard {...props} head="카드 등록하기" foot={<CardBtn onClick={handleRegist} thema="primary" size="long">등록하기</CardBtn>} >
        <InputText id="CardNumInput" card mb placeholder="**** **** **** ****"  {...cardNoHook} label="카드번호" />
        <InputText id="CardPWInput" max={2} mb {...cardPwHook} type="password" label="비밀번호 앞 2자리" />
        <Flex mb vCenter>
            <InputText id="CardExpYear" max={2} {...expYearHook} label="만료일자 년" /> <Split>/</Split>
            <InputText id="CardExpMonth" max={2} {...expMonthHook} label="만료일 월" />
        </Flex>
        <InputText id="IDInput" mb {...idNoHook} label="주민번호 앞 6자리 또는 사업자번호" />
    </JDcard>;
};
