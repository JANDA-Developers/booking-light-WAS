import React from "react";
import ItemSetting from "./ItemSetting";

const ItemSettingWrap = () => {

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


    return <ItemSetting itemSort={itemSort} itemInfo={itemInfo} />
}

export default ItemSettingWrap

