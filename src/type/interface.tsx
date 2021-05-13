import { ApolloQueryResult, QueryHookOptions } from "@apollo/client";
import { IusePagination } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import {
    FoffsetPagingInfo,
    productList_ProductList_items,
    productList_ProductList_items_ProductBooking,
} from "../type/api";
import dayjs from "dayjs";
export type TRefech<T> = (
    variables?: Partial<Record<string, any>> | undefined
) => Promise<ApolloQueryResult<T>>;
export interface IPageInfo extends FoffsetPagingInfo {}
export interface ICSS extends React.CSSProperties {}
export type TfnMu<Variable> = (
    variables: Variable,
    onSuccess?: () => void
) => void;
export enum ETagKeys {
    "GROUP" = "GROUP", // 분류용
    "DESC" = "DESC", // 설명
}
export interface ISalesPeriod
    extends productList_ProductList_items_ProductBooking {}

export interface IListQueryInit<
    TSort,
    TFilter,
    TQuery = any,
    TQueryVariable = any
> {
    initialPageIndex?: number;
    initialViewCount?: number;
    initialFilter?: TFilter;
    initialSort?: TSort[];
    queryOptions?: QueryHookOptions<TQuery, TQueryVariable>;
    variables?: Partial<TQueryVariable>;
}

export interface IUseListQuery<TSort, TFilter, TData> {
    setViewCount: ISet<number>;
    sort: TSort[];
    filter: TFilter;
    setSort: ISet<TSort[]>;
    setFilter: ISet<TFilter>;
    items: TData[];
    pageInfo: IPageInfo;
    loading: boolean;
    viewCount: number;
    paginatorHook: IusePagination;
}

export type FnUseListQuery<
    TSort,
    TFilter,
    TData = any,
    TQuery = any,
    TQueryVariable = any
> = (
    foo?: IListQueryInit<TSort, TFilter, TQuery, TQueryVariable>
) => IUseListQuery<TSort, TFilter, TData>;

export interface IDateRange {
    from: any | null;
    to: any | null;
}

export type DayLike = Date | null | dayjs.Dayjs | number | string;
