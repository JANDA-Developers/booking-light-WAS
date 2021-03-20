import { JDbox, JDtypho } from '@janda-com/front';
import React from 'react';
import DotButton from '../component/dotButton/DotButton';
import { JDicon } from '../component/icons/Icons';

interface IProp {
    empty?: boolean;
    msg?: string;
}

export const Empty: React.FC<IProp> = ({ msg = "데이터가 없습니다.", empty = true }) => {
    if (!empty) return null
    return <JDbox theme="grey1">
        <JDtypho color="grey3" flex={{ vCenter: true, center: true }}>
            <JDicon mr icon="info" /> {msg}
        </JDtypho>
    </JDbox>;
};

