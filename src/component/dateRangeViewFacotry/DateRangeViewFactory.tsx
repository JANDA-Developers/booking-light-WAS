import { JDtypho } from "@janda-com/front";
import { DateWithTimeRange } from "../../atom/format/DateFormat";
import { itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForUse } from "../../type/api";
import { hhmmRange, yyyymmdd } from "../../utils/dateFormat";

export interface IDateRangeViewFactoryProps {
    dateRangeForUse: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForUse;
}

export const TimeMallUseRangeView: React.FC<IDateRangeViewFactoryProps> = ({
    dateRangeForUse,
}) => {
    return (
        <div>
            <JDtypho>{yyyymmdd(dateRangeForUse?.from)}</JDtypho>
            {hhmmRange(dateRangeForUse?.from, dateRangeForUse?.to)}
        </div>
    );
};
export const DateRangeMallRangeView: React.FC<IDateRangeViewFactoryProps> = ({
    dateRangeForUse,
}) => {
    return (
        <div>
            <JDtypho>{yyyymmdd(dateRangeForUse?.from)}</JDtypho>
        </div>
    );
};

export const DateAndTimeRangeView: React.FC<IDateRangeViewFactoryProps> = ({
    dateRangeForUse,
}) => {
    return (
        <DateWithTimeRange
            from={dateRangeForUse?.from}
            to={dateRangeForUse?.to}
        />
    );
};
