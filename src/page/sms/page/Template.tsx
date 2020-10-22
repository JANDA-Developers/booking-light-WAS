import React from 'react';
import JDSMS from "@janda-com/sms";
import { JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
interface IProp {
    Core: JDSMS
}

export const Template: React.FC<IProp> = ({ Core }) => {
    const { Template } = Core;
    return <JDcontainer size={WindowSize.full} >
        <JDpageHeader title="템플릿관리" desc="문자 템플릿을 상황에 맞게 설정할 수 있습니다. 자동발신을 등록하여 더욱 편하게 SMS관리를 하실 수 있습니다." />
        <Template />
    </JDcontainer>;
};
export default Template;
