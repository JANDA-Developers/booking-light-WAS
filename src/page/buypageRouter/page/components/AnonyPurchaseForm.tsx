import { Flex, InputText, useModal } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { CheckBtn } from '../../../../component/checkBtn/CheckBtn';
import VerificationModal, { IVerfiModalInfo } from '../../../../component/verfi/VerificationModal';
import { TUseAnnonymouseVerifi } from '../../../../hook/useUser';
import { VerificationTarget } from '../../../../type/api';

export interface AnonyMouseVerifiData {
    name: string;
    phoneNumber: string;
    email: string;
}

interface IProp extends IDiv {
    verificationHook: TUseAnnonymouseVerifi
    userInfoHook: [AnonyMouseVerifiData, React.Dispatch<React.SetStateAction<AnonyMouseVerifiData>>]
}

export const AnonyPurchaseForm: React.FC<IProp> = ({ verificationHook, userInfoHook, ...props }) => {
    const modalHook = useModal<IVerfiModalInfo>();
    const { verifiData } = verificationHook;
    const [info, setInfo] = userInfoHook;

    return <div>
        <InputText
            id="NameInput"
            onChange={(value: any) => {
                info.name = value
                setInfo({
                    ...info
                })
            }} mb value={info.name} label="성함" />

        <InputText
            id="EmailInput"
            onChange={(value: any) => {
                info.email = value
                setInfo({
                    ...info
                })
            }} mb value={info.email} label="이메일" />
        <Flex mb oneone vEnd>
            <InputText
                mr
                hyphen
                id="PhoneNumberInput"
                disabled={verifiData?.isVerified}
                onChange={(value: any) => {
                    info.phoneNumber = value
                    setInfo({
                        ...info
                    })
                }}
                value={info.phoneNumber} label="전화번호" />
            <CheckBtn checked={!!verifiData?.isVerified} thema={verifiData ? "grey4" : "primary"} onClick={() => {
                modalHook.openModal({
                    payload: info.phoneNumber,
                    target: VerificationTarget.PHONE
                })
            }}>{verifiData?.isVerified ? "인증완료" : "인증하기"}</CheckBtn>
        </Flex>
        <VerificationModal
            verifyMu={verificationHook.verifiAnony as any}
            verifyCompleteMu={verificationHook.verifiAnonyComplete as any}
            modalHook={modalHook}
            {...verificationHook}
            target={VerificationTarget.PHONE}
            payload={info.phoneNumber}
        />
    </div>
};
