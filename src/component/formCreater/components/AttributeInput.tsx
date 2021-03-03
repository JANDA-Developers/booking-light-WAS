import { JDcheckBox, InputText, JDselect, JDlabel, JDdayPicker, JDcounter, Flex, Mr } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { DisplayType, Fattribute } from '../../../type/api';
import { JDicon } from '../../icons/Icons';
import { DayPickerAdater } from './DayPickerAdapter';
import { DayPickerRangeAdater } from './DayPickerRangeAdapter';
import { TimePickerAdapter } from './TimePickerAdapter';

interface IProp {
    attribute: Fattribute
    onChange?: (value: any) => void;
    onEdit: () => void;
    onDelete: () => void;
}

export const AttributeInput: React.FC<IProp> = ({ attribute, onChange, onEdit: handleEdit, onDelete: handleDelete }) => {
    const { displayType, default: defaultValue, key, options, placeHolder, require, label = "", value } = attribute;

    const labelTxt = <Flex mr="small" style={{ display: "inline-block" }}> {label || ""}  <Mr mr="small" /> <JDicon onClick={handleEdit} mr="small" hover icon="pen" /><JDicon onClick={handleDelete} hover icon="close" /></Flex>


    const selectOptions: IselectedOption[] = options?.map(op => ({
        label: op,
        value: op
    })) || []

    const shared = {
        className: "attributeInput"
    }

    const labelShare = {
        require: !!require,
        txt: labelTxt
    }


    if (displayType === DisplayType.CHECK_BOX) return <div {...shared}>
        <JDlabel {...labelShare} />
        <div>
            <JDcheckBox onChange={onChange} defaultChecked={!!defaultValue} />
        </div>
    </div>
    if (displayType === DisplayType.DROPDOWN) return <div {...shared}>
        <JDlabel {...labelShare} />
        <JDselect autoSize options={selectOptions} onChange={(op) => { onChange?.(op.value) }} />
    </div>
    if (displayType === DisplayType.TEXT_INPUT) return <div {...shared}>
        <JDlabel {...labelShare} />
        <InputText placeholder={placeHolder || ""} onChange={onChange} defaultValue={defaultValue || ""} />
    </div>
    if (displayType === DisplayType.TIME_PICKER) return <div {...shared}><TimePickerAdapter require={!!require} txt={label || ""} value={value || ""} onChnage={onChange} /></div>
    if (displayType === DisplayType.DATE_RANGE_PICKER) return <DayPickerRangeAdater value={value || "|"} onChange={onChange} label={label || ""} />
    if (displayType === DisplayType.DATE_PICKER) return <DayPickerAdater onChange={onChange} value={value || undefined} />
    if (displayType === DisplayType.NUMBER_SELECTOR) return <div {...shared}>
        <JDlabel {...labelShare} />
        <JDcounter onCount={(flag) => {
            onChange?.(
                parseInt(value || "0") + (flag ? 1 : -1))
        }} maxCount={999} count={parseInt(value || "0")} />
    </div>
    return <div />;
};

