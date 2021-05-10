import {
    InputText,
    IUseModal,
    JDmodal,
    JDtypho,
    useInput,
} from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";
import { ModalBtn } from "../btns/ModalBtn";

export interface IPromptInfo {
    title: string;
    defaultValue?: string;
    messageLabel?: string;
    callBack: (message: string) => void;
    inputProps?: Partial<IInputTextCutsomProp>;
    [key: string]: any;
}

export interface IPomptModalProps {
    modalHook: IUseModal<IPromptInfo>;
}
export const PormptModal: React.FC<IPomptModalProps> = ({
    modalHook,
    children,
}) => {
    const { callBack, messageLabel, title, defaultValue = "", inputProps } =
        modalHook.info || {};
    const inputHook = useInput(defaultValue);

    const handleOk = () => {
        callBack!(inputHook.value);
    };

    return (
        <JDmodal
            className="promptModal"
            head={{
                title,
            }}
            foot={
                <div>
                    <ModalBtn
                        thema="primary"
                        onClick={handleOk}
                        mr
                        label="확인"
                    />
                    <ModalBtn onClick={modalHook.closeModal} label="취소" />
                </div>
            }
            {...modalHook}
        >
            {children}
            <InputText
                {...inputHook}
                label={messageLabel}
                textarea
                {...inputProps}
            />
        </JDmodal>
    );
};
