import { IUseModal, JDbutton, JDmodal } from '@janda-com/front';
import React from 'react';
import { ProductCreater } from './ProductCreater';

export interface IProductModalInfo {
    productId?: string;
}

interface IProp {
    modalHook: IUseModal<IProductModalInfo>;
}

export const ProductModal: React.FC<IProp> = ({ modalHook }) => {


    return <JDmodal foot={
        <div>
            {/* <JDbutton hide={!isCreateMode} onClick={handleItemCreate} label="생성하기" />
            <JDbutton hide={isCreateMode} onClick={handleItemUpdate} label="업데이트" /> */}
        </div>
    } head={{ title: "상품 정보" }} {...modalHook} >
        <ProductCreater />
    </JDmodal>;
};
