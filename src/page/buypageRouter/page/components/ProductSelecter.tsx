import { JDselectCounter, opFind, selectOpCreater } from "@janda-com/front";
import React, { useContext } from "react";
import { BuypageContext } from "../buypageList/helper/context";

interface IProp {
    maxCount: number;
    count: number;
    onChange: (val: number) => void;
}

export const ProductSelecter: React.FC<IProp> = ({
    maxCount,
    count,
    onChange,
}) => {
    const {
        configure: { RESERVATION_NORMAL },
    } = useContext(BuypageContext);
    const unit = RESERVATION_NORMAL.texts.countUnit;
    const maxPickConfigure = RESERVATION_NORMAL.maxSelectableCount;
    if (maxCount < 0) return null;
    const countLimit =
        maxPickConfigure > maxCount ? maxCount : maxPickConfigure;
    const Count = selectOpCreater({
        count: countLimit + 1,
        labelAdd: unit.kr,
        start: 0,
    });
    return (
        <JDselectCounter
            selectHook={{
                selectedOption: opFind(count || (0 as any), Count),
                options: Count,
                onChange: ({ value }) => onChange(value),
            }}
        />
    );
};
