import { gql } from "@apollo/client";
import {
    F_PAGEINFO,
    F_NOTIFICATION_MANAGER,
    F_NOTIFICATION_SENDER,
    F_NOTIFICATION_TEMPLATE,
    F_USERERROR,
    F_NOTIFICATION_HISTORY_ITEM,
    F_NOTIFICATION_TRIGGER,
    F_SYSTEMNOTI,
} from "./fragment/fragments";

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
`;

export const NOTIFICATION_SENDER_ADD = gql`
    mutation notificationSenderAdd(
        $target: VerificationTarget!
        $label: String!
    ) {
        NotificationSenderAdd(target: $target, label: $label) {
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
`;

export const NOTIFICATION_MANAGER_FIND_BY_ID = gql`
    query notificationmanagerFindById($notificationManagerId: ObjectId!) {
        NotificationManagerFindById(
            notificationManagerId: $notificationManagerId
        ) {
            ...FnotificationManager
        }
    }
    ${F_NOTIFICATION_MANAGER}
`;

export const NOTIFICATION_SENDER_REQUEST_LIST = gql`
    query notificationSenderRequestList {
        NotificationSenderRequestList {
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
`;

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
`;

export const NOTIFICATION_MANAGER_LIST = gql`
    query notificationManagerList(
        $filter: _NotificationManagerFilter
        $sort: [_NotificationManagerSort!]
        $pagingInput: OffsetPagingInput!
    ) {
        NotificationManagerList(
            sort: $sort
            pagingInput: $pagingInput
            filter: $filter
        ) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...FnotificationManager
            }
        }
    }
    ${F_PAGEINFO}
    ${F_NOTIFICATION_MANAGER}
`;

export const NOTIFICATION_SEND_SINGLE = gql`
    mutation notificationSendSingle(
        $input: NotificationSendInput!
        $method: NotificationMethod!
    ) {
        NotificationSendSingle(input: $input, method: $method) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const NOTIFICATION_SENDER_CONFIRM = gql`
    mutation notificationSenderRegistConfirm(
        $sender: String!
        $managerId: String!
    ) {
        NotificationSenderRegistConfirm(
            sender: $sender
            managerId: $managerId
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
`;

export const NOTIFICATION_SEND_WITH_TEMPLATE = gql`
    mutation notificationSendWithTemplate(
        $input: NotificationSendWithTemplateInput!
    ) {
        NotificationSendWithTemplate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const NOTIFICATION_TEMPLATE_CREATE = gql`
    mutation notificationTemplateCreate(
        $input: NotificationTemplateCreateInput!
    ) {
        NotificationTemplateCreate(input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const NOTIFICATION_TEMPLATE_DELETE = gql`
    mutation notificationTemplateDelete($templateId: ObjectId!) {
        NotificationTemplateDelete(templateId: $templateId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const NOTIFICATION_TEMPLATE_UPDATE = gql`
    mutation notificationTemplateUpdate(
        $input: NotificationTemplateUpdateInput!
        $templateId: ObjectId!
    ) {
        NotificationTemplateUpdate(input: $input, templateId: $templateId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const UNREAD_SYSTEM_NOTI_FIND = gql`
    query unReadSystemNotiFind {
        UnReadSystemNotiFind {
            ok
            error {
                ...FuserError
            }
            data {
                ...FsystemNoti
            }
        }
    }
    ${F_SYSTEMNOTI}
    ${F_USERERROR}
`;
