import { JDlabel, TimePicker, useTimePicker } from '@janda-com/front';
import { ILabelProp } from '@janda-com/front/dist/components/label/JDLabel';
import React, { useEffect } from 'react';
import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from '../../../type/const';

interface IProp extends ILabelProp {
    value: string;
    onChnage?: (value: any) => void;
}

// 저장형식  h m
export const TimePickerAdapter: React.FC<IProp> = ({ onChnage, value, txt, require }) => {
    const [hour, min] = value.split("h");
    const timePickerHook = useTimePicker({
        hour: parseInt(hour) || -1,
        min: parseInt(min) || -1
    })

    useEffect(() => {
        onChnage?.(timePickerHook.hour + "h" + timePickerHook.min);
    }, [timePickerHook.hour, timePickerHook.min])

    return <div>
        <JDlabel txt={txt} require={require} />
        <TimePicker minOps={MINUTES_SELECT_OP} hourOps={HOURS_SELECT_OP} {...timePickerHook} />
    </div>
};
