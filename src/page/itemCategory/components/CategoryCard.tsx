import { Bold, Flex, JDbadge, JDcard, Tiny } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { ScrollBox } from '../../../component/scrollBox/ScrollBox';
import { Fcategory, Fitem } from '../../../type/api';
import { yyyymmddHHmm } from '../../../utils/dateFormat';

interface IProp extends IJDcardProps {
    items?: Fitem[];
    category: Fcategory
}

export const CategoryCard: React.FC<IProp> = ({ items, category, ...props }) => {
    return <JDcard head={category.label} {...props}>
        <div style={{
            cursor: "move"
        }}>
            <ScrollBox mb>
                <Flex>
                    {items?.map(item => <JDbadge mode="border" mr key={item._id} thema="grey2">{item.name}</JDbadge>)}
                </Flex>
            </ScrollBox>
            <Tiny weight={100} color="grey2">생성일 {yyyymmddHHmm(category.createdAt)}</Tiny>
        </div>
    </JDcard>;
};
