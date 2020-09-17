import { JDpreloader } from "@janda-com/front";
import { IIcons } from "@janda-com/front/dist/components/icons/declation";
import PriceViewer from "@janda-com/front/dist/components/priceViewer/PriceViewer";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';
import Header from "./component/Common/Header";
import MypageModal from "./component/Mypage/MypageModal";
import Sidebar from "./component/Sidebar/Sidebar";

const StasticPage = React.lazy(() => import('./page/calculate-payment/Statistic'));
const DashboardPage = React.lazy(() => import('./page/dashboard/Dashboard'));

const MainRouter = () => {
  return <Switch>
    <Suspense fallback={<JDpreloader page loading />}>
      <Route
        exact={true}
        path={"/product-list"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
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
      />
      <Route
        exact={true}
        path={"/pay-to-janda"}
        render={() => {
          return <DashboardPage />;
        }}
      />
      <Route
        exact={true}
        path={"/calculate-payment"}
        render={() => {
          return <StasticPage />;
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