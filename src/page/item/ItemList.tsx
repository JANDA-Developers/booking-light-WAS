import { JDcontainer, JDloadingCard, JDpageHeader, JDpreloader, Mb, SkipUpdate, Tiny, } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import JDsearchBar from '../../atom/SearchBar';
import { CardBtn } from '../../component/btns/ModalBtn';
import DotButton from '../../component/dotButton/DotButton';
import { JDicon } from '../../component/icons/Icons';
import AppContext from '../../context';
import { useItemDelete, useItemList } from '../../hook/useItem';
import { Paths } from '../../MainRouter';
import { itemList_ItemList_items_ItemBooking, _IItemFilter, _IItemSort } from '../../type/api';
import { promptConfirm } from '../../utils/prompt';
import { completeMsg } from '../../utils/utils';
import { ItemCard } from './components/ItemCard';

interface IProp { }

export const ItemList: React.FC<IProp> = () => {
    const { selectedStoreId } = useContext(AppContext)
    const itemListHook = useItemList({
        initialFilter: {
            _storeId__eq: selectedStoreId
        }
    })
    const { items, getLoading } = itemListHook;
    const { push } = useHistory();
    // const itemModalHook = useModal<IItemModalInfo>()
    const [deleteMu] = useItemDelete({
        onCompleted: ({ ItemDelete }) => {
            completeMsg(ItemDelete, "아이템 삭제성공", "아이템 삭제실패");
        }
    });

    const toDetailItem = (itemId: string = "") => {
        push(Paths.itemDetail + "/" + itemId)
    }

    const toProductList = (itemId: string = "") => {
        push(Paths.productList + "/" + itemId)
    }

    const toProductCreate = (itemId: string = "") => {
        push(Paths.productDetail + "/create/" + itemId)
    }



    const handleEdit = (item?: itemList_ItemList_items_ItemBooking) => () => {
        toDetailItem(item?._id)
    }


    const handleDelete = (item: itemList_ItemList_items_ItemBooking) => () => {
        promptConfirm(item.name, `아이템을 삭제하실려면 ${item.name}을 정확하게 입력 해주세요.`, () => {
            deleteMu({
                variables: {
                    itemId: item._id
                }
            })
        })
    }


    return <div>
        <JDpreloader loading={getLoading} floating />
        <JDpageHeader title="상품 생성하기" desc="당신의 상품을 등록하세요." />
        <JDcontainer>
            <JDloadingCard mb loading={getLoading} />
            <JDsearchBar<_IItemFilter, _IItemSort> searchOps={[{ label: "이름", value: "name__eq" }]} {...itemListHook} />
            <Mb />
            <SkipUpdate skip={getLoading} >
                {items.map(item =>
                    <ItemCard
                        mb
                        key={item._id}
                        onEdit={handleEdit(item)}
                        onDelete={handleDelete(item)}
                        item={item}
                        foot={
                            <>
                                <Tiny color={item.productCount === 0 ? "warn" : undefined} mb> <JDicon mr="tiny" icon="info" />{item.productCount === 0 ? "생성된 상품이 없습니다. 상품을 생성해주세요." : `누적 상품수 ${item.productCount}`}</Tiny>
                                <CardBtn mr thema="primary" onClick={handleEdit(item)} label="수정하기" />
                                <CardBtn mr hide={!item.productCount} onClick={() => {
                                    toProductList(item._id)
                                }} label={"상품보기"} />
                                <CardBtn blink={item.productCount === 0} onClick={() => {
                                    toProductCreate(item._id)
                                }} label={"상품생성"} />
                            </>
                        }
                    />
                )}
            </SkipUpdate>
            <DotButton onClick={() => { toDetailItem() }}>생성하기</DotButton>
        </JDcontainer>
        {/* <ItemModal key={itemModalHook.info?.itemId || "ItemCreate"} modalHook={itemModalHook} /> */}
    </div>;
};

export default ItemList;



