import { JDcard, JDcontainer, JDpageHeader, Mb, useModal, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';
import { getProductDeleteHandle } from '../../hook/useProduct';
import { me_Me_stores_items, productList_ProductList_items, _ProductFilter, _ProductSort } from '../../type/api';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { Paths } from '../../MainRouter';
import JDsearchBar from '../../atom/SearchBar';
import { PurchaseBundleTable } from './components/PurchaseBundleTable';
import { usePurchaseBusinessBundleList } from '../../hook/usePurchase';
import { ItemRadio } from '../../component/itemRadio/ItemRadio';
import Pagination from '../../component/pagination/Pagination';
import { IPurchaseBundleModalInfo, PurchaseBundleModal } from '../../component/purchaseBundleModal/PurchaseBundleModal';

interface IProps { }

type IDetailRouteProp = { itemId?: string }

export const ProductList: React.FC<IProps> = () => {
    const history = useHistory()
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();

    const purchaseBundleHook = usePurchaseBusinessBundleList()
    const { items: purchaseBundles, paginatorHook, setFilter, filter } = purchaseBundleHook;
    const { selectedStore, me } = useContext(AppContext);
    const { handleDelete } = getProductDeleteHandle()
    const modalHook = useModal<IPurchaseBundleModalInfo>()

    const toDetail = (itemId?: string) => {
        history.push(Paths.productDetail + "/" + itemId);
    }

    const handleEdit = (product: Partial<productList_ProductList_items>) => {
        toDetail(product._itemId)
    }

    const handleSelectItem = (item?: me_Me_stores_items) => {
        setFilter({
            ...filter,
            _purchaseItemIds__in: item ? [item._id] : undefined
        })
    }

    const itemIdFilter = filter._purchaseItemIds__in?.[0];

    return <div>
        <JDpageHeader title="구매리스트" desc="구매리스트 확인하기." />
        <JDcontainer size={WindowSize.full}>
            {/* <ItemRadio handleSelectItem={handleSelectItem} itemIdFilter={itemIdFilter} /> */}
            <JDsearchBar searchOps={[{
                label: "이름",
                value: "purchaserName__contains"
            }, {
                label: "휴대폰번호",
                value: "purchaserContact__contains"
            }]}  {...purchaseBundleHook} />
            <Mb />
            <JDcard mb foot={<CardBtn thema="primary">추가하기</CardBtn>} head="상품리스트" >
                <PurchaseBundleTable handleView={(bundle) => {
                    modalHook.openModal({
                        bundleId: bundle._id
                    })
                }} purchaseBundles={purchaseBundles} handleDelete={({ _id }) => { handleDelete(_id) }} />
            </JDcard>
            <Pagination {...paginatorHook} />
        </JDcontainer>
        <PurchaseBundleModal modalHook={modalHook} />
    </div>;
};

export default ProductList;