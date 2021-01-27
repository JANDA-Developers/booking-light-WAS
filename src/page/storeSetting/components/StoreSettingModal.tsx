import { Flex, foucs, InputText, IUseModal, JDalign, JDavatar, JDbutton, JDmodal, toast, useFilesManager, Validater } from '@janda-com/front';
import { TlocalFile } from '@janda-com/front/dist/hooks/hook';
import React, { useState } from 'react';
import { storeCreateVariables, storeDeleteVariables, storeUpdateVariables } from '../../../type/api';
import { IStore } from '../interface';


export type TMode = "create" | "update"

export type ModalInfo = {
    mode: TMode
    store?: IStore
}

export interface IData extends Partial<IStore> {
    uploadImage?: TlocalFile
}

interface IProp {
    loading?: boolean;
    modalHook: IUseModal<ModalInfo>
    onCreate: (info: storeCreateVariables) => void;
    onDelete: (info: storeDeleteVariables) => void;
    onUpdate: (info: storeUpdateVariables) => void;
}

export const StoreSettingModal: React.FC<IProp> = ({ modalHook,
    loading,
    onCreate,
    onUpdate,
    onDelete,
}) => {
    if (modalHook.isOpen && !modalHook.info) throw Error("should provide modal info");
    if (!modalHook.info) throw Error("should provide modal info");
    const mode = modalHook.info.mode;
    const originalStore = modalHook.info.store;
    const isCreate = mode === "create";
    const default_info: IData = {
        name: "asdasd",
        description: "asdasdas"
    }

    const [data, setData] = useState<IData>(originalStore || default_info);
    const { name, description, _id: id } = data;
    const idValid = !!id;

    function set<T extends keyof IData>(key: T, value: IData[T]) {
        setData({ ...data, [key]: value });
    }

    const { validate } = new Validater([{
        value: !!name,
        failMsg: "상품이름 값을 입력해주세요.",
        id: "productName"
    }, {
        value: name?.length! > 3,
        failMsg: "상품이름은 적어도 4자 이상 이여야 합니다.",
        id: "productName"
    }, {
        value: !!description,
        failMsg: "상점소개 값을 입력해주세요.",
        id: "productDesc"
    }])


    const handleCreate = () => {
        if (!validate()) return;

        onCreate({
            name: name!,
            description
        })
    }

    const handleUpdate = () => {
        if (!validate()) return;
        if (!idValid) throw Error("no id provided");

        onUpdate({
            id,
            input: {
                description,
                name
            }
        })
    }

    const handleDelete = () => {
        if (!idValid) throw Error("no id provided");
        onDelete({
            storeId: id
        })
    }


    return <JDmodal loading={loading} className="storeSettingModal" {...modalHook}
        head={{
            title: "상점 생성하기"
        }}
        foot={
            <div >
                <JDbutton thema="grey4" mode="flat" padding="huge" onClick={() => {
                    isCreate ? handleCreate() : handleUpdate();
                }}>
                    {isCreate ? "생성하기" : "수정하기"}
                </JDbutton>
            </div>
        }
    >
        <InputText mb="normal" value={name || ""} onChange={(value: any) => {
            set("name", value);
        }} label="상품이름" />

        <InputText mb="normal" onChange={(value: any) => {
            // set("")
        }} value={""} label="상점주소" />

        <InputText mb="normal" onChange={(value: any) => {
            set("description", value);
        }} value={description || ""} textarea label="상점소개" />

    </JDmodal>
};

export default StoreSettingModal;