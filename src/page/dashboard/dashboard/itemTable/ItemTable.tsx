import { JDcolumn, JDtable } from '@janda-com/janda-table';
import { itemList_ItemList_items as IItem } from "../../../../type/api"
import React from 'react';

interface IProp {
    datas: IItem[]
}

export const ItemTable: React.FC<IProp> = ({ datas }) => {

    const itemColums: JDcolumn<IItem>[] = [
        {
            Header: () => <div>아이디</div>,
            accessor: '_id',
            Cell: ({ value }) => {
                return <div>{value}</div>;
            },
        },
        {
            Header: () => <div>예약자명</div>,
            accessor: 'name',
            Cell: ({ value }) => {
                return <div>{value}</div>;
            },
        },
        {
            Header: () => <div>연락처</div>,
            accessor: 'phoneNumber',
            Cell: ({ value }) => {
                return <div>{value}</div>;
            },
        },
        {
            Header: () => <div>기타</div>,
            accessor: 'product',
            Cell: ({ value }) => {
                return <div>{value?.name}</div>;
            },
        },
    ];

    return <JDtable columns={itemColums} data={datas} />
};
