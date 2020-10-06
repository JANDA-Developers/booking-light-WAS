import React from 'react'
import StoreSetting, { Tstroe } from './StoreSetting'
import { s4 } from '@janda-com/front';
const StoreSettingWrap = () => {

    const headInfo = {
        title: "상점설정",
        desc: "운영중인 상품을 생성하고 관리할 수 있습니다"
    }

    const storeList: Tstroe[] = [
        {
            _id: s4(),
            image: "/img/storeset/movie.jpg",
            name: "잔다 시네마",
            address: "부산 남구 전포대로 110-10",
            goodsCount: 15,
            sold: 100,
            generated: new Date(),
            member: 40,
            desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 2.",
        },
    ]

    return (
        <StoreSetting headInfo={headInfo} storeList={storeList} />

    )
}

export default StoreSettingWrap
