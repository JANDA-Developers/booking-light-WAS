import { JDbox, JDtypho } from '@janda-com/front';
import React from 'react';
import DotButton from '../component/dotButton/DotButton';
import { JDicon } from '../component/icons/Icons';

interface IProp { }

export const Empty: React.FC<IProp> = () => {
    return <JDbox theme="grey1">
        <JDtypho color="grey3" flex={{ vCenter: true, center: true }}>
            <JDicon mr icon="info" /> 데이터가 없습니다.
        </JDtypho>
    </JDbox>;
};

