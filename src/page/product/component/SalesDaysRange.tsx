import { Flex, JDselect, opFind, selectOpCreater } from "@janda-com/front";
import React from "react";

const DAY_OPS_START = selectOpCreater({
    count: 31,
    start: 0,
    labelAdd: "일전부터",
});

const DAY_OPS_END = selectOpCreater({
    count: 181,
    start: 0,
    labelAdd: "일앞 까지",
});

interface IProp {
    from: number; //daysago
    to: number; // daystill
    onChange: (param: {
        from: number; //daysago
        to: number; // daystill
    }) => void;
}

export const SalesDaysRange: React.FC<IProp> = ({ from, to, onChange }) => {
    return (
        <Flex mb wrap column>
            <JDselect
                mb
                selectedOption={opFind(from, DAY_OPS_START)}
                onChange={(selectedOption) => {
                    onChange({
                        to,
                        from: selectedOption.value,
                    });
                }}
                options={DAY_OPS_START}
            />
            <JDselect
                selectedOption={opFind(to, DAY_OPS_END)}
                onChange={(selectedOption) => {
                    onChange({
                        to: selectedOption.value,
                        from,
                    });
                }}
                options={DAY_OPS_END}
            />
        </Flex>
    );
};
