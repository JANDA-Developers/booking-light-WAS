import { TransactionStatus } from "../type/api";

export const payStatusKr = (status:TransactionStatus | null | "" = "") => {

    switch(status) {
        case null:
            return ""
        case TransactionStatus.CANCELED:
            return "결제취소"
        case TransactionStatus.PENDING:
            return "결제진행중"
        case TransactionStatus.DONE:
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
        case TransactionStatus.DONE:
            return "환불완료"
    }
}
