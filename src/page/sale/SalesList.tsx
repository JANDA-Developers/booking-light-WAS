import { autoComma, Excel, DEFAULT_PAGINATION_SETTING, Flex, JDalign, JDcard, JDcontainer, JDpageHeader, JDpagination, useModal, WindowSize, isYYYYMMDD } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { JDcolumn, JDSelectableJDtable, useCheckBoxTable } from '@janda-com/janda-table';
import React from 'react';
import JDsearchBar from '../../atom/SearchBar';
import SortHead from '../../atom/TableSortHead';
import { ItemModal } from '../../component/itemModal/ItemModal';
import { itemList_ItemList_items as IItem, _FileSort, _ItemFilter, _ItemSort } from '../../type/api';
import { IsaleListContext } from "./SalesListWrap";
import { TItemModalInfo } from "../../component/itemModal/ItemModal"
import dayjs from "dayjs";
import ActBtn from "../../component/btns/ActBtn"
import { getExcelData } from './getExcelData';
import { isDateFilter } from '../../utils/filter';
import { ItemCreateModal } from '../../component/itemModal/ItemCreateModal';
import { toPhoneNumber } from '../../utils/format';

interface IProp {
    context: IsaleListContext
}


type TSearchType = "useDate" | "createAt" | "name" | "productName";

const filtersOps: IselectedOption<TSearchType>[] = [
    {
        label: "예약자명",
        value: "name"
    }, {
        label: "이용날짜",
        value: "useDate"
    }, {
        label: "생성일자",
        value: "createAt"
    }, {
        label: "상품이름",
        value: "productName"
    }
]


export const SalesList: React.FC<IProp> = ({ context }) => {
    const { items, loading, pageInfo, paginatorHook, sort, filter, setFilter, setSort, setViewCount, viewCount, sorter } = context;
    const selectTableHook = useCheckBoxTable([items[0]?._id], items.map(i => i._id));
    const itemModalHook = useModal<TItemModalInfo>(false, {});
    const itemCreateModalHook = useModal();

    const columns: JDcolumn<IItem>[] = [
        {
            Header: () => <div>아이디</div>,
            accessor: 'code',
            Cell: ({ original }) => {
                return <div>{original.code}</div>;
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
                return <div>{toPhoneNumber(value)}</div>;
            },
        },
        {
            Header: () => <SortHead
                decrease={sorter.in(_ItemSort.fromTm_desc)}
                onClick={() => {
                    sorter.swtich("fromTm")
                }}>
                이용일
                </SortHead>,
            accessor: 'fromTm',
            Cell: ({ value }) => {
                const from = dayjs(value).format("YYYY-MM-DD");
                return <Flex>{from}</Flex>;
            },
        },
        {
            Header: () => <SortHead
                onClick={() => {
                    sorter.swtich("createdAt")
                }}
                decrease={sorter.in(_ItemSort.createdAt_desc)}>
                예약일
            </SortHead>,
            accessor: 'createdAt',
            Cell: ({ value }) => {
                return <div>{value}</div>;
            },
        },
        {
            Header: () => <div>구매상품</div>,
            accessor: 'product',
            Cell: ({ original }) => {
                const { name } = original.product;
                return <div>{name}</div>;
            },
        },
        {
            Header: () => <div>결제금액</div>,
            accessor: 'transaction',
            Cell: ({ original }) => {
                const amount = original.transaction?.paidAmount || 0;
                return <div>{autoComma(amount)}</div>;
            },
        },
        {
            Header: () => <div>결제상태</div>,
            accessor: 'transaction',
            Cell: ({ original }) => {
                const amount = original.transaction?.paidAmount || 0;
                return <div>{autoComma(amount)}</div>;
            },
        },
    ];

    return <JDcontainer verticalPadding size={WindowSize.full}>
        <JDpageHeader title="판매목록" desc="판매 내역을 설정한 순서대로 정렬하여 나타냅니다." />
        <JDcard mb="large">
            <div className="salesList">
                <JDalign mr="normal" mb="normal">
                    <ActBtn mode="border" mr="normal">
                        문자 전송
                    </ActBtn>
                    <Excel element={<ActBtn mode="border" mr="normal" >엑셀출력</ActBtn>} data={getExcelData(items)} />
                    <ActBtn onClick={() => {
                        itemCreateModalHook.openModal()
                    }} mr="normal" thema="grey4">
                        예약 추가
                    </ActBtn>
                    <ActBtn mr="normal" thema="error">
                        예약 삭제
            </ActBtn>
                </JDalign>
                <JDSelectableJDtable
                    {...selectTableHook}
                    loading={false}
                    columns={columns}
                    data={items}
                    keyField="_id"
                />
            </div>
        </JDcard>
        <Flex center>
            <JDpagination
                mb="large"
                pageCount={20}
                previousLabel="이전"
                nextLabel="이후"
                {...DEFAULT_PAGINATION_SETTING}
                {...paginatorHook}
            />
        </Flex>
        <Flex center>
            <JDsearchBar<TSearchType> onSearch={(v, filter) => {
                // switch (filter) {
                //     case "name": {
                //         setFilter({
                //             _in_
                //         })
                //         break;
                //     }
                //     case "createAt": {
                //         if(isYYYYMMDD(v)) {
                //             const date = dayjs(v);
                //             setFilter({
                //                 fromTm_lte: v,
                //                 fromTm_gte: v
                //             })
                //         }
                //         break;
                //     }
                //     case "useDate": {
                //         if(isYYYYMMDD(v)) {
                //             const date = dayjs(v);
                //             setFilter({
                //                 fromTm_lte: v,
                //                 fromTm_gte: v
                //             })
                //         }
                //         break;
                //     }
                // }
            }} placeholder="" datePick={isDateFilter(filter)} defaultOp={filtersOps[0]} filterOps={filtersOps} />
        </Flex>
        <ItemCreateModal onSuccess={(item) => {
            itemModalHook.openModal({
                user: item
            })
        }} modalHook={itemCreateModalHook} />
        <ItemModal modalHook={itemModalHook} />
    </JDcontainer>;
};

export default SalesList;
