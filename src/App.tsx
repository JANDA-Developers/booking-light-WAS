import React, { useEffect } from 'react';
import './scss/App.scss';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import { ReactTooltip } from '@janda-com/front';
import { Toast } from '@janda-com/front';
import { APPcontextProvider, useAppContext } from "./context"
import { Layout } from './component/layout/Layout';
import { useMe } from './hook/useUser';
import { merge } from './utils/merge';
import { me_Me } from './type/api';
import { Page404 } from './page/exceptions/Page404';

interface IAppProp {
  me?: me_Me
  contextQueryLoading: boolean;
}

const App: React.FC<IAppProp> = ({ me, contextQueryLoading }) => {
  const context = useAppContext(me)

  return (
    <div key={context.selectedStore?._id} className="App">
      <APPcontextProvider value={{
        ...context,
        contextQueryLoading
      }}>
        <Router >
          <Layout>
            <Switch>
              <Route path="/auth" render={() => <AuthRouter />} />
              <Route
                path={"/"}
                render={() => <MainRouter />}
              />
              <Route render={() => <Page404 />} />
            </Switch>
          </Layout>
        </Router>
        <Toast />
        <ReactTooltip id="mainTooltip" />
      </APPcontextProvider>
    </div >
  );
}


export const AppWrap = () => {
  const { data: me, called, getLoading, networkStatus } = useMe({ skip: true, notifyOnNetworkStatusChange: true })
  const contextQueryLoading = !called || getLoading || networkStatus < 7;

  return <App contextQueryLoading={contextQueryLoading} key={(contextQueryLoading ? "appLoading" : "appReady") + me?._id} me={me} />
}

export default AppWrap;