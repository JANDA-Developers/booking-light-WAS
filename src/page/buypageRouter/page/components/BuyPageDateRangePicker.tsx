import React, { Fragment } from "react";
import moment from "moment";
import { IUseDayPicker, JDicon, JDtypho } from "@janda-com/front";
import { JDalign } from "@janda-com/front";

interface Iprops {
    dayPickerHook: IUseDayPicker;
    handleDateClick: any;
}

const BuypageDateRangePicker: React.FC<Iprops> = ({
    dayPickerHook,
    handleDateClick,
    ...props
}) => {
    const dateRender = (date: Date = new Date()) => {
        return (
            <JDalign
                flex={{
                    vCenter: true,
                }}
                mr="normal"
            >
                <JDicon size="large" mr="normal" icon="reservation" />
                {moment(date).format("YYYY-MM-DD")}
            </JDalign>
        );
    };

    const { from, to } = dayPickerHook;
    const dateDiff = Math.abs(
        moment(from || undefined).diff(to || undefined, "d")
    );

    return (
        <JDtypho weight={600} className="dateSelecter">
            <div className="dateSelecter__inner">
                <JDalign
                    onClick={handleDateClick}
                    flex={{
                        vCenter: true,
                        between: true,
                    }}
                >
                    <JDalign
                        flex={{
                            vCenter: true,
                        }}
                        {...props}
                    >
                        {dateRender(from || undefined)}
                        <JDtypho mr="normal">~</JDtypho>
                        {dateRender(to || undefined)}
                    </JDalign>
                    {from && to && !dateDiff && <span>당일</span>}
                    {dateDiff ? (
                        <JDtypho weight={300}>
                            {dateDiff}박{dateDiff + 1}일
                        </JDtypho>
                    ) : null}
                </JDalign>
            </div>
        </JDtypho>
    );
};

export default BuypageDateRangePicker;
