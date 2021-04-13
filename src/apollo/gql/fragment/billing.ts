import { gql } from "@apollo/client";

export const F_BILLING_METHOD = gql`
    fragment FbillingMethod on BillingMethod  {
        _id
        updatedAt
        createdAt
        cardNo
        cardName
        cardType
        billkeyStatus
        description
    }
`