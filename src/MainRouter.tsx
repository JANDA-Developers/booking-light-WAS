import { JDpreloader } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Common/Header";
import MypageModal from "./component/Mypage/MypageModal";
import Sidebar from "./component/Sidebar/Sidebar";
import StoreSetting from './component/StoreSetting/StoreSetting';
import ItemSettingWrap from "./component/ItemSetting/ItemSettingWrap";

const SalesPage = React.lazy(() => import('./page/sales/Sales'));
const DashboardPage = React.lazy(() => import('./page/dashboard/Dashboard'));

const MainRouter = () => {
  return <Switch>
    <Suspense fallback={<JDpreloader page loading />}>
      {/* <Route
        exact={true}
        path={"/product-list"}
        render={() => {
          return <DashboardPage />;
        }}
      /> */}
      {/* <Route
        exact={true}
        path={"/sales-list"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={"/store-user-list"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={"/sub-account"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={"/pay-to-janda"}
        render={() => {
          return <DashboardPage />;
        }}
      /> */}
      <Route
        exact={true}
        path={"/pay-from-janda"}
        render={() => {
          return <SalesPage />;
        }}
      />
      <Route
        exact={true}
        path={"/"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={"/itemset"}
        render={() => {
          return <ItemSettingWrap />;
        }}
      />
      <Route
        exact={true}
        path={"/storeset"}
        render={() => {
          return <StoreSetting />;
        }}
      />
    </Suspense>
  </Switch>
}

export default MainRouter;
