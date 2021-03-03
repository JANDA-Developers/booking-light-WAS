import { useDayPicker, useTimePicker } from "@janda-com/front";
import dayjs from "dayjs";

export type TUseDateTimePicker = ReturnType<typeof useDateTimepicker>;
export interface IUseDatePickerProps {
    defaultStart: Date,
    defaultEnd: Date,
}
export const useDateTimepicker = ({defaultEnd,defaultStart}:IUseDatePickerProps = {defaultEnd: dayjs().add(1,"day").toDate(), defaultStart: new Date()}) => {
    const startDateHook = useDayPicker(defaultStart, defaultStart);
    const endDateHook = useDayPicker(defaultEnd, defaultEnd);
    const startTimerHook = useTimePicker({
        hour: dayjs(defaultStart).get("hour"),
        min: dayjs(defaultStart).get("minute")
    });
    const endTimerHook = useTimePicker({
        hour: dayjs(defaultEnd).get("hour"),
        min: dayjs(defaultEnd).get("minute")
    });

    const startDate = dayjs(startDateHook.from || new Date())
    .set("hour", startTimerHook.hour)
    .set("minute", startTimerHook.min)

    const endDate = dayjs(endDateHook.from || new Date())
    .set("hour", endTimerHook.hour)
    .set("minute", endTimerHook.min)

    return {startDateHook,endDateHook,startTimerHook,endTimerHook, startDate, endDate }
}