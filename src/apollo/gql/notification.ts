import { gql } from "@apollo/client";
import { F_PAGEINFO, F_NOTIFICATION_MANAGER, F_NOTIFICATION_SENDER, F_NOTIFICATION_TEMPLATE, F_USERERROR, F_NOTIFICATION_HISTORY_ITEM, F_NOTIFICATION_TRIGGER  } from "./fragment/fragments";

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
${F_NOTIFICATION_HISTORY_ITEM}
${F_PAGEINFO}
`


export const NOTIFICATION_SENDER_ADD = gql`
    mutation notificationSenderAdd(
      $target: VerificationTarget!
      $label: String!
    ) {
      NotificationSenderAdd(
        target:$target,
        label: $label
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
${F_USERERROR}
${F_NOTIFICATION_SENDER}
`


export const NOTIFICATION_MANAGER_FIND_BY_ID = gql`
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
            trigger {
                ...FnotificationTrigger
            }
        }
    }
}
${F_NOTIFICATION_TRIGGER}
${F_PAGEINFO}
${F_NOTIFICATION_TEMPLATE}
`

export const SMS_SEND_SINGLE = gql`
    mutation smsSendSingle(
        $input: SmsSendInput!
        $method: NotificationMethod!
    ) {
        SmsSendSingle(
            input:$input
            method:$method
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const SMS_SEND_WITH_TEMPLATE = gql`
    mutation smsSendWithTemplate(
        $input: SmsSendWithTemplateInput!
    ) {
        SmsSendWithTemplate(
            input:$input
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const NOTIFICATION_TEMPLATE_CREATE = gql`
    mutation notificationTemplateCreate(
        $input: NotificationTemplateCreateInput!
    ) {
        NotificationTemplateCreate(
            input:$input
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const SMS_TEMPLATE_DELETE = gql`
    mutation smsTemplateDelete(
        $templateId: ObjectId!
    ) {
        SmsTemplateDelete(
            templateId:$templateId
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const SMS_TEMPLATE_UPDATE = gql`
    mutation smsTemplateUpdate(
        $input: SmsTemplateUpdateInput!
        $templateId: ObjectId!
    ) {
        SmsTemplateUpdate(
            input:$input
            templateId: $templateId
        ) {
            ok
            error {
                ...FuserError
            }
        }
    }
${F_USERERROR}
`



