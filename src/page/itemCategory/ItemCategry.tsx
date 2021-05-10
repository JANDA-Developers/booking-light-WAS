import {
    Flex,
    JDalign,
    JDbutton,
    JDcontainer,
    JDpageHeader,
    JDpreloader,
    Mb,
    Mr,
    SkipUpdate,
    Tiny,
    useModal,
} from "@janda-com/front";
import { isEmpty } from "lodash";
import React, { useContext, useState } from "react";
import { Empty } from "../../atom/Empty";
import JDsearchBar from "../../atom/SearchBar";
import { CardBtn } from "../../component/btns/ModalBtn";
import DotButton from "../../component/dotButton/DotButton";
import { Dragger } from "../../component/dragger/Dragger";
import {
    IPromptInfo,
    PormptModal,
} from "../../component/promptModal/PromptModal";
import AppContext from "../../context";
import {
    useCategoryCreate,
    useCategoryDelete,
    useCategoryList,
    useCategoryOrderUpdate,
    useCategoryUpdate,
} from "../../hook/useCategory";
import { useItemList } from "../../hook/useItem";
import {
    CategoryType,
    Fcategory,
    itemList_ItemList_items_ItemBooking,
    _CategorySort,
    _IItemFilter,
    _IItemSort,
} from "../../type/api";
import { promptConfirm } from "../../utils/prompt";
import { completeMsg } from "../../utils/utils";
import { CategoryCard } from "./components/CategoryCard";

interface IProp {}

export const ItemCategory: React.FC<IProp> = () => {
    const { selectedStoreId } = useContext(AppContext);
    const itemListHook = useCategoryList({
        initialFilter: {
            _storeId__eq: selectedStoreId,
        },
        initialSort: [_CategorySort.order__asc],
    });
    const categoryModalHook = useModal<IPromptInfo>();
    const { items: categories, getLoading } = itemListHook;
    const [ordered, setOrdered] = useState<string[]>([]);
    const { items } = useItemList({
        initialViewCount: 9999,
        fixingFilter: {
            _storeId__eq: selectedStoreId,
        },
    });

    const [categoryOrder] = useCategoryOrderUpdate({
        onCompleted: ({ CategoryOrderUpdate }) => {
            completeMsg(CategoryOrderUpdate, "카테고리 순서 변경");
        },
    });
    // const itemModalHook = useModal<IItemModalInfo>()
    const [deleteMu] = useCategoryDelete({
        onCompleted: ({ CategoryDelete }) => {
            completeMsg(
                CategoryDelete,
                "카테고리 삭제성공",
                "카테고리 삭제실패"
            );
        },
    });

    const [createMu] = useCategoryCreate({
        onCompleted: ({ CategoryCreate }) => {
            completeMsg(CategoryCreate, "카테고리 생성");
        },
    });

    const [updateMu] = useCategoryUpdate({
        onCompleted: ({ CategoryUpdate }) => {
            completeMsg(CategoryUpdate, "카테고리 업데이트");
        },
    });

    const handleEdit = (item: Fcategory) => () => {
        categoryModalHook.openModal({
            callBack: (label: string) => {
                updateMu({
                    variables: {
                        categoryId: item._id,
                        input: {
                            label,
                        },
                    },
                });
                categoryModalHook.closeModal();
            },
            inputProps: {
                textarea: false,
            },
            defaultValue: item.label,
            title: "카테고리 수정하기",
            messageLabel: "카테고리명",
            modalKey: "modalKey" + item._id,
        });
    };

    const handleCreate = () => {
        categoryModalHook.openModal({
            callBack: (label: string) => {
                createMu({
                    variables: {
                        storeId: selectedStoreId,
                        input: {
                            label,
                            type: CategoryType.ITEM,
                        },
                    },
                });
                categoryModalHook.closeModal();
            },
            inputProps: {
                textarea: false,
            },
            title: "카테고리 생성하기",
            messageLabel: "카테고리명",
            modalKey: "modalKey" + "create",
        });
    };

    const handleDelete = (item: Fcategory) => () => {
        promptConfirm(
            item.label,
            `카테고리를 삭제하실려면 ${item.label}을 정확하게 입력 해주세요.`,
            () => {
                deleteMu({
                    variables: {
                        categoryId: item?._id,
                    },
                });
            }
        );
    };

    const handleCategoryOrderUpdate = () => {
        categoryOrder({
            variables: {
                input: ordered.map((id, order) => ({
                    id,
                    order,
                })),
            },
        });
    };

    const handleDrop = (ordered: Fcategory[]) => {
        const ids: string[] = ordered.map((ordered) => ordered._id);
        setOrdered([...ids]);
    };

    const unSorted = categories.filter(
        (item) => !ordered.find((o) => o === item._id)!
    );
    const sorted = ordered
        .map((o) => categories.find((i) => o === i._id)!)
        .filter((v) => v);
    const merged = [...sorted, ...unSorted];

    const itemfilterByCat = (cat: Fcategory) => {
        return items.filter((item) => item.categoryId === cat._id);
    };

    return (
        <div>
            <JDpreloader loading={getLoading} floating />
            <JDpageHeader
                title="상품 카테고리"
                desc="상품 카테고리를 관리하세요."
            />
            <JDcontainer verticalPadding>
                <Flex>
                    <JDsearchBar
                        searchOps={[{ label: "이름", value: "_id__eq" }]}
                        {...itemListHook}
                    />
                    <Mr />
                    <JDbutton
                        blink={!isEmpty(ordered)}
                        onClick={handleCategoryOrderUpdate}
                        thema="black"
                        label="순서변경 저장하기"
                    />
                </Flex>
                <Mb />
                <DotButton mb onClick={handleCreate}>
                    생성하기
                </DotButton>
                <Empty empty={categories} />
                <SkipUpdate skip={getLoading}>
                    <Dragger<Fcategory>
                        onOrder={handleDrop}
                        dir="vertical"
                        handle
                        ulClassName={"formCreater__draggWrap"}
                        idKey="_id"
                        items={merged}
                        ItemRender={(item, index, { dragHandleProps }) => (
                            <JDalign mb {...dragHandleProps}>
                                <CategoryCard
                                    items={itemfilterByCat(item)}
                                    foot={
                                        <div>
                                            <CardBtn
                                                onClick={handleEdit(item)}
                                                mr
                                                thema="primary"
                                            >
                                                수정하기
                                            </CardBtn>
                                            <CardBtn
                                                onClick={handleDelete(item)}
                                                thema="error"
                                            >
                                                삭제하기
                                            </CardBtn>
                                        </div>
                                    }
                                    category={item}
                                />
                            </JDalign>
                        )}
                    ></Dragger>
                </SkipUpdate>
            </JDcontainer>
            <PormptModal
                key={categoryModalHook.info?.modalKey}
                modalHook={categoryModalHook}
            />
        </div>
    );
};

export default ItemCategory;
