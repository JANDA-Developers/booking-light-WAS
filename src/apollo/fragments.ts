import { gql } from "@apollo/client";

export const F_PAGEINFO = gql`
    fragment FoffsetPagingInfo on OffsetPagingInfo {
        pageIndex
        pageItemCount
        currentItemCount
        totalPageCount
    }
`

export const F_TIMELINE_POLICY = gql`
    fragment FtimelinePolicy on TimelinePolicy {
        from
        to
        size
        count
        edges
    }
`

export const F_PRICE_SEGMENT_TABLE = gql`
    fragment FpriceSegmentTable on PriceSegmentTable {
        price
        currency
    }
`

export const F_SCHEDULER = gql`
    fragment Fscheduler on Scheduler {
        from
        to
        timelinePolicies {
            ...FtimelinePolicy
        }
        priceSegmentTable {
            ...FpriceSegmentTable
        }
        maxCapacity
    }
    ${F_TIMELINE_POLICY}
    ${F_PRICE_SEGMENT_TABLE}
`

export const F_DAILY_SCHEDULER = gql` 
    fragment FdailyScheduler on DailyScheduler {
        days
        scheduler {
            ...Fscheduler
        }
    }
    ${F_SCHEDULER}
`

export const F_PAY = gql`
    fragment Fpay on Pay {
        amount
        currency
    }
`

export const F_USERERROR = gql`
    fragment FuserError on UserError  {
        code
        message
        details
    }
`

export const F_COLLECTION_DATA_INTERFACE = gql`
    fragment FcollectionDataInterface on CollectionDataInterface {
        _id
        createdAt
        updatedAt
    }
`
export const F_ZONE_INFO = gql`
    fragment FzoneInfo on Zoneinfo {
        timezone
        offset
        callingCode
        alpha2Code
    }
`

export const F_TAG = gql`
    fragment Ftag on Tag {
        key
        value
    }
`


export const F_FILE = gql`
    fragment Ffile on File {
        ...FcollectionDataInterface
        name
        description
        extension
        fileType
        uri
        tags {
           ...Ftag
        }
        owner {
           _id
           name
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_TAG}
`


export const F_USER = gql`
  fragment Fuser on User {
    ...FcollectionDataInterface
    name
    email
    phoneNumber
    profileImage {
        ...Ffile
    }
    isVerifiedPhoneNumber
    isVerifiedEmail
    role
    company
    zoneinfo {
        ...FzoneInfo
    }
    smsKey
  }
  ${F_FILE}
  ${F_ZONE_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`



export const F_PRODUCTGROUP = gql`
    fragment FproductGroup on ProductGroup {
        ...FcollectionDataInterface
        user {
            _id
            name
        }
        name
        type
        code
        description
        hashTags
        list {
            _id
            name
            code
            price
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
`


export const F_PRODUCT = gql`
    fragment Fproduct on Product {
        ...FcollectionDataInterface
        name
        subtitle
        code
        description
        price
        capacity
        images {
            ...Ffile
        }
        user {
            _id
            name 
        }
        store {
            ...FcollectionDataInterface
            name
        }
        productGroup {
            ...FproductGroup
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_FILE}
    ${F_USER}
    ${F_PRODUCTGROUP}
`


export const F_STORE = gql`
    fragment Fstore on Store {
        ...FcollectionDataInterface
        name
        zoneinfo {
            ...FzoneInfo
        }
        code
        description
        user {
            _id
            name
        }
        products {
            ...Fproduct
        }
        images {
            ...Ffile
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_ZONE_INFO}
    ${F_USER}
    ${F_PRODUCT}
    ${F_FILE}
`



export const F_VERIFICATION = gql`
    fragment Fverification on Verification {
        ...FcollectionDataInterface
        payload
        target
        isVerified
        event
        storeCode
        expiresAt
        isExpire
    }
    ${F_COLLECTION_DATA_INTERFACE}
`
export const F_ITEM = gql`
    fragment Fitem on Item {
        ...FcollectionDataInterface
        phoneNumber
        name
        email
        fromTm
        toTm
        count
        pay {
           ...Fpay 
        }
        message
        product {
            ...Fproduct
        }
        storeUser {
            ...Fuser
        }
    }
    ${F_PRODUCT}
    ${F_USER}
    ${F_PAY}
    ${F_COLLECTION_DATA_INTERFACE}
`