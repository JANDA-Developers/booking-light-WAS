import React, { useState } from 'react';
import { JDcard, JDcontainer, JDsignUpUI, WindowSize, useModal } from "@janda-com/front"
import Policy from "./Policy";
import { useMutation } from '@apollo/client';
import { signUp, signUpVariables, verificationComplete, verificationCompleteVariables, VerificationEvent, verificationStart, verificationStartVariables, VerificationTarget } from '../../type/api';
import { SIGNUP, VERIFICATION_COMPLETE, VERIFICATION_START } from '../../apollo/mutations';
import PhoneVerificationModal from '../../component/verfi/PhoneVerificationModal';
import { TSignUpInfo } from '@janda-com/front/dist/components/form/SignUpUI';
import { DEFAULT_ADDRESS, DEFAULT_VEIFI_METHOD } from '../../type/const';
import { useHistory } from 'react-router-dom';
import { Paths } from '../../MainRouter';
import { AuthPaths } from '../../AuthRouter';
import { completeMsg } from '../../utils/onCompletedMessage';

interface IProp {
    key?: string;
}


export const SignUp: React.FC<IProp> = () => {
    const history = useHistory();
    const [signUpMu, { loading: singUp_loading }] = useMutation<signUp, signUpVariables>(SIGNUP, {
        onCompleted: ({ SignUp }) => {
            const result = completeMsg(SignUp, "회원가입 완료", "회원가입 실패")
            if (result)
                history.push(AuthPaths.login);
        }
    });

    const handleSignUp = (info: TSignUpInfo, validate: boolean) => {
        if (!validate) return;
        const { company, email, name, num, password } = info;
        signUpMu({
            variables: {
                email,
                name,
                password,
                phoneNumber: "+82" + num,
                company,
                location: DEFAULT_ADDRESS
            }
        })
    }


    return <JDcontainer verticalPadding size={WindowSize.md} >
        <JDcard>
            <JDsignUpUI Policy={Policy} onSignUpClick={handleSignUp} />
        </JDcard>
    </JDcontainer>;
};


export default SignUp