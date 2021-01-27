import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_PAGEINFO, F_PURCHASE, F_PURCHASE_BUNDLE, F_USERERROR } from "./fragment/fragments";

export const PURCHASE_BUNDLE_CREATE = gql`
    mutation purchaseBundleCreate(
        $input: PurchaseBundleCreateInput!
    ) {
        PurchaseBundleCreate(
            input:$input
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const PURCHASE_BUNDLE_CANCEL = gql`
    mutation purchaseBundleCancel(
        $message: String!
        $purchaseBundleId: ObjectId!
    ) {
    PurchaseBundleCancel(
        message:$message
        purchaseBundleId:$purchaseBundleId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const PURCHASE_BUNDLE_LIST_FORCUSTOMER = gql`
    query purchasebundlelistforcustomer(
        $sort: [_PurchaseBundleSort!]
        $filter: _PurchaseBundleFilter
        $pagingInput: OffsetPagingInput!
    ) {
    PurchaseBundleListForCustomer(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items  {
            ...Fpurchasebundle
        }
    }
}
${F_PAGEINFO}
${F_PURCHASE_BUNDLE}
`


export const PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER = gql`
    query purchasebundlelistforBusinessUser(
        $sort: [_PurchaseBundleSort!]
        $filter: _PurchaseBundleFilter
        $pagingInput: OffsetPagingInput!
    ) {
    PurchaseBundleListForBusinessUser(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fpurchasebundle
        }
    }
}
${F_PAGEINFO}
${F_PURCHASE_BUNDLE}
`

export const PURCHASE_FIND_BY_ID = gql`
    query purchaseFindById(
        $purchaseId: ObjectId!
    ) {
    PurchaseFindById(
        purchaseId: $purchaseId 
    ) {
        ...Fpurchase
      
    }
}
${F_PURCHASE}
`



