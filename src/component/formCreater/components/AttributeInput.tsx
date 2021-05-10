import {
    JDcheckBox,
    InputText,
    JDselect,
    JDlabel,
    JDcounter,
    Flex,
    Mr,
} from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { DisplayType, Fattribute } from "../../../type/api";
import { JDicon } from "../../icons/Icons";
import { DayPickerAdater } from "./DayPickerAdapter";
import { DayPickerRangeAdater } from "./DayPickerRangeAdapter";
import { SingleUplaoderAdapter } from "./SingleUploaderAdapter";
import { TimePickerAdapter } from "./TimePickerAdapter";

interface IProp {
    attribute: Fattribute;
    onChange?: (value: any) => void;
    onEdit?: () => void;
    onDelete?: () => void;
}

export const AttributeInput: React.FC<IProp> = ({
    attribute,
    onChange,
    onEdit: handleEdit,
    onDelete: handleDelete,
}) => {
    const {
        displayType,
        default: defaultValue,
        key,
        options,
        placeHolder,
        require,
        label = "",
        value,
    } = attribute;

    const EditTool = (
        <div>
            <JDicon
                hide={!handleEdit}
                onClick={handleEdit}
                mr="small"
                hover
                icon="pen"
            />
            <JDicon
                hide={!handleDelete}
                onClick={handleDelete}
                hover
                icon="close"
            />
        </div>
    );
    const labelTxt = (
        <Flex mr="small" style={{ display: "inline-block" }}>
            {label || ""} <Mr mr="small" /> {handleEdit ? EditTool : undefined}
        </Flex>
    );

    const selectOptions: IselectedOption[] =
        options?.map((op) => ({
            label: op,
            value: op,
        })) || [];

    const shared = {
        id: key + "input",
        className: "attributeInput",
    };

    const labelShare = {
        require: !!require,
        txt: labelTxt,
    };

    if (displayType === DisplayType.CHECK_BOX)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <div>
                    <JDcheckBox
                        onChange={(flag) => {
                            onChange?.(flag ? "Y" : "N");
                        }}
                        checked={value === "Y"}
                        defaultChecked={!!defaultValue}
                    />
                </div>
            </div>
        );
    if (displayType === DisplayType.FILE)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <div>
                    <SingleUplaoderAdapter
                        attr={attribute}
                        onChange={onChange}
                        value={attribute.value || ""}
                    />
                </div>
            </div>
        );
    if (displayType === DisplayType.DROPDOWN)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <JDselect
                    autoSize
                    options={selectOptions}
                    onChange={(op) => {
                        onChange?.(op.value);
                    }}
                />
            </div>
        );
    if (displayType === DisplayType.TEXT_INPUT)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <InputText
                    placeholder={placeHolder || ""}
                    onChange={onChange}
                    defaultValue={defaultValue || ""}
                />
            </div>
        );
    if (displayType === DisplayType.TIME_PICKER)
        return (
            <div {...shared}>
                <TimePickerAdapter
                    require={!!require}
                    txt={label || ""}
                    value={value || ""}
                    onChnage={onChange}
                />
            </div>
        );
    if (displayType === DisplayType.DATE_RANGE_PICKER)
        return (
            <DayPickerRangeAdater
                value={value || "|"}
                onChange={onChange}
                label={label || ""}
            />
        );
    if (displayType === DisplayType.DATE_PICKER)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <DayPickerAdater
                    onChange={onChange}
                    value={value || undefined}
                />
            </div>
        );
    if (displayType === DisplayType.NUMBER_SELECTOR)
        return (
            <div {...shared}>
                <JDlabel {...labelShare} />
                <JDcounter
                    onCount={(flag) => {
                        onChange?.(parseInt(value || "0") + (flag ? 1 : -1));
                    }}
                    maxCount={999}
                    count={parseInt(value || "0")}
                />
            </div>
        );
    return <div />;
};
