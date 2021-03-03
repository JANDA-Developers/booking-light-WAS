import { Flex, JDcard, JDslider } from '@janda-com/front';
import PhotoFrame from '@janda-com/front/dist/components/photoFrame/PhotoFrame';
import { Slide } from '@janda-com/front/dist/components/slider/Slider';
import React, { useState } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { ImgSlider } from '../../../../atom/Imgslider';
import { CardBtn } from '../../../../component/btns/ModalBtn';
import { useItemFindById } from '../../../../hook/useItem';
import { BookingInput, PurchaseBundleCreateInput } from '../../../../type/api';
import { BuyPageType } from '../../../../type/enum';
import { basket } from '../../../../utils/Basket';


export interface IBuyPageConfig {
    timeFilterUse: boolean;
    searchFilterUse: boolean;
    type: BuyPageType;
    timeFilterMinUnit: 5 | 10 | 15 | 30 | 60;
    bracketUse: boolean;
}

type IDetailRouteProp = { itemId?: string }

export const BuyPageDetail: React.FC<IDetailRouteProp> = () => {
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();
    const { item } = useItemFindById(itemId)
    const history = useHistory();

    const [capacity, setCapacity] = useState<BookingInput[]>([])

    const handleAddBracket = () => {
        basket.addItem({
        })
        history.push("/");
    }

    const handlePurchase = () => {
        history.push("/");
    }

    return <JDcard foot={
        <Flex>
            <CardBtn onClick={handleAddBracket} thema="grey4">장바구니</CardBtn>
            <CardBtn onClick={handlePurchase} thema="primary" size="long">구매하기</CardBtn>
        </Flex>
    } head={item?.name} >
        <ImgSlider imgs={item?.images.map(img => img.uri)} />
        { }
    </JDcard >;
};

//프로덕트 스키마에 문제가 있는것 아닐까
//프로덕트 스키마에 옵션상품의 취지를 모르겠음
//추가상품이 필요하다면 프로덕트를 하나더 만들면 되는거잖아?
//같은 시간대를 사용해서
//!!
//같은 시간대라는게 핵심이구나...
//같은 시간대에서 사용되는 프로덕트...
//지금 생각하는 UI에서는 딱히 사용할 일이 없음....


// 결국 캐파시티 디테일 이라는건 
// 프로덕트 하나를 더 얹는거 외에 의미는 없나...

// 프로덕트마다 노출기간, 사용기간이 다르다는 전제를 둔다.
// 같은것끼리는 같이 놓아달라는 말이지..
// 

//그런 경우가 어디있지?
//같은 시간대에 A상품이 N개 B상품이 N개 있을경우 음!!!!!!!!!!!!
//음식점 하루동안 판매하는 메뉴들을 선정 A상품 B 상품 C상품 판매가능
// 하지만 그런경우에 아팀을 A B로 나누면 되지않을까
