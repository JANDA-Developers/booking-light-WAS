import React from 'react'
import { useModal, useFilesManager, JDpageHeader, JDcard } from "@janda-com/front"
import Store from './Store'
import DotButton from '../../component/dotButton/DotButton'
import { IStore } from './interface'
import { IStoreWrapContext } from "./StoreSettingWrap";
import StoreSettingModal, { ModalInfo } from './components/StoreSettingModal'
import { storeCreateVariables, storeDeleteVariables, storeUpdateVariables } from '../../type/api'

interface IProps {
    storeList: IStore[]
    context: IStoreWrapContext
}

const StoreSetting: React.FC<IProps> = ({ context, storeList }) => {
    const { storeCreate, storeDelete, storeUpdate, loading } = context;

    const storeModalHook = useModal<ModalInfo>(false, { mode: "create" });

    const handleCreate = (info: storeCreateVariables) => {
        storeCreate(info, storeModalHook.closeModal)
    }

    const handleUpdate = (info: storeUpdateVariables) => {
        storeUpdate(info, storeModalHook.closeModal)
    }

    const handleDelete = (info: storeDeleteVariables) => {
        storeDelete(info, storeModalHook.closeModal)
    }


    return (
        <div>
            <JDpageHeader
                title="상점설정"
                desc="운영중인 상품을 생성하고 관리할 수 있습니다"
            />
            <JDcard>
                <div className="storeSetting">
                    <section className="storeSetting__content">
                        <DotButton mb="normal" onClick={() => {
                            storeModalHook.openModal({
                                mode: "create",
                            })
                        }} >상점생성</DotButton>
                        {
                            storeList.map((store) => {
                                console.log("store");
                                console.log(store);
                                return <Store
                                    onDelete={() => {
                                        handleDelete({
                                            storeId: store._id
                                        })
                                    }}
                                    onEdit={() => {
                                        storeModalHook.openModal({
                                            mode: "update",
                                            store
                                        })
                                    }}
                                    key={store._id}
                                    store={store}
                                />
                            })
                        }
                    </section>
                </div>
                <StoreSettingModal key={"storeSettingModal" + storeModalHook.info?.store?._id} loading={loading.create || loading.update} onCreate={handleCreate} onDelete={handleDelete} onUpdate={handleUpdate} modalHook={storeModalHook} />
            </JDcard>
        </div>
    )
}
export default StoreSetting
