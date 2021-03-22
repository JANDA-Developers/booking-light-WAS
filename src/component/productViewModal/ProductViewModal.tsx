import { IUseModal, JDmodal } from '@janda-com/front';
import React from 'react';
import { Info } from '../../atom/Info';
import { useProductFindById } from '../../hook/useProduct';
import { PurchaseTable } from '../../page/purchase/components/PurchaseTable';
import { MMDDhhmmRange, yyyymmddHHmm } from '../../utils/dateFormat';

export interface IUseModalInfo {
    productId: string;
}

interface IProp {
    modalHook: IUseModal<IUseModalInfo>
}

export const ProductViewModal: React.FC<IProp> = ({ modalHook }) => {
    const { item } = useProductFindById(modalHook.info?.productId)

    return <JDmodal className="ProductViewModal" head={{
        title: item?.itemName + `[${item?.code}]`
    }} {...modalHook} >
        <Info label="생성시간" value={yyyymmddHHmm(item?.createdAt)} />
        <Info mb label="이용시간" value={MMDDhhmmRange(item?.dateRangeForUse)} />
        <PurchaseTable purchases={item?.purchase || []} />
    </JDmodal>;
};
