import React, { useContext } from "react";
import JDtable, {
    IJDTableProps,
    JDcolumn,
} from "../../../component/table/Table";
import {
    itemFindById_ItemFindById_ItemBooking_products_ProductBooking,
    StoreType,
} from "../../../type/api";
import { hhmmRange, yyyymmdd } from "../../../utils/dateFormat";
import { autoComma, Bold, JDbox, JDtypho, Small } from "@janda-com/front";
import { JDicon } from "../../../component/icons/Icons";
import { DateWithTimeRange, Taccent } from "../../../atom/format/DateFormat";
import AppContext from "../../../context";
import { isForeverSale } from "../../../utils/productBookingUtils";
import { Clip } from "../../../atom/clip/Clip";

export type TproductRowData = Partial<itemFindById_ItemFindById_ItemBooking_products_ProductBooking>;

interface IProp extends Partial<IJDTableProps> {
    handleDelete?: (product: TproductRowData) => void;
    handleEdit?: (product: TproductRowData) => void;
    products: TproductRowData[];
}
export const ProductTable: React.FC<IProp> = ({
    products,
    handleDelete,
    handleEdit,
    ...props
}) => {
    const {
        type,
        isTimeMall,
        isDateRangeMall,
        isShoppingType,
        FACTORY,
    } = useContext(AppContext);
    let columns: JDcolumn<TproductRowData>[] = [
        {
            Header: () => <div>상품코드</div>,
            accessor: "code",
            Cell: ({ value }) => {
                return <Clip>{value}</Clip>;
            },
        },
        {
            Header: () => <div>생성일</div>,
            accessor: "createdAt",
            Cell: ({ original: { createdAt } }) => {
                return <div>{yyyymmdd(createdAt)}</div>;
            },
        },
        {
            Header: () => <div>판매기간</div>,
            width: 200,
            accessor: "dateRangeForSale",
            Cell: ({ original: { dateRangeForSale } }) => {
                const isForever = isForeverSale(dateRangeForSale);
                if (isForever) return "판매무기한";
                // TODO N일전 셀렉터 흐음... 최소 N일전 ? 이런식으로
                // 0일전일때는 시간 단위로 ..!
                // 판매기한은 N일 전까지로 표기해야함.
                return (
                    <DateWithTimeRange
                        from={dateRangeForSale?.from}
                        to={dateRangeForSale?.to}
                    />
                );
            },
        },
        {
            Header: () => (
                <div>{isDateRangeMall ? "사용일자" : "사용시간"}</div>
            ),
            width: 200,
            accessor: "dateRangeForUse",
            Cell: ({ original: { dateRangeForUse } }) => {
                const Range = FACTORY.dateRangeViewFactory;
                if (!dateRangeForUse) return <></>;
                return <Range dateRangeForUse={dateRangeForUse} />;
            },
        },
        {
            Header: () => {
                if (isTimeMall) return <div>가격 / 수량</div>;
                return <div>항목/가격/수량</div>;
            },
            accessor: "capacityDetails",
            Cell: ({ original: { capacityDetails, price, capacity } }) => {
                if (isTimeMall)
                    return (
                        <div>
                            {autoComma(price)} / {capacity}명
                        </div>
                    );

                return (
                    <div>
                        {capacityDetails?.map((cd) => (
                            <JDbox
                                mb="tiny"
                                padding={1}
                                theme="grey1"
                                key={cd.key}
                            >
                                <Bold size="small" component="div">
                                    {cd.label}
                                </Bold>
                                <Small component="div">
                                    {autoComma(cd.price)}원
                                </Small>
                                <Small component="div">{cd.count}개</Small>
                            </JDbox>
                        ))}
                    </div>
                );
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
            accessor: "_id",
            Cell: ({ original }) => {
                return (
                    <span>
                        {handleEdit && (
                            <div>
                                <JDicon
                                    mb
                                    hover
                                    icon="pen"
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

    const remove = (accessor: keyof TproductRowData) => {
        columns = columns.filter((colum) => colum.accessor !== accessor);
    };

    if (type === StoreType.SHOPPING) {
        remove("dateRangeForUse");
    } else {
        remove("dateRangeForSale");
    }
    if (!handleEdit && !handleDelete) {
        remove("_id");
    }

    return (
        <JDtable
            defaultPageSize={20}
            columns={columns}
            data={products}
            {...props}
        />
    );
};
