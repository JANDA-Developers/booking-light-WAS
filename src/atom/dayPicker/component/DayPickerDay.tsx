import React, { Fragment } from "react";
import { TDayPickerDot } from "../DayPicker";
import dayjs from "dayjs";
import classNames from "classnames";
import { isEmpty, JDtooltip } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
interface IProps extends IDiv {
    dot: TDayPickerDot;
}

export const DayPickerDot: React.FC<IProps> = ({ dot, ...props }) => {
    const classes = classNames("DayPicker-Day__dot", dot.className, {
        // ...bgColorClass(dot.color),
    });
    return <div className={classes} {...props} />;
};

export const DayPickerDay = (dots: TDayPickerDot[], date: Date, props: any) => {
    const targetDots = dots.filter((d) => dayjs(d.date).isSame(date, "d"));

    return (
        <span {...props} start={undefined} today={undefined} end={undefined}>
            {dayjs(date).format("DD")}
            {isEmpty(targetDots) || (
                <div className="DayPicker-Day__dotsWrap">
                    {targetDots.map((dot) => (
                        <Fragment key={dot.date.valueOf()}>
                            <DayPickerDot
                                onClick={() => {}}
                                data-tip={dot.tooltip ? true : undefined}
                                data-for={
                                    dot.tooltip
                                        ? `dotTooltip${date.valueOf()}`
                                        : undefined
                                }
                                dot={dot}
                            />
                            {dot.tooltip && (
                                <JDtooltip
                                    type="dark"
                                    effect="solid"
                                    id={`dotTooltip${date.valueOf()}`}
                                >
                                    <span>{dot.tooltip}</span>
                                </JDtooltip>
                            )}
                        </Fragment>
                    ))}
                </div>
            )}
        </span>
    );
};

export default DayPickerDay;
