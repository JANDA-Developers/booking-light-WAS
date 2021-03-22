import { getAllFromUrl, updateURLParameter } from '@janda-com/front';
import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { useStoreFindByCode } from '../../hook/useStore';
import { storeFindByCode_StoreFindByCode } from '../../type/api';
import { Page404 } from '../exceptions/Page404';
import { BuyPageCheck } from './page/buypageCheck/BuyPageCheck';
import { BuypageContext } from './page/buypageList/helper/context';
import { BuyPage } from './page/buypageList/BuyPage';
import { BuyPagePurchase } from './page/buypagePurchase/BuyPagePurchase';
import { BuyPageSucess } from './page/buypageSucess/BuyPageSucess';
import { BuyPageFail } from './page/buypageFail/BuyPageFail';
import { IbuypageConfig, TBuypageNormalTexts } from '../buypageSet/compoents/BuypageConfiger';
import { updateURLParameters } from '../../utils/url';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { Storage } from '../../utils/storage';
import { generateLanguageProxy } from './helper';


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
    localStorage.setItem("storeId", store._id)

    return <BuypageContext.Provider value={{
        isLogined: false,
        store,
        configure,
    }}>
        <Switch>
            <Route exact path={[BuyPagePaths.index]} render={() => <BuyPage />} />
            {/* <Route path={BuyPagePaths.purchase} render={() => <BuyPagePurchase />} /> */}
            <Route path={BuyPagePaths.sucess + "/:bundleId?"} render={() => <BuyPageSucess />} />
            <Route path={BuyPagePaths.fail} render={() => <BuyPageFail />} />
            <Route path={BuyPagePaths.check} render={() => <BuyPageCheck />} />
        </Switch>
    </BuypageContext.Provider>;
};



interface IBuyPageWrapProp {
    propConfigure?: IbuypageConfig;
    storeCode?: string;
}

export const BuyPageRouterWrap: React.FC<IBuyPageWrapProp> = ({ storeCode: propStoreCode, ...props }) => {
    const { storeCode } = getAllFromUrl();
    const { item: store, loading } = useStoreFindByCode(storeCode || propStoreCode)
    if (loading) return <div />;
    if (!store) return <Page404 />;
    return <BuypageRouter store={store} {...props} />
}



export default BuyPageRouterWrap;