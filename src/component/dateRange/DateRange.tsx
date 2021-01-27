import { Flex, IJDalignProp, JDbox, Split } from '@janda-com/front';
import { JDicon } from '@janda-com/front/dist/components/icons/Icons';
import { TElements } from '@janda-com/front/dist/types/interface';
import dayjs from "dayjs";
import React from 'react';

interface IProp extends IJDalignProp {
    Icons?: TElements;
    from: any;
    to: any;
}

export const DateRange: React.FC<IProp> = ({ Icons, from, to, ...props }) => {
    return <Flex style={{
        width: "100%",
        height: "100%",
        justifyContent: "space-around"
    }} vCenter around {...props}>
        <div style={{
            marginRight: '.4rem'
        }}>
            {dayjs(from).format("YYYY.MM.DD")}
            <Split>~</Split>
            {dayjs(to).format("YYYY.MM.DD")}
        </div>
        {Icons}
    </Flex>;
};

export default DateRange;
