import { usePagination } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import { useState } from "react";
import { OffsetPagingInput } from "../type/api";
import { IUseQueryFilter, useQueryFilter } from "./useQueryFilter";
import { IUseQuerySort, useQuerySort } from "./useQuerySort";

export interface ListInitOptions<F, S> {
    initialPageIndex: number,
    initialViewCount: number
    initialFilter: F,
    initialSort: S[]
}

export interface IListHook<F, S> extends IUseQueryFilter<F>, IUseQuerySort<S> {
    sort: S[];
    page: number
}

export function useListQuery<F, S>({ initialFilter, initialPageIndex, initialSort, initialViewCount }: ListInitOptions<F, S>) {
    const { filter, ...useFilters } = useQueryFilter<F>(initialFilter || {} as F);
    const { sort, ...useSort } = useQuerySort<S>(initialSort);
    const paginatorHook = usePagination(initialPageIndex,initialViewCount);
    const {page,pageCount} = paginatorHook;

    const pagingInput:OffsetPagingInput = {
        pageIndex: page,
        pageItemCount: pageCount
    }

    const integratedVariable = {
        pagingInput,
        filter,
        sort,
    }

    return { filter, page,  integratedVariable, sort, paginatorHook, ...useFilters, ...useSort }
}