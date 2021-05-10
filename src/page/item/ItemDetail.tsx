import {
    InputText,
    Flex,
    JDcard,
    JDcontainer,
    JDpageHeader,
    JDselect,
    opFind,
    useInput,
    useSelect,
    JDlabel,
    JDtagInput,
    deepCopy,
} from "@janda-com/front";
import React, { useContext, useEffect, useState } from "react";
import { useHistory, useRouteMatch } from "react-router-dom";
import ModalBtn from "../../component/btns/ActBtn";
import JDEditor from "../../component/editor/Editor";
import { FormCreater } from "../../component/formCreater/FormCreater";
import { ItemCategorySelecter } from "../../component/itemCategorySelecter/ItemCategorySelecter";
import { PhotoGrider } from "../../component/photoGrider.tsx/PhotoGrider";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import AppContext from "../../context";
import { useAttributes } from "../../hook/useAttributes";
import { useCategoryList } from "../../hook/useCategory";
import { useCopy } from "../../hook/useCopy";
import {
    useItemCreate,
    useItemDelete,
    useItemFindById,
    useItemUpdate,
} from "../../hook/useItem";
import { useTagInput } from "../../hook/useTagInput";
import { useMultiUpload } from "../../hook/useUpload";
import { Paths } from "../../MainRouter";
import {
    ItemBookingCreateInput,
    ItemBookingUpdateInput,
    itemFindById_ItemFindById,
    itemFindById_ItemFindById_ItemBooking,
} from "../../type/api";
import { ITEM_TYPE_OPS } from "../../type/const";
import { omits } from "../../utils/omits";
import { promptConfirm } from "../../utils/prompt";
import { completeMsg } from "../../utils/utils";
import { Validater } from "../../utils/Validater";

type IDetailRouteProp = { itemId?: string };
interface IProp {
    itemId?: string;
    defaultItem?: itemFindById_ItemFindById_ItemBooking;
}

