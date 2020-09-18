import React from 'react';
import { JDcontainer, JDsignUpUI, WindowSize } from "@janda-com/front"

interface IProp { }

export const SignUp: React.FC<IProp> = () => {
    return <JDcontainer verticalPadding size={WindowSize.md} >
        <JDsignUpUI onSignUpClick={() => {
        }} onPhoneVerification={async () => false} />
    </JDcontainer>;
};


export default SignUp