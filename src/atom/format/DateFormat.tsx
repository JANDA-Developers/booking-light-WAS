import React from 'react';
import dayjs from "dayjs";
import { Flex, JDtypho, Small, Tiny } from '@janda-com/front';


export type Taccent = "date" | "time";

interface IProp {
    from: Date | number;
    to: Date | number;
    accent?: Taccent
}

export const DateWithTimeRange: React.FC<IProp> = ({ from, to, accent }) => {
    const _from = dayjs(from);
    const _to = dayjs(to);
    const fromDate = dayjs(_from).format("MM월DD일");
    const fromTime = dayjs(_from).format("HH시mm분");
    const toDate = dayjs(_to).format("MM월DD일");
    const toTime = dayjs(_to).format("HH시mm분");

    const timeVeiw = accent === "time";

    return <Flex vCenter >
        <div>
            <JDtypho size="superTiny">
                {dayjs(_from).format("YY년")}
            </JDtypho>
            <Small>
                {timeVeiw ? fromDate : fromTime}
            </Small>
            <Small>
                {timeVeiw ? fromTime : fromDate}
            </Small>
        </div>
        ~ <div>
            <JDtypho size="superTiny">
                {dayjs(_from).format("YY년")}
            </JDtypho>
            <Small>
                {timeVeiw ? toDate : toTime}
            </Small>
            <Small>
                {timeVeiw ? toTime : toDate}
            </Small>
        </div>
    </Flex>;
};
