import { JDlabel, opFind, useSelect } from '@janda-com/front';
import React, { useEffect } from 'react';
import { COUNT } from '../../type/const';
import { JDselectCounter, ISelectCountProp } from './JDselectCounter';

interface IProp extends Omit<Partial<ISelectCountProp>, "onChange"> {
    count: number;
    label: string;
    onChange: (number: number) => void;
}

export const SelectCounter: React.FC<IProp> = ({ count, onChange, label, ...props }) => {
    const defaultCapacity = opFind(count as any, COUNT)
    const selectHook = useSelect(defaultCapacity, COUNT);

    const value = selectHook.selectedOption?.value;
    useEffect(() => {
        onChange(value)
    }, [value])

    return <div>
        <JDlabel txt={label} />
        <JDselectCounter {...props} selectHook={selectHook} />
    </div>
};



