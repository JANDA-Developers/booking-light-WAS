import { JDalign, JDicon } from '@janda-com/front';
import React from 'react';
import dayjs from "dayjs";
import { Flex } from './B';

interface IProp {
    date: Date;
    format?: string;
    onChangeDate: (plus: boolean) => void;
}

export const ArrowDate: React.FC<IProp> = ({ format = "YYYY - MM - DD", date, onChangeDate }) => {
    return <Flex vCenter>
        <JDicon icon="shortLeft" size="large" onClick={() => { onChangeDate(false) }} />
        <div className="controlDate__selected">
            {dayjs(date).format(format)}
        </div>
        <JDicon icon="shortRight" size="large" onClick={() => { onChangeDate(true) }} />
    </Flex>
};


export default ArrowDate