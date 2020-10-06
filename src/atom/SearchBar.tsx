import { JDalign, JDbutton, JDselect, useInput, useSelect } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { InputText } from '@janda-com/front';
import React, { PropsWithChildren } from 'react';

interface IProp<T> {
    onSearch: (search: string, filter?: any) => void;
    filterOps?: IselectedOption<T>[];
    defaultOp: IselectedOption<T>
}

export const JDsearchBar = <T,>({ defaultOp, onSearch, filterOps }: PropsWithChildren<IProp<T>>):JSX.Element => {
    const selectBoxHook = useSelect(defaultOp, filterOps);
    const inputTextHook = useInput("");

    return <JDalign flex>
        {filterOps && <JDselect {...selectBoxHook} autoSize size="small" />}
        <InputText Size="small" {...inputTextHook} />
        <JDbutton br="square" onClick={() => { onSearch(inputTextHook.value, selectBoxHook.selectedOption?.value,) }} mode="flat" thema="black" size="small">검색</JDbutton>
    </JDalign>
};

export default JDsearchBar;
