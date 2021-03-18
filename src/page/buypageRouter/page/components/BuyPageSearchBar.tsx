import { InputText, JDcard, JDdayPicker } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React, { useContext, useState } from 'react';
import { DateWithTimePicker } from '../../../../component/dateWithTimePicker/DateWithTimePicker';
import { DayPickerAdater } from '../../../../component/formCreater/components/DayPickerAdapter';
import AppContext from '../../../../context';
import { TUseDateTimePicker } from '../../../../hook/useDateTimePicker';
import { whenEnter } from '../../../../utils/whenEnter';
import { BuypageContext } from '../buypageList/helper/context';

interface IProp extends IJDcardProps {
    dateTimePicker: TUseDateTimePicker
    onSearch: (val: string) => void;
}

export const BuyPageSearchBar: React.FC<IProp> = ({ onSearch, dateTimePicker, ...props }) => {
    const [search, setSearch] = useState("");
    const { configure } = useContext(BuypageContext);
    const { useTimeFilter, useSearchFilter, useRangeFilter } = configure.RESERVATION_NORMAL;

    const handleSearch = () => {

    }

    return <JDcard {...props}>
        <div>
            {useSearchFilter && <InputText
                mb
                value={search}
                type="email"
                id="LoginEmail"
                Size="big"
                placeholder={'검색어 입력'}
                onChange={setSearch as any}
                br="round"
                icon="magnifier"
                iconHover
                iconOnClick={() => { onSearch(search) }}
                onKeyPress={whenEnter(() => { onSearch(search) })}
            />
            }
            <JDdayPicker format="YYYY년MM월DD일" mb label="날짜선택" isRange={useRangeFilter} {...dateTimePicker.startDateHook} mode="input" />
            {/* 사용기간 필터 */}
            {/* {useTimeFilter && <DateWithTimePicker  {...dateTimePicker} />} */}
        </div>
    </JDcard>
};
