import React from 'react'
import StoreSettingList from './StoreSettingList'
import { JDavatar, JDmodal, useModal, useFilesManager, InputText, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect, IUseModal } from "@janda-com/front"

type TheadInfo = {
    title: string,
    desc: string
}


type TstoreList = {
    image: string,
    name: string,
    address: string,
    goods: number,
    sold: number,
    generated: Date,
    member: number,
    desc: string
}


interface IProps {
    headInfo: TheadInfo
    storeList: TstoreList[]
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

    const handleEdit = (index: string) => {
        alert(index);
    }

    const handleDelete = (index: string) => {

        const deleteConfirm = window.confirm('해당 상품을 삭제하시겠습니까?');
        if (deleteConfirm) {
            alert(index);
        }

    }

    return (
        <>
            <JDmodal {...modalHook_newStore}
                head={{
                    title: "상점 생성하기"
                }}
                foot={
                    <div className="addNew__btn">
                        <JDbutton className="extrablock__submit" onClick={handleAddNew}>
                            생성 확인
                        </JDbutton>
                        <JDbutton className="extrablock__calcel" onClick={handleCancelNew}>
                            생성 취소
                        </JDbutton>
                    </div>}
                className="storeSetting__addNew"
            >
                <section className="addNew">
                    <div className="addNew__image">
                        {/* <label htmlFor="file_storeimg">
                            <img src="/img/storeset/movie.jpg" alt="store image" />
                            <JDicon icon="camera"></JDicon>
                        </label>
                        <input type="file" id="file_storeimg" className="addNew__imageFile" /> */}
                        <JDavatar size="huge" uploader={uploader} mode="edit" />
                    </div>
                </section>
                <section className="addNew">
                    <InputText label="상품이름" className="addNew__input" />
                </section>
                <section className="addNew">
                    <InputText label="상점주소" className="addNew__input" />
                </section>
                <section className="addNew">
                    {/* <h3>상점소개</h3> */}
                    <InputText textarea={true} label="상점소개" className="addNew__textarea" />
                </section>
            </JDmodal>
            <div className="storeSetting">
                <JDpageHeader
                    title={headInfo.title}
                    desc={headInfo.desc}
                />
                <section className="storeSetting__content">
                    <button className="storeSetting__additem" onClick={() => { handleNewStore() }}>
                        <JDicon icon="plus" className="controller__plus"></JDicon>
                        <strong>상점생성하기</strong>
                    </button>
                    {
                        storeList.map((list, index) => {
                            return <StoreSettingList
                                index={`storeList-${index}`}
                                image={list.image}
                                name={list.name}
                                address={list.address}
                                goods={list.goods}
                                sold={list.sold}
                                generated={list.generated}
                                member={list.member}
                                desc={list.desc}
                                handleEdit={handleEdit}
                                handleDelete={handleDelete}
                            ></StoreSettingList>
                        })
                    }
                </section>
            </div>
        </>
    )
}

export default StoreSetting
