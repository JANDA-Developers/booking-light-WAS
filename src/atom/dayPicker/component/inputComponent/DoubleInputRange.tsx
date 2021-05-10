import {
    IUseDayPicker,
    JDalign,
    JDbox,
    Split,
    to4YMMDD,
} from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import React from "react";

interface Iprops extends IDiv {
    dayPickerHook: IUseDayPicker;
    fromLabel?: string;
    toLabel?: string;
}

const DoubleInputRange: React.FC<Iprops> = ({ dayPickerHook, ...prop }) => {
    return (
        <JDalign
            flex={{
                vCenter: true,
            }}
            {...prop}
            className="JDdoubleInputRange"
        >
            <JDbox
                mr="no"
                mb="no"
                hover
                children={to4YMMDD(dayPickerHook.from)}
            />
            <Split>~</Split>
            <JDbox
                mr="no"
                mb="no"
                hover
                children={to4YMMDD(dayPickerHook.to)}
            />
        </JDalign>
    );
};

export default DoubleInputRange;
