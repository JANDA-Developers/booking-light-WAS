import { JDhorizen, JDselect } from "@janda-com/front";
import React from "react";

interface IProp {}

export const DetailOptionConfig: React.FC<IProp> = () => {
    return (
        <div>
            <div>
                <JDhorizen margin={3} />
                {/* 라벨비교 */}
                <JDselect label="종속 아이템 디테일" />
                {/* 라벨비교 */}
                <JDselect label="종속 프로덕트" />
                {/* <DateWithTimePicker /> */}
            </div>
        </div>
    );
};
