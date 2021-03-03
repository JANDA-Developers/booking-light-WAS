import { getAllFromUrl } from '@janda-com/front';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStoreFindByCode } from '../../hook/useStore';
import { storeFindByCode_StoreFindByCode } from '../../type/api';
import { BuyPageDetail } from './page/buypageDetail/BuyPageDetail';
import { Page404 } from '../exceptions/Page404';
import { BuyPageCheck } from './page/buypageCheck/BuyPageCheck';
import { BuypageContext } from './page/buypageList/helper/context';
import { BuyPage } from './page/buypageList/BuyPage';
import { BuyPagePurchase } from './page/buypagePurchase/BuyPagePurchase';
import { BuyPageSucess } from './page/buypageSucess/BuyPageSucess';
import { BuyPageFail } from './page/buypageFail/BuyPageFail';

export enum BuyPagePaths {
    index = '/',
    detail = '/detail',
    price = '/purchase',
    sucess = '/sucess',
    fail = '/fail',
    check = '/check',
}


interface IProp {
    store: storeFindByCode_StoreFindByCode
}

export const BuypageRouter: React.FC<IProp> = ({ store }) => {


    return <BuypageContext.Provider value={{
        store,
    }}>
        <Switch>
            <Route path={BuyPagePaths.index} render={() => <BuyPage />} />
            <Route path={BuyPagePaths.detail + "/:itemId?"} render={() => <BuyPageDetail />} />
            <Route path={BuyPagePaths.price} render={() => <BuyPagePurchase />} />
            <Route path={BuyPagePaths.sucess + "/:bundleId?"} render={() => <BuyPageSucess />} />
            <Route path={BuyPagePaths.fail} render={() => <BuyPageFail />} />
            <Route path={BuyPagePaths.check} render={() => <BuyPageCheck />} />
        </Switch>
    </BuypageContext.Provider>;
};



interface IBuyPageWrapProp {
    storeCode?: string;
}

export const BuyPageRouterWrap: React.FC<IBuyPageWrapProp> = ({ storeCode: propStoreCode }) => {
    const { storeCode } = getAllFromUrl();
    const { item: store, loading } = useStoreFindByCode(storeCode || propStoreCode)
    if (loading) return <div />;
    if (!store) return <Page404 />;
    return <BuypageRouter store={store} />
}


