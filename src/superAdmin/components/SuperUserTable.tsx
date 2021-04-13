import React from 'react';
import { JDicon } from '@janda-com/front';
import { userList_UserList_items } from '../../type/api';
import JDtable, { IJDTableProps, JDcolumn } from '../../component/table/Table';
import { yyyymmddHHmm } from '../../utils/dateFormat';
import { Clip } from "../../atom/clip/Clip"


export type TproductRowData = Partial<userList_UserList_items>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TproductRowData) => void;
    handleEdit?: (product: TproductRowData) => void;
    products: TproductRowData[]
}
export const SuperUserTable: React.FC<IProp> = ({ products, handleDelete, handleEdit, ...props }) => {
    const columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>아이디</div>,
            accessor: '_id',
            Cell: ({ value }) => {
                return <Clip size="small">{value}</Clip>;
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
            Header: () => <div>이메일</div>,
            width: 200,
            accessor: 'email',
            Cell: ({ original: { email } }) => {
                return <Clip>{email}</Clip>;
            },
        },
        {
            Header: () => <div>이름</div>,
            width: 200,
            accessor: 'name',
            Cell: ({ original: { name } }) => {
                return name;
            },
        },
        {
            Header: () => <div>회사</div>,
            accessor: 'company',
            Cell: ({ original: { company } }) => {
                return <div>{company}</div>;
            },
        },
        {
            Header: () => <div>연락처</div>,
            accessor: 'phoneNumber',
            Cell: ({ original: { phoneNumber } }) => {
                return <Clip >{phoneNumber}</Clip>;
            },
        },
        {
            Header: () => <div>기능</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    {handleEdit && <div>
                        <JDicon mb hover icon="arrowBack" onClick={() => { handleEdit(original) }} />
                    </div>}
                    {handleDelete && <div>
                        <JDicon mb hover color="error" icon="close" onClick={() => { handleDelete(original) }} />
                    </div>}
                </span>
            },
        },
    ];

    return <JDtable defaultPageSize={20} columns={columns} data={products} {...props} />;
};
