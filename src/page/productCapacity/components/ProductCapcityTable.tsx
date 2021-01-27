
import React from 'react';
import DailyTable from '../../../component/dailyTable/DailyTable';
import { useDailyTable } from "../../../hook/useDailyTable"
import dayjs from "dayjs";
import { JDtypho } from '@janda-com/front';

interface IProp { }

export const ProductCpacityTable: React.FC<IProp> = () => {
    const { date, onNavChange: handleNavChange, selectedDays, data, setData, setDate, setSelectedDays } = useDailyTable();

    return <DailyTable
        selectedDays={selectedDays}
        setSelectedDays={setSelectedDays}
        setDate={setDate}
        date={date}
        onNavChange={handleNavChange}
        setData={setData}
        data={data}
        dayPickerProps={{
            navbarElement: undefined,
            captionElement: ({ date }) => <JDtypho size="h6" text="center">{dayjs(date).format('YYYY-MM-DD')}</JDtypho>
        }}
    />;
};
