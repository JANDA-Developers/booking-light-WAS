import { gql } from "@apollo/client";
import { F_BOOKING, F_ITEM, F_PAGEINFO, F_PRODUCT, F_PRODUCT_BOOKING, F_PURCHASE, F_USERERROR } from "./fragment/fragments";

export const PRODUCT_BOOKING_UPDATE = gql`
    mutation productBookingUpdate(
        $input: ProductBookingUpdateInput!
        $productBookingId: ObjectId!
    ) {
    ProductBookingUpdate(
        input:$input
        productBookingId: $productBookingId
    ) {
        ok
        error {
            ...FuserError
        }
    }
    }
${F_USERERROR}
`

export const PRODUCT_BOOKING_CREATE = gql`
    mutation productBookingCreate(
        $input: ProductBookingCreateInput!
        $itemId: ObjectId!
    ) {
        ProductBookingCreate(
            input:$input
            itemId:$itemId
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const PRODUCT_DELETE = gql`
    mutation productDelete(
        $productId: ObjectId!
    ) {
    ProductDelete(
        productId: $productId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const PRODUCT_LIST = gql`
    query productList(
        $sort: [_ProductSort!]
        $filter: _ProductFilter
        $pagingInput: OffsetPagingInput!
    ) {
    ProductList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FproductBooking
        }
    }
}
${F_PAGEINFO}
${F_PRODUCT_BOOKING}
`


export const PRODUCT_FIND_BY_ID = gql`
    query productFindById(
        $productId: ObjectId!
    ) {
    ProductFindById(
        productId: $productId
    ) {
        ...FproductBooking
        item {
            ...Fitem
        }
        purchase {
            ...Fbooking
        }
    }
}
${F_PRODUCT_BOOKING}
${F_ITEM}
${F_BOOKING}
`


export const PURCHASE_LIST_FOR_BUSINESSUSER = gql`
    query purchaseListForBusinessUser(
        $sort: [_IPurchaseSort!]
        $filter: _IPurchaseFilter
        $pagingInput: OffsetPagingInput!
    ) {
    PurchaseListForBusinessUser(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fpurchase
        }
    }
}
${F_PAGEINFO}
${F_PURCHASE}
`

export const PURCHASE_LIST_FOR_CUSTOMER = gql`
    query purchaseListForCustomer(
        $sort: [_IPurchaseSort!]
        $filter: _IPurchaseFilter
        $pagingInput: OffsetPagingInput!
    ) {
    PurchaseListForCustomer(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fpurchase
        }
    }
}
${F_PAGEINFO}
${F_PURCHASE}
`
