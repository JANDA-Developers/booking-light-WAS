import {
    Flex,
    JDbutton,
    JDcontainer,
    JDloadingCard,
    JDpageHeader,
    JDpreloader,
    JDradioButton,
    Mb,
    SkipUpdate,
    Tiny,
    WindowSize,
} from "@janda-com/front";
import React, { useContext, useMemo, useState } from "react";
import { useHistory } from "react-router-dom";
import { Empty } from "../../atom/Empty";
import { IconButton } from "../../atom/iconButton/IconButton";
import JDsearchBar from "../../atom/SearchBar";
import { Tip } from "../../atom/tip/Tip";
import { CardBtn } from "../../component/btns/ModalBtn";
import DotButton from "../../component/dotButton/DotButton";
import { IconRadioBtn } from "../../component/iconRadioBtn/IconRadioBtn";
import { JDicon } from "../../component/icons/Icons";
import AppContext from "../../context";
import { useItemDelete, useItemList } from "../../hook/useItem";
import { Paths } from "../../MainRouter";
import {
    itemList_ItemList_items_ItemBooking,
    _IItemFilter,
    _IItemSort,
} from "../../type/api";
import { promptConfirm } from "../../utils/prompt";
import { completeMsg } from "../../utils/utils";
import { ItemCard } from "./components/ItemCard";
import {
    itemListViewFactory,
    TItemListViewType,
} from "./components/ItemListViewFactory";

interface IProp {}

export const ItemList: React.FC<IProp> = () => {
    const { selectedStoreId, FACTORY } = useContext(AppContext);
    const itemListHook = useItemList({
        fixingFilter: {
            _storeId__eq: selectedStoreId,
        },
        initialSort: [_IItemSort.createdAt__desc],
    });
    const [view, setView] = useState<TItemListViewType>(
        FACTORY.itemListDefaultView
    );
    const { items, getLoading } = itemListHook;
    const { push } = useHistory();
    // const itemModalHook = useModal<IItemModalInfo>()
    const [deleteMu] = useItemDelete({
        onCompleted: ({ ItemDelete }) => {
            completeMsg(ItemDelete, "아이템 삭제성공", "아이템 삭제실패");
        },
    });

    const toDetailItem = (itemId: string = "") => {
        push(Paths.itemDetail + "/" + itemId);
    };

    const toProductList = (itemId: string = "") => {
        push(Paths.productList + "/" + itemId);
    };

    const toProductCreate = (itemId: string = "") => {
        push(Paths.productDetail + "/" + itemId);
    };

    const handleEdit = (item?: itemList_ItemList_items_ItemBooking) => () => {
        toDetailItem(item?._id);
    };

    const handleDelete = (item: itemList_ItemList_items_ItemBooking) => () => {
        promptConfirm(
            item.name,
            `아이템을 삭제하실려면 ${item.name}을 정확하게 입력 해주세요.`,
            () => {
                deleteMu({
                    variables: {
                        itemId: item._id,
                    },
                });
            }
        );
    };

    const ListView = useMemo(() => itemListViewFactory(view), [view]);

    return (
        <div className="itemList">
            <JDpreloader loading={getLoading} floating />
            <JDpageHeader title="상품 목록" desc="당신의 상품을 등록하세요." />
            <JDcontainer
                verticalPadding
                size={view === "gallery" ? WindowSize.full : undefined}
            >
                <Flex between>
                    <JDsearchBar<_IItemFilter, _IItemSort>
                        searchOps={[{ label: "이름", value: "name__eq" }]}
                        {...itemListHook}
                        mr
                    />
                    <IconRadioBtn>
                        <Tip message={"리스트뷰"}>
                            <IconButton
                                thema={view === "list" ? "primary" : undefined}
                                onClick={() => {
                                    setView("list");
                                }}
                                icon="list"
                            />
                        </Tip>
                        <Tip message={"갤러리뷰"}>
                            <IconButton
                                thema={
                                    view === "gallery" ? "primary" : undefined
                                }
                                onClick={() => {
                                    setView("gallery");
                                }}
                                icon="threeBlock"
                            />
                        </Tip>
                    </IconRadioBtn>
                </Flex>
                <Mb />
                <DotButton
                    mb
                    onClick={() => {
                        toDetailItem();
                    }}
                >
                    생성하기
                </DotButton>
                <Empty empty={items} />
                <SkipUpdate skip={getLoading}>
                    <ListView
                        handleDelete={handleDelete}
                        handleEdit={handleEdit}
                        items={items}
                        toProductCreate={toProductCreate}
                    />
                </SkipUpdate>
            </JDcontainer>
            {/* <ItemModal key={itemModalHook.info?.itemId || "ItemCreate"} modalHook={itemModalHook} /> */}
        </div>
    );
};

export default ItemList;
