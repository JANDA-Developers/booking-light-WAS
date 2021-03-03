import { Paymethod, TransactionStatus } from "../type/api";

export const payStatusKr = (status:TransactionStatus | null | "" = "") => {

    switch(status) {
        case null:
            return ""
        case TransactionStatus.CANCELED:
            return "결제취소"
        case TransactionStatus.PENDING:
            return "결제진행중"
        case TransactionStatus.COMPLETED:
            return "결제완료"
    }
}

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
