import { useDayPicker, useTimePicker } from "@janda-com/front";
import dayjs from "dayjs";
import { today, todayDate, tommorrowDate, tomorrow } from "../type/const";

export type TUseDateTimePicker = ReturnType<typeof useDateTimepicker>;
export interface IUseDatePickerProps {
    defaultStart: Date,
    defaultEnd: Date,
    rangeFix?: boolean;
}
export const useDateTimepicker = ({defaultEnd,defaultStart}:IUseDatePickerProps = {defaultEnd: tommorrowDate, defaultStart: todayDate }) => {
    // const [] = useState()
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