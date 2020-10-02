import { InputText, IUseModal, JDavatar, JDbutton, JDmodal, useFilesManager } from '@janda-com/front';
import { TlocalFile } from '@janda-com/front/dist/hooks/hook';
import React, { useState } from 'react';


type ModalInfo = {
    mode: "edit" | "create"
}


type TStoreSubmitInfo = {
    name: string;
    location: string;
    introduce: string;
    storeImg?: TlocalFile;
}

interface IProp {
    modalHook: IUseModal<ModalInfo>
    onSubmit: (info: TStoreSubmitInfo) => void;
}

export const StoreSettingModal: React.FC<IProp> = ({ modalHook, onSubmit }) => {
    const storeImgHook = useFilesManager();

    const [info, setInfo] = useState<TStoreSubmitInfo>({
        introduce: "",
        location: "",
        name: "",
    });
    const { introduce, location, name } = info;

    const storeImg = storeImgHook.localFiles[0]
    function set<T extends keyof TStoreSubmitInfo>(key: T, value: TStoreSubmitInfo[T]) {
        setInfo({ ...info, [key]: value });
    }


    return <JDmodal {...modalHook}
        head={{
            title: "상점 생성하기"
        }}
        foot={
            <div >
                <JDbutton onClick={() => {
                    onSubmit({ ...info, storeImg })
                }}>
                    생성 확인
                </JDbutton>
                <JDbutton onClick={modalHook.closeModal}>
                    생성 취소
                </JDbutton>
            </div>}
    >
        <section >
            <div >
                <JDavatar size="huge" uploader={storeImgHook} mode="edit" />
            </div>
        </section>
        <section >
            <InputText value={introduce} onChange={(value: any) => {
                set("name", value);
            }} label="상품이름" />
        </section>
        <section >
            <InputText onChange={(value: any) => {
                set("location", value);
            }} value={location} label="상점주소" />
        </section>
        <section >
            {/* <h3>상점소개</h3> */}
            <InputText onChange={(value: any) => {
                set("introduce", value);
            }} value={introduce} textarea={true} label="상점소개" className="addNew__textarea" />
        </section>
    </JDmodal>
};

export default StoreSettingModal;