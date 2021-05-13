import {
    IUseModal,
    JDbutton,
    JDconfiger,
    JDmodal,
    s4,
    Validater,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import AppContext from "../../../context";
import { useBuypagePolicyUpdate } from "../../../hook/useBuypage";
import { completeMsg } from "../../../utils/onCompletedMessage";
import { defaultPolicies } from "../template/template";

export interface IStoreModalInfo {}

interface IProp {
    modalHook: IUseModal<IStoreModalInfo>;
}

export const PolicyAutoCreateModal: React.FC<IProp> = ({ modalHook }) => {
    const [includePolicies, setIncludPolciies] = useState(
        defaultPolicies.map((dp) => dp.key)
    );
    const { selectStore } = useContext(AppContext);
    const { selectedStoreId } = useContext(AppContext);
    const [update] = useBuypagePolicyUpdate({
        onCompleted: ({ BuypagePolicyUpdate }) => {
            if (completeMsg(BuypagePolicyUpdate, "폴리시 설정완료")) {
                modalHook.closeModal();
            }
        },
    });

    const { validate } = new Validater([
        {
            value: includePolicies.length > 0,
            failMsg: "하나 이상의 폴리시를 선택 해주세요",
        },
    ]);

    const handleUpdate = () => {
        if (!validate()) return;
        const targetPolicies = defaultPolicies.filter((p) =>
            includePolicies.includes(p.key)
        );
        targetPolicies.forEach((p) => p.replace(selectStore.name));
        update({
            variables: {
                storeId: selectedStoreId,
                inputs: targetPolicies.map((tp) => ({
                    content: tp.policy,
                    key: tp.key,
                    name: tp.title,
                    require: tp.require,
                    version: 1,
                })),
            },
        });
    };

    return (
        <JDmodal
            {...modalHook}
            head={{ title: "약간 스마트 설정하기" }}
            foot={<ModalBtn onClick={handleUpdate}>약관 생성완료</ModalBtn>}
        >
            <JDconfiger
                enableHeader="사용약관"
                unableHeader="미사용약관"
                onEnableChange={setIncludPolciies as any}
                enableIds={includePolicies}
                allItem={defaultPolicies.map((dp) => ({
                    _id: dp.key,
                    name: dp.title,
                }))}
            />
        </JDmodal>
    );
};
