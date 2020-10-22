import React, { useState } from 'react';
import { JDcard, JDcontainer, JDsignUpUI, onCompletedMessage, WindowSize, useModal } from "@janda-com/front"
import Policy from "./Policy";
import { useMutation } from '@apollo/client';
import { signUp, signUpVariables, verificationComplete, verificationCompleteVariables, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget } from '../../type/api';
import { SIGNUP, VERIFICATION_COMPLETE, VERIFICATION_START } from '../../apollo/mutations';
import PhoneVerificationModal from '../../component/verfi/PhoneVerificationModal';
import { TSignUpInfo } from '@janda-com/front/dist/components/form/SignUpUI';
import { queryResultMsg } from '../../utils/onCompletedMessage';

interface ISavedSingUpData extends TSignUpInfo {
    verificationId: string;
}

interface IProp {
    key?: string;
}

const VEIFI_METHOD = {
    target: VerificationTarget.PHONE,
    event: VerificationEvent.UserVerifyPhone,
}

export const SignUp: React.FC<IProp> = () => {
    const verifiModalHook = useModal<ISavedSingUpData>()
    const [signUpMu, { loading: singUp_loading }] = useMutation<signUp, signUpVariables>(SIGNUP, {
        onCompleted: ({ SignUp }) => {
            queryResultMsg(SignUp, "회원가입 완료", "회원가입 실패")
        }
    });

    const [verificationCompleteMu, { loading: complete_loading }] = useMutation<verificationComplete, verificationCompleteVariables>(VERIFICATION_COMPLETE, {
        onCompleted: ({ VerificationComplete }) => {
            queryResultMsg(VerificationComplete, "인증완료", "인증실패")
        }
    });
    const [verificationStartMu, { loading: start_loading }] = useMutation<verificationStart, verificationStartVariables>(VERIFICATION_START, {
        onCompleted: ({ VerificationStart }) => {
            queryResultMsg(VerificationStart, "인증문자 발송", "인증문자 발송실패")
        }
    })

    const verificationStart = async (number: string) => {
        return await verificationStartMu({
            variables: {
                payload: number,
                ...VEIFI_METHOD
            }
        })
    }

    const completeVerifi = (key: string) => {
        if (!verifiModalHook.info) throw Error("Should provide verifiModalHook.info verificationId");
        const { verificationId, num } = verifiModalHook.info
        return verificationCompleteMu({
            variables: {
                code: key,
                verificationId,
                ...VEIFI_METHOD,
                payload: num
            }
        })
    }

    const signUp = () => {
        if (!verifiModalHook.info) throw Error("Should provide verifiModalHook.info");
        const { company, email, name, num: phoneNumber, password } = verifiModalHook.info
        signUpMu({
            variables: {
                email,
                name,
                password,
                phoneNumber,
                company
            }
        })
    }

    const totalLoading = singUp_loading || complete_loading || start_loading;

    return <JDcontainer verticalPadding size={WindowSize.md} >
        <JDcard>
            <JDsignUpUI Policy={Policy} onSignUpClick={async (info, validate) => {
                const { num } = info;
                const result = await verificationStart(num);

                if (!result.data?.VerificationStart.ok) return;

                const verificationId = result.data?.VerificationStart.data?._id;
                verifiModalHook.openModal({
                    ...info,
                    verificationId
                })

            }} />
        </JDcard>
        <PhoneVerificationModal
            muLoading={totalLoading}
            onComplete={(key: string) => {
                completeVerifi(key).then(() => { signUp() });
            }} modalHook={verifiModalHook} />
    </JDcontainer>;
};


export default SignUp