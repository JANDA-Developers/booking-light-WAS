import { IUseModal, JDbutton, JDconfiger, JDmodal, s4 } from "@janda-com/front";
import React, { useContext, useState } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import AppContext from "../../../context";
import { useBuypagePolicyUpdate } from "../../../hook/useBuypage";

export interface IStoreModalInfo {}

interface IProp {
    modalHook: IUseModal<IStoreModalInfo>;
}

export const PolicyAutoCreateModal: React.FC<IProp> = ({ modalHook }) => {
    const [policies, setPoliciec] = useState([]);
    const { selectedStoreId } = useContext(AppContext);
    const [update] = useBuypagePolicyUpdate();

    const handleUpdate = () => {
        update({
            variables: {
                storeId: selectedStoreId,
                inputs: [
                    {
                        key: s4(),
                        content: "",
                        name: "",
                        require: false,
                        version: 1,
                    },
                ],
            },
        });
    };

    return (
        <JDmodal
            {...modalHook}
            foot={<ModalBtn onClick={handleUpdate}>약관 생성완료</ModalBtn>}
        >
            <JDconfiger
                accessKey=""
                enableHeader="사용약관"
                unableHeader="미사용약관"
                onEnableChange={setPoliciec as any}
                enableIds={policies}
                allItem={[]}
            />
        </JDmodal>
    );
};
