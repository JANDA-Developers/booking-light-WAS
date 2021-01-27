import { ISet } from "@janda-com/front/dist/types/interface";
import { useState } from "react";
import { IUseQueryFilter, useQueryFilter } from "./useQueryFilter";
import { IUseQuerySort, useQuerySort } from "./useQuerySort";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
}

export interface IListHook<F, S> extends IUseQueryFilter<F>, IUseQuerySort<S> {
    setViewCount: ISet<number>;
    sort: S[];
    setPage: ISet<number>;
    viewCount: number;
    page: number
}

export function useListQuery<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const { filter, ...useFilters } = useQueryFilter<F>(initialFilter || {} as F);
    const { sort, ...useSort } = useQuerySort<S>(initialSort);
    const [viewCount, setViewCount] = useState(initialViewCount);
    const [page, setPage] = useState(initialPageIndex);

    const integratedVariable = {
        pageInput: {
            page: page,
            cntPerPage: viewCount
        },
        filter,
        sort,
    }

    return { filter, page, setPage, integratedVariable, sort, viewCount, setViewCount, ...useFilters, ...useSort }
}