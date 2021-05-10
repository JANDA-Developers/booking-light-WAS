import React, { Fragment } from "react";
import dayjs from "dayjs";
import { JDicon } from "../../../../component/icons/Icons";
import { IUseDayPicker } from "@janda-com/front";

interface Iprops {
    dayPickerHook: IUseDayPicker;
    format?: string;
}

const ArrowDayByDay: React.FC<Iprops> = ({
    dayPickerHook,
    format = `MM${"month"} DD${"date"}`,
    ...props
}) => {
    const handleDayPickerArrow = (direction: "prev" | "next") => {
        const directionNum = direction === "prev" ? -1 : 1;
        dayPickerHook.setDate(
            dayjs(dayPickerHook.from || undefined)
                .add(directionNum, "d")
                .toDate()
        );
    };

    return (
        <Fragment>
            <JDicon
                hover
                className="DayPicker-box--inputComponent__arrow DayPicker-box--inputComponent__arrow--left"
                onClick={(e) => {
                    e.preventDefault();
                    handleDayPickerArrow("prev");
                }}
                icon="arrowRight"
            />
            <span {...props}>
                {dayjs(dayPickerHook.from || new Date()).format(format)}
            </span>
            <JDicon
                hover
                size="tiny"
                className="DayPicker-box--inputComponent__arrow DayPicker-box--inputComponent__arrow--right"
                onClick={(e) => {
                    e.stopPropagation();
                    handleDayPickerArrow("next");
                }}
                icon="arrowRight"
            />
        </Fragment>
    );
};

export default ArrowDayByDay;
