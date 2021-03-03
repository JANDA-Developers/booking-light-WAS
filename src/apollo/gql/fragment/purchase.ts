import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_PURCHASE = gql`
fragment Fpurchase on IPurchase  {
  ...FcollectionDataInterface
  paymentStatus
  refundStatus
  paymethod
  paymentExpiresAt
  currency
  pricePaymentPending
  pricePaymentCompleted
  priceRefundPending
  priceRefundCompleted
  isFullRefunded
  isRefundedPartial
  message
  status
  isPaymentCompleted
  count
  type
  paymentTimeExpired
}
${F_COLLECTION_DATA_INTERFACE}
`

export const F_PURCHASE_BUNDLE = gql`
  fragment Fpurchasebundle on PurchaseBundle {
    ...FcollectionDataInterface
    paymentStatus
    refundStatus
    paymethod
    paymentExpiresAt
    currency
    pricePaymentPending
    pricePaymentCompleted
    priceRefundPending
    priceRefundCompleted
    isFullRefunded
    isRefundedPartial
    message
    isPaymentCompleted
    fullRefundPendingAt
    fullRefundCompletedAt
    paymentAt
    useNicepay
    paymentTimeExpired
  }
  ${F_COLLECTION_DATA_INTERFACE}
`