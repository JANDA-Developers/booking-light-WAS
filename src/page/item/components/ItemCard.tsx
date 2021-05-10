import {
    JDphotoFrame,
    Split,
    autoComma,
    Bold,
    Flex,
    JDbutton,
    JDcard,
    JDlist,
} from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext } from "react";
import { Clip } from "../../../atom/clip/Clip";
import { Info } from "../../../atom/Info";
import { Vertical } from "../../../atom/Vertical";
import PhotoFrame, { Photo } from "../../../component/photoFrame/PhotoFram";
import AppContext from "../../../context";
import {
    Fitem,
    itemFindById_ItemFindById,
    itemList_ItemList_items_ItemBooking,
} from "../../../type/api";
import { Ratio } from "../../../type/const";
import { yyyymmddHHmm, yyyymmddHHmmLabel } from "../../../utils/dateFormat";

interface IProp extends IJDcardProps {
    item: itemList_ItemList_items_ItemBooking;
    onDelete?: () => void;
    onEdit?: () => void;
}

export const ItemCard: React.FC<IProp> = ({
    item,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {
    const { isNonProfit } = useContext(AppContext);
    return (
        <JDcard
            foot={
                (handleDelete || handleEdit) && (
                    <div>
                        <JDbutton
                            br="no"
                            mr
                            onClick={handleEdit}
                            thema="primary"
                        >
                            수정하기
                        </JDbutton>
                        <JDbutton
                            br="no"
                            mr
                            onClick={handleDelete}
                            thema="error"
                        >
                            삭제하기
                        </JDbutton>
                    </div>
                )
            }
            head={item.name}
            className="itemCard"
            {...props}
        >
            <div>
                <Flex>
                    <div>
                        <Photo
                            ratio={Ratio["16:9"]}
                            isBgImg
                            className="itemCard__thumb"
                            file={item.thumbNail}
                        />
                    </div>
                    <Vertical margin={3} />
                    <div>
                        <Flex vCenter mb="small">
                            <Info
                                mr
                                label="아이템코드"
                                value={<Clip>{item.code}</Clip>}
                            />
                            {!isNonProfit && (
                                <Info
                                    mr
                                    label="기본가격"
                                    value={autoComma(item.price)}
                                />
                            )}
                            <Info label="타입" value={item.type} />
                        </Flex>
                        <Flex vCenter mb="small">
                            <Info
                                mr
                                label="생성일"
                                value={yyyymmddHHmm(item.createdAt)}
                            />
                            <Info
                                label="카테고리"
                                value={item.categoryName || "없음"}
                            />
                        </Flex>
                    </div>
                </Flex>
            </div>
        </JDcard>
    );
};
