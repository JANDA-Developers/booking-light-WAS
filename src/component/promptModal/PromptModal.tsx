import { InputText, IUseModal, JDmodal, JDtypho, useInput } from '@janda-com/front';
import React from 'react';
import { ModalBtn } from '../btns/ModalBtn';


export interface IPromptInfo {
    text: string;
    messageLabel: string;
    callBack: (message: string) => void;
}

interface IProp {
    modalHook: IUseModal<IPromptInfo>
}

export const PormptModal: React.FC<IProp> = ({ modalHook }) => {
    const { callBack, messageLabel, text } = modalHook.info || {};
    const inputHook = useInput("");

    const handleOk = () => {
        callBack!(inputHook.value);
    }

    return <JDmodal head={{
        title: text
    }} foot={
        <div>
            <ModalBtn thema="primary" onClick={handleOk} mr label="확인" />
            <ModalBtn onClick={modalHook.closeModal} label="취소" />
        </div>
    } {...modalHook} >
        <InputText {...inputHook} label={messageLabel} textarea />
    </JDmodal>;
};
