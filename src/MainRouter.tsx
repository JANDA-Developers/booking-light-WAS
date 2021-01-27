import { } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import SMSRouter from "./page/sms/SMSrouter";
const ProductSettingWrap = React.lazy(() => import("./page/productSetting/ProductSettingWrap"));
const StoreSettingWrap = React.lazy(() => import("./page/storeSetting/StoreSettingWrap"));
const DailyPricePage = React.lazy(() => import('./page/price/DailyPriceWrap'));
const PayConfigPage = React.lazy(() => import('./page/pagConfig/PayConfigWrap'));
const StaticPage = React.lazy(() => import('./page/static/Static'));
const DashboardPage = React.lazy(() => import('./page/dashboard/dashboard/DashboardWrap'));
const ProductBoardPage = React.lazy(() => import('./page/dashboard/productBoard/ProductBoard'));
const SalesListPage = React.lazy(() => import('./page/sale/SalesListWrap'));
const ProductGroupPage = React.lazy(() => import('./page/productGroupSetting/ProductGorupSettingWrap'));
const ProductBoardPageWrap = React.lazy(() => import('./page/sale/SalesListWrap'));
const ProductCapcityPage = React.lazy(() => import('./page/productCapacity/ProductCapacityWrap'));

export enum Paths {
  sms = '/sms',
  price = '/price-set',
  saleList = '/sale-list',
  storeUserList = '/store-user-list',
  payToJanda = '/pay-to-janda',
  payFromJanda = '/pay-from-janda',
  productBoard = '/product-board',
  productset = '/productset',
  productGroup = '/productGroup',
  productCapacity = '/productCapacity',
  storeset = '/storeset',
  main = '/',
}


const MainRouter = () => {
  return <Switch>
    <Suspense fallback={<div >loading...</div>}>
      <Route
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
      <Route
        exact={true}
        path={Paths.productBoard}
        render={() => {
          return <ProductBoardPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.productGroup}
        render={() => {
          return <ProductGroupPage />;
        }}
      />
      <Route
        exact={true}
        path={Paths.productCapacity}
        render={() => {
          return <ProductCapcityPage />;
        }}
      />
    </Suspense>
  </Switch>
}

export default MainRouter;
