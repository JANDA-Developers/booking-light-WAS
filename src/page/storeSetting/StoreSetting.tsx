import React from 'react'
import { useModal, useFilesManager, JDpageHeader, WindowSize, JDbutton, JDcontainer, JDcard, toast } from "@janda-com/front"
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
    const { loading, storeCreate, storeDelete, storeUpdate } = context;

    const storeModalHook = useModal<ModalInfo>();

    const uploader = useFilesManager();

    const handleCreate = (info: storeCreateVariables) => {
        storeCreate(info)
    }

    const handleDelete = (info: storeDeleteVariables) => {
        storeDelete(info)
    }

    const handleUpdate = (info: storeUpdateVariables) => {
        storeUpdate(info)
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
                            storeModalHook.openModal()
                        }} />
                        {
                            storeList.map((store) => {
                                return <Store
                                    key={store._id}
                                    store={store}
                                />
                            })
                        }
                    </section>
                </div>
                <StoreSettingModal onCreate={handleCreate} onDelete={handleDelete} onUpdate={handleUpdate} modalHook={storeModalHook} />
            </JDcard>
        </div>
    )
}
export default StoreSetting
