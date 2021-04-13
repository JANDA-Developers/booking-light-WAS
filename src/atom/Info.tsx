import { autoComma, Bold, Flex, IJDalignProp, JDtypho, Thin } from '@janda-com/front';
import { TElements } from '@janda-com/front/dist/types/interface';
import React from 'react';

interface IProp extends IJDalignProp {
    label: TElements;
    value?: TElements;
    center?: boolean;
    vCenter?: boolean;
    between?: boolean;
    around?: boolean;
    wrap?: boolean;
    vEnd?: boolean;
    column?: boolean;
    oneone?: boolean;
    grow?: boolean;
    alignEnd?: boolean;
    end?: boolean;
}

export const Info: React.FC<IProp> = ({ children, label, value, ...props }) => {
    return <Flex typho={{ color: "grey3" }} vCenter {...props}>
        <JDtypho color="black" weight={600} mr="small">{label}</JDtypho>
        {value || children}
    </Flex>;
};


// 필터바
// [] 날자 검색가능  키워드가 어떤 키워드인지 검색가능 []키워드 검색가능 // 키워드가능