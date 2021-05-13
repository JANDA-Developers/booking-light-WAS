import { autoComma, Flex, JDalign, JDbox } from "@janda-com/front";
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
            {options!.map((op) => (
                <JDbox mb="small" key={op.targetOption + "selectView"}>
                    <Flex between>
                        <JDalign mr>{op.label}</JDalign>{" "}
                        <JDalign mr>{op.selectCount}개</JDalign>{" "}
                        <JDalign>{autoComma(op.priceOrigin)}원</JDalign>
                    </Flex>
                </JDbox>
            ))}
        </div>
    );
};
