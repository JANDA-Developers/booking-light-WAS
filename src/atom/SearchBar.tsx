import { JDalign, JDbutton, JDdayPickerModal, JDselect, useDayPicker, useInput, useModal, useSelect } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { InputText } from '@janda-com/front';
import React, { PropsWithChildren, useEffect } from 'react';
import dayjs from "dayjs";

interface IProp<T> {
    placeholder?: string;
    onSearch: (search: string, filter?: T) => void;
    filterOps?: IselectedOption<T>[];
    defaultOp: IselectedOption<T>;
    datePick?: boolean;
}

export const JDsearchBar = <T,>({ defaultOp, datePick, onSearch, filterOps, placeholder }: PropsWithChildren<IProp<T>>): JSX.Element => {
    const dayPickerModalHook = useModal();
    const dayPickerHook = useDayPicker(null, null);
    const selectBoxHook = useSelect(defaultOp, filterOps);
    const inputTextHook = useInput("");

    const dateString = dayPickerHook.from ? dayjs(dayPickerHook.from).format("YYYY-MM-DD") : "";

    const handleInputClick = () => {
        if (datePick) {
            dayPickerModalHook.openModal();
        }
    }

    useEffect(() => {
        if (datePick)
            inputTextHook.onChange(dateString)
    }, [dateString])

    return <JDalign flex>
        {filterOps && <JDselect mr="small" {...selectBoxHook} autoSize size="small" />}
        <InputText style={{ background: "white" }} mr="small" onClick={handleInputClick} placeholder={placeholder} Size="small" {...inputTextHook} />
        <JDbutton br="square" onClick={() => { onSearch(inputTextHook.value, selectBoxHook.selectedOption?.value) }} mode="flat" thema="black" size="small">검색</JDbutton>
        <JDdayPickerModal isRange={false} autoClose {...dayPickerHook} modalHook={dayPickerModalHook} />
    </JDalign>
};

export default JDsearchBar;
