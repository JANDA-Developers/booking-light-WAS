import { DEFAULT_PAGINATION_SETTING, IusePagination, JDalign, JDbutton, JDcard, JDcontainer, JDpageHeader, JDpagination, WindowSize } from '@janda-com/front';
import { JDcolumn, JDtable } from '@janda-com/janda-table';
import React from 'react';
import JDsearchBar from '../../atom/SearchBar';

type TFilterList = "ex1" | "ex2" | "ex3" | "ex4";


type TData = {
    _id: string;
    name: string;
    contact: string;
    contact2: string;
};

const DUMMY_DATA: TData[] = [
    {
        _id: '1',
        name: '김부킹',
        contact: '010-5237-4492',
        contact2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        _id: '2',
        name: '김부킹2',
        contact: '010-5237-4492',
        contact2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
    {
        _id: '3',
        name: '김부킹3',
        contact: '010-5237-4492',
        contact2:
            "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.",
    },
];

const DUMMY_COLUMNS: JDcolumn<TData>[] = [
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
        accessor: 'contact',
        Cell: ({ value }) => {
            return <div>{value}</div>;
        },
    },
    {
        Header: () => <div>기타</div>,
        accessor: 'contact2',
        Cell: ({ value }) => {
            return <div>{value}</div>;
        },
    },
];

interface IProp {
    paginationHook: IusePagination;

}

export const SalesList: React.FC<IProp> = ({ paginationHook }) => {
    return <JDcontainer verticalPadding size={WindowSize.full}>
        <JDpageHeader title="판매목록" desc="판매 내역을 설정한 순서대로 정렬하여 나타냅니다." />
        <JDcard>
            <div className="salesList">
                <JDalign mb="normal">
                    <JDbutton mode="border">
                        문자 전송
            </JDbutton>
                    <JDbutton mode="border">
                        엑셀 출력
            </JDbutton>
                    <JDbutton thema="grey4">
                        예약 추가
            </JDbutton>
                    <JDbutton thema="error">
                        예약 삭제
            </JDbutton>
                </JDalign>
                <JDtable columns={DUMMY_COLUMNS} data={DUMMY_DATA} />
            </div>
        </JDcard>
        <JDpagination
            pageCount={20}
            previousLabel="이전"
            nextLabel="이후"
            {...DEFAULT_PAGINATION_SETTING}
            {...paginationHook}
        />
        <JDsearchBar<TFilterList> onSearch={() => { }} defaultOp={{
            label: "ex1",
            value: "ex1"
        }} filterOps={[]} />
    </JDcontainer>;
};

export default SalesList;
