import { gql } from "@apollo/client";
import { F_CAPACITY } from "./product";

export const F_PRODUCT_BOOKING_TEMPLATE = gql`
fragment FproductBookingTemplate on ProductBookingTemplate {
    capacity
    capacityPick
    price
    currency
    timeRangeForUse {
        start
        end
    }
    timeRangeForSale{
        start
        end
    }
    capacityDetails {
        ...Fcapacity
    }
} 
${F_CAPACITY}
`

export const F_PRODUCT_AUTOMATOR = gql`
fragment FproductAutomator on ProductAutomatorBooking {
    _id
    updatedAt
    createdAt
    latestGenerate
    latestDestroy
    isDisabled
    name
    description
    type
    targetItemId
    targetItemName
    ownerId
    templates {
        ...FproductBookingTemplate
    }
    countDate
    exceptedDayOfWeeks
} 
${F_PRODUCT_BOOKING_TEMPLATE}
`