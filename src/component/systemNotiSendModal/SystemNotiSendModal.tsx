import {
    JDcheckBox,
    InputText,
    IUseModal,
    JDmodal,
    useInput,
} from "@janda-com/front";
import React from "react";
import { useSystemNotiCreate } from "../../hook/useSystemNoti";
import { completeMsg } from "../../utils/onCompletedMessage";
import { ModalBtn } from "../btns/ModalBtn";

export interface ISystemNotiModalInfo {
    targetId?: string;
}

interface IProp {
    modalHook: IUseModal<ISystemNotiModalInfo>;
}

export const SystemNotiSendModal: React.FC<IProp> = ({
    modalHook,
    children,
}) => {
    const { info } = modalHook;
    const targetId = info?.targetId;
    const inputHook = useInput("");

    const [createNoti] = useSystemNotiCreate({
        onCompleted: ({ SystemNotiCreate }) => {
            if (completeMsg(SystemNotiCreate, "알림이 발신되었습니다.")) {
                modalHook.closeModal();
            }
        },
    });

    const notiCreate = () => {
        createNoti({
            variables: {
                message: inputHook.value,
                userIds: targetId ? [targetId] : undefined,
            },
        });
    };

    return (
        <JDmodal
            foot={
                <ModalBtn onClick={notiCreate}>
                    {targetId ? "알림 보내기" : "모두에게 알림보내기"}
                </ModalBtn>
            }
            {...modalHook}
        >
            {children}
            <JDcheckBox mb label="알림창사용" />
            <InputText {...inputHook} label={"메세지"} textarea />
        </JDmodal>
    );
};
