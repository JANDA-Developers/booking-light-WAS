import { autoComma, JDbadge, JDtypho } from '@janda-com/front';
import React from 'react';
import { IImgCardProps, ImgCard } from '../../../../../atom/ImgCard';
import { CardBtn } from '../../../../../component/btns/ModalBtn';
import { Ratio } from '../../../../../type/const';
import { IBuypageProductData } from '../helper/productMap';
import { SoldOutBadge } from './SoldOutBadge';

interface IProp extends Partial<IImgCardProps> {
    bundle: IBuypageProductData;
    onImgView: () => void;
    onDetail: () => void;
}

export const BuyPageProductBundle: React.FC<IProp> = ({ onDetail: handleDetail, bundle, onImgView: handleImgView, ...props }) => {
    const { thumbNail, name, lowPrice, _id } = bundle;

    return <ImgCard
        mb
        onImgClick={handleImgView}
        img={thumbNail || ""}
        foot={<CardBtn size="long" onClick={handleDetail}>자세히보기</CardBtn>}
        head={<JDtypho weight={600} flex={{ between: true }} size="large" >{name} <div>~{autoComma(lowPrice)} KRW</div></JDtypho>
        }
        photoProp={{
            ratio: Ratio['16:9']
        }}
        {...props}
    >
        <SoldOutBadge bundle={bundle} />
        {bundle.description}
    </ ImgCard>;

};
