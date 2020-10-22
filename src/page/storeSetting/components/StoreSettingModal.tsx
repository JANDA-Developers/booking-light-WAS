import { foucs, InputText, IUseModal, JDavatar, JDbutton, JDmodal, toast, useFilesManager } from '@janda-com/front';
import { TlocalFile } from '@janda-com/front/dist/hooks/hook';
import React, { useState } from 'react';
import { storeCreateVariables, storeDeleteVariables, storeUpdateVariables } from '../../../type/api';
import { IStore } from '../interface';


export type TMode = "create" | "update"

export type ModalInfo = {
    mode: TMode
    store?: IStore
}

export interface ISubmitData extends Partial<IStore> {
    uploadImage?: TlocalFile
}

interface IProp {
    modalHook: IUseModal<ModalInfo>
    onCreate: (info: storeCreateVariables) => void;
    onDelete: (info: storeDeleteVariables) => void;
    onUpdate: (info: storeUpdateVariables) => void;
}

export const StoreSettingModal: React.FC<IProp> = ({ modalHook,
    onCreate,
    onUpdate,
    onDelete: handleDelete,
}) => {
    if (!modalHook.info) throw Error("should provide modal info");
    const mode = modalHook.info?.mode;
    const originalStore = modalHook.info?.store;
    const isCreate = mode === "create";
    const default_info: ISubmitData = {}

    const storeImgHook = useFilesManager();
    const [submitData, setSubmitData] = useState<ISubmitData>(originalStore || default_info);
    const { name, description, _id: id } = submitData;
    const uploadImage = storeImgHook.localFiles[0];
    const submitInfo: ISubmitData = { ...submitData, uploadImage };

    function set<T extends keyof ISubmitData>(key: T, value: ISubmitData[T]) {
        setSubmitData({ ...submitData, [key]: value });
    }

    const createValidate = () => {
        if (!name) {
            toast.warn("상품이름 값을 입력해주세요.");
            foucs("productName");
            return false;
        }

        if (!description) {
            toast.warn("상점소개 값을 입력해주세요.");
            foucs("productDesc");
            return false;
        }

        return true;
    }

    const idValid = !!id;

    const handleCreate = () => {
        if (!createValidate()) return;

        onCreate({
            name: name!,
            description
        })
    }

    const handleUpdate = () => {
        if (!createValidate()) return;
        if (!idValid) throw Error("no id provided");

        onUpdate({
            id,
            input: {
                description,
                name
            }
        })
    }



    return <JDmodal {...modalHook}
        head={{
            title: "상점 생성하기"
        }}
        foot={
            <div>
                <JDbutton onClick={() => {
                    isCreate ? handleCreate() : handleUpdate();
                }}>
                    {isCreate ? "생성하기" : "수정하기"}
                </JDbutton>
                {isCreate || <JDbutton onClick={() => {
                    if (!idValid) throw Error("no id provided");

                    handleDelete({
                        storeId: id
                    })
                }} thema="error">삭제하기</JDbutton>}
            </div>}
    >
        <section >
            <div >
                <JDavatar size="huge" uploader={storeImgHook} mode="edit" />
            </div>
        </section>
        <section >
            <InputText id="productName" value={name || ""} onChange={(value: any) => {
                set("name", value);
            }} label="상품이름" />
        </section>
        <section >
            <InputText onChange={(value: any) => {
                // set("location", value);
            }} value={""} label="상점주소" />
        </section>
        <section >
            <InputText id="productDesc" onChange={(value: any) => {
                set("description", value);
            }} value={description || ""} textarea label="상점소개" />
        </section>
    </JDmodal>
};

export default StoreSettingModal;