import { getAllFromUrl } from '@janda-com/front';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React, { useMemo } from 'react';
import { Route, Switch, useHistory } from 'react-router-dom';
import { useStoreFindByCode } from '../../hook/useStore';
import { storeFindByCode_StoreFindByCode } from '../../type/api';
import { Page404 } from '../exceptions/Page404';
import { BuyPageCheck } from './page/buypageCheck/BuyPageCheck';
import { BuypageContext } from './page/buypageList/helper/context';
import { BuyPageSucess } from './page/buypageSucess/BuyPageSucess';
import { BuyPageFail } from './page/buypageFail/BuyPageFail';
import { updateURLParameters } from '../../utils/url';
import { IbuypageConfig } from "../buypageSet/config/config";
import { BuyPageType } from "../../type/enum";
import { BuyPageShoppingPurchase } from './page/buypagePurchase/BuyPageShoppingPurchase';
import { useBasket } from '../../hook/useBasket';
const BuyPageTime = React.lazy(() => import('./page/buypageList/BuyPageTime'));
const BuyPageTimePurchase = React.lazy(() => import('./page/buypagePurchase/BuyPageTimePurchase'));
const BuypageShoppingSucess = React.lazy(() => import('./page/buypageSucess/BuyPageShoppingSucess'));
const BuyPageDefault = React.lazy(() => import('./page/buypageList/BuyPage'));
const BuyPageShopping = React.lazy(() => import('./page/buypageList/BuyPageShopping'));



// 바이페이지 라우터 (에디팅용)
// 쿼리 스트링에 id가 이 포함되어 있다면 
// 바이페이지 라우터 (실전 iframe)

export enum BuyPagePaths {
    index = '/buypage',
    purchase = '/buypage/purchase',
    sucess = '/buypage/sucess',
    fail = '/buypage/fail',
    check = '/buypage/check',
}


interface IBuyPageQuery {
    storeCode?: string;
}

export const buyPageLinkCreater = (query: IBuyPageQuery) => {
    const urlQueries = Object.entries(query).map(([key, value]): IselectedOption => ({ label: key, value }))
    return updateURLParameters(location.origin + "/#" + BuyPagePaths.index, urlQueries);
}


interface IProp extends IBuyPageWrapProp {
    store: storeFindByCode_StoreFindByCode
}

export const BuypageRouter: React.FC<IProp> = ({ store, propConfigure }) => {
    const configure = propConfigure || store.buypage.configure as IbuypageConfig;
    const history = useHistory();
    localStorage.setItem("storeId", store._id);
    const { updateComponent } = useBasket();


    const BuypageNormalRouter = () => <Switch>
        <Route exact path={[BuyPagePaths.index]} render={() => <BuyPageDefault />} />
        {/* <Route path={BuyPagePaths.purchase} render={() => <BuyPagePurchase />} /> */}
        <Route path={BuyPagePaths.sucess + "/:bundleId?"} render={() => <BuyPageSucess />} />
        <Route path={BuyPagePaths.fail} render={() => <BuyPageFail />} />
        <Route path={BuyPagePaths.check} render={() => <BuyPageCheck />} />
    </Switch>

    const BuypageShoppingRouter = () => <Switch>
        <Route exact path={[BuyPagePaths.index]} render={() => <BuyPageShopping />} />
        <Route exact path={BuyPagePaths.purchase} render={() => <BuyPageShoppingPurchase handleBackStep={() => {
            history.push(BuyPagePaths.index);
        }} />} />
        <Route path={BuyPagePaths.sucess + "/:bundleId?"} render={() => <BuypageShoppingSucess />} />
        <Route path={BuyPagePaths.fail} render={() => <BuyPageFail />} />
        <Route path={BuyPagePaths.check} render={() => <BuyPageCheck />} />
    </Switch>

    const BuypageTimeRouter = () => <Switch>
        <Route exact path={[BuyPagePaths.index]} render={() => <BuyPageTime />} />
        <Route exact path={BuyPagePaths.purchase} render={() => <BuyPageTimePurchase />} />
        <Route path={BuyPagePaths.sucess + "/:bundleId?"} render={() => <BuypageShoppingSucess />} />
        <Route path={BuyPagePaths.fail} render={() => <BuyPageFail />} />
        <Route path={BuyPagePaths.check} render={() => <BuyPageCheck />} />
    </Switch>

    const itemCats = store.itemCategories?.map((cat): IselectedOption => ({ label: cat.label, value: cat._id })) || [];
    return <BuypageContext.Provider value={{
        isLogined: false,
        store,
        configure,
        itemCats,
        updateBasket: updateComponent
    }}>
        {configure.type === BuyPageType.RESERVATION_NORMAL &&
            <BuypageNormalRouter />
        }
        {configure.type === BuyPageType.SHOPPING_MALL &&
            <BuypageShoppingRouter />
        }
        {configure.type === BuyPageType.TIME_MALL &&
            <BuypageTimeRouter />
        }
    </BuypageContext.Provider>;
};




interface IBuyPageWrapProp {
    propConfigure?: IbuypageConfig;
    storeCode?: string;
}

export const BuyPageRouterWrap: React.FC<IBuyPageWrapProp> = ({ storeCode: propStoreCode, ...props }) => {
    const { storeCode } = getAllFromUrl();
    const { item: store, loading, called, networkStatus } = useStoreFindByCode(storeCode || propStoreCode)
    if (!called) return <div />
    if (loading) return <div />;
    if (networkStatus < 7) return <div />;
    if (!store) return <Page404 />;

    return <BuypageRouter store={store} {...props} />
}



export default BuyPageRouterWrap;