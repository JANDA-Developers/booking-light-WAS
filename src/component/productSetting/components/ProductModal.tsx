import { IUseModal, JDbutton, JDmodal } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React from 'react';

interface IProp {
    modalHook: IUseModal
}

export const ProductModal: React.FC<IProp> = ({ modalHook }) => {
    return <JDmodal head={{
        title: "부가상품 추가하기"
    }}
        foot={
            <div>
                <JDbutton className="extrablock__submit">
                    확인
            </JDbutton>
            </div>}
        {...modalHook}>
        <h3>상품명</h3>
        <InputText className="extrablock__input" />
        <h3>금액</h3>
        <InputText className="extrablock__input" />
    </JDmodal>;
};

export default ProductModal;
