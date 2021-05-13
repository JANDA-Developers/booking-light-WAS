import { _ProductFilter } from "../../../../type/api";
import dayjs from "dayjs";
import { DayLike } from "../../../../type/interface";

interface IGenProductDateOption {
    isDateRangeMall?: boolean;
    isShoppingType?: boolean;
}

export const genProductDateFilter = (
    _from: DayLike,
    _to: DayLike,
    option?: IGenProductDateOption
): _ProductFilter => {
    const { isDateRangeMall, isShoppingType } = option || {};
    let result: _ProductFilter = {};
    const from = dayjs(_from || new Date());
    const to = dayjs(_to || new Date());

    if (isShoppingType) {
        result = {
            dateRangeForSale_from__lte: new Date().valueOf(),
            dateRangeForSale_to__gte: new Date().valueOf(),
        };
    } else
        result = {
            dateRangeForSale_from__gte: dayjs(from).startOf("day").valueOf(),
            dateRangeForUse_to__lte: dayjs(to)
                .add(isDateRangeMall ? -1 : 1, "day")
                .endOf("day")
                .valueOf(),
        };

    return result;
};
