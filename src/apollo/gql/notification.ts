import { gql } from "@apollo/client";
import { F_PAGEINFO, F_NOTIFICATION_MANAGER, F_NOTIFICATION_SENDER, F_NOTIFICATION_TEMPLATE  } from "./fragment/fragments";

export const NOTIFICATION_HISTORY = gql`
    query notificationHistory(
        $sort: [_NotificationHistoryItemSort!]
        $filter: _NotificationHistoryItemFilter
        $pagingInput: OffsetPagingInput!
    ) {
    NotificationHistory(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FnotificationHistoryItem
        }
    }
}
${F_PAGEINFO}
`


export const NOTIFICATION_SENDER_ADD = gql`
    mutation notificationSenderAdd(
      $target: VerificationTarget!
    ) {
      NotificationSenderAdd(
        target:$target
    ) {
        ok
        error {
            ...FuserError
        }
        data {
          ...FnotificationSender
        }
    }
  }
${F_NOTIFICATION_SENDER}
`


export const NOTIFICATIONMANAGE_FIND_BY_ID = gql`
    query notificationmanagerFindById(
        $notificationManagerId: ObjectId!
    ) {
    NotificationManagerFindById(
        notificationManagerId: $notificationManagerId 
    ) {
        ...FnotificationManager
    }
}
${F_NOTIFICATION_MANAGER}
`

export const NOTIFICATION_TEMPLATE_LIST = gql`
    query notificationTemplateList(
        $sort: [_ITemplateSort!]
        $filter: _ITemplateFilter
        $pagingInput: OffsetPagingInput!
    ) {
    NotificationTemplateList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FnotificationTemplate
        }
    }
}
${F_PAGEINFO}
${F_NOTIFICATION_TEMPLATE}
`

