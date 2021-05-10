import { autoComma } from "@janda-com/front";
import { method } from "lodash";
import purchase from "../page/buypageRouter/page/helpers/purchase";
import {
    Fbooking,
    Fbooking_countDetails,
    Fpurchase,
    NotificationMethod,
    Paymethod,
    purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items,
    purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases,
    Status,
    StoreType,
    TransactionStatus,
} from "../type/api";
import { BuyPageType } from "../type/enum";
import {
    hhmm,
    MMDDhhmmRange,
    yyyymmddHHmmRangeLabel,
    yyyymmddLabelRange,
} from "./dateFormat";
import { lastOf } from "./lastOf";

export const refundStatusKr = (
    status: Status | TransactionStatus | null | "" = ""
) => {
    switch (status) {
        case null:
            return "-";
        case TransactionStatus.CANCELED:
            return "환불취소";
        case TransactionStatus.PENDING:
            return "환불진행중";
        case TransactionStatus.COMPLETED:
            return "환불완료";
    }
};

export const payMethodKr = (method: Paymethod | undefined) => {
    switch (method) {
        case Paymethod.BANK_TRANSFER:
            return "무통장입금";
        case Paymethod.BANK_TRANSFER:
            return "카드결제";
        case Paymethod.CASH:
            return "현금결제";
        case Paymethod.CARD:
            return "카드결제";
    }

    return "";
};

export const payStatusKr = (status?: Status) => {
    switch (status) {
        case Status.CANCELED:
            return "취소";
        case Status.COMPLETED:
            return "결제완료";
        case Status.PENDING:
            return "입금확인중";
    }

    return "";
};

export const statusKr = (status?: Status) => {
    switch (status) {
        case Status.CANCELED:
            return "취소";
        case Status.COMPLETED:
            return "완료";
        case Status.PENDING:
            return "대기";
    }

    return "";
};

export const storeTypeKr: Record<StoreType, string> = {
    ACCOMMODATION: "숙박",
    CAFE: "카페",
    ELSE: "기타",
    EXPERIENCE: "체험",
    MUSEUM: "박물관",
    LEISURE: "레져",
    PUP: "펍",
    RENTAL: "대여",
    RESTAURANT: "식당",
    SHOPPING: "쇼핑",
    SHOW: "공연",
};

export const BuyPageTypeMatcher: Record<StoreType, BuyPageType> = {
    ACCOMMODATION: BuyPageType.DAY_RANGE,
    CAFE: BuyPageType.RESERVATION_NORMAL,
    ELSE: BuyPageType.RESERVATION_NORMAL,
    PUP: BuyPageType.RESERVATION_NORMAL,
    EXPERIENCE: BuyPageType.TIME_MALL,
    LEISURE: BuyPageType.TIME_MALL,
    RENTAL: BuyPageType.TIME_MALL,
    RESTAURANT: BuyPageType.TIME_MALL,
    MUSEUM: BuyPageType.TIME_MALL,
    SHOW: BuyPageType.TIME_MALL,
    SHOPPING: BuyPageType.SHOPPING_MALL,
};

export const notificationMethodKr = (method?: NotificationMethod) => {
    switch (method) {
        case NotificationMethod.EMAIL:
            return "이메일";
        case NotificationMethod.SMS:
            return "SMS";
    }

    return "";
};

export const isRegisteredToAligoKr = (flag: boolean) => {
    return flag ? "등록완료" : "등록진행중";
};

export const countDetailSummaryString = (details: Fbooking_countDetails[]) => {
    return details
        ?.map(
            (detail) =>
                detail.label +
                ":" +
                detail.count +
                " 가격:" +
                autoComma(detail.price)
        )
        .join("\n");
};

export const purchaseBundleProductsDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
) => {
    const resultString = item.purchases.map(
        (purchase) => purchaseSummary(purchase) + "\n"
    );
    return resultString.join("\n");
};
export const purchaseBundleProductsDescribes = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items[]
): string => {
    return item.map((item) => purchaseBundleProductsDescribe(item)).join("");
};
export const purchaseSummary = (
    purchase: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases
): string => {
    return (
        MMDDhhmmRange(purchase.purchasedProduct.dateRangeForUse) +
        "\n" +
        countDetailSummaryString(purchase.countDetails)
    );
};

export const purchaseBundleProductsShoppingDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
) => {
    const resultString = item.purchases.map(
        (purchase) =>
            purchase.itemName + ":" + purchaseShoppingSummary(purchase) + "\n"
    );
    return resultString.join("\n");
};

export const purchaseBundleShoppingDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items[]
) => {
    return item
        .map((item) => +purchaseBundleProductsShoppingDescribe(item))
        .join("");
};
export const purchaseShoppingSummary = (
    purchase: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases
): string => {
    return countDetailSummaryString(purchase.countDetails);
};

export const purchaseBundleProductsTimeDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
) => {
    const startTime = item.useTimes?.[0];
    const endTime = lastOf(item.useTimes || []);

    if (startTime && endTime)
        return hhmm(startTime.from) + "~" + hhmm(endTime.to);
    return "";
};

export const purchaseBundleDayRangeDescribe = (
    item: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items
) => {
    const startTime = item.useTimes?.[0];
    const endTime = lastOf(item.useTimes || []);

    const timeDescribe = () => {
        if (startTime && endTime)
            return yyyymmddLabelRange(startTime.from, endTime.to);
    };

    const itemDescribe = () => {
        return item.itemNames[0];
    };

    const countDescribe = () => {
        return countDetailSummaryString(item.purchases?.[0]?.countDetails);
    };

    return timeDescribe() + "\n" + itemDescribe() + countDescribe();
};

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
