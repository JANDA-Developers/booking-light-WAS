import { JDpreloader } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import SMSRouter from "./SMSrouter";
const ProductSettingWrap = React.lazy(() => import("./component/productSetting/ProductSettingWrap"));
const StoreSettingWrap = React.lazy(() => import("./component/storeSetting/StoreSettingWrap"));
const DailyPricePage = React.lazy(() => import('./page/price/DailyPriceWrap'));
const PayConfigPage = React.lazy(() => import('./page/pagConfig/PayConfigWrap'));
const StaticPage = React.lazy(() => import('./page/static/Static'));
const DashboardPage = React.lazy(() => import('./page/dashboard/Dashboard'));
const SalesListPage = React.lazy(() => import('./page/sale/SalesListWrap'));


export enum Paths {
  sms = '/sms',
  price = '/price-set',
  saleList = '/sale-list',
  storeUserList = '/store-user-list',
  payToJanda = '/pay-to-janda',
  payFromJanda = '/pay-from-janda',
  main = '/',
  productset = '/productset',
  storeset = '/storeset'
}


const MainRouter = () => {
  return <Switch>
    <Suspense fallback={<JDpreloader page loading />}>
      <Route
        exact={true}
        path={Paths.sms}
        render={() => {
          return <SMSRouter />;
        }}
      />
      <Route
        exact={true}
        path={Paths.price}
        render={() => {
          return <DailyPricePage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.saleList}
        render={() => {
          return <SalesListPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.storeUserList}
        render={() => {
          return <PayConfigPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.payToJanda}
        render={() => {
          return <StaticPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.payFromJanda}
        render={() => {
          return <PayConfigPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.main}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.productset}
        render={() => {
          return <ProductSettingWrap />;
        }}
      />
      <Route
        exact={true}
        path={Paths.storeset}
        render={() => {
          return <StoreSettingWrap />;
        }}
      />
    </Suspense>
  </Switch>
}

export default MainRouter;
