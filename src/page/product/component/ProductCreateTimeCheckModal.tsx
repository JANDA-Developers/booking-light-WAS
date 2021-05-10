import { Flex, IUseModal, JDmodal } from "@janda-com/front";
import { isEmpty } from "lodash";
import React, { useEffect } from "react";
import { ModalBtn } from "../../../component/btns/ModalBtn";
import { useProductList } from "../../../hook/useProduct";
import { ProductTable } from "./ProductTable";

export interface IProductCreateTimeCheckModalProp {
    onContinue: () => void;
    onFailToFind: () => void;
    itemId: string;
    from: number;
    to: number;
}

interface IProp {
    modalHook: IUseModal<IProductCreateTimeCheckModalProp>;
}

export const ProductCreateTimeCheckModal: React.FC<IProp> = ({ modalHook }) => {
    const { from, itemId, to } = modalHook.info || {
        from: 0,
        itemId: "",
        onContinue: () => {},
        onFailToFind: () => {},
        to: 0,
    };

    const { items, getLoading, called } = useProductList(
        {
            fixingFilter: {
                _itemId__eq: itemId,
                dateRangeForUse_from__lt: to,
                dateRangeForUse_to__gt: from,
            },
        },
        { skip: !modalHook.isOpen, fetchPolicy: "network-only" }
    );

    useEffect(() => {
        if (!getLoading && called && isEmpty(items)) {
            modalHook.info?.onFailToFind();
        }
    }, [getLoading]);

    if (isEmpty(items)) return null;
    return (
        <JDmodal
            head={{ title: "잠깐, 시간이 곂친 상품이 존재 합니다." }}
            foot={
                <Flex>
                    <ModalBtn
                        onClick={modalHook.info?.onContinue}
                        thema="primary"
                        mr
                    >
                        계속하기
                    </ModalBtn>
                    <ModalBtn onClick={modalHook.closeModal}>닫기</ModalBtn>
                </Flex>
            }
            {...modalHook}
        >
            <ProductTable products={items} />
        </JDmodal>
    );
};
