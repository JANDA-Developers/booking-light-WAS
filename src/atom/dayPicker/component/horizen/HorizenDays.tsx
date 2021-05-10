import { TDayPickerDot } from "@janda-com/front";
import React from "react";
import dayjs from "dayjs";
import { DATE } from "../../../../type/const";
import classNames from "classnames";

const horizienDay = (dots: TDayPickerDot[], day: any) => {
    const date = day?.getDate() || new Date();
    let Month = day.getMonth() + 1;

    const classes = classNames("DayPicker-Day", "", {
        "DayPicker-Day--today": dayjs(day).isSame(DATE.today, "day"),
    });

    if (Month === 0) Month = 12;

    // todo render dots dots

    return (
        <div className={classes}>
            {date}
            <span className="DayPicker-Day__month">{` / ${Month}월`}</span>
        </div>
    );
};

export default horizienDay;
