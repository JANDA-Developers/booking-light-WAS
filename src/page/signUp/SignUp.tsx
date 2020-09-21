import React from 'react';
import { JDcard, JDcontainer, JDsignUpUI, WindowSize } from "@janda-com/front"
import Policy from "./Policy";
interface IProp { }

export const SignUp: React.FC<IProp> = () => {
    return <JDcontainer verticalPadding size={WindowSize.md} >
        <JDcard>
            <JDsignUpUI Policy={Policy} onSignUpClick={() => {
            }} onPhoneVerification={async () => false} />
        </JDcard>
    </JDcontainer>;
};


export default SignUp