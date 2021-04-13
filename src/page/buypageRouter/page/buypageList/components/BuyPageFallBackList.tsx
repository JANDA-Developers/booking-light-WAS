import { isEmpty } from '@janda-com/front';
import React, { useContext } from 'react';
import { useProductList } from '../../../../../hook/useProduct';
import { itemList_ItemList_items_ItemBooking, _ProductSort } from '../../../../../type/api';
import { today } from '../../../../../type/const';
import { BuypageContext } from '../helper/context';
import { IBuypageProductData, productMap } from '../helper/productMap';
import { BuyPageProductBundle } from './BuyPageProductBundle';

interface IProp {
    items: itemList_ItemList_items_ItemBooking[]
    handleToDetail: (itemId: string) => () => void
    handleImgView: (item: IBuypageProductData) => () => void
}

export const BuypageFallBackList: React.FC<IProp> = ({
    items,
    handleImgView,
    handleToDetail
}) => {
    const context = useContext(BuypageContext);

    const productListHook = useProductList({
        fixingFilter: {
            _storeId__eq: context.store._id,
            dateRangeForUse_to__gte: today,
        },
        initialViewCount: 20
    })

    const { items: products } = productListHook;
    const productBundles = productMap(items, products as any)
        .filter(bundle => !isEmpty(bundle.products));

    //todo 번들을 쪼개야함 번들을 날짜별로 쪼개야함.

    return <div>
        {
            productBundles.map(item => <BuyPageProductBundle onDetail={handleToDetail(item._id)} onImgView={handleImgView(item)} key={item._id} bundle={item} />)
        }
    </div>;
};
