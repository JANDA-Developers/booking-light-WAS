import { IUseModal, JDbutton, JDmodal, useModal } from "@janda-com/front";
import React from "react";
import { ModalBtn } from "../../component/btns/ModalBtn";
import {
    IPromptInfo,
    PormptModal,
} from "../../component/promptModal/PromptModal";
import {
    userUserDelete,
    useuserFindById,
    useUserUpdate,
} from "../../hook/useUser";
import { UserUpdateInput } from "../../type/api";
import { promptConfirm } from "../../utils/prompt";
import { SuperUserDataForm } from "../components/SuperUserDataForm";

export interface ISuperUserModalInfo {
    userId: string;
}

interface IProp {
    modalHook: IUseModal<ISuperUserModalInfo>;
}

export const SuperUserModal: React.FC<IProp> = ({ modalHook }) => {
    const userId = modalHook.info?.userId;
    const { item: user } = useuserFindById(userId);
    const [userUpdate] = useUserUpdate();
    const [userDelete] = userUserDelete();
    const promptModal = useModal<IPromptInfo>();

    const handleSubmit = (input: UserUpdateInput) => {
        userUpdate({
            variables: {
                input,
                userId: userId!,
            },
        });
    };

    const handleDelete = () => {
        const del = (name: string) => {
            if (name === user!.name)
                userDelete({
                    variables: {
                        userId: user!._id,
                    },
                });
        };
        promptModal.openModal({
            callBack: del,
            title: `삭제하려는 유저이름을 정확히 입력해주세요 [${user!.name}]`,
            defaultValue: "",
            messageLabel: "유저이름",
        });
    };

    if (!userId) return null;
    return (
        <JDmodal
            foot={
                <ModalBtn onClick={handleDelete} thema="error">
                    유저제거하기
                </ModalBtn>
            }
            head={{ title: user?.name + "님의 정보" }}
            {...modalHook}
        >
            <SuperUserDataForm
                key={user?._id}
                user={user}
                onSubmit={handleSubmit}
            />
            <PormptModal modalHook={promptModal} />
        </JDmodal>
    );
};
