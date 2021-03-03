import { gql } from "@apollo/client";
import { F_CAPACITY_SUMMARY } from "./product";
import { F_ATTRIBUTE } from "./shared";



export const F_RANGE = gql`
fragment Frange on DateRange  {
    from
    to
}
`

export const F_SUMMARY_BOOKING = gql`
fragment FsummaryBooking on SummaryItemBooking  {
    _id {
        itemId
        productId
    }
    usage
    usageRatio
    usageDetails {
        ...FcapacitySummary
    }
    type
    price
    currency
    attrs {
        ...Fattribute
    }
    disabled
    dateRangeForSale {
        ...Frange
    }
    dateRangeForUse {
        ...Frange
    }
    capacity
    capacityPick
}
${F_ATTRIBUTE}
${F_RANGE}
${F_CAPACITY_SUMMARY}
`


