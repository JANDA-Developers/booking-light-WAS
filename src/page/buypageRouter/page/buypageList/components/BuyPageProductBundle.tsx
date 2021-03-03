import { autoComma, Flex, JDcard } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { ImgCard } from '../../../../../atom/ImgCard';
import { CardBtn } from '../../../../../component/btns/ModalBtn';
import { Paths } from '../../../../../MainRouter';
import { IBuypageProductData } from '../helper/productMap';

interface IProp {
    bundle: IBuypageProductData;
    onImgView: () => void;
}

export const BuyPageProductBundle: React.FC<IProp> = ({ bundle, onImgView: handleImgView }) => {
    const history = useHistory();
    const { thumbNail, name, lowPrice, _id, } = bundle;
    const handleToDetail = () => {
        history.push(Paths.productDetail + "/" + _id);
    }

    return <ImgCard
        onImgClick={handleImgView}
        img={thumbNail || ""}
        foot={<CardBtn onClick={handleToDetail}>자세히보기</CardBtn>}
        head={<Flex between>{name} <div>~{autoComma(lowPrice)}</div></Flex>
        }>
            {}
    </ ImgCard>;

};
