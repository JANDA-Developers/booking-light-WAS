import { gql } from "@apollo/client";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE } from "./shared";



export const F_CAPACITY = gql`
    fragment Fcapacity  on Capacity  {
        key
        count
        label
        price
    }
`

export const F_CAPACITY_SUMMARY = gql`
    fragment FcapacitySummary on CapacitySummary  {
        key
        label
        capacityCount
        usage
        usageRatio
        price
    } 
`


export const F_PRODUCT = gql`
fragment Fproduct on Product {
    ...FcollectionDataInterface
    type
    attrs {
        ...Fattribute
    }
    ... on ProductBooking {
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
}
${F_ATTRIBUTE}
${F_CAPACITY}
${F_CAPACITY_SUMMARY}
${F_COLLECTION_DATA_INTERFACE}
`


