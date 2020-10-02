import React, { useState } from 'react';
import './scss/App.scss';
import { HashRouter as Router, Route, Switch } from "react-router-dom";
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import HeaderWrap from './component/Common/HeaderWrap';
import Sidebar from './component/sidebar/Sidebar';
import ProfileModal from './component/profile/ProfileModal';
import { JDVERSION } from "../src/type/const"
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { SideBarWrap } from './component/sidebar/SidebarWrap';
import { JDalign, useDropDown } from '@janda-com/front';

const Data_headIcon: IIcons[] = [
  "help",
  "search2",
  "exclamation"
]

function App() {


  return (
    <div className="App">
      <HeaderWrap />
      <Router >
        <Switch>
          <SideBarWrap />
        </Switch>
      </Router>
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
