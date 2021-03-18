import { gql } from "@apollo/client";


export const F_SERVICE_DETAIL = gql`
    fragment FserviceUsageDetails on ServiceUsageDetails  {
        type
        action
        isBillingTarget
        count
        amount
        servicePricingHashId
    }
`

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
    serviceUsageDetails {
        ...FserviceUsageDetails 
    }
    summaryTotal {
        amount
        amountOrigin
        count
    }
}
${F_SERVICE_DETAIL}
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