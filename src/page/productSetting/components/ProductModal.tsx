import { IUseModal, JDbutton, JDmodal, useInput } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React from 'react';
import { IProduct } from '../interface';

type TMode = "create" | "update"
type TAction = TMode | "delete";

interface IProductInfo extends Partial<IProduct> {
}

type TProductModalInfo = {
    mode: TAction,
    product: IProductInfo
}

interface IProp {
    modalHook: IUseModal<TProductModalInfo>
    onConfirm: (action: TAction, info: IProductInfo) => void;
}

export const ProductModal: React.FC<IProp> = ({ modalHook, onConfirm }) => {
    if (!modalHook.info) throw Error("You should provide Info");

    const { mode, product } = modalHook.info;
    const productNameHook = useInput("");
    const amountHook = useInput("");

    const isCreate = mode === "create";

    return <JDmodal head={{
        title: "부가상품 추가하기"
    }}
        foot={
            <div>
                <JDbutton >
                    {isCreate ? "생성하기" : "수정하기"}
                </JDbutton>
                {isCreate || <JDbutton >
                    삭제하기
                </JDbutton>}
            </div>}
        {...modalHook}>
        <InputText label="상품명" {...productNameHook} />
        <InputText label="금액" comma {...amountHook} />
    </JDmodal>;
};

export default ProductModal;
