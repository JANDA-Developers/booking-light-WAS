import { getRefetch } from "@janda-com/front";
import { INVOICE_FIND_ONE } from "../apollo/gql/invoice";
import { ITEMBOOKING_CREATE, ITEMBOOKING_UPDATE, ITEM_DELETE, ITEM_FIND_BY_ID, ITEM_LIST } from "../apollo/gql/item";
import { invoiceFindOne, invoiceFindOneVariables, invoiceFindOne_InvoiceFindOne, invoiceList, itembookingCreate, itembookingCreateVariables, itembookingUpdate, itembookingUpdateVariables, itemDelete, itemDeleteVariables, itemFindById, itemFindByIdVariables, itemFindById_ItemFindById, itemList, itemListVariables, itemList_ItemList_items, itemList_ItemList_items_ItemBooking, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useItemFindById = generateFindQuery<itemFindById,itemFindByIdVariables,itemFindById_ItemFindById>("itemId",ITEM_FIND_BY_ID);
export const useItemList = generateListQueryHook<_IItemFilter,_IItemSort,itemList,itemListVariables,itemList_ItemList_items_ItemBooking>(ITEM_LIST);
export const useItemCreate = generateMutationHook<itembookingCreate,itembookingCreateVariables>(ITEMBOOKING_CREATE,{...getRefetch(ITEM_LIST)});
export const useItemDelete = generateMutationHook<itemDelete,itemDeleteVariables>(ITEM_DELETE,{...getRefetch(ITEM_LIST)});
export const useItemUpdate = generateMutationHook<itembookingUpdate, itembookingUpdateVariables>(ITEMBOOKING_UPDATE,{...getRefetch(ITEM_LIST)});
