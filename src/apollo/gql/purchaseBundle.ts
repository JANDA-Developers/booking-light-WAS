import { gql } from "@apollo/client";
import { F_BOOKING,  F_PAGEINFO, F_PRODUCT_BOOKING, F_PURCHASE, F_PURCHASE_BUNDLE, F_USERERROR } from "./fragment/fragments";

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
            paymentInfo
            data {
                _id
            }
        }
    }
${F_USERERROR}
`


// export const PURCHASE_BUNDLE_UPDATE = gql`
//     mutation purchaseBundleUpdate(
//         $input: PurchaseBundleStatusSetInput!
//     ) {
//         PurchaseBundleUpdate(
//             input:$input
//         ) {
//             ok
//             error {
//             ...FuserError
//             }
//         }
//     }
// ${F_USERERROR}
// `

export const PURCHASE_BUNDLE_REFUND = gql`
    mutation purchaseBundleRefund (
        $amount: Float!
        $purchaseBundleId: ObjectId!
    ) {
    PurchaseBundleRefund(
        amount: $amount
        purchaseBundleId: $purchaseBundleId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fpurchasebundle
        }
    }
}
${F_PURCHASE_BUNDLE}
${F_USERERROR}
`

export const PURCHASE_BUNDLE_DELETE = gql`
    mutation purchaseBundleDelete (
        $purchaseBundleId: ObjectId!
    ) {
    PurchaseBundleDelete(
        purchaseBundleId: $purchaseBundleId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fpurchasebundle
        }
    }
}
${F_PURCHASE_BUNDLE}
${F_USERERROR}
`


export const PURCHASE_BUNDLE_UPDATE = gql`
    mutation purchaseBundleUpdate (
        $purchaseBundleId: ObjectId!
        $input: PurchaseBundleUpdateInput!
    ) {
    PurchaseBundleUpdate(
        purchaseBundleId: $purchaseBundleId
        input: $input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fpurchasebundle
        }
    }
}
${F_PURCHASE_BUNDLE}
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

export const PURCHASE_BUNDLE_SET_PAYMENT_STATUS = gql`
    mutation purchaseBundleSetPaymentStatus(
        $input: PurchaseBundleStatusSetInput!
        $purchaseBundleId: ObjectId!
    ) {
    PurchaseBundleSetPaymentStatus(
        input:$input
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

// export const PURCHASE_BUNDLE_SET_REFUND_STATUS = gql`
//     mutation purchaseBundleSetRefundStatus(
//         $input: PurchaseBundleStatusSetInput!
//         $purchaseBundleId: ObjectId!
//     ) {
//     PurchaseBundleSetRefundStatus(
//         input:$input
//         purchaseBundleId:$purchaseBundleId
//     ) {
//         ok
//         error {
//             ...FuserError
//         }
//     }
// }
// ${F_USERERROR}
// `

export const PURCHASE_BUNDLE_LIST_FORCUSTOMER = gql`
    query purchaseBundleListForCustomer(
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
            purchases {
                ...on Booking {
                    ...Fbooking
                }
            }
        }
    }
}
${F_BOOKING}
${F_PAGEINFO}
${F_PURCHASE_BUNDLE}
`

export const PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER = gql`
    query purchaseBundleListForBusinessUser(
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
            code
            ...Fpurchasebundle
            purchases {
                ...on Booking {
                    ...Fbooking
                    purchasedProduct {
                        ...FproductBooking
                    }
                }
            }
        }
    }
}
${F_BOOKING}
${F_PAGEINFO}
${F_PRODUCT_BOOKING}
${F_PURCHASE_BUNDLE}
`

export const PURCHASE_FIND_BY_ID = gql`
    query purchaseFindById(
        $purchaseId: ObjectId!
    ) {
    PurchaseFindById(
        purchaseId: $purchaseId 
    ) {
        ...Fbooking
        purchasedProduct {
            ...FproductBooking
        }
    }
}
${F_PRODUCT_BOOKING}
${F_BOOKING}
`

export const PURCHASE_BUNDLE_FIND_BY_INFO = gql`
    query purchaseBundleFindByInfo(
        $name: String!
        $contact: String!
    ) {
    PurchaseBundleFindByInfo(
        name: $name 
        contact: $contact 
    ) {
        ...Fpurchasebundle
        purchases {
            ...on Booking {
                ...Fbooking
                purchasedProduct {
                    ...FproductBooking
                }
            }
        }
    }
}
${F_BOOKING}
${F_PRODUCT_BOOKING}
${F_PURCHASE_BUNDLE}
`

export const PURCHASE_BUNDLE_FIND_BY_ID = gql`
    query purchaseBundleFindById(
        $bundleId: ObjectId!
    ) {
    PurchaseBundleFindById(
        bundleId: $bundleId 
    ) {
        ...Fpurchasebundle
        purchases {
                ...on Booking {
                    ...Fbooking
                    purchasedProduct {
                        ...FproductBooking
                    }
                }
            }
    }
}
${F_BOOKING}
${F_PRODUCT_BOOKING}
${F_PURCHASE_BUNDLE}
`



