import { DocumentNode, MutationHookOptions, operationName, QueryHookOptions, useMutation } from "@apollo/client";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import {useLazyQuery} from "@apollo/client";
import { DEFAULT_PAGE_INFO } from "@janda-com/front";
import { FoffsetPagingInfo } from "../type/api";

export const getQueryName = (QUERY:DocumentNode) => {
    const operation = QUERY.definitions[0];

    // @ts-ignore
    const operationName = operation && operation.name.value;

    return capitalize(operationName);
}

export const capitalize = (s:string) => {
    if (typeof s !== 'string') return ''
    return s.charAt(0).toUpperCase() + s.slice(1)
  }


interface genrateOption<Q,V> extends QueryHookOptions<Q,V> {
    queryName?: string;
    skipInit?: boolean;
    overrideVariables?: Partial<V>
};

const dataCheck = (data:any,operationName:string, checkProperty?: string[]) => {
    try {
    if(data?.hasOwnProperty(operationName) === false) {
        throw Error(`result data object dose not have property ${operationName} look this above object ↑ `)
    }

    checkProperty && checkProperty.forEach(p => {
        if(data?.[operationName].hasOwnProperty(p) === false) {
            console.error(p);
            throw Error(`result data object dose not have property ${p} look this above object ↑ `)
        }
    })
    } catch (e){
    console.error("==========FATAL ERROR==========");
    console.error(e);
    }
}

export const generateListQueryHook = <F,S,Q,V,R>(
    QUERY: DocumentNode,
    queryInit: Partial<ListInitOptions<F, S>> = {},
    defaultOptions?: genrateOption<Q,V>
) => {
    const listQueryHook = (
        {
            initialPageIndex = 0,
            initialSort = [],
            initialFilter = {} as F,
            initialViewCount = 20,
        }: Partial<ListInitOptions<F, S>> = {...queryInit},
        options: genrateOption<Q, V> = {...defaultOptions}
    )=> {
        const { variables, overrideVariables, ...ops } = options;
        const { integratedVariable,...params } = useListQuery({
            initialFilter,
            initialPageIndex,
            initialSort,
            initialViewCount
        })
        
        const [getData, { data, loading: getLoading,...queryElse }] = useLazyQuery<Q,V>(QUERY,{
            fetchPolicy: "cache-first",
            // @ts-ignore
            variables: {
                ...integratedVariable,
                ...variables,
                ...overrideVariables
            },

            ...ops
        })


        const operationName = defaultOptions?.queryName || getQueryName(QUERY);

        dataCheck(data,operationName,["items","pageInfo"])
        // @ts-ignore
        const items: R[] = data?.[operationName]?.items || []
        const pageInfo: FoffsetPagingInfo = (data as any)?.[operationName]?.pageInfo || DEFAULT_PAGE_INFO


        useEffect(()=>{
            if(options?.skip) return;
            getData()
        },[
            params.filter,
            params.sort,
            params.paginatorHook.pageCount,
            params.paginatorHook.page
        ])

        return { pageInfo,  getLoading, items, ...params,...queryElse }
    }

    return listQueryHook
}

export const generateQueryHook = <Q, R, V = undefined>(
    QUERY:DocumentNode,
    {skipInit,...initOptions}: genrateOption<Q,V> | undefined = {}
) => {

    const queryHook  = (defaultOptions?: QueryHookOptions<Q,V>) => {
        const [getData, { data:_data,error, loading:getLoading,...context }] = useLazyQuery<Q,V>(QUERY, {
            nextFetchPolicy: "cache-first",
            ...initOptions,
            ...defaultOptions,
        })

        
        const operationName = initOptions?.queryName || getQueryName(QUERY);
        dataCheck(_data, operationName)

        type Result = R extends Array<any> ? R : R | undefined 
        // @ts-ignore
        const data: Result = _data?.[operationName] || undefined;

        useEffect(()=>{
            if(!skipInit)
                getData();
        },[])

        return { getData, getLoading, data,...context }
    }
    return queryHook
}


// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

export const generateMutationHook = <M,V>(MUTATION:DocumentNode,defaultOptions?: MutationHookOptions<M,V>) => {
    const mutationHook = (options?: MutationHookOptions<M,V>) => {
        const muhook = useMutation<M, V>(MUTATION, {
            ...defaultOptions,
            ...options
        });

        return muhook
    }
    return mutationHook
}


export const generateFindQuery = <Q,V,ResultFragment>(findBy: keyof V, QUERY:DocumentNode) => {
    const findQueryHook = (key?:any, options:QueryHookOptions<Q, V> = {}) => {
        const [getData, { data, loading, error:apolloError }] = useLazyQuery<Q, V>(QUERY, {
            skip: !key,
            nextFetchPolicy: "network-only",
            // @ts-ignore
            variables: findBy ? {
                [findBy]: key
            } : undefined,
            ...options,
        })

        const operationName = getQueryName(QUERY);

        // @ts-ignore
        const item:ResultFragment | undefined = data?.[operationName] || undefined;
        // @ts-ignore
        const errorFromServer:string = data?.[operationName]?.error;
        dataCheck(data,operationName)
   
        useEffect(()=>{
            if(key)
            getData()
        },[key])

        const error = apolloError || errorFromServer 

        return {item, loading, error}
    }

    return findQueryHook
}

