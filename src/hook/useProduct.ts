import { getRefetch } from "@janda-com/front";
import { ITEMBOOKING_CREATE, ITEM_DELETE, ITEM_LIST } from "../apollo/gql/item";
import { PRODUCT_FIND_BY_ID, PRODUCT_LIST } from "../apollo/gql/product";
import { productBookingCreate, productBookingCreateVariables, productBookingUpdate, productBookingUpdateVariables, productDelete, productDeleteVariables, productFindById, productFindByIdVariables, productFindById_ProductFindById, productList, productListVariables, productList_ProductList_items, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, _ProductFilter, _ProductSort } from "../type/api";
import { generateListQueryHook, generateMutationHook } from "../utils/hookGen";
import { generateFindQuery } from "../utils/query";

export const useProductFindById = generateFindQuery<productFindById,productFindByIdVariables,productFindById_ProductFindById>("productId",PRODUCT_FIND_BY_ID);
export const useProductList = generateListQueryHook<_ProductFilter,_ProductSort,productList,productListVariables,productList_ProductList_items>(PRODUCT_LIST);
export const useProductCreate = generateMutationHook<productBookingCreate,productBookingCreateVariables>(ITEMBOOKING_CREATE,{...getRefetch(ITEM_LIST,ITEM_LIST)});
export const useProductDelete = generateMutationHook<productDelete,productDeleteVariables>(ITEM_DELETE,{...getRefetch(ITEM_LIST)});
export const useProductUpdate = generateMutationHook<productBookingUpdate, productBookingUpdateVariables>(ITEM_LIST,{...getRefetch(ITEM_LIST)});
