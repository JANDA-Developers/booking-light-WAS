import { _ProductFilter } from "../../../../type/api";
import dayjs from "dayjs";
import { DayLike } from "../../../../type/interface";

interface IGenProductDateOption {
    isDateRangeMall?: boolean;
    isShoppingType?: boolean;
    isTimeMall?: boolean;
}

export const genProductDateFilter = (
    _from: DayLike,
    _to: DayLike,
    option?: IGenProductDateOption
): _ProductFilter => {
    const { isDateRangeMall, isShoppingType, isTimeMall } = option || {};
    let result: _ProductFilter = {};
    const from = dayjs(_from || new Date());
    const to = dayjs(_to || new Date());

    if (isShoppingType) {
        result = {
            dateRangeForSale_from__lte: new Date().valueOf(),
            dateRangeForSale_to__gte: new Date().valueOf(),
        };
    } else if (isDateRangeMall) {
        result = {
            dateRangeForUse_from__gte: dayjs(from).startOf("day").valueOf(),
            dateRangeForUse_to__lte: dayjs(to)
                .add(-1, "day")
                .endOf("day")
                .valueOf(),
        };
    } else if (isTimeMall) {
        result = {
            dateRangeForUse_from__gte: dayjs(from).startOf("day").valueOf(),
            dateRangeForUse_to__lte: dayjs(from).endOf("day").valueOf(),
        };
    } else {
        result = {
            dateRangeForUse_from__gte: dayjs(from).startOf("day").valueOf(),
            dateRangeForUse_to__lte: dayjs(to).add(1).endOf("day").valueOf(),
        };
    }

    return result;
};
