import React, { useState } from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { notificationHistory_NotificationHistory_items, purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items, purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items, purchaseListForBusinessUser_PurchaseListForBusinessUser_items } from '../../../type/api';
import { yyyymmddHHmm } from '../../../utils/dateFormat';
import { JDicon } from '../../../component/icons/Icons';
import { Taccent } from '../../../atom/format/DateFormat';
import { notificationMethodKr, payMethodKr } from '../../../utils/enumConverter';
import { autoHypen } from '@janda-com/front';
import { Clip } from '../../../atom/clip/Clip';

export type TBundleRow = Partial<notificationHistory_NotificationHistory_items>;

interface IProp extends Partial<IJDTableProps> {
    handleView?: (product: TBundleRow) => void;
    histories: TBundleRow[]
}
export const SmsHistoryTable: React.FC<IProp> = ({ histories, handleView, ...props }) => {


    const columns: JDcolumn<TBundleRow>[] = [
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>발신내용</div>,
            accessor: 'content',
            Cell: ({ original: { content } }) => {
                return <span>{content}</span>
            },
        },
        {
            Header: () => <div>수신자</div>,
            accessor: 'receivers',
            Cell: ({ original: { receivers } }) => {
                return <span>{receivers?.join("|")}</span>
            },
        },
        {
            Header: () => <div>발신방법</div>,
            accessor: 'method',
            Cell: ({ original: { method } }) => {
                return notificationMethodKr(method)
            },
        },
        {
            Header: () => <div>이용금액</div>,
            accessor: 'pointConsumed',
            Cell: ({ original: { pointConsumed } }) => {
                return <div>{pointConsumed}</div>
            },
        },
        {
            Header: () => <div>발신자</div>,
            accessor: 'sender',
            Cell: ({ original: { sender } }) => {
                return <div>{sender}</div>
            },
        },
        {
            Header: () => <div>상세</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    <div>
                        {handleView && <JDicon mb hover icon="pen" onClick={() => { handleView(original) }} />}
                    </div>
                </span>
            },
        },
    ];


    return <JDtable defaultPageSize={20} columns={columns} data={histories} {...props} />;
};

