import React, { useContext, useEffect, useState } from 'react';
import './scss/App.scss';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainRouter from './MainRouter';
import AuthRouter from './AuthRouter';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDpreloader, JDtooltip, ReactTooltip } from '@janda-com/front';
import { useQuery } from '@apollo/client';
import { Toast } from '@janda-com/front';
import { ME } from './apollo/queries';
import { me, me_Me as IMe, me_Me_stores as IStore } from './type/api';
import AppContext, { APPcontextProvider, useAppContext } from "./context"
import extractDoc from './utils/dataExtraction';
import { Layout } from './component/layout/Layout';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import { generateContext } from './helper';
import { TRefech } from './type/interface';

interface IAppProp {
  me?: IMe
  stores?: IStore[]
  authRefetch?: TRefech<me>
}

const App: React.FC<IAppProp> = ({ me, stores, authRefetch }) => {
  const context = useAppContext(generateContext(stores, me))

  useEffect(() => {
    context.updateContext(context)
  }, [me])


  return (
    <div className="App">
      <APPcontextProvider value={context}>
        <Router >
          <Layout>
            <Switch>
              <Route path="/auth" render={() => <AuthRouter />} />
              <Route
                path={"/"}
                render={() => <MainRouter />}
              />
            </Switch>
          </Layout>
        </Router>
        <Toast />
        <ReactTooltip id="mainTooltip" />
      </APPcontextProvider>
    </div >
  );
}

export default App;