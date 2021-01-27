
import { gql } from "@apollo/client";
export * from "./product"
export * from "./store"
export * from "./item"
export * from "./user"
export * from "./zoneInfo"
export * from "./payment"
export * from "./invoice"
export * from "./notification"
export * from "./purchase"

export const F_COLLECTION_DATA_INTERFACE = gql`
fragment FcollectionDataInterface on CollectionDataInterface {
    _id
    createdAt
    updatedAt
}
`

export const F_PAGEINFO = gql`
    fragment FoffsetPagingInfo on OffsetPagingInfo {
        pageIndex
        pageItemCount
        currentItemCount
        totalPageCount
    }
`

export const F_USERERROR = gql`
    fragment FuserError on UserError  {
        code
        message
        details
    }
`
export const F_LOCATION = gql`
    fragment Flocation on Location  {
        address
        addressDetail
        lat
        lng
    }
`

export const F_TAG = gql`
    fragment Ftag on Tag {
        key
        value
    }
`

export const F_VERIFICATION = gql`
    fragment Fverification on Verification {
        ...FcollectionDataInterface
        payload
        target
        isVerified
        event
        storeId
        expiresAt
        isExpire
    }
    ${F_COLLECTION_DATA_INTERFACE}
`

