import { gql } from "@apollo/client";

export const F_COLLECTION_DATA_INTERFACE = gql`
    fragment FcollectionDataInterface on CollectionDataInterface {
        _id
        createdAt
        updatedAt
    }
`;

export const F_DELIVERY = gql`
    fragment Fdelivery on Delivery {
        fee
        overFreePrice
        lowerPrice
    }
`;
export const F_SELECT_OPTION = gql`
    fragment FselectOption on SelectOption {
        targetOption
        label
        priceOrigin
        selectCount
    }
`;

export const F_DELIVERY_INFO = gql`
    fragment FdeliveryInfo on DeliveryInfo {
        receiverSmaeWithBuyer
        receiverName
        receiverPhone
        address
        addressDetail
        deliveryStatus
        deliveryNumber
        deliveryPrice
    }
`;

export const F_PAGEINFO = gql`
    fragment FoffsetPagingInfo on OffsetPagingInfo {
        pageIndex
        pageItemCount
        currentItemCount
        totalPageCount
    }
`;

export const F_USERERROR = gql`
    fragment FuserError on UserError {
        code
        message
        details
    }
`;
export const F_LOCATION = gql`
    fragment Flocation on Location {
        address
        addressDetail
        lat
        lng
    }
`;

export const F_TAG = gql`
    fragment Ftag on Tag {
        key
        value
    }
`;

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
`;

export const F_FILE = gql`
    fragment Ffile on File {
        ...FcollectionDataInterface
        name
        description
        extension
        fileType
        uri
        tags {
            key
            value
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const F_ATTRIBUTE = gql`
    fragment Fattribute on Attribute {
        tags {
            key
            value
        }
        value
        placeHolder
        default
        require
        options
        label
        key
        displayType
    }
`;
