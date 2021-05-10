import React, { useContext, useState } from "react";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import {
    Fbooking,
    Fpurchase,
    purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items,
    purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items,
    purchaseListForBusinessUser_PurchaseListForBusinessUser_items,
} from "../../../type/api";
import { yyyymmddHHmm } from "../../../utils/dateFormat";
import {
    countDetailSummaryString,
    payMethodKr,
    payStatusKr,
    purchaseSummary,
} from "../../../utils/enumConverter";
import { autoHypen, Bold, JDtypho, Small } from "@janda-com/front";
import { StatusBadge } from "../../../component/statusBadges/StatusBadges";
import AppContext from "../../../context";

export type TBundleRow = Partial<Fbooking>;

interface IProp extends Partial<IJDTableProps> {
    purchases: TBundleRow[];
}
export const PurchaseTable: React.FC<IProp> = ({ purchases, ...props }) => {
    const { isShoppingType } = useContext(AppContext);
    let columns: JDcolumn<TBundleRow>[] = [
        {
            Header: () => <div>구매일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>상품</div>,
            accessor: "itemName",
            Cell: ({ original }) => {
                return (
                    <Small style={{ whiteSpace: "pre-line" }}>
                        {countDetailSummaryString(original.countDetails || [])}{" "}
                    </Small>
                );
            },
        },
        {
            Header: () => <div>결제수단</div>,
            accessor: "paymethod",
            Cell: ({ original: { paymethod, paymentStatus } }) => {
                return (
                    <div>
                        <JDtypho mb="tiny">{payMethodKr(paymethod)}</JDtypho>
                        <StatusBadge status={paymentStatus!}>
                            {payStatusKr(paymentStatus)}
                        </StatusBadge>
                    </div>
                );
            },
            skip: true,
        },
        {
            Header: () => <div>{isShoppingType ? "구매자명" : "예약자명"}</div>,
            accessor: "purchaserName",
            Cell: ({ original: { purchaserName, _id } }) => {
                return <div>{purchaserName}</div>;
            },
        },
        {
            Header: () => <div>연락처</div>,
            accessor: "purchaserContact",
            Cell: ({ original: { purchaserContact } }) => {
                return <div>{autoHypen(purchaserContact)}</div>;
            },
        },
    ];

    columns = columns.filter((colum) => !colum.skip);
    return (
        <JDtable
            defaultPageSize={20}
            columns={columns}
            data={purchases}
            {...props}
        />
    );
};
