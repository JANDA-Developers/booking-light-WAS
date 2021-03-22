import React, { useState } from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { productList_ProductList_items } from '../../../type/api';
import { yyyymmdd, yyyymmddHHmm, yyyymmddHHmmLabel, yyyymmddHHmmRange } from '../../../utils/dateFormat';
import { autoComma, Bold, Flex, JDbox, JDlabel, JDtypho, Small } from '@janda-com/front';
import { DisableBadge } from '../../../component/statusBadges/StatusBadges';
import { JDicon } from '../../../component/icons/Icons';
import { DateWithTimeRange, Taccent } from '../../../atom/format/DateFormat';
import { Info } from '../../../atom/Info';

export type TproductRowData = Partial<productList_ProductList_items>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TproductRowData) => void;
    handleEdit?: (product: TproductRowData) => void;
    products: TproductRowData[]
}
export const ProductTable: React.FC<IProp> = ({ products, handleDelete, handleEdit, ...props }) => {
    const columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>상품코드</div>,
            accessor: 'code',
            Cell: ({ value }) => {
                return <div>{value}</div>;
            },
        },
        {
            Header: () => <div>생성일</div>,
            accessor: 'createdAt',
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmdd(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>판매기간</div>,
            width: 200,
            accessor: 'dateRangeForSale',
            Cell: ({ original: { dateRangeForSale } }) => {
                return <DateWithTimeRange from={dateRangeForSale?.from} to={dateRangeForSale?.to} />;
            },
        },
        {
            Header: () => <div>사용시간</div>,
            width: 200,
            accessor: 'dateRangeForUse',
            Cell: ({ original: { dateRangeForUse } }) => {
                return <DateWithTimeRange from={dateRangeForUse?.from} to={dateRangeForUse?.to} />;
            },
        },
        {
            Header: () => <div>항목/가격/수량</div>,
            accessor: 'capacityDetails',
            Cell: ({ original: { capacityDetails } }) => {
                return <div>{capacityDetails?.map(cd => <JDbox mb="tiny" padding={1} theme="grey1" key={cd.key}>
                    <Bold size="small" component="div">{cd.label}</Bold>
                    <Small component="div">{autoComma(cd.price)}원</Small>
                    <Small component="div">{cd.count}개</Small>
                </JDbox>)}</div>;
            },
        },
        // {
        //     Header: () => <div>활성화</div>,
        //     accessor: 'disabled',
        //     width: 80,
        //     Cell: ({ original: { disabled } }) => {
        //         return <DisableBadge disabled={disabled} />;
        //     },
        // },
        {
            Header: () => <div>기능</div>,
            width: 80,
            accessor: '_id',
            Cell: ({ original }) => {
                return <span>
                    {handleEdit && <div>
                        <JDicon mb hover icon="pen" onClick={() => { handleEdit(original) }} />
                    </div>}
                    {handleDelete && <div>
                        <JDicon mb hover color="error" icon="close" onClick={() => { handleDelete(original) }} />
                    </div>}
                </span>
            },
        },
    ];

    return <JDtable columns={columns} data={products} {...props} />;
};
