import { JDcontainer, useModal, WindowSize, JDlogin2, JDalign, JDtypho, toast } from "@janda-com/front";
import React, { useState } from "react";
import { useHistory } from "react-router-dom"
import client from "../../apollo/apolloClient";
import { AuthPaths } from "../../AuthRouter";
import { Centerlize } from "../../component/centerlize/Centerlize";
import LoginForm from "../../component/form/LoginForm";
import { PasswordResetModal } from "../../component/passwordRestModal/PasswordResetModal";
import VerificationModal, { IVerfiModalInfo } from "../../component/verfi/VerificationModal";
import { useBusiResetPassword, useSignIn } from "../../hook/useUser";
import { useVerification } from "../../hook/useVerification";
import { VerificationEvent, VerificationTarget } from "../../type/api";
import { errorMessage } from "../../utils/onCompletedMessage";
import { completeMsg } from "../../utils/utils";


type TVerifiInfo = {
    verificationId: string;
    payload: string;
}

const LoginPage = () => {
    const historyHook = useHistory();
    const verificationHook = useVerification(VerificationEvent.UserFindEmail, VerificationTarget.EMAIL);
    const [activate, setActivate] = useState<number>(1);
    const verifiModalHook = useModal<IVerfiModalInfo>()
    const [passwordResetMu] = useBusiResetPassword();
    const authManagerHook = useModal<"password" | "email">();
    const history = useHistory();
    const passwordFind = authManagerHook.info === "password";
    // this should not ...

    const [loginMu] = useSignIn({
        awaitRefetchQueries: true,
        onCompleted: async ({ SignIn }) => {
            if (completeMsg(SignIn, "로그인 완료")) {
                historyHook.push("/")
            } else {
                errorMessage(SignIn.error)
            }
        }
    })

    const handleSignInClick = async (email: string, password: string) => {
        // await client.resetStore()
        loginMu({
            variables: {
                input: {
                    email,
                    password
                }
            }
        })
    }

    const LoginText: React.FC = ({ }) => {
        return (
            <span
                style={{
                    fontSize: '2em',
                    fontFamily: 'NanumSquare',
                }}
            >
                LOGIN
            </span>
        );
    };



    return <JDcontainer verticalPadding size={WindowSize.md}>
        <JDalign text="center">
            <JDtypho
                style={{
                    paddingTop: "3rem"
                }}
                weight={300}
                size="h3"
                mb="largest"
            >
                <LoginText />
            </JDtypho>
        </JDalign>
        <LoginForm
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
        />
        <VerificationModal {...verificationHook} target={VerificationTarget.EMAIL
        } modalHook={verifiModalHook} />
        <PasswordResetModal
            requireField={passwordFind ? {
                email: true,
                password: true,
            } : undefined}
            onClickCompleteBtn={(param) => {
                passwordResetMu({
                    variables: {
                        newPassword: param.newPassword
                    }
                })
            }}
            onClickVerifyBtn={(param) => {
                verifiModalHook.openModal({
                    payload: param.email
                })
            }}
            modalHook={authManagerHook}
        />
    </JDcontainer>;
}

export default LoginPage;