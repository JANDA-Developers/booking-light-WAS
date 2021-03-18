import { InputText, Flex, IUseModal, JDcard, JDmodal, useInput, useModal, Bold, JDicon, Mb, JDtypho, Small, Validater } from '@janda-com/front';
import React, { useState } from 'react';
import ModalBtn from '../../../component/btns/ActBtn';
import { CheckBtn } from '../../../component/checkBtn/CheckBtn';
import SingleUploader from '../../../component/singleUploader/SingleUploader';
import TextButton from '../../../component/textButton/TextButton';
import VerificationModal from '../../../component/verfi/VerificationModal';
import { useNotificationSenderAdd } from '../../../hook/useNotification';
import { useFileUpload, useSingleUpload } from '../../../hook/useUpload';
import { useVerification } from '../../../hook/useVerification';
import { NotificationMethod, VerificationEvent, VerificationTarget } from '../../../type/api';
import { completeMsg } from '../../../utils/onCompletedMessage';

interface IProp {
    modalHook: IUseModal;
}

export const SmsSendRegistModal: React.FC<IProp> = ({ modalHook }) => {
    const labelHook = useInput("")
    const payloadHook = useInput("")
    const [notificationSenderAdd] = useNotificationSenderAdd({
        onCompleted: ({ NotificationSenderAdd }) => {
            if (completeMsg(NotificationSenderAdd, "발신자 등록")) {
                modalHook.closeModal();
            }
        }
    });
    const verifiModal = useModal();
    const phoneVerifiHook = useVerification(VerificationEvent.NotificationSenderAdd, VerificationTarget.PHONE);
    const emailVerifiHook = useVerification(VerificationEvent.NotificationSenderAdd, VerificationTarget.EMAIL);
    const [method, setMethod] = useState<NotificationMethod>(NotificationMethod.SMS)
    const isSms = method === NotificationMethod.SMS;
    const fileUploaderHook = useSingleUpload();

    const methodVeifiHook = isSms ? phoneVerifiHook : emailVerifiHook;
    const isVerified = methodVeifiHook.verifiData?.isVerified;
    const payload = methodVeifiHook.verifiData?.payload;


    const { validate } = new Validater([{
        value: labelHook.value,
        failMsg: "발신자 명칭을 입력 해주세요."
    }, {
        value: fileUploaderHook.file,
        failMsg: "통신판매 증명원을 등록 해주세요."
    }])

    const handleSetMethod = (method: NotificationMethod) => () => {
        setMethod(method)
        payloadHook.onChange("");
    }

    const handleAdd = () => {
        if (validate()) return;
        notificationSenderAdd({
            variables: {
                target: methodVeifiHook.verifiData!.target,
                label: labelHook.value
            }
        })
    }


    return <JDmodal {...modalHook} foot={<ModalBtn disabled={!methodVeifiHook.verifiData?.isVerified} onClick={handleAdd}>등록하기</ModalBtn>} head={{ title: "SMS발신자 등록하기" }}>
        <JDcard mb onClick={handleSetMethod(NotificationMethod.SMS)} selected={isSms} >
            <Bold>SMS 핸드폰 번호등록</Bold>
        </JDcard>
        <JDcard mb onClick={handleSetMethod(NotificationMethod.EMAIL)} selected={!isSms} >
            <Bold>EAIL 발신 메일등록</Bold>
        </JDcard>
        <InputText
            mb
            label="발신자 명칭"
            mr
            id="NameInput"
            hyphen={isSms}
            {...labelHook}
        />
        <Flex mb="small" vCenter vEnd>
            <InputText
                label={`발신 ${isSms ? "전화번호" : "이메일"}`}
                readOnly={!!isVerified}
                mr
                id="PhoneNumberInput"
                hyphen={isSms}
                {...payloadHook}
                value={isVerified ? payload : payloadHook.value}
            />
            <CheckBtn onClick={() => {
                verifiModal.openModal()
            }} checked={!!isVerified} >인증하기</CheckBtn>
        </Flex>
        <SingleUploader label="통신판매 증명원" {...fileUploaderHook} />
        <Small hover weight={600}>통신판매 증명원이란?</Small>
        <VerificationModal key={method} target={isSms ? VerificationTarget.PHONE : VerificationTarget.EMAIL} {...methodVeifiHook} payload={payloadHook.value} modalHook={verifiModal} />
    </JDmodal>;
};
