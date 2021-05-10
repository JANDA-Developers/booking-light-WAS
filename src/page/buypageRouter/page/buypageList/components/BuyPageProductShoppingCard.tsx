import { autoComma, Bold, Flex, JDalign, JDbadge } from "@janda-com/front";
import { TElements } from "@janda-com/front/dist/types/interface";
import React from "react";
import { IImgCardProps, ImgCard } from "../../../../../atom/ImgCard";
import { itemList_ItemList_items_ItemBooking } from "../../../../../type/api";
import { cutStr } from "../../../../../utils/cutStr";
import { IBuypageProductData } from "../helper/productMap";

interface IProp extends Omit<IImgCardProps, "img"> {
    item: IBuypageProductData | itemList_ItemList_items_ItemBooking;
    Badge?: TElements;
    showPrice?: boolean;
}

export const BuypageProductShoppingCard: React.FC<IProp> = ({
    Badge,
    item,
    showPrice = true,
    ...props
}) => {
    const { thumbNail, categoryName, price, name, description } = item;
    return (
        <ImgCard alignImg={"vertical"} img={thumbNail} {...props}>
            {(categoryName || Badge) && (
                <Flex mb="small">
                    {Badge}
                    <JDbadge
                        hide={!categoryName}
                        mode="border"
                        size="small"
                        thema="grey2"
                    >
                        {categoryName}
                    </JDbadge>
                </Flex>
            )}
            <JDalign mb="small">
                <Bold style={{ display: "inline" }} mr>
                    {name}
                </Bold>
                {cutStr(description, 40)}
            </JDalign>
            {showPrice && <span>{autoComma(price)}</span>}
        </ImgCard>
    );
};
