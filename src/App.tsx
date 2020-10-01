import React, { useState } from 'react';
import './scss/App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import HeaderWrap from './component/Common/HeaderWrap';
import Sidebar from './component/Sidebar/Sidebar';
import MypageModal from './component/Mypage/MypageModal';
import { JDVERSION } from "../src/type/const"
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { SideBarWrap } from './component/Sidebar/SidebarWrap';
import { JDalign } from '@janda-com/front';

const Data_headIcon: IIcons[] = [
  "help",
  "search2",
  "exclamation"
]


const DataMypageInfo = {
  userInfo: {
    image: "",
    name: "이서진",
    version: "JANDA Booking Light Version 이용 중"
  },
  service: [
    {
      icon: "menu",
      title: "환경설정"
    },
    {
      icon: "menu",
      title: "고객센터"
    },
    {
      icon: "menu",
      title: "마이페이지"
    },
    {
      icon: "menu",
      title: "로그아웃"
    }
  ]
}

function App() {
  return (
    <div className="App">

      <HeaderWrap />
      <Router >
        <Switch>
          <SideBarWrap />
        </Switch>
      </Router>
      <MypageModal modalInfo={DataMypageInfo} />
      <JDalign flex>
        <div id="sidePlaceHolder" />
        <Router >
          <Switch>
            <Route path="/auth" render={() => <AuthRouter />} />
            <Route
              path={"/"}
              render={() => <MainRouter />}
            />
          </Switch>
        </Router>
      </JDalign>

    </div>
  );
}

export default App;
