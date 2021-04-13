import { Excel, Flex, JDcard, JDcontainer, JDpageHeader, Mr, SkipUpdate, useModal, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';
import { productList_ProductList_items_ProductBooking, _ProductFilter, _ProductSort, _PurchaseBundleSort } from '../../type/api';
import { useHistory, useRouteMatch } from 'react-router-dom';
import { CardBtn } from '../../component/btns/ModalBtn';
import { Paths } from '../../MainRouter';
import JDsearchBar from '../../atom/SearchBar';
import { PurchaseBundleTable } from './components/PurchaseBundleTable';
import { usePurchaseBundleDelete, usePurchaseBusinessBundleList } from '../../hook/usePurchase';
import { ItemRadios } from '../../component/itemRadio/ItemRadio';
import Pagination from '../../component/pagination/Pagination';
import { IPurchaseBundleModalInfo, PurchaseBundleModal } from '../../component/purchaseBundleModal/PurchaseBundleModal';
import { ScrollBox } from '../../component/scrollBox/ScrollBox';
import { getExcelByBookings } from '../../utils/getExcelData';
import { IconButton } from '../../atom/iconButton/IconButton';
import { promptConfirm } from '../../utils/prompt';
import { completeMsg } from '../../utils/onCompletedMessage';
import { SortSelect } from '../../component/sortSelect/SortSelect';

interface IProps { }

type IDetailRouteProp = { itemId?: string }

export const ProductList: React.FC<IProps> = () => {
    const history = useHistory()
    const { selectedStoreId } = useContext(AppContext);
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>();
    const [bundleDelete] = usePurchaseBundleDelete({
        onCompleted: ({ PurchaseBundleDelete }) => {
            completeMsg(PurchaseBundleDelete, "삭제완료")
        }
    });
    const purchaseBundleHook = usePurchaseBusinessBundleList({
        fixingFilter: {
            _storeId__eq: selectedStoreId
        },
        initialFilter: {
            _purchaseItemIds__in: itemId ? [itemId] : undefined
        }
    })
    const { items: purchaseBundles, paginatorHook, setFilter, filter, getLoading, pageInfo } = purchaseBundleHook;

    const modalHook = useModal<IPurchaseBundleModalInfo>()

    const toDetail = (itemId?: string) => {
        history.push(Paths.productDetail + "/" + itemId);
    }

    const handleDelete = (bundleId: string) => {
        promptConfirm("삭제", "구매목록을 삭제하시려면 '삭제'라고 입력 해주세요", () => {
            bundleDelete({
                variables: {
                    purchaseBundleId: bundleId
                }
            })
        })
    }

    const handleEdit = (product: Partial<productList_ProductList_items_ProductBooking>) => {
        toDetail(product._itemId)
    }

    const handleSelectItem = (filterIds?: string[]) => {
        setFilter({
            ...filter,
            _purchaseItemIds__in: filterIds ? [...filterIds] : undefined
        })
    }


    return <div>
        <JDpageHeader title="구매리스트" desc="구매리스트 확인하기." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <ScrollBox scrollSize="small">
                <ItemRadios itemIdFilter={filter._purchaseItemIds__in || undefined} handleSelectItem={handleSelectItem} />
            </ScrollBox>
            <Flex mb vCenter>
                <JDsearchBar searchOps={[{
                    label: "이름",
                    value: "purchaserName__contains"
                }, {
                    label: "휴대폰번호",
                    value: "purchaserContact__contains"
                }, {
                    label: "구매코드",
                    value: "code__eq"
                }]}  {...purchaseBundleHook} />
                <Mr />
                <Excel data={getExcelByBookings(purchaseBundles)} element={<IconButton mr icon="list" tooltip="엑셀출력" />} />
                <SortSelect SORT={_PurchaseBundleSort} {...purchaseBundleHook} />
            </Flex  >
            <JDcard mb foot={<CardBtn thema="primary">추가하기</CardBtn>} head="상품리스트" >
                <SkipUpdate skip={getLoading}>
                    <PurchaseBundleTable handleView={(bundle) => {
                        modalHook.openModal({
                            bundleId: bundle._id
                        })
                    }}
                        purchaseBundles={purchaseBundles}
                        handleDelete={({ _id }) => { handleDelete(_id) }}
                    />
                </SkipUpdate>
            </JDcard>
            <Pagination {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
        </JDcontainer>
        <PurchaseBundleModal modalHook={modalHook} />
    </div>;
};

export default ProductList;