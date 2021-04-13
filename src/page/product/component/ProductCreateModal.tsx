import { IUseModal, JDbutton, JDmodal } from '@janda-com/front';
import React from 'react';
import { Fitem, itemFindById_ItemFindById_ItemBooking, FproductBooking } from '../../../type/api';
import { ProductCreater } from './ProductCreater';

export interface IProductModalInfo {
    itemId: string;
    item?: Fitem
    product?: FproductBooking
}

interface IProp {
    modalHook: IUseModal<IProductModalInfo>;
}

export const ProductCreateModal: React.FC<IProp> = ({ modalHook }) => {

    const { product, itemId, item } = modalHook.info || {};


    if (!itemId) return null;
    return <JDmodal foot={
        <div>
            {/* <JDbutton hide={!isCreateMode} onClick={handleItemCreate} label="생성하기" />
            <JDbutton hide={isCreateMode} onClick={handleItemUpdate} label="업데이트" /> */}
        </div>
    } head={{ title: "상품 정보" }} {...modalHook} >
        <ProductCreater item={item as itemFindById_ItemFindById_ItemBooking} head="상품수정하기" mode="border" product={product} itemId={itemId} />
    </JDmodal>;
};
