import { JDbutton, JDcard, JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import { FormCreater } from '../../component/formCreater/FormCreater';
import AppContext from '../../context';
import { useAttributes } from '../../hook/useAttributes';
import { useStoreUpdate } from '../../hook/useStore';
import { completeMsg } from '../../utils/onCompletedMessage';

interface IProp {
}

export const BuypageFieldSet: React.FC<IProp> = () => {
    const { selectedStore, selectedStoreId } = useContext(AppContext);
    const [storeUpdate] = useStoreUpdate({
        onCompleted: ({ StoreUpdate }) => {
            completeMsg(StoreUpdate, "입력필드가 설정 되었습니다.");
        }
    });

    const attributesHook = useAttributes(selectedStore?.buypage.attrs || []);

    const handleSave = () => {
        storeUpdate({
            variables: {
                input: {
                    buypage: {
                        attrs: attributesHook.attributes
                    }
                },
                storeId: selectedStoreId
            }
        })
    }

    return <div>
        <JDpageHeader title="구매리스트" desc="구매리스트 확인하기." />
        <JDcontainer verticalPadding size={WindowSize.md}>
            <JDcard mb="large" head="사용자 요구 정보">
                <FormCreater {...attributesHook} />
            </JDcard>
            <JDbutton onClick={handleSave}>저장하기</JDbutton>
        </JDcontainer>
    </div>;
};

export default BuypageFieldSet