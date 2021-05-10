import { gql } from "@apollo/client";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_CAPACITY = gql`
    fragment Fcapacity on Capacity {
        key
        count
        label
        price
    }
`;

export const F_CAPACITY_SUMMARY = gql`
    fragment FcapacitySummary on CapacitySummary {
        key
        label
        capacityCount
        usage
        price
    }
`;

export const F_PRODUCT = gql`
    fragment Fproduct on Product {
        ...FcollectionDataInterface
        type
        attrs {
            ...Fattribute
        }
    }
    ${F_ATTRIBUTE}
    ${F_COLLECTION_DATA_INTERFACE}
`;

export const F_PRODUCT_BOOKING = gql`
    fragment FproductBooking on ProductBooking {
        ...Fproduct
        disabled
        dateRangeForSale {
            from
            to
        }
        dateRangeForUse {
            from
            to
        }
        itemCode
        itemName
        _itemId
        currency
        price
        capacity
        capacityPick
        capacityDetails {
            ...Fcapacity
        }
        usageDetails {
            ...FcapacitySummary
        }
        code
    }
    ${F_PRODUCT}
    ${F_CAPACITY}
    ${F_ATTRIBUTE}
    ${F_CAPACITY_SUMMARY}
`;
