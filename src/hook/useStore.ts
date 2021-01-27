import { getRefetch } from "@janda-com/front";
import { STORE_FIND_BY_ID,STORE_CREATE, STORE_DELETE, STORE_LIST } from "../apollo/gql/store";
import { storeCreate, storeCreateVariables, storeUpdate, storeUpdateVariables, storeDelete, storeDeleteVariables, storeFindById, storeFindByIdVariables, storeFindById_StoreFindById, storeList, storeListVariables, _InvoiceFilter, _InvoiceSort, _StoreFilter, _StoreSort, storeList_StoreList_items } from "../type/api";
import { generateListQueryHook, generateMutationHook } from "../utils/hookGen";
import { generateFindQuery } from "../utils/query";

export const useStoreFindById = generateFindQuery<storeFindById,storeFindByIdVariables,storeFindById_StoreFindById>("storeId",STORE_FIND_BY_ID);
export const useStoreList = generateListQueryHook<_StoreFilter,_StoreSort,storeList,storeListVariables,storeList_StoreList_items>(STORE_LIST);
export const useStoreCreate = generateMutationHook<storeCreate,storeCreateVariables>(STORE_CREATE,{...getRefetch(STORE_LIST,STORE_LIST)});
export const useStoreDelete = generateMutationHook<storeDelete,storeDeleteVariables>(STORE_DELETE,{...getRefetch(STORE_LIST)});
export const useStoreUpdate = generateMutationHook<storeUpdate, storeUpdateVariables>(STORE_LIST,{...getRefetch(STORE_LIST)});
