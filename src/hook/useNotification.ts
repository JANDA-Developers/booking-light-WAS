import { getRefetch } from "@janda-com/front";
import {
    NOTIFICATION_HISTORY,
    NOTIFICATION_MANAGER_FIND_BY_ID,
    NOTIFICATION_SENDER_ADD,
    NOTIFICATION_TEMPLATE_LIST,
    NOTIFICATION_SEND_SINGLE,
    NOTIFICATION_SEND_WITH_TEMPLATE,
    NOTIFICATION_TEMPLATE_CREATE,
    NOTIFICATION_TEMPLATE_DELETE,
    NOTIFICATION_TEMPLATE_UPDATE,
    NOTIFICATION_SENDER_REQUEST_LIST,
    NOTIFICATION_SENDER_CONFIRM,
    NOTIFICATION_MANAGER_LIST,
    UNREAD_SYSTEM_NOTI_FIND,
} from "../apollo/gql/notification";
import { MY_NOTIFICATION_MANAGER } from "../apollo/gql/user";
import {
    _NotificationManagerFilter,
    _NotificationManagerSort,
    notificationManagerList,
    notificationManagerListVariables,
    notificationManagerList_NotificationManagerList_items,
    notificationHistory,
    notificationHistoryVariables,
    notificationHistory_NotificationHistory_items,
    notificationmanagerFindById,
    notificationmanagerFindByIdVariables,
    notificationmanagerFindById_NotificationManagerFindById,
    notificationSenderAdd,
    notificationSenderAddVariables,
    notificationTemplateList,
    notificationTemplateList_NotificationTemplateList,
    notificationTemplateList_NotificationTemplateList_items,
    servicePlanDesubscribe,
    servicePlanDesubscribeVariables,
    servicePlanTemplateCreate,
    servicePlanTemplateCreateVariables,
    servicePlanTemplateDelete,
    servicePlanTemplateDeleteVariables,
    servicePlanTemplateList,
    servicePlanTemplateListVariables,
    servicePlanTemplateList_ServicePlanTemplateList,
    servicePlanTemplateUpdate,
    servicePlanTemplateUpdateVariables,
    notificationSendSingle,
    notificationSendSingleVariables,
    notificationSendWithTemplate,
    notificationSendWithTemplateVariables,
    notificationTemplateCreate,
    notificationTemplateCreateVariables,
    notificationTemplateDelete,
    notificationTemplateDeleteVariables,
    notificationTemplateUpdate,
    notificationTemplateUpdateVariables,
    _IItemFilter,
    _IItemSort,
    _InvoiceFilter,
    _InvoiceSort,
    _ITemplateFilter,
    _NotificationHistoryItemFilter,
    _NotificationHistoryItemSort,
    notificationSenderRequestList,
    notificationSenderRequestList_NotificationSenderRequestList,
    notificationSenderRequestList_NotificationSenderRequestList_data,
    notificationSenderRegistConfirm,
    notificationSenderRegistConfirmVariables,
    unReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind_data,
} from "../type/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
    generateQueryHook,
} from "../utils/query";

export const useNotificationHistory = generateListQueryHook<
    _NotificationHistoryItemFilter,
    _NotificationHistoryItemSort,
    notificationHistory,
    notificationHistoryVariables,
    notificationHistory_NotificationHistory_items
>(NOTIFICATION_HISTORY);
export const useNotificationSenderAdd = generateMutationHook<
    notificationSenderAdd,
    notificationSenderAddVariables
>(NOTIFICATION_SENDER_ADD, { ...getRefetch(MY_NOTIFICATION_MANAGER) });
export const useNotificationManagerFindById = generateFindQuery<
    notificationmanagerFindById,
    notificationmanagerFindByIdVariables,
    notificationmanagerFindById_NotificationManagerFindById
>("notificationManagerId", NOTIFICATION_MANAGER_FIND_BY_ID);

export const useNotificationSendSingle = generateMutationHook<
    notificationSendSingle,
    notificationSendSingleVariables
>(NOTIFICATION_SEND_SINGLE);
export const useSendWithTempalte = generateMutationHook<
    notificationSendWithTemplate,
    notificationSendWithTemplateVariables
>(NOTIFICATION_SEND_WITH_TEMPLATE);

export const useNotificationTemplateList = generateListQueryHook<
    _ITemplateFilter,
    _IItemSort,
    notificationTemplateList,
    notificationHistoryVariables,
    notificationTemplateList_NotificationTemplateList_items
>(NOTIFICATION_TEMPLATE_LIST);
export const useTemplateCreate = generateMutationHook<
    notificationTemplateCreate,
    notificationTemplateCreateVariables
>(NOTIFICATION_TEMPLATE_CREATE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });
export const useTemplateUpdate = generateMutationHook<
    notificationTemplateUpdate,
    notificationTemplateUpdateVariables
>(NOTIFICATION_TEMPLATE_UPDATE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });
export const useTemplateDelete = generateMutationHook<
    notificationTemplateDelete,
    notificationTemplateDeleteVariables
>(NOTIFICATION_TEMPLATE_DELETE, { ...getRefetch(NOTIFICATION_TEMPLATE_LIST) });

export const useNotificationSenderRequestList = generateQueryHook<
    notificationSenderRequestList,
    notificationSenderRequestList_NotificationSenderRequestList
>(NOTIFICATION_SENDER_REQUEST_LIST);

export const useNotificationSenderRegistConfirm = generateMutationHook<
    notificationSenderRegistConfirm,
    notificationSenderRegistConfirmVariables
>(NOTIFICATION_SENDER_CONFIRM);

export const useNotificationManagerList = generateListQueryHook<
    _NotificationManagerFilter,
    _NotificationManagerSort,
    notificationManagerList,
    notificationManagerListVariables,
    notificationManagerList_NotificationManagerList_items
>(NOTIFICATION_MANAGER_LIST);

export const useUnReadNotifiFind = generateQueryHook<
    unReadSystemNotiFind,
    unReadSystemNotiFind_UnReadSystemNotiFind_data[],
    undefined
>(UNREAD_SYSTEM_NOTI_FIND);
