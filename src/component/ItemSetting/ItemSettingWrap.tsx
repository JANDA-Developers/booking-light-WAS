import React from "react";
import ItemSetting from "./ItemSetting";

const ItemSettingWrap = () => {

    const headInfo = {
        title: "상품설정",
        desc: "판매 중인 상품의 상세 내용을 변경할 수 있습니다"
    }

    const itemSort = [
        {
            label: 'Strawberry',
            value: 'strawberry'
        },
        {
            label: 'Apple',
            value: 'apple'
        },
        {
            label: 'Graph',
            value: 'graph'
        }
    ];

    const itemInfo = [
        {
            image: "/img/itemset/1.jpg",
            info1: "부산",
            info2: "잔다 특별관",
            info3: "1인 2매",
            price: 25000,
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        },
        {
            image: "/img/itemset/1.jpg",
            info1: "부산 2",
            info2: "잔다 특별관 2",
            info3: "1인 2매",
            price: 25000,
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        },
        {
            image: "/img/itemset/1.jpg",
            info1: "부산 3",
            info2: "잔다 특별관 3",
            info3: "1인 2매",
            price: 25000,
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        }
    ];


    return <ItemSetting headInfo={headInfo} itemSort={itemSort} itemInfo={itemInfo} />
}

export default ItemSettingWrap

