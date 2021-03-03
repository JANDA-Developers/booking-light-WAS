import React, { useState } from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { purchaseListForBusinessUser_PurchaseListForBusinessUser_items } from '../../../type/api';
import { yyyymmdd, yyyymmddHHmm, yyyymmddHHmmLabel } from '../../../utils/dateFormat';
import { autoComma, Bold, JDbox, Small } from '@janda-com/front';
import { DisableBadge } from '../../../component/statusBadges/StatusBadges';
import { JDicon } from '../../../component/icons/Icons';
import { DateWithTimeRange, Taccent } from '../../../atom/format/DateFormat';
import { payMethodKr } from '../../../utils/enumConverter';

export type TproductRowData = Partial<purchaseListForBusinessUser_PurchaseListForBusinessUser_items>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete: (product: TproductRowData) => void;
    handleEdit: (product: TproductRowData) => void;
    handleView: (product: TproductRowData) => void;
    purchaseBundles: TproductRowData[]
}
export const PurchaseBundleTable: React.FC<IProp> = ({ purchaseBundles, handleDelete, handleEdit, handleView, ...props }) => {

    const [accent, setAccent] = useState<Taccent>("time")

    const handleChangeTimeView = () => {
        setAccent(accent === "time" ? "date" : "time")
    }

    const columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmmLabel(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>구매방법</div>,
            accessor: 'paymethod',
            Cell: ({ original: { paymethod } }) => {
                return payMethodKr(paymethod)
            },
        },
        {
            Header: () => <div>기능</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    <div>
                        <JDicon mb hover icon="edit" onClick={() => { handleEdit(original) }} />
                    </div>
                    <div>
                        <JDicon mb hover icon="addCircle" onClick={() => { handleView(original) }} />
                    </div>
                    <div>
                        <JDicon mb hover color="error" icon="trashCan" onClick={() => { handleDelete(original) }} />
                    </div>
                </span>
            },
        },
    ];

    return <JDtable columns={columns} data={purchaseBundles} {...props} />;
};

