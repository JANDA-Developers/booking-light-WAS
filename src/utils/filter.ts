
export const isDateFilter = (filter:any):boolean => {

    const {createdAt_eq, createdAt_gte, createdAt_lte, createdAt_not_eq, createdAt_gt, createdAt_lt, fromTm_eq, fromTm_gte, fromTm_gt, fromTm_lt, fromTm_lte, fromTm_not_eq, toTm_eq, toTm_gt, toTm_gte, toTm_lt, toTm_lte, toTm_not_eq} = filter;

    const isDateFilter = !!(
            createdAt_eq ||
            createdAt_gte ||
            createdAt_lte||
            createdAt_not_eq||
            createdAt_gt||
            createdAt_lt||
            fromTm_eq||
            fromTm_gte||
            fromTm_gt||
            fromTm_lt||
            fromTm_lte||
            fromTm_not_eq||
            toTm_eq || 
            toTm_gt||
            toTm_gte ||
            toTm_lt||
            toTm_lte||
            toTm_not_eq)

    return isDateFilter;
}