import {
    autoComma,
    Flex,
    isLast,
    JDalign,
    JDbox,
    JDselect,
    Mr,
    opFind,
    selectOpCreater,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import { isEmpty } from "lodash";
import React from "react";
import { useOptionList } from "../../hook/useOption";
import { Foption, SelectOptionInput, _OptionFilter } from "../../type/api";
import { JDicon } from "../icons/Icons";
import { SelectCounter } from "../selectCounter/SelectCounter";

interface IProp {
    optionFilter: _OptionFilter;
    selectOption: SelectOptionInput[];
    onChange: (op: SelectOptionInput[]) => void;
}

export const OptionSelecter: React.FC<IProp> = ({
    optionFilter,
    selectOption,
    onChange,
}) => {
    //1 load 옵션
    //2. renderOption
    //3. callBackOption

    const { items } = useOptionList({
        fixingFilter: optionFilter,
    });

    console.log({ selectOption });

    const options: IselectedOption[] = items.map((item) => ({
        label: item.label,
        value: item._id,
    }));

    const mappedOption = selectOption.map((op) => ({
        ...items.find((item) => item._id === op.targetOption),
        ...op,
    }));

    const getOption = (op: Foption) =>
        selectOpCreater({
            count: op.count === -1 ? 101 : op.count,
            labelAdd: "",
            start: 1,
        });

    if (isEmpty(items)) return null;

    return (
        <JDalign>
            <JDselect
                mb
                label="옵션선택"
                selectedOption={null}
                onChange={(op) => {
                    const isSelected = !!selectOption.find(
                        (selectOp) => selectOp.targetOption === op.value
                    );
                    if (isSelected) return;
                    const targetItem = items.find(
                        (item) => item._id === op.value
                    );
                    if (!targetItem) return;
                    selectOption.push({
                        label: targetItem.label,
                        priceOrigin: targetItem.price || 0,
                        selectCount: 1,
                        targetOption: targetItem._id,
                    });
                    onChange([...selectOption]);
                }}
                options={options}
            />

            {mappedOption.map((op, i) => (
                <JDbox
                    mb
                    className="CapacityShoppingDetail"
                    key={op._id + "optionSelecter"}
                >
                    <Flex
                        className="CapacityShoppingDetail__inner"
                        vCenter
                        between
                    >
                        {op.label}
                        <Mr />
                        {op.count && op.count !== 0 && (
                            <SelectCounter
                                selectHook={{
                                    selectedOption: opFind(
                                        op.selectCount || (0 as any),
                                        getOption(op as Foption)
                                    ),
                                    options: getOption(op as Foption),
                                    onChange: ({ value }) => {
                                        const op = selectOption[i];
                                        op.selectCount = value;
                                        onChange([...selectOption]);
                                    },
                                }}
                                count={op.selectCount}
                                onChange={(num) => {
                                    const _op = selectOption[i];
                                    _op.selectCount = num;
                                    _op.priceOrigin = num * (op.price || 0);
                                    onChange([...selectOption]);

                                    if (num === 0) {
                                        const index = selectOption.findIndex(
                                            (op) =>
                                                op.targetOption ===
                                                _op.targetOption
                                        );
                                        selectOption.splice(index, 1);
                                        onChange([...selectOption]);
                                    }
                                }}
                            />
                        )}
                        <Mr />
                        <span>{autoComma(op.priceOrigin)}원</span>
                        <JDicon
                            size="superTiny"
                            color="grey2"
                            hover
                            onClick={() => {
                                selectOption.splice(i, 1);
                                onChange([...selectOption]);
                            }}
                            icon="close"
                        />
                    </Flex>
                </JDbox>
            ))}
        </JDalign>
    );
};
