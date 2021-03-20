import React, { Suspense, useEffect } from 'react';
import './scss/App.scss';

import { HashRouter as Router, Route, Switch } from 'react-router-dom';
import MainRouter, { Paths } from './MainRouter';
import AuthRouter from './AuthRouter';
import { getFromUrl, ReactTooltip } from '@janda-com/front';
import { Toast } from '@janda-com/front';
import { APPcontextProvider, useAppContext } from "./context"
import { Layout } from './component/layout/Layout';
import { useMe } from './hook/useUser';
import { me_Me } from './type/api';
import { Page404 } from './page/exceptions/Page404';
import { useInvoiceFind } from './hook/useInvoice';
import { todayyyyymmNumber } from './type/const';
import { serviceUsageMapper } from './utils/invoiceMapper';

const SmsRouter = React.lazy(() => import('./page/smsRouter/SmsRouter'));
const BuypageRouter = React.lazy(() => import('./page/buypageRouter/BuyPageRouter'));

interface IAppProp {
  me?: me_Me
  contextQueryLoading: boolean;
}

const App: React.FC<IAppProp> = ({ me, contextQueryLoading }) => {
  const context = useAppContext(me)
  const { item: thisMonthInvoice } = useInvoiceFind(todayyyyymmNumber)
  const usageMap = thisMonthInvoice ? serviceUsageMapper(thisMonthInvoice) : undefined;


  const storeCode = getFromUrl("storeCode");

  useEffect(() => {
    // const removeFocus = () => {
    //   document.querySelector('.JDglobalFocus')?.classList.remove("JDglobalFocus");
    // }
    // document.addEventListener("click", removeFocus)
    // return () => {
    //   document.removeEventListener("click", removeFocus)
    // }
  }, [])

  return (
    <div key={context.selectedStore?._id} className="App">
      <APPcontextProvider value={{
        ...context,
        usageMap,
        thisMonthInvoice,
        contextQueryLoading
      }}>
        <Router >
          {storeCode && <Route
            path={"/buypage"}
            render={() => <BuypageRouter />}
          />}
          {storeCode || <Layout>
            <Suspense fallback={<div ></div>}>
              <Switch>
                <Route path={Paths.sms} render={() => <SmsRouter />} />
                <Route path="/auth" render={() => <AuthRouter />} />
                <Route
                  path={"/"}
                  render={() => <MainRouter />}
                />
                <Route render={() => <Page404 />} />
              </Switch>
            </Suspense>
          </Layout>
          }
        </Router>
        <Toast />
        <ReactTooltip id="mainTooltip" />
      </APPcontextProvider>
    </div >
  );
}


export const AppWrap = () => {
  const { data: me, called, getLoading, networkStatus } = useMe({ notifyOnNetworkStatusChange: true })
  const contextQueryLoading = !called || getLoading || networkStatus < 7;

  console.log("{me}");
  console.log({ me });

  return <App contextQueryLoading={contextQueryLoading} key={(contextQueryLoading ? "appLoading" : "appReady") + me?._id} me={me} />
}

export default AppWrap;

