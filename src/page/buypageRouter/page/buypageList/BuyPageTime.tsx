import { JDphotoModal, selectOpCreater, TPhotoModalInfo, useModal } from '@janda-com/front';
import React, { useContext, useEffect, useMemo, useState } from 'react';
import { useDateTimepicker } from '../../../../hook/useDateTimePicker';
import { useProductList } from '../../../../hook/useProduct';
import { BuypageContext } from './helper/context';
import { IBuypageProductData, productMap } from './helper/productMap';
import { BuyPageProductBundle } from './components/BuyPageProductBundle';
import { BuyPageSearchBar } from '../components/BuyPageSearchBar';
import { useHistory } from 'react-router';
import BuyPageDetail from '../components/BuyPageDetail';
import { _IItemFilter } from '../../../../type/api';
import { integratedItemSearch } from '../../../../utils/integratedItemSearch';
import { useItemList } from '../../../../hook/useItem';
import { isEmpty } from 'lodash';
import { Empty } from '../../../../atom/Empty';
import BuypageTimeDetail from '../components/BuyPageTimeDetail';

interface IProp {
}

//실제 판매페이지
export const BuyPageTime: React.FC<IProp> = () => {
    const context = useContext(BuypageContext);
    const modalHook = useModal<TPhotoModalInfo>()
    const { push } = useHistory();
    const [detailItem, setDetailItem] = useState<IBuypageProductData>();
    const { store, configure: { RESERVATION_NORMAL } } = context;
    const { useRangeFilter, useSearchFilter } = RESERVATION_NORMAL;
    const dateTimePicker = useDateTimepicker({
        defaultEnd: new Date(),
        defaultStart: new Date()
    });

    const useDateFIlter = {
        dateRangeForUse_from__gte: dateTimePicker.startDate.startOf("day").valueOf(),
        dateRangeForUse_to__lte: useRangeFilter ? dateTimePicker.endDate.startOf("day").valueOf() : dateTimePicker.startDate.add(1, "day").startOf("day").valueOf()
    }

    const productListHook = useProductList({
        fixingFilter: {
            _storeId__eq: store._id
        },
        initialViewCount: 999999999
    })

    const { items, filter: itemFilter, setFilter: setItemFilter } = useItemList({
        fixingFilter: {
            _storeId__eq: context.store._id
        }
    })

    const { items: products, filter, setFilter } = productListHook;

    const productBundles = productMap(items, products as any)
        .filter(bundle => !isEmpty(bundle.products));

    const handleImgView = (item: IBuypageProductData) => () => {
        modalHook.openModal({
            images: item.images.map(img => img.uri)
        })
    }
    const handleToDetail = (item: IBuypageProductData) => () => {
        setDetailItem(item);
    }

    const handleBuyPageSearch = (value: string) => {
        const integratedFilter = integratedItemSearch(value);
        setItemFilter({
            ...itemFilter,
            ...integratedFilter
        })
    }

    useEffect(() => {
        if (!productListHook.getLoading)
            setFilter({
                ...useDateFIlter
            })
    }, [dateTimePicker.startDate.valueOf(), dateTimePicker.endDate.valueOf()])


    //장바구니로 이어지는 구매하기
    return <div>
        {detailItem && <BuypageTimeDetail setDetailItem={setDetailItem} item={detailItem} key={detailItem._id} />}
        {!detailItem && <div>
            <BuyPageSearchBar useRangeFilter={useRangeFilter} useSearchFilter={useSearchFilter} onSearch={handleBuyPageSearch} mb dateTimePicker={dateTimePicker} />
            {
                productBundles.map(item => <BuyPageProductBundle onDetail={handleToDetail(item)} onImgView={handleImgView(item)} key={item._id} bundle={item} />)
            }
            <Empty empty={isEmpty(productBundles)} msg="해당날짜에 판매중인 상품이 없습니다." />
        </div>
        }
        <JDphotoModal modalHook={modalHook} />
    </div>;
};

export default BuyPageTime