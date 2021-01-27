import { useMutation } from "@apollo/client";
import { getOperationName } from "@apollo/client/utilities";
import { JDcontainer, JDPasswordReseter, useModal, WindowSize, JDlogin2 } from "@janda-com/front";
import React, { useContext, useState } from "react";
import { useHistory } from 'react-router-dom';
import { SIGNIN, VERIFICATION_COMPLETE, VERIFICATION_START } from "../../apollo/mutations";
import { ME } from "../../apollo/queries";
import { AuthPaths } from "../../AuthRouter";
import PhoneVerificationModal from "../../component/verfi/PhoneVerificationModal";
import AppContext from "../../context";
import { Paths } from "../../MainRouter";
import { signIn, signInVariables, verificationComplete, verificationCompleteVariables, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget } from "../../type/api";
import { DEFAULT_VEIFI_METHOD } from "../../type/const";
import { completeMsg } from "../../utils/onCompletedMessage";

export const getFullHost = () => window.location.protocol + '//' + window.location.host + '/';

type TVerifiInfo = {
    verificationId: string;
    payload: string;
}

const LoginPage = () => {
    const { user } = useContext(AppContext)
    const historyHook = useHistory();
    const [activate, setActivate] = useState<number>(1);
    const verifiModalHook = useModal<TVerifiInfo>()
    const authManagerHook = useModal<"password" | "email">();
    const history = useHistory();
    const passwordFind = authManagerHook.info === "password";
    const gotoMain = () => window.setTimeout(() => {
        window.location.href = getFullHost()
    }, 1500)
    // this should not ...

    const [verificationCompleteMu, { loading: complete_loading }] = useMutation<verificationComplete, verificationCompleteVariables>(VERIFICATION_COMPLETE, {
        onCompleted: ({ VerificationComplete }) => {
            completeMsg(VerificationComplete, "인증완료", "인증실패")
            if (!VerificationComplete.error)
                gotoMain()
        }
    });

    const [verificationStartMu, { loading: start_loading }] = useMutation<verificationStart, verificationStartVariables>(VERIFICATION_START, {
        onCompleted: ({ VerificationStart }) => {
            completeMsg(VerificationStart, "인증문자 발송", "인증문자 발송실패")

            if (VerificationStart.data)
                verifiModalHook.openModal({
                    payload: VerificationStart.data.payload,
                    verificationId: VerificationStart.data?._id
                });
        }
    })


    const verifiStart = (phoneNumber: string | null) => {
        if (!phoneNumber) throw Error("User Exsist But No PhoneNumber")
        verificationStartMu({
            variables: {
                event: VerificationEvent.UserVerifyPhone,
                payload: phoneNumber,
                target: VerificationTarget.PHONE,
            }
        })
    }

    const completeVerifi = (key: string) => {
        if (!verifiModalHook.info) throw Error("Should provide verifiModalHook.info verificationId");
        const { verificationId, payload } = verifiModalHook.info
        return verificationCompleteMu({
            variables: {
                code: key,
                verificationId,
                ...DEFAULT_VEIFI_METHOD,
                payload
            }
        })
    }

    const [loginMu, { loading }] = useMutation<signIn, signInVariables>(SIGNIN, {
        awaitRefetchQueries: true,
        refetchQueries: [getOperationName(ME) || ""],
        onCompleted: ({ SignIn }) => {
            completeMsg(SignIn, "로그인완료", "로그인실패");

            if (SignIn.data) {
                const { isVerifiedPhoneNumber, phoneNumber } = SignIn.data;
                const needVerifi = isVerifiedPhoneNumber === false;
                if (needVerifi) verifiStart(phoneNumber);
                else gotoMain()
            }
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
        <PhoneVerificationModal
            muLoading={complete_loading}
            onComplete={(key: string) => {
                completeVerifi(key).then(() => {
                    historyHook.push(Paths.main)
                });
            }} modalHook={verifiModalHook} />
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