import React, { useContext, useState } from 'react';
import JDtable, { IJDTableProps, JDcolumn } from '../../../component/table/Table';
import { FproductAutomator_templates, itemFindById_ItemFindById_ItemBooking_products, itemFindById_ItemFindById_ItemBooking_products_ProductBooking, ProductBookingTemplateInput, productList_ProductList_items, productList_ProductList_items_ProductBooking, StoreType } from '../../../type/api';
import { hhmm24ToHHmm, hhmmRange, yyyymmdd, yyyymmddHHmm, yyyymmddHHmmLabel, yyyymmddHHmmRange } from '../../../utils/dateFormat';
import { autoComma, Bold, Flex, JDbox, JDlabel, JDtypho, Small } from '@janda-com/front';
import { DisableBadge } from '../../../component/statusBadges/StatusBadges';
import { JDicon } from '../../../component/icons/Icons';
import { DateWithTimeRange, Taccent } from '../../../atom/format/DateFormat';
import { Info } from '../../../atom/Info';
import AppContext from '../../../context';

export type TproductRowData = Partial<ProductBookingTemplateInput>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TproductRowData) => void;
    handleEdit?: (product: TproductRowData) => void;
    products: (ProductBookingTemplateInput | FproductAutomator_templates)[]
}
export const ProductTemplateTable: React.FC<IProp> = ({ products, handleDelete, handleEdit, ...props }) => {
    let columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>사용시간</div>,
            accessor: 'timeRangeForUse',
            Cell: ({ original: { timeRangeForUse } }) => {
                return hhmm24ToHHmm(timeRangeForUse?.start || 0) + "~" + hhmm24ToHHmm(timeRangeForUse?.end || 0);
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
        {
            Header: () => <div>편집</div>,
            width: 80,
            accessor: 'price',
            Cell: ({ original }) => {
                return <div>
                    <JDicon mb hover color="error" icon="close" onClick={() => { handleDelete?.(original) }} />
                </div>;
            },
        },
    ];

    return <JDtable defaultPageSize={20} columns={columns} data={products} {...props} />;
};
