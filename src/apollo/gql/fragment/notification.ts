import { gql } from "@apollo/client"
import { F_COLLECTION_DATA_INTERFACE } from "./fragments"

export const F_NOTIFICATION_MANAGER = gql`
fragment FnotificationManager on NotificationManager {
  emailPricing
  currency
  pointRemains
}
`

export const F_NOTIFICATION_HISTORY_ITEM = gql`
fragment FnotificationHistoryItem on NotificationHistoryItem {
    method
    sender
    receivers
    title
    content
    count
    successCount
    errorCount
    pointRemains
    pointConsumed
}
`

export const F_NOTIFICATION_SENDER = gql`
fragment FnotificationSender  on NotificationSender  {
  type
  sender
  isVerified
  isRegisteredToAligo
}
`

export const F_NOTIFICATION_TRIGGER = gql`
fragment FnotificationTrigger on NotificationTrigger  {
  ...FcollectionDataInterface
  sender
  event
  isEnabled
  tags {
    key
    value
  }
}
${F_COLLECTION_DATA_INTERFACE}
`

export const F_NOTIFICATION_TEMPLATE = gql`
fragment FnotificationTemplate on ITemplate  {
    ...FcollectionDataInterface
    name
    description
    content
    notificationMethod
    replacers
}
${F_COLLECTION_DATA_INTERFACE}
`