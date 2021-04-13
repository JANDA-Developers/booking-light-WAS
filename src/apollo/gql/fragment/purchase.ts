import { gql } from "@apollo/client";
import { F_PRODUCT } from "./product";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE, F_DELIVERY_INFO } from "./shared";

export const F_BOOKING = gql`
fragment Fbooking on Booking  {
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
  countDetails {
      key
      count
      label
      price
    }
  }
${F_COLLECTION_DATA_INTERFACE}
`

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
    sellerMemo
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
    attrs {
      ...Fattribute
    }
    devlieryInfo {
      ...FdeliveryInfo
    }
  }
  ${F_ATTRIBUTE}
  ${F_DELIVERY_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`