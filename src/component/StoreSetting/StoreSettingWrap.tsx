import React from 'react'
import StoreSetting from './StoreSetting'
import { JDcontainer, WindowSize } from "@janda-com/front";
const StoreSettingWrap = () => {

    const headInfo = {
        title: "상점설정",
        desc: "운영중인 상품을 생성하고 관리할 수 있습니다"
    }

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
            name: "잔다 시네마 22",
            address: "부산 남구 전포대로 110-10",
            goods: 15,
            sold: 100,
            generated: new Date(),
            member: 40,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 2."
        },
        {
            image: "/img/storeset/movie.jpg",
            name: "잔다 시네마 33",
            address: "부산 남구 전포대로 110-10",
            goods: 25,
            sold: 100,
            generated: new Date(),
            member: 50,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 3."
        }
    ]

    return (
        <JDcontainer size={WindowSize.full}>
            <StoreSetting headInfo={headInfo} storeList={storeList} />
        </JDcontainer>
    )
}

export default StoreSettingWrap
