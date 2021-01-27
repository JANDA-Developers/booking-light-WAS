import { getRefetch } from "@janda-com/front";
import { INVOICE_FIND_ONE } from "../apollo/gql/invoice";
import { ITEMBOOKING_CREATE, ITEM_DELETE, ITEM_LIST } from "../apollo/gql/item";
import { invoiceFindOne, invoiceFindOneVariables, invoiceFindOne_InvoiceFindOne, invoiceList, itembookingCreate, itembookingCreateVariables, itembookingUpdate, itembookingUpdateVariables, itemDelete, itemDeleteVariables, itemList, itemListVariables, itemList_ItemList_items, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort } from "../type/api";
import { generateListQueryHook, generateMutationHook } from "../utils/hookGen";

// export const useItemFindById = generateFindQuery<invoiceFindOne,invoiceFindOneVariables,invoiceFindOne_InvoiceFindOne>("yyyymm",ITEM);
export const useItemList = generateListQueryHook<_IItemFilter,_IItemSort,itemList,itemListVariables,itemList_ItemList_items>(ITEM_LIST);
export const useItemCreate = generateMutationHook<itembookingCreate,itembookingCreateVariables>(ITEMBOOKING_CREATE,{...getRefetch(ITEM_LIST,ITEM_LIST)});
export const useItemDelete = generateMutationHook<itemDelete,itemDeleteVariables>(ITEM_DELETE,{...getRefetch(ITEM_LIST)});
export const useItemUpdate = generateMutationHook<itembookingUpdate, itembookingUpdateVariables>(ITEM_LIST,{...getRefetch(ITEM_LIST)});
