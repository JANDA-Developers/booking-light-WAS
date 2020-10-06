import React from 'react'
import { useModal, useFilesManager, JDpageHeader, WindowSize, JDbutton, JDcontainer, JDcard } from "@janda-com/front"
import Store from './Store'
import DottedButton from '../dottedButton/DottedButton'

type TheadInfo = {
    title: string,
    desc: string
}


export type Tstroe = {
    _id: string;
    image: string,
    name: string,
    address: string,
    goodsCount: number,
    sold: number,
    generated: Date,
    member: number,
    desc: string
}

interface IProps {
    headInfo: TheadInfo
    storeList: Tstroe[]
}


const StoreSetting: React.FC<IProps> = ({ headInfo, storeList }) => {

    const modalHook_newStore = useModal();

    const uploader = useFilesManager();

    const handleNewStore = () => {
        modalHook_newStore.openModal();
    }

    const handleAddNew = () => {
        alert('상품 생성이 완료되었습니다');
    }

    const handleCancelNew = () => {
        const calcelConfirm = window.confirm('작성을 취소하시겠습니까?');
        if (calcelConfirm) {
            modalHook_newStore.closeModal();
        }
    }

    return (
        <div>
            <JDpageHeader
                title={headInfo.title}
                desc={headInfo.desc}
            />
            <JDcard>
                <div className="storeSetting">
                    <section className="storeSetting__content">
                        <DottedButton mb="normal" />
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
            </JDcard>
        </div>
    )
}

export default StoreSetting
