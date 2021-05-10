import {
    JDbutton,
    JDcard,
    JDcontainer,
    JDpageHeader,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import { FormCreater } from "../../component/formCreater/FormCreater";
import AppContext from "../../context";
import { useAttributes } from "../../hook/useAttributes";
import { useStoreUpdate } from "../../hook/useStore";
import { omits } from "../../utils/omits";
import { completeMsg } from "../../utils/onCompletedMessage";

interface IProp {}

export const BuypageFieldSet: React.FC<IProp> = () => {
    const { selectedStore, selectedStoreId } = useContext(AppContext);
    const [storeUpdate] = useStoreUpdate({
        onCompleted: ({ StoreUpdate }) => {
            completeMsg(StoreUpdate, "입력필드가 설정 되었습니다.");
        },
    });

    const defaultAttrs = selectedStore?.buypage.attrs;
    console.log({ defaultAttrs });

    const attributesHook = useAttributes(defaultAttrs || []);

    const handleSave = () => {
        storeUpdate({
            variables: {
                input: {
                    buypage: {
                        attrs: omits(attributesHook.attributes),
                    },
                },
                storeId: selectedStoreId,
            },
        });
    };

    return (
        <div>
            <JDpageHeader
                title="구매페이지 필드설정"
                desc="구매 페이지 아이템 공통 필드 설정."
            />
            <JDcontainer verticalPadding size={WindowSize.md}>
                <JDcard mb="large" head="사용자 요구 정보">
                    <FormCreater {...attributesHook} />
                </JDcard>
                <JDbutton thema="primary" onClick={handleSave}>
                    저장하기
                </JDbutton>
            </JDcontainer>
        </div>
    );
};

export default BuypageFieldSet;
