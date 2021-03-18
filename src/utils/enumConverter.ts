import { method } from "lodash";
import { NotificationMethod, Paymethod, Status, StoreType, TransactionStatus } from "../type/api";


export const refundStatusKr = (status: TransactionStatus | null | "" = "" ) => {
    switch(status) {
        case null:
            return ""
        case TransactionStatus.CANCELED:
            return "환불취소"
        case TransactionStatus.PENDING:
            return "환불진행중"
        case TransactionStatus.COMPLETED:
            return "환불완료"
    }
}


export const payMethodKr = (method:Paymethod | undefined) => {

    switch(method) {
        case Paymethod.BANK_TRANSFER:
            return "무통장입금"
        case Paymethod.BANK_TRANSFER:
            return "카드결제"
        case Paymethod.CASH:
            return "현금결제"
    }

    return ""
}

export const payStatusKr = (status:Status) => {

    switch(status) {
        case Status.CANCELED:
            return "취소"
        case Status.COMPLETED:
            return "결제완료"
        case Status.PENDING:
            return "입금확인중"
    }

    return ""
}


export const storeTypeKr = (type:StoreType) => {

    switch(type) {
        case StoreType.ACCOMMODATION:
            return "숙박"
        case StoreType.CAFE:
            return "카페"
        case StoreType.LEISURE:
            return "레져"
        case StoreType.PUP:
            return "펍"
        case StoreType.RENTAL:
            return "대여"
        case StoreType.RESTAURANT:
            return "식당"
        case StoreType.SHOPPING:
            return "쇼핑"
        case StoreType.SHOW:
            return "극장"
        case StoreType.ELSE:
            return "기타"
    }

    return ""
}

export const notificationMethodKr = (method?:NotificationMethod) => {

    switch(method) {
        case NotificationMethod.EMAIL:
            return "이메일"
        case NotificationMethod.SMS:
            return "SMS"
    }

    return ""
}

export const isRegisteredToAligoKr = (flag:boolean) => {
    return flag ? "등록완료" : "등록진행중"
}
