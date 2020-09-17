import { JDpreloader } from "@janda-com/front";
import React, { Suspense } from "react";
import { Route, Switch } from 'react-router-dom';

const LoginPage = React.lazy(() => import('./page/login/Login'));
const SignUpPage = React.lazy(() => import('./page/signUp/SignUp'));


const MainRouter = () => {
    return <Switch>
        <Suspense fallback={<JDpreloader page loading />}>
            <Route
                exact={true}
                path={"/auth/signUp"}
                render={() => {
                    return <SignUpPage />;
                }}
            />
            <Route
                exact={true}
                path={"/auth/login"}
                render={() => {
                    return <LoginPage />;
                }}
            />
        </Suspense>
    </Switch>
}

export default MainRouter;