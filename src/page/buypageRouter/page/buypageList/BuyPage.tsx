import { JDphotoModal, TPhotoModalInfo, useModal } from '@janda-com/front';
import React, { useContext, useEffect, useState } from 'react';
import { useDateTimepicker } from '../../../../hook/useDateTimePicker';
import { useProductList } from '../../../../hook/useProduct';
import { BuypageContext } from './helper/context';
import { IBuypageProductData, productMap } from './helper/productMap';
import { BuyPageProductBundle } from './components/BuyPageProductBundle';
import { BuyPageSearchBar } from '../components/BuyPageSearchBar';
import { useHistory } from 'react-router';
import { BuyPagePaths } from '../../BuyPageRouter';
import BuyPageDetail from '../components/BuyPageDetail';
import { _IItemFilter } from '../../../../type/api';
import { integratedItemSearch } from '../../../../utils/integratedItemSearch';
import { useItemList } from '../../../../hook/useItem';

interface IProp {
}

//실제 판매페이지
export const BuyPage: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>()
    const { push } = useHistory();
    const [detailItemId, setDetailItemId] = useState("");

    const { store, configure: { RESERVATION_NORMAL } } = context;
    const { useRangeFilter } = RESERVATION_NORMAL;
    const dateTimePicker = useDateTimepicker({ defaultEnd: new Date(), defaultStart: new Date() });

    const useDateFIlter = {
        dateRangeForUse_from__gte: dateTimePicker.startDate.startOf("day").valueOf(),
        dateRangeForUse_to__lte: useRangeFilter ? dateTimePicker.startDate.add(1, "day").startOf("day").valueOf() : undefined
    }

    const productListHook = useProductList({
        fixingFilter: {
            _storeId__eq: store._id
        }
    })


    const { items, filter: itemFilter, setFilter: setItemFilter } = useItemList({
        fixingFilter: {
            _storeId__eq: context.store._id
        }
    })

    const { items: products, filter, setFilter } = productListHook;

    const productBundles = productMap(items, products)

    const handleImgView = (item: IBuypageProductData) => () => {
        modalHook.openModal({
            images: item.images.map(img => img.uri)
        })
    }
    const handleToDetail = (itemId: string) => () => {
        setDetailItemId(itemId);
    }

    useEffect(() => {
        if (!productListHook.getLoading)
            setFilter({
                ...useDateFIlter
            })
    }, [dateTimePicker.startDate.valueOf(), dateTimePicker.endDate.valueOf()])


    //장바구니로 이어지는 구매하기
    return <div>
        {!detailItemId ? <div>
            <BuyPageSearchBar onSearch={(value) => {
                const integratedFilter = integratedItemSearch(value);
                setItemFilter({
                    ...itemFilter,
                    ...integratedFilter
                })
            }} mb dateTimePicker={dateTimePicker} />
            {productBundles.map(item => <BuyPageProductBundle onDetail={handleToDetail(item._id)} onImgView={handleImgView(item)} key={item._id} bundle={item} />)}
        </div> :
            <BuyPageDetail setDetailItemId={setDetailItemId} productListHook={productListHook} key={detailItemId} itemId={detailItemId} />}
        <JDphotoModal modalHook={modalHook} />
    </div>;
};

