import React from "react";
import { notificationManagerList_NotificationManagerList_items } from "../../type/api";
import JDtable, { IJDTableProps, JDcolumn } from "../../component/table/Table";
import { Clip } from "../../atom/clip/Clip";

export type TproductRowData = Partial<notificationManagerList_NotificationManagerList_items>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TproductRowData) => void;
    handleEdit?: (product: TproductRowData) => void;
    managers: TproductRowData[];
}
export const SuperSmsManagerTable: React.FC<IProp> = ({
    managers,
    handleDelete,
    handleEdit,
    ...props
}) => {
    const columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>등록 발신자들</div>,
            accessor: "senders",
            Cell: ({ original: { senders } }) => {
                return <Clip>{senders?.join(",")}</Clip>;
            },
        },
        {
            Header: () => <div>pointRemains</div>,
            width: 200,
            accessor: "pointRemains",
            Cell: ({ original: { pointRemains } }) => {
                return <div>{pointRemains}</div>;
            },
        },
    ];

    return (
        <JDtable
            defaultPageSize={20}
            columns={columns}
            data={managers}
            {...props}
        />
    );
};

export default SuperSmsManagerTable;
