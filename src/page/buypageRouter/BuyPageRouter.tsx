import { getAllFromUrl } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { useHistory } from "react-router-dom";
import { useStoreFindByCode } from "../../hook/useStore";
import { storeFindByCode_StoreFindByCode } from "../../type/api";
import { Page404 } from "../exceptions/Page404";
import { BuypageContext } from "./page/buypageList/helper/context";
import { updateURLParameters } from "../../utils/url";
import { IbuypageConfig } from "../buypageSet/config/config";
import { useBasket } from "../../hook/useBasket";
import { isEmpty } from "lodash";
import { StoreFactoryMap } from "../../utils/factory";
import { BuyPageTypeMatcher } from "../../utils/enumConverter";
import { BASKET } from "../../utils/Basket";
import { BuyPageType } from "../../type/enum";

// 바이페이지 라우터 (에디팅용)
// 쿼리 스트링에 id가 이 포함되어 있다면
// 바이페이지 라우터 (실전 iframe)

export enum BuyPagePaths {
    index = "/buypage",
    purchase = "/buypage/purchase",
    sucess = "/buypage/sucess",
    fail = "/buypage/fail",
    check = "/buypage/check",
}

interface IBuyPageQuery {
    storeCode?: string;
}

export const buyPageLinkCreater = (query: IBuyPageQuery) => {
    const urlQueries = Object.entries(query).map(
        ([key, value]): IselectedOption => ({ label: key, value })
    );
    return updateURLParameters(
        location.origin + "/#" + BuyPagePaths.index,
        urlQueries
    );
};

interface IProp extends IBuyPageWrapProp {
    store: storeFindByCode_StoreFindByCode;
}

export const BuypageRouter: React.FC<IProp> = ({ store, propConfigure }) => {
    const configure =
        propConfigure || (store.buypage.configure as IbuypageConfig);
    localStorage.setItem("storeId", store._id);
    const { updateComponent } = useBasket();

    const itemCats =
        store.itemCategories?.map(
            (cat): IselectedOption => ({ label: cat.label, value: cat._id })
        ) || [];

    const storeType = store.type;
    const buypageType = BuyPageTypeMatcher[storeType];
    const Facotry = StoreFactoryMap.get(buypageType)!;
    const FACTORY = new Facotry(storeType);
    BASKET.key = store._id;

    const noPayMethod = isEmpty(configure.payMethods);
    return (
        <BuypageContext.Provider
            value={{
                isLogined: false,
                noPayMethod,
                store,
                configure,
                itemCats,
                buypageType,
                isDateRangeMall: buypageType === BuyPageType.DAY_RANGE,
                isShoppingType: buypageType === BuyPageType.SHOPPING_MALL,
                isTimeMall: buypageType === BuyPageType.TIME_MALL,
                updateBasket: updateComponent,
            }}
        >
            {FACTORY.BuypageRouter}
        </BuypageContext.Provider>
    );
};

interface IBuyPageWrapProp {
    propConfigure?: IbuypageConfig;
    storeCode?: string;
}

export const BuyPageRouterWrap: React.FC<IBuyPageWrapProp> = ({
    storeCode: propStoreCode,
    ...props
}) => {
    const { storeCode } = getAllFromUrl();
    const {
        item: store,
        loading,
        called,
        networkStatus,
    } = useStoreFindByCode(storeCode || propStoreCode);
    if (!called) return <div />;
    if (loading) return <div />;
    if (networkStatus < 7) return <div />;
    if (!store) return <Page404 />;

    return <BuypageRouter store={store} {...props} />;
};

export default BuyPageRouterWrap;
