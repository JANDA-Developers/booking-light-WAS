import { Flex, JDbox } from "@janda-com/front";
import React from "react";
import { Foption, FselectOption } from "../../type/api";

interface IProp {
    options: FselectOption[];
}

export const OptionsViewer: React.FC<IProp> = ({ options }) => {
    return (
        <div>
            {options.map((op) => (
                <JDbox key={op.targetOption + "selectView"}>
                    <span>{op.label}</span> <span>{op.selectCount}</span>{" "}
                    <span>{op.priceOrigin}</span>
                </JDbox>
            ))}
        </div>
    );
};
