import { Flex, IJDalignProp, JDdayPicker, Mr, TimePicker, useDayPicker, useTimePicker } from '@janda-com/front';
import React from 'react';
import { TUseDateTimePicker } from '../../hook/useDateTimePicker';
import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from '../../type/const';

interface IProp extends TUseDateTimePicker {
    align?: IJDalignProp
}

export const DateWithTimePicker: React.FC<IProp> = ({ align, endDateHook, endTimerHook, startDateHook, startTimerHook }) => {

    return <Flex vCenter {...align} >
        <JDdayPicker format="YYYY년MM월DD일" isRange={false} mr {...startDateHook} mode="input" />
        <TimePicker
            minOps={MINUTES_SELECT_OP} hourOps={HOURS_SELECT_OP}
            {...startTimerHook} />
        <Mr />
        <JDdayPicker format="YYYY년MM월DD일" isRange={false} mr {...endDateHook} mode="input" />
        <TimePicker
            minOps={MINUTES_SELECT_OP} hourOps={HOURS_SELECT_OP}
            {...endTimerHook} />
    </Flex>;
};
