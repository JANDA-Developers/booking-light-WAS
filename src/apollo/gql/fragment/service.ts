import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_SERVICE_OFFER_RESOURCE = gql`
fragment FserviceOfferResource on ServiceOfferResource {
    serviceUsageType
    action
    offerCount
    isFree
    description
    serviceProviderName
}
`

export const F_PRODUCT = gql`
fragment FservicePlanTemplate on ServicePlanTemplate {
    ...FcollectionDataInterface
    name
    billingFrequency
    price
    description
    serviceProviderName
    offerResources {
        ...FserviceOfferResource
    }
}
${F_SERVICE_OFFER_RESOURCE}
${F_COLLECTION_DATA_INTERFACE}
`
