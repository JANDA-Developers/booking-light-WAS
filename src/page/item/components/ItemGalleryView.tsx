import { Flex } from "@janda-com/front";
import React from "react";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { BuypageProductShoppingCard } from "../../buypageRouter/page/buypageList/components/BuyPageProductShoppingCard";
import { IItemListviewProps } from "./ItemListViewFactory";

export const ItemGalleryView: React.FC<IItemListviewProps> = ({
    items,
    handleDelete,
    handleEdit,
    toProductCreate,
}) => {
    return (
        <Flex wrap className="itemList__itemList">
            {items.map((item) => (
                <BuypageProductShoppingCard
                    showPrice={false}
                    mr
                    mb
                    className="itemList__item"
                    foot={
                        <Flex center>
                            <CardBtn
                                size="small"
                                padding="small"
                                mr
                                onClick={handleEdit(item)}
                            >
                                수정하기
                            </CardBtn>
                            <CardBtn
                                size="small"
                                padding="small"
                                onClick={() => {
                                    toProductCreate(item._id);
                                }}
                            >
                                판매설정
                            </CardBtn>
                        </Flex>
                    }
                    key={item._id + "ItemGalleryView"}
                    item={item}
                />
            ))}
        </Flex>
    );
};
