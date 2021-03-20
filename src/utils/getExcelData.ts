import { autoComma } from "@janda-com/front";
import dayjs from "dayjs";
import { purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items } from "../type/api";
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