export const ItemDetial: React.FC<IProp> = ({ defaultItem, itemId }) => {
    const history = useHistory();
    const { selectedStore, selectedStoreId, isNonProfit } = useContext(
        AppContext
    );
    const isCreateMode = !itemId;

    const [itemUpdate] = useItemUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ ItemBookingUpdate }) => {
            if (
                completeMsg(ItemBookingUpdate, "업데이트 완료", "업데이트 실패")
            ) {
                history.push(Paths.itemList);
            }
        },
    });
    const [itemDelete] = useItemDelete({
        awaitRefetchQueries: true,
        onCompleted: ({ ItemDelete }) => {
            if (completeMsg(ItemDelete, "아이템 삭제완료", "삭제 실패")) {
                history.push(Paths.itemList);
            }
        },
    });
    const [itemCreate] = useItemCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ ItemBookingCreate }) => {
            if (completeMsg(ItemBookingCreate, "생성완료", "생성 실패")) {
                history.push(Paths.itemList);
            }
        },
    });
    const [item, setItem] = useCopy(defaultItem);
    const priceHook = useInput(0);
    const [cat, setCat] = useState(defaultItem?.categoryId);
    const uploads = useMultiUpload([...(defaultItem?.images || [])]);
    const attributesHook = useAttributes(defaultItem?.attrs);
    const nameHook = useInput<string>(defaultItem?.name || "");
    const defaultTypeOp = opFind(defaultItem?.type, ITEM_TYPE_OPS, true);
    const itemTypeHook = useSelect(defaultTypeOp, ITEM_TYPE_OPS);
    const descriptionHook = useInput(defaultItem?.description || "");
    const tagHook = useTagInput(defaultItem?.keywards);
    const [detail, setDetail] = useState(defaultItem?.descriptionDetail);

    const nextData: ItemBookingCreateInput & ItemBookingUpdateInput = {
        type: itemTypeHook.selectedOption?.value,
        attrs: attributesHook.attributes,
        tags: [],
        name: nameHook.value,
        price: priceHook.value,
        images: uploads.createInput,
        description: descriptionHook.value,
        descriptionDetail: detail,
        keywards: tagHook.tags,
        categoryId: cat ? cat : undefined,
    };

    const { validate } = new Validater([
        {
            value: nextData.name,
            failMsg: "상품 이름을 입력 해주세요.",
            id: "ProductName",
        },
    ]);

    const handleItemCreate = () => {
        if (validate())
            itemCreate({
                variables: {
                    input: {
                        ...omits(nextData),
                    },
                    storeId: selectedStore?._id,
                },
            });
    };

    const handleItemUpdate = () => {
        if (validate())
            itemUpdate({
                variables: {
                    input: {
                        ...omits(nextData),
                    },
                    itemId: defaultItem?._id,
                },
            });
    };

    const handleItemDelete = () => {
        if (!item) return;
        promptConfirm(
            item.name,
            `아이템을 삭제하실려면 ${item.name}을 정확하게 입력 해주세요.`,
            () => {
                itemDelete({
                    variables: {
                        itemId: defaultItem?._id,
                    },
                });
            }
        );
    };

    return (
        <div>
            <JDpageHeader
                title={
                    itemId ? defaultItem?.name + "수정하기" : "상품군 등록하기"
                }
                desc="당신의 상품군을 등록하세요."
            />
            <JDcontainer verticalPadding>
                <Flex mb="large">
                    <ModalBtn
                        thema="primary"
                        hide={!isCreateMode}
                        onClick={handleItemCreate}
                        label="생성하기"
                    />
                    <ModalBtn
                        thema="primary"
                        hide={isCreateMode}
                        onClick={handleItemUpdate}
                        label="업데이트"
                    />
                </Flex>
                <JDcard mb="large" head="기본설정">
                    <JDselect mb {...itemTypeHook} label="상품타입" />
                    <InputText
                        id="ProductName"
                        mb
                        {...nameHook}
                        label="상품이름"
                    />
                    {isNonProfit ? (
                        <span />
                    ) : (
                        <InputText
                            mb
                            comma
                            {...priceHook}
                            label="상품 기본 가격"
                        />
                    )}
                    <ItemCategorySelecter
                        placeholder="필수아님"
                        mb
                        storeId={selectedStoreId!}
                        label="카테고리"
                        onChange={(op) => {
                            setCat(op?.value);
                        }}
                        catId={cat}
                    />
                    <JDlabel txt="태그" />
                    <JDtagInput {...tagHook} />
                </JDcard>
                <JDcard mb="large" head="사진정보">
                    <ScrollBox>
                        <PhotoGrider
                            onChange={uploads.setFiles}
                            files={uploads.files || []}
                        />
                    </ScrollBox>
                </JDcard>
                <JDcard mb="large" head="기타정보">
                    <InputText
                        {...descriptionHook}
                        mb
                        label="간략히"
                        textarea
                    />
                    <JDlabel txt="자세히" />
                    <JDEditor setModel={setDetail as any} model={detail} />
                </JDcard>
                <JDcard mb="large" head="사용자 요구 정보">
                    <FormCreater {...attributesHook} />
                </JDcard>
                <Flex>
                    <ModalBtn
                        thema="primary"
                        hide={!isCreateMode}
                        onClick={handleItemCreate}
                        label="생성하기"
                    />
                    <ModalBtn
                        mr
                        thema="primary"
                        hide={isCreateMode}
                        onClick={handleItemUpdate}
                        label="업데이트"
                    />
                    <ModalBtn
                        thema="error"
                        hide={isCreateMode}
                        onClick={handleItemDelete}
                        label="삭제하기"
                    />
                </Flex>
            </JDcontainer>
        </div>
    );
};

export const ItemDetailWrap = () => {
    const {
        params: { itemId },
    } = useRouteMatch<IDetailRouteProp>();
    const { item: defaultItem } = useItemFindById(itemId);

    return (
        <ItemDetial
            itemId={itemId}
            key={defaultItem?._id}
            defaultItem={defaultItem}
        />
    );
};

export default ItemDetailWrap;
