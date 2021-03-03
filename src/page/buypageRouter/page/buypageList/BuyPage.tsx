import { InputText, JDphotoModal, TPhotoModalInfo, useModal } from '@janda-com/front';
import React, { useContext } from 'react';
import { DateWithTimePicker } from '../../../../component/dateWithTimePicker/DateWithTimePicker';
import { useDateTimepicker } from '../../../../hook/useDateTimePicker';
import { useProductList } from '../../../../hook/useProduct';
import { BuypageContext } from './helper/context';
import { today, tomorrow } from '../../../../type/const';
import { IBuypageProductData, productMap } from './helper/productMap';
import { BuyPageProductBundle } from './components/BuyPageProductBundle';

interface IProp {
}

//실제 구매페이지
export const BuyPage: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>()
    const { store } = context;
    const dateTimePicker = useDateTimepicker({ defaultEnd: new Date(), defaultStart: new Date() });
    const { items: products, filter, setFilter } = useProductList({
        initialFilter: {
            dateRangeForSale_from__gte: today,
            dateRangeForSale_to__lte: tomorrow,
            _storeId__eq: store._id
        }
    })

    const productBundles = productMap(context, products)

    const handleImgView = (item: IBuypageProductData) => () => {
        modalHook.openModal({
            images: item.images.map(img => img.uri)
        })
    }


    //장바구니로 이어지는 구매하기
    return <div>
        <InputText
            mb
            type="email"
            id="LoginEmail"
            Size="big"
            placeholder={'검색어 입력'}
            br="round"
        />
        {/* 사용기간 필터 */}
        <DateWithTimePicker {...dateTimePicker} />
        {productBundles.map(item => <BuyPageProductBundle onImgView={handleImgView(item)} key={item._id} bundle={item} />)}
        <JDphotoModal modalHook={modalHook} />
    </div>;
};

