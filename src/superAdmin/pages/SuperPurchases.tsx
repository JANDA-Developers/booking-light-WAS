import { Flex, JDcontainer, JDpageHeader, Mb, SkipUpdate, WindowSize } from '@janda-com/front';
import { useStoreList } from '../../hook/useStore';
import JDsearchBar from "../../atom/SearchBar"
import { _IUserFilter, _IUserSort, _PurchaseBundleFilter, _PurchaseBundleSort, _StoreFilter, _StoreSort } from '../../type/api';
import Pagination from "../../component/pagination/Pagination";
import { SuperStoreTable } from '../components/SuperStoreTable';
import { usePurchaseBusinessBundleList } from "../../hook/usePurchase"
import { PurchaseBundleTable } from '../../page/purchase/components/PurchaseBundleTable';
import React from 'react';

interface IProp { }

export const SuperPurchaseList: React.FC<IProp> = () => {
    const usePurchaseBundleList = usePurchaseBusinessBundleList();
    const { items, getLoading, paginatorHook, pageInfo } = usePurchaseBundleList;
    return <div><JDpageHeader title="전체 구매리스트" desc="구매리스트." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <JDsearchBar<_PurchaseBundleFilter, _PurchaseBundleSort> searchOps={[{
                label: "이름",
                value: "purchaserName__eq"
            }, {
                label: "코드",
                value: "code__eq"
            }, {
                label: "전화번호",
                value: "purchaserContact__eq"
            }]}  {...usePurchaseBundleList} />
            <Mb />
            <SkipUpdate skip={getLoading}>
                <PurchaseBundleTable purchaseBundles={items} />
            </SkipUpdate>
            <Mb />
            <Flex center>
                <Pagination  {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
            </Flex>
        </JDcontainer>
    </div>
};

export default SuperPurchaseList;