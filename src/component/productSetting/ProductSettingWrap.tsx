import { s4 } from "@janda-com/front";
import React from "react";
import ProductSetting from "./ProductSetting";
import { TProduct } from "./ProductSetting";
const ProductSettingWrap:React.FC = () => {

    const headInfo = {
        title: "상품설정",
        desc: "판매 중인 상품의 상세 내용을 변경할 수 있습니다"
    }

    const productSort = [
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

    const productInfo: TProduct[] = [
        {
            _id: s4(),
            index: 0,
            image: "/img/productset/1.jpg",
            tags: ["부산"],
            title: "잔다 특별관",
            desc: "1인 2매",
            price: 25000,
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        },
    ];


    return <ProductSetting headInfo={headInfo} productSort={productSort} productInfo={productInfo} />
}

export default ProductSettingWrap

