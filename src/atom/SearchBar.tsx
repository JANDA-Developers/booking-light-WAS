import { JDalign, JDbutton, JDdayPickerModal, JDselect, opFind, useDayPicker, useInput, useModal, useSelect } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { InputText } from '@janda-com/front';
import React, { PropsWithChildren, useEffect } from 'react';
import dayjs from "dayjs";
import { IUseQueryFilter } from '../hook/useQueryFilter';
import { IUseListQuery } from '../type/interface';
import { IListHook } from '../hook/useListQuery';
import { whenEnter } from '../utils/whenEnter';


interface ISearchOption<T> extends IselectedOption<T> {
    type?: "date" | "dateRange"
}

interface IProp<F, S> extends IListHook<F, S> {
    placeholder?: string;
    searchOps: ISearchOption<keyof F>[];
    [key: string]: any;
}

export const JDsearchBar = <F, S>({ defaultOp, setRangeFilter, setViewCount, viewCount, setUniqFilter, searchOps, placeholder, filter, setFilter }: PropsWithChildren<IProp<F, S>>): JSX.Element => {
    const dayPickerModalHook = useModal();
    const dayPickerHook = useDayPicker(null, null);

    // @ts-ignore
    const defaultSelectedSearchOps = searchOps.find(filterOp => !!filter?.[filterOp.value]);
    const selectBoxHook = useSelect(defaultSelectedSearchOps || searchOps?.[0] || null, searchOps);
    const selectedSearchOps = selectBoxHook.selectedOption as ISearchOption<keyof F>;
    const inputTextHook = useInput("");

    const dateString = dayPickerHook.from ? dayjs(dayPickerHook.from).format("YYYY년 MM월 DD일~YYYY년 MM월 DD일") : "";

    const handleInputClick = () => {
        console.log({ selectedSearchOps });
        if (selectedSearchOps?.type !== undefined) {
            dayPickerModalHook.openModal();
        }
    }

    const searchType = selectBoxHook.selectedOption?.value;
    const searchKeys = searchOps.map(op => op.value);

    const isDateSearch = selectedSearchOps?.type !== undefined;

    const handleSearchDate = () => {
        if (!searchType) return;
        setUniqFilter(searchType, searchKeys, undefined);
        setRangeFilter({ from: dayPickerHook.from || undefined, to: dayPickerHook.to || undefined }, searchType)
    }

    const handleSearch = () => {
        if (!searchType) return;
        if (isDateSearch) handleSearchDate()
        else setUniqFilter(searchType, searchKeys, inputTextHook.value)
    }

    useEffect(() => {
        if (isDateSearch)
            inputTextHook.onChange(dateString)
    }, [dateString])

    return <JDalign flex>
        {searchOps && <JDselect mr="small" {...selectBoxHook} autoSize />}
        <InputText onKeyPress={whenEnter(handleSearch)} style={{ background: "white", width: "100%" }} mr="small" onClick={handleInputClick} placeholder={placeholder}  {...inputTextHook} />
        <JDbutton br="square" onClick={handleSearch} mode="flat" thema="black" >검색</JDbutton>
        <JDdayPickerModal isRange={selectedSearchOps?.type === "dateRange"} autoClose {...dayPickerHook} modalHook={dayPickerModalHook} />
    </JDalign>
};

export default JDsearchBar;
