import { InputText, Flex, IUseModal, JDmodal, useInput, Validater, JDselect, useSelect, opFind } from '@janda-com/front';
import React from 'react';
import ModalBtn from '../../../component/btns/ActBtn';
import SingleUploader from '../../../component/singleUploader/SingleUploader';
import { useStoreCreate, useStoreDelete, useStoreUpdate } from '../../../hook/useStore';
import { useSingleUpload } from '../../../hook/useUpload';
import { StoreCreateInput, storeList_StoreList_items, StoreType, StoreUpdateInput } from '../../../type/api';
import { STORE_TYPE_OPS } from '../../../type/const';
import { completeMsg } from '../../../utils/utils';

export interface IStoreModalInfo {
    store: storeList_StoreList_items;
}

interface IProp {
    modalHook: IUseModal<IStoreModalInfo>;
    onCreate?: () => void;
    onUpdate?: () => void;
}

export const StoreModal: React.FC<IProp> = ({ modalHook, onCreate, onUpdate }) => {
    const store = modalHook.info?.store;
    const storeId = store?._id;
    const isCreate = !store;
    const [storeUpdate] = useStoreUpdate({
        onCompleted: ({ StoreUpdate }) => {
            if (completeMsg(StoreUpdate, "스토어 업데이트 완료", "업데이트 실패")) {
                onUpdate?.();
                modalHook.closeModal()
            }
        }
    });
    const [storeCreate] = useStoreCreate({
        onCompleted: ({ StoreCreate }) => {
            if (completeMsg(StoreCreate, "스토어 생성완료", "생성실패")) {
                console.log("callback");
                onCreate?.();
                modalHook.closeModal()
            }
        }
    });
    const [deleteStore] = useStoreDelete({
        onCompleted: ({ StoreDelete }) => {
            if (completeMsg(StoreDelete, "스토어 삭제완료", "삭제실패"))
                modalHook.closeModal();
        }
    });

    const uploads = useSingleUpload(store?.image || undefined)
    const nameHook = useInput(store?.name || "");
    const descHook = useInput(store?.description || "");
    const addressHook = useInput(store?.location?.address || "");
    const typeHook = useSelect<StoreType>(opFind(store?.type, STORE_TYPE_OPS), STORE_TYPE_OPS);

    const handleDelete = () => {
        if (!store) return;
        confirm(`정말로 상점 (${store.name})을 삭제하시겠습니까?`)
        deleteStore({
            variables: {
                storeId: store._id
            }
        })
    }

    const { validate } = new Validater([{
        value: typeHook.selectedOption?.value,
        failMsg: "스토어 타입을 선택 해주세요.",
    }, {
        value: nameHook.value,
        failMsg: "이름값은 필수 입니다.",
    }])

    const nextData: StoreUpdateInput & StoreCreateInput = {
        type: typeHook.selectedOption?.value as any,
        description: descHook.value,
        name: nameHook.value,
        location: {
            address: addressHook.value
        },
        image: uploads.createInput
    }

    const handleUpdate = () => {
        if (validate())
            storeUpdate({
                variables: {
                    input: {
                        ...nextData
                    },
                    storeId
                }
            })
    }

    const handleCreate = () => {
        if (validate())
            storeCreate({
                variables: {
                    input: {
                        ...nextData
                    }
                }
            })
        console.log({ nextData })
    }


    return <JDmodal
        minWidth={"300px"}
        foot={
            <Flex>
                <ModalBtn thema="primary" mr hide={!isCreate} onClick={handleCreate}>생성하기</ModalBtn>
                <ModalBtn thema="primary" mr hide={isCreate} onClick={handleUpdate}>수정하기</ModalBtn>
                <ModalBtn thema="error" onClick={handleDelete}>삭제하기</ModalBtn>
            </Flex>
        }
        head={{
            title: store?.name || "새로운 상점"
        }}  {...modalHook} >
        <JDselect mb label="스토어타입" {...typeHook} />
        <InputText mb {...nameHook} label="이름" />
        <InputText mb {...descHook} textarea label="설명" />
        <InputText mb {...addressHook} label="주소" />
        <SingleUploader {...uploads} label="대표사진" />
    </JDmodal>;
};

