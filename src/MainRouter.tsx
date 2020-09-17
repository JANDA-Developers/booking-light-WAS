import { JDpreloader } from "@janda-com/front";
import { IIcons } from "@janda-com/front/dist/components/icons/declation";
import PriceViewer from "@janda-com/front/dist/components/priceViewer/PriceViewer";
import React, { Suspense } from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./component/Common/Header";
import MypageModal from "./component/Mypage/MypageModal";
import Sidebar from "./component/Sidebar/Sidebar";

const StasticPage = React.lazy(() => import("./page/statistic/Statistic"));
const DashboardPage = React.lazy(() => import("./page/dashboard/Dashboard"));

const Data_headVersion = "25.01.1";

const Data_headIcon: IIcons[] = ["help", "exclamation", "exclamation"];

const Data_mypageModal = {
  userInfo: {
    image: "",
    name: "이서진",
    version: "JANDA Booking Light Version 이용 중",
  },
  service: [
    {
      icon: "menu",
      title: "환경설정",
    },
    {
      icon: "menu",
      title: "고객센터",
    },
    {
      icon: "menu",
      title: "마이페이지",
    },
    {
      icon: "menu",
      title: "로그아웃",
    },
  ],
};

const MainRouter = () => {
  return (
    <div>
      <Header version={Data_headVersion} icons={Data_headIcon} />
      {/* <Sidebar /> */}
      <MypageModal modalInfo={Data_mypageModal} />

      <Switch>
        <Suspense fallback={<JDpreloader page loading />}>
          <Route
            exact={true}
            path={"/statistic"}
            render={() => {
              return <StasticPage />;
            }}
          />
          <Route
            exact={true}
            path={"/"}
            render={() => {
              return (
                <DashboardPage
                  title={"Booking Light Home"}
                  subtitle={"판매 상품 현황을 확인할 수 있습니다"}
                />
              );
            }}
          />
        </Suspense>
      </Switch>
    </div>
  );
};

export default MainRouter;
