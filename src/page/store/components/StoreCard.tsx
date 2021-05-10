import {
    Flex,
    JDbutton,
    JDcard,
    JDicon,
    JDtypho,
    Tiny,
} from "@janda-com/front";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import React, { useContext } from "react";
import { useHistory } from "react-router-dom";
import { Info } from "../../../atom/Info";
import { CardBtn } from "../../../component/btns/ModalBtn";
import AppContext from "../../../context";
import { Paths } from "../../../MainRouter";
import { storeList_StoreList_items } from "../../../type/api";
import { yyyymmdd } from "../../../utils/dateFormat";
import { storeTypeKr } from "../../../utils/enumConverter";

interface IProp extends IJDcardProps {
    store: storeList_StoreList_items;
    onDelete: () => void;
    onEdit: () => void;
}

export const StoreCard: React.FC<IProp> = ({
    store,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {
    const context = useContext(AppContext);
    const { selectedStore, updateContext, stores, selectStore } = context;
    const { push } = useHistory();

    const handleList = () => {
        push(Paths.itemList);
    };

    const handleSelect = () => {
        selectStore(store._id);
    };

    const handleItemCreate = () => {
        push(Paths.itemDetail);
    };

    const isCurrentStore = store._id === selectedStore?._id;
    const noItem = store.itemCount === 0;

    return (
        <JDcard
            badges={
                isCurrentStore
                    ? [{ label: "현재선택", mode: "folded", thema: "point" }]
                    : undefined
            }
            selected={selectedStore?._id === store._id}
            foot={
                <div>
                    <Tiny color={noItem ? "warn" : undefined} mb>
                        {" "}
                        <JDicon mr="tiny" icon="info" />
                        {store.itemCount === 0
                            ? "생성된 상품이 없습니다. 상품을 생성해주세요."
                            : `누적 상품수 ${store.itemCount}`}
                    </Tiny>
                    <CardBtn
                        hide={isCurrentStore}
                        mr
                        onClick={handleSelect}
                        thema="black"
                    >
                        선택하기
                    </CardBtn>
                    <CardBtn mr onClick={handleEdit} thema="primary">
                        수정하기
                    </CardBtn>
                    <CardBtn mr onClick={handleDelete} thema="error">
                        삭제하기
                    </CardBtn>
                    {isCurrentStore && (
                        <CardBtn
                            mr
                            hide={!store.itemCount}
                            onClick={handleList}
                            label={"상품보기"}
                        />
                    )}
                    {isCurrentStore && (
                        <CardBtn
                            blink={store.itemCount === 0}
                            onClick={handleItemCreate}
                            label={"상품생성"}
                        />
                    )}
                </div>
            }
            head={store.name}
            className="webpageCard"
            {...props}
        >
            <Flex vCenter>
                <Info
                    mr="huge"
                    mb
                    label={"타입"}
                    value={storeTypeKr[store.type]}
                />
                <Info mb label={"생성일"} value={yyyymmdd(store.createdAt)} />
            </Flex>
            <Flex vCenter>
                <Info mr="huge" mb label={"스토어코드"} value={store.code} />
                <Info
                    mb
                    label={"아이템수"}
                    value={store.itemCount.toString()}
                />
            </Flex>
            <JDtypho size="small">{store.description}</JDtypho>
        </JDcard>
    );
};
