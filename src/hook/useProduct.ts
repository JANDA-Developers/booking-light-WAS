import { getRefetch } from "@janda-com/front";
import { type } from "node:os";
import { ITEMBOOKING_CREATE, ITEM_BOOKING_UPDATE, ITEM_DELETE, ITEM_FIND_BY_ID, ITEM_LIST } from "../apollo/gql/item";
import { PRODUCT_BOOKING_CREATE, PRODUCT_BOOKING_UPDATE, PRODUCT_DELETE, PRODUCT_FIND_BY_ID, PRODUCT_LIST } from "../apollo/gql/product";
import { TproductRowData } from "../page/product/component/ProductTable";
import { productBookingCreate, productBookingCreateVariables, productBookingUpdate, productBookingUpdateVariables, productDelete, productDeleteVariables, productFindById, productFindByIdVariables, productFindById_ProductFindById, productList, productListVariables, productList_ProductList_items, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, _ProductFilter, _ProductSort } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { completeMsg } from "../utils/utils";

export const useProductFindById = generateFindQuery<productFindById,productFindByIdVariables,productFindById_ProductFindById>("productId",PRODUCT_FIND_BY_ID);
export const useProductList = generateListQueryHook<_ProductFilter,_ProductSort,productList,productListVariables,productList_ProductList_items>(PRODUCT_LIST);
export const useProductCreate = generateMutationHook<productBookingCreate,productBookingCreateVariables>(PRODUCT_BOOKING_CREATE,{...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID,ITEM_FIND_BY_ID)});
export const useProductDelete = generateMutationHook<productDelete,productDeleteVariables>(PRODUCT_DELETE,{...getRefetch(PRODUCT_LIST,ITEM_FIND_BY_ID)});
export const useProductUpdate = generateMutationHook<productBookingUpdate, productBookingUpdateVariables>(PRODUCT_BOOKING_UPDATE,{...getRefetch(PRODUCT_LIST,PRODUCT_FIND_BY_ID,ITEM_FIND_BY_ID)});

export type TUseProductList = ReturnType<typeof useProductList>; 

export const getProductDeleteHandle = () => {
    const [deleteMu] = useProductDelete({
        onCompleted: ({ ProductDelete }) => {
            completeMsg(ProductDelete, "판매취소완료")
        }
    });

    const handleDelete = (pid:string) => {
        if (confirm(`정말로 상품을 취소하십니까?`))
            deleteMu({
                variables: {
                    productId: pid
                }
            })
    }

    return {handleDelete};
}