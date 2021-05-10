import { Tiny } from "@janda-com/front";
import React from "react";
import { CardBtn } from "../../../component/btns/ModalBtn";
import JDIcon from "../../../component/icons/Icons";
import { ItemCard } from "./ItemCard";
import { IItemListviewProps } from "./ItemListViewFactory";

export const ItemLinearView: React.FC<IItemListviewProps> = ({
    items,
    handleDelete,
    handleEdit,
    toProductCreate,
}) => {
    return (
        <div>
            {items.map((item) => (
                <ItemCard
                    mb
                    key={item._id}
                    onEdit={handleEdit(item)}
                    onDelete={handleDelete(item)}
                    item={item}
                    foot={
                        <>
                            <Tiny
                                color={
                                    item.productCount === 0 ? "warn" : undefined
                                }
                                mb
                            >
                                {" "}
                                <JDIcon mr="tiny" icon="info" />
                                {item.productCount === 0
                                    ? "생성된 상품이 없습니다. 상품을 생성해주세요."
                                    : `누적 상품수 ${item.productCount}`}
                            </Tiny>
                            <CardBtn
                                mr
                                thema="primary"
                                onClick={handleEdit(item)}
                                label="수정하기"
                            />
                            <CardBtn
                                mr
                                hide={!item.productCount}
                                onClick={handleEdit(item)}
                                label={"상품보기"}
                            />
                            <CardBtn
                                blink={item.productCount === 0}
                                onClick={() => {
                                    toProductCreate(item._id);
                                }}
                                label={"판매설정"}
                            />
                        </>
                    }
                />
            ))}
        </div>
    );
};
