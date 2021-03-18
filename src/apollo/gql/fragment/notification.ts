import { gql } from "@apollo/client"
import { F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared"


export const F_NOTIFICATION_SENDER = gql`
fragment FnotificationSender on NotificationSender  {
  type
  label
  sender
  isVerified
    files {
      ...Ffile
    }
  isRegisteredToAligo
  createdAt
}
${F_FILE}
`

export const F_NOTIFICATION_MANAGER = gql`
fragment FnotificationManager on NotificationManager {
  emailPricing
  currency
  pointRemains
  senders {
    ...FnotificationSender
  }
}
${F_NOTIFICATION_SENDER}
`

export const F_NOTIFICATION_HISTORY_ITEM = gql`
fragment FnotificationHistoryItem on NotificationHistoryItem {
    ...FcollectionDataInterface
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
${F_COLLECTION_DATA_INTERFACE}
`


export const F_NOTIFICATION_TRIGGER = gql`
fragment FnotificationTrigger on NotificationTrigger  {
  sender
  event
  storeIds
  isEnabled
  tags {
    key
    value
  }
}
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
