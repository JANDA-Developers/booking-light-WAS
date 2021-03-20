import { DocumentNode, MutationHookOptions, operationName, QueryHookOptions, useMutation } from "@apollo/client";
import { ListInitOptions, useListQuery } from "../hook/useListQuery";
import { useEffect } from "react";
import {useLazyQuery} from "@apollo/client";
import { DEFAULT_PAGE_INFO } from "@janda-com/front";
import { FoffsetPagingInfo } from "../type/api";


export const pageLoadingEffect = (loading:boolean) => {
    const MuPageLoading = document.getElementById("MuPageLoading");
    if(MuPageLoading) {
        if(loading) {
                MuPageLoading.classList.add("muPageLoading--visible");
        } else {
            MuPageLoading?.classList.remove("muPageLoading--visible");
        }
    }
}

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
        console.log({data});
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
            fetchPolicy: "cache-and-network",
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

        
        pageLoadingEffect(getLoading);


        useEffect(()=>{
            if(options?.skip) return;
            getData()
        },[
            params.filter,
            params.sort,
            params.paginatorHook.pageCount,
            params.paginatorHook.page
        ])

        useEffect(()=>{
            params.paginatorHook.setPage(0)
        },[
            params.paginatorHook.pageCount,
            params.filter
        ])

        console.log({data});

        return {getData, pageInfo,  getLoading, items, ...params,...queryElse }
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

        pageLoadingEffect(getLoading);

        useEffect(()=>{
            if(!skipInit)
                getData();
        },[])

        console.log({_data})
        console.log({data})

        return { getData, getLoading, data,...context }
    }
    return queryHook
}


// refetchQueries: [getOperationName(BOOKING_LIST) || ""],

interface GenerateMutationHookMu<M,V> extends MutationHookOptions<M,V> {
    skipLoadingEffect?: boolean;
}

export const generateMutationHook = <M,V>(MUTATION:DocumentNode,{ skipLoadingEffect, ...defaultOptions}: GenerateMutationHookMu<M,V> = {}) => {
    const mutationHook = (options?: MutationHookOptions<M,V>) => {
        const muhook = useMutation<M, V>(MUTATION, {
            awaitRefetchQueries: true,
            ...defaultOptions,
            ...options
        });

        if(!skipLoadingEffect)
        pageLoadingEffect(muhook[1].loading)
        

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

        
        pageLoadingEffect(loading);

        const error = apolloError || errorFromServer 

        return {item, loading, error}
    }

    return findQueryHook
}


