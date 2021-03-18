import { gql } from "@apollo/client";
import { F_PRODUCT } from "./product";
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
  itemName
  purchaserName
  purchaserContact
  purchasedProduct {
    ...Fproduct
  }
}
${F_PRODUCT}
${F_COLLECTION_DATA_INTERFACE}
`

export const F_PURCHASE_BUNDLE = gql`
  fragment Fpurchasebundle on PurchaseBundle {
    ...FcollectionDataInterface
    status
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
    code
    message
    isPaymentCompleted
    fullRefundPendingAt
    fullRefundCompletedAt
    purchaserMessage
    paymentAt
    purchaserName
    purchaserContact
    useNicepay
    paymentTimeExpired
  }
  ${F_COLLECTION_DATA_INTERFACE}
`