import { JDpreloader } from "@janda-com/front";
import React, { Suspense, useContext, useEffect } from "react";
import { Route, Switch } from 'react-router-dom';
import AppContext from "./context";

const LoginPage = React.lazy(() => import('./page/login/Login'));
const SignUpPage = React.lazy(() => import('./page/signUp/SignUp'));

export enum AuthPaths {
    signUp = '/auth/signUp',
    login = '/auth/login',
}

const MainRouter = () => {


    return <Switch>
        <Suspense fallback={<JDpreloader page loading />}>
            <Route
                exact={true}
                path={AuthPaths.signUp}
                render={() => {
                    return <SignUpPage />;
                }}
            />
            <Route
                exact={true}
                path={AuthPaths.login}
                render={() => {
                    return <LoginPage />;
                }}
            />
        </Suspense>
    </Switch>
}

export default MainRouter;