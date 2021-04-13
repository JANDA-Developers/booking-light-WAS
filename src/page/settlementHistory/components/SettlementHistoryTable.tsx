import React from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { yyyymmddHHmm } from '../../../utils/dateFormat';
import { JDicon } from '../../../component/icons/Icons';
import { notificationMethodKr } from '../../../utils/enumConverter';
import { settlementTransferList_SettlementTransferList_items } from '../../../type/api';
import { autoComma } from '@janda-com/front';
import { StatusBadge } from '../../../component/statusBadges/StatusBadges';
import { BankCodeKr } from '../../../type/const';

export type TBundleRow = Partial<settlementTransferList_SettlementTransferList_items>;

interface IProp extends Partial<IJDTableProps> {
    handleView?: (product: TBundleRow) => void;
    histories: TBundleRow[]
}
export const SettlementHistoryTable: React.FC<IProp> = ({ histories, handleView, ...props }) => {

    const columns: JDcolumn<TBundleRow>[] = [
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>수량</div>,
            accessor: 'amount',
            Cell: ({ original: { amount } }) => {
                return <span>{autoComma(amount)}</span>
            },
        },
        {
            Header: () => <div>상태</div>,
            accessor: 'status',
            Cell: ({ original: { status } }) => {
                return <StatusBadge status={status!} />
            },
        },
        {
            Header: () => <div>지급일</div>,
            accessor: 'settlementDate',
            Cell: ({ original: { settlementDate } }) => {
                return yyyymmddHHmm(settlementDate)
            },
        },
        {
            Header: () => <div>계좌주</div>,
            accessor: 'accountHolder',
            Cell: ({ original: { accountHolder } }) => {
                return <div>{accountHolder}</div>
            },
        },
        {
            Header: () => <div>은행</div>,
            accessor: 'bankCode',
            Cell: ({ original: { bankCode } }) => {
                return <div>{BankCodeKr[bankCode!]}</div>
            },
        },
        {
            Header: () => <div>메세지</div>,
            accessor: 'message',
            Cell: ({ original: { message } }) => {
                return <span>
                    {message}
                </span>
            },
        },
    ];


    return <JDtable defaultPageSize={20} columns={columns} data={histories} {...props} />;
};

