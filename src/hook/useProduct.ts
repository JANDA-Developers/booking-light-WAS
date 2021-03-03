import { getRefetch } from "@janda-com/front";
import { ITEMBOOKING_CREATE, ITEM_BOOKING_UPDATE, ITEM_DELETE, ITEM_LIST } from "../apollo/gql/item";
import { PRODUCT_BOOKING_CREATE, PRODUCT_BOOKING_UPDATE, PRODUCT_DELETE, PRODUCT_FIND_BY_ID, PRODUCT_LIST } from "../apollo/gql/product";
import { productBookingCreate, productBookingCreateVariables, productBookingUpdate, productBookingUpdateVariables, productDelete, productDeleteVariables, productFindById, productFindByIdVariables, productFindById_ProductFindById, productList, productListVariables, productList_ProductList_items, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, _ProductFilter, _ProductSort } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useProductFindById = generateFindQuery<productFindById,productFindByIdVariables,productFindById_ProductFindById>("productId",PRODUCT_FIND_BY_ID);
export const useProductList = generateListQueryHook<_ProductFilter,_ProductSort,productList,productListVariables,productList_ProductList_items>(PRODUCT_LIST);
export const useProductCreate = generateMutationHook<productBookingCreate,productBookingCreateVariables>(PRODUCT_BOOKING_CREATE,{...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID)});
export const useProductDelete = generateMutationHook<productDelete,productDeleteVariables>(PRODUCT_DELETE,{...getRefetch(PRODUCT_LIST)});
export const useProductUpdate = generateMutationHook<productBookingUpdate, productBookingUpdateVariables>(PRODUCT_BOOKING_UPDATE,{...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID)});
