import React from 'react';
import { JDcolumn, JDtable } from '@janda-com/janda-table';
import { DEFAULT_PAGINATION_SETTING, JDalign, JDbutton, JDcard, JDpagination, JDselect, usePagination } from '@janda-com/front';
import { InputText } from '@janda-com/front';

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
        Header: () => <div>예약자명예약자명예약자명예약자명예약자명</div>,
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

interface IProp { }

export const StaticList: React.FC<IProp> = () => {

    const paginationHook = usePagination(0);

    return <div>
        <JDcard>
            <JDalign>

            </JDalign>
        </JDcard>
        <div>
            <JDtable columns={DUMMY_COLUMNS} data={DUMMY_COLUMNS} />
        </div>
        <JDpagination
            pageCount={20}
            previousLabel="이전"
            nextLabel="이후"
            {...paginationHook}
            {...DEFAULT_PAGINATION_SETTING}
            {...paginationHook}
        />
        <JDalign flex>
            <JDselect autoSize size="small" />
            <InputText /> <JDbutton br="round" mode="flat" thema="black" size="small">검색</JDbutton>
        </JDalign>
    </div>
        ;
};

export default StaticList;
