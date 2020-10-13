import { useMutation } from "@apollo/client";
import { JDcontainer, JDPasswordReseter, useModal, WindowSize, JDlogin2 } from "@janda-com/front";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';
import { SIGNIN } from "../../apollo/mutations";
import { AuthPaths } from "../../AuthRouter";
import { Paths } from "../../MainRouter";
import { signIn, signInVariables } from "../../type/api";
import { queryResultMsg } from "../../utils/onCompletedMessage";

const LoginPage = () => {
    const [activate, setActivate] = useState<number>(1);
    const authManagerHook = useModal<"password" | "email">();
    const history = useHistory();
    const passwordFind = authManagerHook.info === "password";

    const [loginMu, { loading }] = useMutation<signIn, signInVariables>(SIGNIN, {
        onCompleted: ({ SignIn }) => {
            queryResultMsg(SignIn, "로그인", "로그인실패")

            history.push(Paths.main)
        }
    })

    const handleSignInClick = (email: string, password: string) => {
        loginMu({
            variables: {
                email,
                password
            }
        })
    }

    return <JDcontainer verticalPadding size={WindowSize.md}> <JDlogin2 activeBookMark={activate}
        onFindPasswordClick={() => {
            authManagerHook.openModal("password");
        }}
        onFindEmailClick={() => {
            authManagerHook.openModal("email")
        }}
        onSignInClick={handleSignInClick}
        onSignUpClick={() => {
            history.push(AuthPaths.signUp)
        }}
        onBookMarkClick={(i) => {
            setActivate(i)
        }} />
        <JDPasswordReseter
            requireField={passwordFind ? {
                email: true,
                password: true,
            } : undefined}
            onClickCompleteBtn={(param) => { }}
            onClickVerifyBtn={(param) => { }}
            modalHook={authManagerHook}
        />
    </JDcontainer>;
}

export default LoginPage;