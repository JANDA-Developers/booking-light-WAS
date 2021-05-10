import React from "react";
import { JDicon, Small } from "@janda-com/front";
import {
    storeList_StoreList_items,
    userList_UserList_items,
} from "../../type/api";
import JDtable, { IJDTableProps, JDcolumn } from "../../component/table/Table";
import { yyyymmddHHmm } from "../../utils/dateFormat";
import { Clip } from "../../atom/clip/Clip";
import { storeTypeKr } from "../../utils/enumConverter";
import JDphotoFrame from "../../component/photoFrame/PhotoFram";
import { Ratio } from "../../type/const";

export type TproductRowData = storeList_StoreList_items;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (store: TproductRowData) => void;
    handleEdit?: (store: TproductRowData) => void;
    stroes: TproductRowData[];
}
export const SuperStoreTable: React.FC<IProp> = ({
    stroes,
    handleDelete,
    handleEdit,
    ...props
}) => {
    const columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>코드</div>,
            accessor: "code",
            Cell: ({ value }) => {
                return <Clip>{value}</Clip>;
            },
        },
        {
            Header: () => <div>생성일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmddHHmm(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>이름</div>,
            width: 200,
            accessor: "name",
            Cell: ({ original: { name } }) => {
                return <div>{name}</div>;
            },
        },
        {
            Header: () => <div>타입</div>,
            width: 200,
            accessor: "type",
            Cell: ({ original: { type } }) => {
                return storeTypeKr[type!];
            },
        },
        {
            Header: () => <div>설명</div>,
            accessor: "description",
            Cell: ({ original: { description } }) => {
                return <Small>{description}</Small>;
            },
        },
        {
            Header: () => <div>사진</div>,
            accessor: "image",
            Cell: ({ original: { image } }) => {
                return (
                    <JDphotoFrame
                        style={{ width: "200px" }}
                        ratio={Ratio["16:9"]}
                        isBgImg
                        src={image?.uri}
                        unStyle={false}
                    />
                );
            },
        },
        {
            Header: () => <div>기능</div>,
            width: 80,
            accessor: "_id",
            Cell: ({ original }) => {
                return (
                    <span>
                        {handleEdit && (
                            <div>
                                <JDicon
                                    mb
                                    hover
                                    icon="arrowBack"
                                    onClick={() => {
                                        handleEdit(original);
                                    }}
                                />
                            </div>
                        )}
                        {handleDelete && (
                            <div>
                                <JDicon
                                    mb
                                    hover
                                    color="error"
                                    icon="close"
                                    onClick={() => {
                                        handleDelete(original);
                                    }}
                                />
                            </div>
                        )}
                    </span>
                );
            },
        },
    ];

    return (
        <JDtable
            defaultPageSize={20}
            columns={columns}
            data={stroes}
            {...props}
        />
    );
};
