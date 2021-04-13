import { autoComma } from "@janda-com/front";
import dayjs from "dayjs";
import { purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items, settlementTransferList_SettlementTransferList_items } from "../type/api";
import { yyyymmddHHmm } from "./dateFormat";
import { payStatusKr, purchaseBundleProductsDescribe } from "./enumConverter";

export const getExcelByBookings = (items:purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items[]):any[] => {

    const columns = ["코드","예약자","연락처","인원","예약일","가격","결제상태"]; 

    const datas = items.map((item):string[]=> {
        return [
            item.code,
            item.purchaserName || "",
            item.purchaserContact,
            purchaseBundleProductsDescribe(item),
            dayjs(item.createdAt).format("YYYY-MM-DD"),
            autoComma(item.pricePaymentPending),
            payStatusKr(item.paymentStatus),
        ]
    })

    return [{
        columns,
        data:datas
    }]
}




export const getExcelBySettlement = (items:settlementTransferList_SettlementTransferList_items[]):any[] => {

    const columns = ["생성일","금액","은행코드","메세지","상태","계좌주","계좌"]; 

    const datas = items.map((item):string[]=> {
        return [
            yyyymmddHHmm(item.createdAt),
            item.amount.toString(),
            item.bankCode,
            item.message || "",
            item.status,
            item.accountHolder,
            item.accountNumber,
        ]
    })

    return [{
        columns,
        data:datas
    }]
}

