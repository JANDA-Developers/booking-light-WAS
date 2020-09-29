import React from 'react'
import StoreSettingList from './StoreSettingList'
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect, IUseModal } from "@janda-com/front";

const StoreSetting = () => {

    const storeList = [
        {
            image: "/img/storeset/movie.jpg",
            name: "잔다 시네마",
            address: "부산 남구 전포대로 110-10",
            goods: 5,
            sold: 100,
            generated: new Date(),
            member: 30,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 1."
        },
        {
            image: "/img/storeset/movie.jpg",
            name: "잔다 시네마 2",
            address: "부산 남구 전포대로 110-10",
            goods: 15,
            sold: 100,
            generated: new Date(),
            member: 40,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 2."
        },
        {
            image: "/img/storeset/movie.jpg",
            name: "잔다 시네마 3",
            address: "부산 남구 전포대로 110-10",
            goods: 25,
            sold: 100,
            generated: new Date(),
            member: 50,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 3."
        }
    ]

    const handleNewStore = () => {

    }

    return (
        <JDcontainer size={WindowSize.full}>
            <div className="storeSetting">
                <JDpageHeader displayIcon={false}
                    desc={"운영중인 상품을 생성하고 관리할 수 있습니다"}
                    title={"상점설정"}
                    onClick={
                        () => {
                            handleNewStore()
                        }
                    }
                />
                <section className="storeSetting__content">
                    <button className="storeSetting__additem" onClick={() => { handleNewStore() }}>
                        <JDicon icon="plus" className="controller__plus"></JDicon>
                        <strong>상점생성하기</strong>
                    </button>
                    <StoreSettingList storeList={storeList}></StoreSettingList>
                </section>
            </div>
        </JDcontainer>
    )
}

export default StoreSetting
