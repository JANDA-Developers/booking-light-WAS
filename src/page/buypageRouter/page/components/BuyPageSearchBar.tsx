import { IUseDayPicker, JDcard, JDdayPicker } from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext, useState } from "react";
import { LargeSearcher } from "../../../../component/largeSearcher/LargeSearcher";

interface IProp extends IJDcardProps {
    dayPickerHook?: IUseDayPicker;
    onSearch: (val: string) => void;
    useSearchFilter?: boolean;
    useRangeFilter?: boolean;
}

export const BuyPageSearchBar: React.FC<IProp> = ({
    dayPickerHook,
    useRangeFilter,
    useSearchFilter,
    onSearch,
    ...props
}) => {
    const [search, setSearch] = useState("");

    if (!useSearchFilter) return null;

    return (
        <JDcard {...props}>
            <div>
                <LargeSearcher
                    onSearch={onSearch}
                    search={search}
                    setSearch={setSearch}
                />
            </div>
        </JDcard>
    );
};
