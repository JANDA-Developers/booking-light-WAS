import { autoComma, Bold, Flex, JDalign, JDbadge } from '@janda-com/front';
import React from 'react';
import { IImgCardProps, ImgCard } from '../../../../../atom/ImgCard';
import { cutStr } from '../../../../../utils/cutStr';
import { IBuypageProductData } from '../helper/productMap';
import { SoldOutBadge } from './SoldOutBadge';

interface IProp extends Omit<IImgCardProps, "img"> {
    item: IBuypageProductData
}

export const BuypageProductShoppingCard: React.FC<IProp> = ({ item, ...props }) => {
    const { thumbNail, categoryName, price, name, description } = item;
    return <ImgCard alignImg={"vertical"} img={thumbNail || ""} {...props}>
        <Flex mb>
            <SoldOutBadge bundle={item} />
            <JDbadge hide={!categoryName} thema="grey2">
                {categoryName}
            </JDbadge>
        </Flex>
        <JDalign mb>
            <Bold style={{ display: "inline" }} mr>{name}</Bold>
            {cutStr(description, 40)}
        </JDalign>
        
        {autoComma(price)}
    </ImgCard>;
};
