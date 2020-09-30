import { JDpreloader } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import SMSRouter from "./SMSrouter";
const DailyPricePage = React.lazy(() => import('./page/price/DailyPriceWrap'));
const PayConfigPage = React.lazy(() => import('./page/pagConfig/PayConfigWrap'));
const StaticPage = React.lazy(() => import('./page/static/Static'));
const DashboardPage = React.lazy(() => import('./page/dashboard/Dashboard'));
const SalesListPage = React.lazy(() => import('./page/sale/SalesListWrap'));

const MainRouter = () => {
  return <Switch>
    <Suspense fallback={<JDpreloader page loading />}>
      <Route
        exact={true}
        path={"/sms"}
        render={() => {
          return <SMSRouter />;
        }}
      />

      <Route
        exact={true}
        path={"/price-set"}
        render={() => {
          return <DailyPricePage />;
        }}
      />
      <Route
        exact={true}
        path={"/sales-list"}
        render={() => {
          return <SalesListPage />;
        }}
      />
      <Route
        exact={true}
        path={"/store-user-list"}
        render={() => {
          return <PayConfigPage />;
        }}
      />
      <Route
        exact={true}
        path={"/pay-to-janda"}
        render={() => {
          return <StaticPage />;
        }}
      />
      <Route
        exact={true}
        path={"/pay-from-janda"}
        render={() => {
          return <PayConfigPage />;
        }}
      />
      <Route
        exact={true}
        path={"/"}
        render={() => {
          return <DashboardPage />;
        }}
      />
    </Suspense>
  </Switch>
}

export default MainRouter;