import { TMultiColumnData, TMultiColumns } from "@janda-com/front/dist/components/excel/Excel";
import {itemList_ItemList_items as IITem} from "../../type/api";
import dayjs from "dayjs";
import { autoComma } from "@janda-com/front";
import { payStatusKr, refundStatusKr } from "../../utils/enumConverter";

export const getExcelData = (items:IITem[]):any[] => {

    const columns = ["코드","예약자","상품","수량","예약일","방문일","가격","결제상태","환불상태"]; 

    const datas = items.map((item):string[]=> {
        return [
            item._id,
            item.name || "",
            item.product.name,
            item.count.toString(),
            dayjs(item.createdAt).format("YYYY-MM-DD"),
            dayjs(item.fromTm).format("YYYY-MM-DD"),
            autoComma(item.transaction?.paidAmount || 0),
            payStatusKr(item.transaction?.paymentStatus),
            refundStatusKr(item.transaction?.refundStatus)
        ]
    })

    return [{
        columns,
        data:datas
    }]
}