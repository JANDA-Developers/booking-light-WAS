import { JDcontainer, JDPasswordReseter, useModal, WindowSize, JDlogin2 } from "@janda-com/front";
import React, { useState } from "react";
import { useHistory } from 'react-router-dom';



const LoginPage = () => {
    const [activate, setActivate] = useState<number>(1)
    const authManagerHook = useModal<"password" | "email">();
    const history = useHistory();
    const passwordFind = authManagerHook.info === "password";

    return <JDcontainer verticalPadding size={WindowSize.md}> <JDlogin2 activeBookMark={activate}
        onFindPasswordClick={() => {
            authManagerHook.openModal("password");
        }}
        onFindEmailClick={() => {
            authManagerHook.openModal()
        }}
        onSignInClick={(email, pw) => {
            alert(email + " " + pw)
        }}
        onSignUpClick={() => {
            history.push("auth/signUp")
        }}
        onBookMarkClick={(i) => {
            setActivate(i)
        }} />
        <JDPasswordReseter
            requireField={passwordFind ? {
                email: true,
                password: true,
            } : undefined}

            // @ts-ignore
            startChangeCallBack={(param) => {
                console.info(param)
            }}
            modalHook={authManagerHook}
        />
    </JDcontainer>;
}

export default LoginPage;