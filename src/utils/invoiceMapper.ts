import { Action, FserviceUsageDetails, invoiceFindOne_InvoiceFindOne, ServiceUsageType } from "../type/api"

type UsageMap = Record<ServiceUsageType, FserviceUsageDetails | null>
export type UsageTypeMap = Record<Action, UsageMap>
 
export const serviceUsageMapper = (item:invoiceFindOne_InvoiceFindOne) => {

    const usage = {
         FILE: null,
         ITEM: null,
         NOTIFICATION: null,
         NOTIFICATION_EMAIL: null,
         NOTIFICATION_LMS: null,
         NOTIFICATION_MMS: null,
         NOTIFICATION_SMS: null,
         NOTIFICATION_TEMPLATE: null,
         PRODUCT: null,
         PRODUCT_AUTOMATOR: null,
         PURCHASE: null,
         SETTLEMENT: null,
         SETTLEMENT_MALL: null,
         STORE: null,
         USER: null,
         USER_BUSINESS: null,
         USER_CUSTOMER: null
    }
    
    const usageTypeMap:UsageTypeMap = {
        CREATE: {...usage},
        DELETE:{...usage},
        READ:{...usage},
        UPDATE:{...usage}
    }

    console.log({item})

    item.serviceUsageDetails.forEach((detail)=> {
        usageTypeMap[detail.action][detail.type] = detail
    })

    return usageTypeMap
}