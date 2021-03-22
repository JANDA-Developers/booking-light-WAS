import { Flex, JDbutton, JDcard, JDcontainer, JDlabel, JDpageHeader, JDpagination, Mb, SkipUpdate, useDayPicker, useModal, WindowSize } from '@janda-com/front';
import React, { useContext, useState } from 'react';
import AppContext from '../../context';
import { useProductDelete, useProductList } from '../../hook/useProduct';
import { me_Me_stores_items, productList_ProductList_items, _ProductFilter, _ProductSort } from '../../type/api';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { Paths } from '../../MainRouter';
import JDsearchBar from '../../atom/SearchBar';
import { ItemRadio } from '../../component/itemRadio/ItemRadio';
import Pagination from '../../component/pagination/Pagination';
import Calendar from '../../component/Calendar/Calendar';
import dayjs from "dayjs";
import { today, tomorrow } from '../../type/const';
import { ScrollBox } from '../../component/scrollBox/ScrollBox';
import { IUseModalInfo, ProductViewModal } from '../../component/productViewModal/ProductViewModal';

interface IProps { }

type IDetailRouteProp = { itemId?: string }

export const CalendarPage: React.FC<IProps> = () => {
    const history = useHistory()
    const productViewModal = useModal<IUseModalInfo>()
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();
    const dayPickerHook = useDayPicker(null, null);

    const { selectedStore, me } = useContext(AppContext);

    const productListHook = useProductList({
        initialFilter: {
            _itemId__eq: itemId,
            _ownerId__eq: me?._id
        }
    })
    const { items, filter, setFilter, getLoading } = productListHook;


    const handleSelectItem = (item?: me_Me_stores_items) => {
        setFilter({
            ...filter,
            _itemId__eq: item?._id
        })
    }

    const toDetail = (itemId?: string) => {
        history.push(Paths.productDetail + "/" + itemId);
    }

    const handleEdit = (product: Partial<productList_ProductList_items>) => {
        toDetail(product._itemId)
    }

    const itemIdFilter = filter._itemId__eq;

    return <div>
        <JDpageHeader title="상품 현황보기" desc="상품 설정 현황/ 판매현황을 달력에서 확인 하세요." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <ScrollBox scrollSize="small">
                <ItemRadio itemIdFilter={filter._itemId__eq} handleSelectItem={handleSelectItem} />
            </ScrollBox>
            <JDcard>
                <SkipUpdate skip={getLoading}>
                    <Calendar
                        onNavigate={(date) => {
                            console.log({ date });
                            dayPickerHook.setDate(date);
                        }}
                        onDoubleClickEvent={(event) => {
                            productViewModal.openModal({
                                productId: event.resource._id
                            })
                        }}
                        onView={() => { }}
                        displayTools
                        startHour={today}
                        endHour={tomorrow}
                        data={items || []}
                        date={dayjs(dayPickerHook.from || undefined).toDate()}
                        dateTimeRange={{
                            from: dayPickerHook.from,
                            to: dayPickerHook.to,
                        }}
                    />
                </SkipUpdate>
            </JDcard>
            <ProductViewModal key={productViewModal.info?.productId} modalHook={productViewModal} />
        </JDcontainer>
    </div>;
};

export default CalendarPage;