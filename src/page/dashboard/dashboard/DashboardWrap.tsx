import { IUseDayPicker, useDayPicker } from '@janda-com/front';
import React from 'react';
import { IUseItemList, useItemList } from 'src/hook/useItemList';
import Dashboard from './Dashboard';

export interface IDashbaordWrapContext {
    itemsHook: IUseItemList;
    dayPickerHook: IUseDayPicker;
    date: Date;
}

interface IProp { }

export const DashbaordWrap: React.FC<IProp> = () => {
    const dayPickerHook = useDayPicker(new Date(), new Date());
    const date = dayPickerHook.from || new Date();

    const initialFilter = {
        createdAt_gt: date.setHours(0, 0, 0, 0),
        createdAt_lt: date.setHours(24, 0, 0, 0)
    };

    const itemsHook = useItemList({ initialFilter });

    const context: IDashbaordWrapContext = {
        itemsHook,
        dayPickerHook,
        date
    }

    return <Dashboard context={context} />;
};

export default DashbaordWrap;