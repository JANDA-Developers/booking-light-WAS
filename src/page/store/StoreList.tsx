import { JDcard, JDcontainer, JDloadingCard, JDpageHeader, s4, useModal } from '@janda-com/front';
import React from 'react';
import DotButton from '../../component/dotButton/DotButton';
import { useStoreDelete, useStoreList } from '../../hook/useStore';
import { storeList_StoreList_items } from '../../type/api';
import { promptConfirm } from '../../utils/prompt';
import { completeMsg } from '../../utils/utils';
import { StoreCard } from './components/StoreCard';
import { IStoreModalInfo, StoreModal } from './components/StoreModal';

interface IProp { }

export const Store: React.FC<IProp> = () => {
    const { items: stores, getLoading } = useStoreList()
    const storeModalHook = useModal<IStoreModalInfo>();
    const [deleteMu] = useStoreDelete({
        onCompleted: ({ StoreDelete }) => {
            completeMsg(StoreDelete, "스토어 삭제완료")
        }
    });

    const handleEdit = (store: storeList_StoreList_items) => () => {
        storeModalHook.openModal({ store });
    }

    const handleDelete = (store: storeList_StoreList_items) => () => {
        promptConfirm(store.name, `스토어를 삭제하실려면 ${store.name}을 정확하게 입력 해주세요.`, () => {
            deleteMu({
                variables: {
                    storeId: store._id
                }
            })
        })
    }


    return <div>
        <JDpageHeader title="스토어 생성하기" desc="당신의 스토어를 등록하세요." />
        <JDcontainer>
            <JDloadingCard loading={getLoading} />
            {stores.map(store =>
                <StoreCard mb key={store._id} onEdit={handleEdit(store)} onDelete={handleDelete(store)} store={store} />
            )}
            <DotButton onClick={storeModalHook.openModal as () => void}>추가하기</DotButton>
        </JDcontainer>
        <StoreModal key={storeModalHook.info?.store?._id || "createModal"} modalHook={storeModalHook} />
    </div>
};

export default Store;