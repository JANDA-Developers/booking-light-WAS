import { InputText, IUseModal, JDmodal, JDtypho, useInput } from '@janda-com/front';
import { IInputTextCutsomProp } from '@janda-com/front/dist/components/InputText/InputText';
import React from 'react';
import { ModalBtn } from '../btns/ModalBtn';


export interface IPromptInfo {
    title: string;
    defaultValue?: string;
    messageLabel?: string;
    callBack: (message: string) => void;
    inputProps?: Partial<IInputTextCutsomProp>
    [key: string]: any
}

interface IProp {
    modalHook: IUseModal<IPromptInfo>
}
export const PormptModal: React.FC<IProp> = ({ modalHook }) => {
    const { callBack, messageLabel, title, defaultValue = "", inputProps } = modalHook.info || {};
    const inputHook = useInput(defaultValue);

    const handleOk = () => {
        callBack!(inputHook.value);
    }

    return <JDmodal className="promptModal" head={{
        title
    }} foot={
        <div>
            <ModalBtn thema="primary" onClick={handleOk} mr label="확인" />
            <ModalBtn onClick={modalHook.closeModal} label="취소" />
        </div>
    } {...modalHook} >

        <InputText  {...inputHook} label={messageLabel} textarea  {...inputProps} />
    </JDmodal>;
};
