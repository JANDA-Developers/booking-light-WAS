import { autoComma, Bold, Flex, IJDalignProp } from '@janda-com/front';
import React from 'react';

interface IProp extends IJDalignProp {
    label: string;
    value?: string;
}

export const Info: React.FC<IProp> = ({ label, value, ...props }) => {
    return <Flex vCenter {...props}>
        <Bold mr="small">{label}</Bold>
        {value}
    </Flex>;
};


// 필터바
// [] 날자 검색가능  키워드가 어떤 키워드인지 검색가능 []키워드 검색가능 // 키워드가능