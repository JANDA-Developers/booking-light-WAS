import { Flex, JDselect, opFind, selectOpCreater, useSelect } from '@janda-com/front';
import React, { useEffect } from 'react';
import dayjs from "dayjs";

export const DAY_OPS = selectOpCreater({
    count: 31,
    start: 0,
    labelAdd: "일전까지"
});

//salesStart시간은 현재 시간과 동일
interface IProp {
    useStartDate: Date;
    salesEndDate: Date;
    onChangeDate: (newSalesDate: Date) => void;
}

export const RelativeSalesRange: React.FC<IProp> = ({ onChangeDate, salesEndDate, useStartDate }) => {
    const defaultDiffDate = dayjs(useStartDate).diff(salesEndDate, "day");
    const relativeDateHook = useSelect(
        opFind(defaultDiffDate, DAY_OPS), DAY_OPS
    )
    const diffDay = relativeDateHook.selectedOption?.value;
    const diffDate = dayjs(useStartDate).add(-1 * diffDay).toDate();

    useEffect(() => {
        onChangeDate(diffDate)
    }, [useStartDate.valueOf()])


    useEffect(() => {
        onChangeDate(diffDate)
    }, [diffDay])


    return <Flex >
        <JDselect {...relativeDateHook} />
    </Flex>;
};

// onChange={(op => {
//     const newSalesDate = dayjs(useStartDate).add(-1 * op.value).toDate()
//     onChangeDate(newSalesDate);
// })}

