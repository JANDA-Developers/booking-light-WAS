import "./utils/polyfills";
import React, { Suspense, useEffect } from "react";
import "./scss/App.scss";
import ReactTooltip from "react-tooltip";
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainRouter, { Paths } from "./MainRouter";
import AuthRouter from "./AuthRouter";
import { getFromUrl } from "@janda-com/front";
import { Toast } from "@janda-com/front";
import { APPcontextProvider, useAppContext } from "./context";
import { Layout } from "./component/layout/Layout";
import { useMe } from "./hook/useUser";
import { me_Me, StoreType } from "./type/api";
import { useInvoiceFind } from "./hook/useInvoice";
import { todayyyyymmNumber } from "./type/const";
import { serviceUsageMapper } from "./utils/invoiceMapper";
import { isIE } from "./utils/isIE";
import { BuyPageTypeMatcher } from "./utils/enumConverter";
import { BuyPageType } from "./type/enum";
import { StoreFactoryMap } from "./utils/factory";

const SmsRouter = React.lazy(() => import("./page/smsRouter/SmsRouter"));
const BuypageRouter = React.lazy(
    () => import("./page/buypageRouter/BuyPageRouter")
);

interface IAppProp {
    me?: me_Me;
    contextQueryLoading: boolean;
}

const isIe = isIE();
const App: React.FC<IAppProp> = ({ me, contextQueryLoading }) => {
    const context = useAppContext(me);
    const { isLogined } = context;

    const storeCode = getFromUrl("storeCode");
    const { item: thisMonthInvoice } = useInvoiceFind(todayyyyymmNumber, {
        skip: !isLogined || !!storeCode,
    });
    const usageMap = thisMonthInvoice
        ? serviceUsageMapper(thisMonthInvoice)
        : undefined;
    const type = context.selectedStore?.type || StoreType.ELSE;
    const Facotry = StoreFactoryMap.get(BuyPageTypeMatcher[type])!;
    const FACTORY = new Facotry(type);
    const itemOptions =
        context.selectedStore?.items?.map((item) => ({
            label: item.name,
            value: item._id,
        })) || [];
    const storeOptions =
        context.stores?.map((store) => ({
            label: store.name,
            value: store._id,
        })) || [];

    return (
        <div key={context.selectedStore?._id} className="App">
            <APPcontextProvider
                value={{
                    ...context,
                    storeOptions,
                    itemOps: itemOptions,
                    isNonProfit: !!context.selectedStore?.nonProfit,
                    usageMap,
                    thisMonthInvoice,
                    contextQueryLoading,
                    isDateRangeMall: FACTORY.isDateRangeMall,
                    isShoppingType: FACTORY.isShoppingType,
                    isTimeMall: FACTORY.isTimeMall,
                    FACTORY,
                }}
            >
                <Suspense fallback={<div></div>}>
                    <Router>
                        {storeCode && (
                            <Route
                                path={"/buypage"}
                                render={() => <BuypageRouter />}
                            />
                        )}
                        {contextQueryLoading && (
                            <Route render={() => <div />} />
                        )}
                        {!storeCode && (
                            <Layout>
                                <Switch>
                                    <Route
                                        path={Paths.sms}
                                        render={() => <SmsRouter />}
                                    />
                                    <Route
                                        path="/auth"
                                        render={() => <AuthRouter />}
                                    />
                                    {isLogined && (
                                        <Route
                                            path={"/"}
                                            render={() => <MainRouter />}
                                        />
                                    )}
                                </Switch>
                            </Layout>
                        )}
                    </Router>
                </Suspense>
                <Toast />
                {!isIe && <ReactTooltip id="mainTooltip" />}
            </APPcontextProvider>
        </div>
    );
};

export const AppWrap = () => {
    const { data: me, called, getLoading, networkStatus } = useMe({
        notifyOnNetworkStatusChange: true,
    });
    const contextQueryLoading = !called || getLoading || networkStatus < 7;

    return (
        <App
            contextQueryLoading={contextQueryLoading}
            key={(contextQueryLoading ? "appLoading" : "appReady") + me?._id}
            me={me}
        />
    );
};

export default AppWrap;
