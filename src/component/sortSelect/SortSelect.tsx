import { JDselect } from '@janda-com/front';
import { IselectedOption, JDselectProps } from '@janda-com/front/dist/components/select/SelectBox';
import { enumToOption } from '@janda-com/front/dist/utils/selectOptionCreater';
import React, { PropsWithChildren } from 'react';
import { IListHook } from '../../hook/useListQuery';
import { enumToOps, SortKr } from '../../type/const';

interface IProp<F, S> extends IListHook<F, S> {
    SORT: any
}

export const SortSelect = <F, S>({ SORT, sort, setSort }: PropsWithChildren<IProp<F, S>>): JSX.Element => {
    const options = enumToOps(SORT, (key) => (SortKr as any)[key]).filter(v => v.label);

    const handleChange = (op: IselectedOption) => {
        setSort([op.value]);
    }

    return <JDselect selectedOption={{
        value: sort,
        label: (SortKr as any)[sort[0]]
    }} onChange={handleChange} options={options} />;
};
