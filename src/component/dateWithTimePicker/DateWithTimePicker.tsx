import { Flex, IJDalignProp, JDdayPicker, Mr, Split, TimePicker, Tiny, useDayPicker, useTimePicker } from '@janda-com/front';
import React, { useEffect, useState } from 'react';
import { TUseDateTimePicker } from '../../hook/useDateTimePicker';
import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from '../../type/const';
import { ScrollBox } from '../scrollBox/ScrollBox';
import dayjs from "dayjs";

interface IProp extends TUseDateTimePicker {
    align?: IJDalignProp
    fixSameDate?: boolean;
    fixTimeRange?: boolean;
}

export const DateWithTimePicker: React.FC<IProp> = ({ fixTimeRange, fixSameDate, align, endDateHook, endTimerHook, startDateHook, startTimerHook }) => {
    const [lastStart, setLastStart] = useState<{
        date: Date | null,
        hour: number,
        min: number
    }>({
        date: startDateHook.from,
        hour: 0,
        min: 0
    })
    const startDate = startDateHook.from?.valueOf();
    const startHour = startTimerHook.hour
    const startMin = startTimerHook.min
    const endHour = endTimerHook.hour
    const endMin = endTimerHook.min

    useEffect(() => {
        if (!fixTimeRange) return;

        const diffH = startHour - lastStart.hour;
        const diffM = startMin - lastStart.min;
        let diffDate = 0;
        let toDate = endDateHook.from;
        if (lastStart.date && endDateHook.from) {
            diffDate = dayjs(lastStart.date).diff(endDateHook.from);
            toDate = dayjs(endDateHook.from).add(diffDate, "day").toDate();
        }

        endTimerHook.setTime({
            hour: endHour + diffH,
            min: endMin + diffM
        })

        if (fixSameDate) {
            toDate = startDateHook.from
        }

        if (toDate)
            endDateHook.setDate(toDate)

        setLastStart({
            date: toDate,
            hour: startHour,
            min: startMin
        })
    }, [startHour, startMin, startDate])

    return <Flex wrap vCenter {...align} >
        <JDdayPicker format="YYYY년 MM월 DD일" isRange={false} mr {...startDateHook} mode="input" />
        <TimePicker
            minOps={MINUTES_SELECT_OP}
            hourOps={HOURS_SELECT_OP}
            {...startTimerHook} />
        <Mr mr="tiny" />
        <Tiny mr >부터</Tiny>
        {/* {fixSameDate || */}
        <JDdayPicker format="YYYY년 MM월 DD일" isRange={false} mr {...endDateHook} mode="input" />
        {/* } */}
        <TimePicker
            minOps={MINUTES_SELECT_OP}
            hourOps={HOURS_SELECT_OP}
            {...endTimerHook} />
        <Mr mr="tiny" />
        <Tiny>까지</Tiny>
    </Flex>;
};
