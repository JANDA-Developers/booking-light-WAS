import React from "react";
import { Route, Switch } from 'react-router-dom';

const StasticPage = React.lazy(() => import('./page/Statistic'));

const MainRouter = () => {
  return <Switch>
    <Route
      exact={true}
      path={"/statistic"}
      render={() => {
        return <StasticPage />;
      }}
    />
  </Switch>
}

export default MainRouter;