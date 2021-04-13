import { autoComma, Flex, JDalign, JDbox, JDicon, Mr, Tiny } from "@janda-com/front";
import React, { useContext } from "react";
import { productList_ProductList_items_ProductBooking_usageDetails } from "../../../../type/api";
import { BuypageContext } from "../buypageList/helper/context";
import { ProductSelecter } from "./ProductSelecter";
import { RemainViewer } from "./RemainViewer";

interface IDetailProps {
    cpacity: productList_ProductList_items_ProductBooking_usageDetails;
    count: number;
    countUnit?: string;
    onChange: (val: number) => void;
    isLast: boolean
}


//하나의 상품의 캐파시티중 하나의 디테일 상품을 보여줌 
export const CapacityDetail: React.FC<IDetailProps> = ({ isLast, countUnit = "개", cpacity, count, onChange, ...props }) => {
    const { configure } = useContext(BuypageContext);
    const texts = configure?.RESERVATION_NORMAL?.texts || {}
    const unit = texts?.countUnit?.kr
    const { label, price, usage, capacityCount } = cpacity;
    const isFull = usage > capacityCount;

    return <JDalign mr={isLast ? "no" : "normal"} className="capacity__cell" key={cpacity.key}>
        <Tiny style={{ alignSelf: "flex-end" }}>{cpacity.label}</Tiny>
        <Flex mb vCenter vEnd>{autoComma(cpacity.price)} <Mr mr="superTiny" /><Tiny>{unit || countUnit}당</Tiny></Flex>
        <RemainViewer size="small" capacityDetail={cpacity} />
        <ProductSelecter maxCount={capacityCount - usage} count={count} onChange={onChange} />
    </JDalign>
}




//하나의 상품의 캐파시티중 하나의 디테일 상품을 보여줌 
export const CapacityShoppingDetail: React.FC<IDetailProps> = ({ isLast, countUnit = "개", cpacity, count, onChange, ...props }) => {
    const { capacityCount, usage, label, price } = cpacity;

    return <JDbox className="CapacityShoppingDetail" mb={isLast ? "no" : "normal"} key={cpacity.key}>
        <Flex className="CapacityShoppingDetail__inner" vCenter between>
            {label}
            <Mr />
            <ProductSelecter maxCount={capacityCount - usage} count={count} onChange={onChange} />
            <Mr />
            <span>
                {autoComma(price)}원
            </span>
            <JDicon size="superTiny" color="grey2" hover onClick={() => { onChange(0) }} icon="close" />
        </Flex>
    </JDbox>
}
