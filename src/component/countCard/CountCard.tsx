import { JDcard, autoComma, Flex, JDtypho, Large } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';

interface IProp extends IJDcardProps {
    count: number;
    label: string;
}

export const CountCard: React.FC<IProp> = ({ label, count, ...props }) => {

    return <JDcard padding="small" {...props} >
        <Flex vCenter>
            <JDtypho style={{ lineHeight: 0 }} mr="small" size="small" color="grey2">{label}</JDtypho>
            <Large>{autoComma(count)}</Large>
        </Flex>
    </JDcard>;
};
