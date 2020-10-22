import React from 'react';
import './scss/App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import HeaderWrap from './component/header/HeaderWrap';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { SideBarWrap } from './component/sidebar/SidebarWrap';
import { JDalign } from '@janda-com/front';
import NiceElments from './nice/NiceElments';
import client from "./apollo/apolloClient"
import { ApolloProvider } from '@apollo/client';

const Data_headIcon: IIcons[] = [
  "help",
  "search2",
  "exclamation"
]

function App() {


  return (
    <div className="App">
      <ApolloProvider client={client}>
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
      </ApolloProvider>
    </div>
  );
}

export default App;
