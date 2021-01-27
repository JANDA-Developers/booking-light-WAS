import { gql } from "@apollo/client";

export const F_INVOCIE = gql`
fragment Finvoice on Invoice {
    year
    month
    yyyymm
    hashId
    currency
    status
    unpaidReason
    billingAt
    expectedBillingDayOfMonth
    isBilled
}
`

export const F_SERVICE_DETAIL = gql`
    fragment FserviceUsageDetails on ServiceUsageDetails  {
        action
        isBillingTarget
        count
        amount
        servicePricingHashId
    }
`

export const F_SERVICE_PLAN = gql`
fragment FservicePlan on ServicePlan {
    name
    price
    billingFrequency
    offerResources {
        serviceUsageType
        action
        offerCount
        isFree
        description
        serviceProviderName
    }
    description
    serviceProviderName
    isDesubscribed
    desubscribedAt
}`