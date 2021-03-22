import { JDselectCounter, opFind, selectOpCreater } from '@janda-com/front';
import React from 'react';
import { COUNT } from '../../../../type/const';

interface IProp {
    maxCount: number;
    count: number;
    onChange: (val: number) => void;
}

export const ProductSelecter: React.FC<IProp> = ({ maxCount, count, onChange }) => {
    if (maxCount < 0) return null
    const Count = selectOpCreater({ count: maxCount + 1, labelAdd: "개", start: 0 });
    return <JDselectCounter selectHook={{
        selectedOption: opFind(count || 0 as any, Count),
        options: Count,
        onChange: ({ value }) =>
            onChange(value)
    }} />;
};
