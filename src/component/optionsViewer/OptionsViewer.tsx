import { autoComma, Flex, JDbox } from "@janda-com/front";
import { isEmpty } from "lodash";
import React from "react";
import { Foption, FselectOption, SelectOptionInput } from "../../type/api";

interface IProp {
    options: (FselectOption | SelectOptionInput)[] | null | undefined;
}

export const OptionsViewer: React.FC<IProp> = ({ options }) => {
    if (isEmpty(options)) return null;
    return (
        <div>
            {options.map((op) => (
                <JDbox mb="small" key={op.targetOption + "selectView"}>
                    <span>{op.label}</span> <span>{op.selectCount}</span>{" "}
                    <span>{autoComma(op.priceOrigin)}</span>
                </JDbox>
            ))}
        </div>
    );
};
