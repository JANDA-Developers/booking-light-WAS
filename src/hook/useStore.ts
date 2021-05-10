import { getRefetch } from "@janda-com/front";
import {
    STORE_FIND_BY_ID,
    STORE_CREATE,
    STORE_DELETE,
    STORE_LIST,
    STORE_UPDATE,
    STORE_FIND_BY_CODE,
} from "../apollo/gql/store";
import { ME } from "../apollo/gql/user";
import {
    storeCreate,
    storeCreateVariables,
    storeUpdate,
    storeUpdateVariables,
    storeDelete,
    storeDeleteVariables,
    storeFindById,
    storeFindByIdVariables,
    storeFindById_StoreFindById,
    storeList,
    storeListVariables,
    _InvoiceFilter,
    _InvoiceSort,
    _StoreFilter,
    _StoreSort,
    storeList_StoreList_items,
    storeFindByCode,
    storeFindByCodeVariables,
    storeFindByCode_StoreFindByCode_items,
    storeFindByCode_StoreFindByCode,
} from "../type/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useStoreFindByCode = generateFindQuery<
    storeFindByCode,
    storeFindByCodeVariables,
    storeFindByCode_StoreFindByCode
>("code", STORE_FIND_BY_CODE);
export const useStoreFindById = generateFindQuery<
    storeFindById,
    storeFindByIdVariables,
    storeFindById_StoreFindById
>("storeId", STORE_FIND_BY_ID);
export const useStoreList = generateListQueryHook<
    _StoreFilter,
    _StoreSort,
    storeList,
    storeListVariables,
    storeList_StoreList_items
>(STORE_LIST);
export const useStoreCreate = generateMutationHook<
    storeCreate,
    storeCreateVariables
>(STORE_CREATE, { ...getRefetch(STORE_LIST, ME) });
export const useStoreDelete = generateMutationHook<
    storeDelete,
    storeDeleteVariables
>(STORE_DELETE, { ...getRefetch(STORE_LIST, ME) });
export const useStoreUpdate = generateMutationHook<
    storeUpdate,
    storeUpdateVariables
>(STORE_UPDATE, { ...getRefetch(STORE_LIST) });
