import React from 'react';
import { JDicon, Small } from '@janda-com/front';
import { settlementMallList_SettlementMallList_items } from '../../type/api';
import JDtable, { IJDTableProps, JDcolumn } from '../../component/table/Table';
import { yyyymmddHHmm } from '../../utils/dateFormat';
import { Clip } from "../../atom/clip/Clip"
import { BankCodeKr, Ratio } from '../../type/const';

export type TMallData = settlementMallList_SettlementMallList_items;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TMallData) => void;
    handleView?: (product: TMallData) => void;
    malls: TMallData[]
}
export const SuperMallTable: React.FC<IProp> = ({ malls, handleDelete, handleView, ...props }) => {
    const columns: JDcolumn<TMallData>[] = [
        {
            Header: () => <div>이름</div>,
            accessor: 'submallName',
            Cell: ({ value }) => {
                return <Clip>{value}</Clip>;
            },
        },
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>은행</div>,
            accessor: 'bankCode',
            Cell: ({ original: { bankCode } }) => {
                return <div>{BankCodeKr[bankCode]}</div>;
            },
        },
        {
            Header: () => <div>계좌번호</div>,
            accessor: 'accountNumber',
            Cell: ({ value }) => {
                return value;
            },
        },
        {
            Header: () => <div>계좌주</div>,
            accessor: 'accountHolder',
            Cell: ({ original: { accountHolder } }) => {
                return <div>{accountHolder}</div>;
            },
        },
        {
            Header: () => <div>ID</div>,
            accessor: 'submallId',
            Cell: ({ original: { submallId } }) => {
                return <Clip size="small">{submallId}</Clip>;
            },
        },
        {
            Header: () => <div>기능</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    {handleView && <div>
                        <JDicon mb hover icon="magnifier" onClick={() => { handleView(original) }} />
                    </div>}
                    {handleDelete && <div>
                        <JDicon mb hover color="error" icon="close" onClick={() => { handleDelete(original) }} />
                    </div>}
                </span>
            },
        },
    ];

    return <JDtable defaultPageSize={20} columns={columns} data={malls} {...props} />;
};
