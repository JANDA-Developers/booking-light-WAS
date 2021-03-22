import { autoComma } from "@janda-com/front";
import { method } from "lodash";
import purchase from "../page/buypageRouter/page/helpers/purchase";
import { Fbooking, Fbooking_countDetails, Fpurchase, NotificationMethod, Paymethod, purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items, Status, StoreType, TransactionStatus } from "../type/api";
import { MMDDhhmmRange } from "./dateFormat";

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
        case Paymethod.CARD:
            return "카드결제"
    }

    return ""
}

export const payStatusKr = (status?:Status) => {

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


export const statusKr = (status?:Status) => {

    switch(status) {
        case Status.CANCELED:
            return "취소"
        case Status.COMPLETED:
            return "완료"
        case Status.PENDING:
            return "대기"
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

export const purchaseBundleProductsDescribes = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items[]
):string => {
    return item.map(item => purchaseBundleProductsDescribe(item)).join("")
}


export const purchaseBundleProductsDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
) => {
    const resultString = item.purchases.map(purchase => (
         purchaseSummary(purchase) + "\n" 
    ))
    return resultString.join("|");
}

export const purchaseSummary = (purchase: Fbooking):string => {
    console.log({purchase});
    return  MMDDhhmmRange(purchase.purchasedProduct.dateRangeForUse) + "\n" + countDetailSummaryString(purchase.countDetails); 
}

export const countDetailSummaryString = (details:Fbooking_countDetails[]) => {
    return details?.map(detail =>  detail.label + ":" + detail.count + " 가격:" + autoComma(detail.price)).join("|");
}



// export const purchaseBundleProductsDescribe = (
//     item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
// ) => {
//     const resultString = item.purchases.map(purchase => (
//         '품명:' + purchase.itemName + "\n" +
//         '가격:' + autoComma(purchase.pricePaymentPending) + "\n" + 
//         '수량:' + purchaseSummary(purchase) + "\n" 
//     ))
//     return resultString.join("|");
// }
