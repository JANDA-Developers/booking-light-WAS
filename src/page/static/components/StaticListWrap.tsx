import { useDayPicker, usePagination, useSelect } from '@janda-com/front';
import React, { useState } from 'react';
import StaticList from './StaticList';
import moment from "moment";


interface IProp { }

export const StaticListWrap: React.FC<IProp> = () => {
    const paginationHook = usePagination(0);
    const dayPickerHook = useDayPicker(new Date(), moment().add(1, "d").toDate());
    const statusHook = useSelect({ label: "", value: "" }, [])
    const storeHook = useSelect({ label: "", value: "" }, [])
    const productHook = useSelect({ label: "", value: "" }, [])

    return <StaticList productHook={productHook}
        storeHook={storeHook} statusHook={statusHook}
        dayPickerHook={dayPickerHook} paginationHook={paginationHook} />;
};
