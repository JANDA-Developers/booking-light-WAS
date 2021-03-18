import { JDdayPicker, JDdoubleInputRange, JDlabel, useDayPicker } from '@janda-com/front';
import React, { useEffect } from 'react';
import dayjs from "dayjs";

interface IProp {
    require?: boolean;
    value: string;
    label?: string;
    onChange?: (val: string) => void;
}

export const DayPickerRangeAdater: React.FC<IProp> = ({ value, onChange, label, require }) => {
    const [defaultFrom, defaultTo] = value.split("|");
    let defaultFromDate = dayjs(defaultFrom || undefined).toDate();
    let defaultToDate = dayjs(defaultTo || undefined).toDate();

    if (!dayjs(defaultFromDate).isValid()) {
        defaultFromDate = new Date();
    }

    if (!dayjs(defaultToDate).isValid()) {
        defaultToDate = new Date();
    }

    const dayPickerHook = useDayPicker(new Date(), new Date());
    const { from, to } = dayPickerHook;

    useEffect(() => {
        if (from && to)
            onChange?.(dayjs(from).toISOString() + "|" + dayjs(to).toISOString());
    }, [from, to])


    console.log({ dayPickerHook });

    return <div>
        <JDlabel require={require} txt={label} />
        <div>
            <JDdayPicker {...dayPickerHook} mode="input" inputComponent={(prop) => {
                return <JDdoubleInputRange {...prop} dayPickerHook={dayPickerHook} />
            }} />
        </div>
    </div>
};