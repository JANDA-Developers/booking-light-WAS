import React from 'react';
import JDSMS from "@janda-com/sms"
import { JDcontainer, WindowSize } from '@janda-com/front';
interface IProp {
    Core: JDSMS
    mode?: "start" | "info"
}

export const Init: React.FC<IProp> = ({ Core, mode }) => {

    const handleOnStart = () => {
        //   TODO init

        // async () => {
        //     await initMu().then((result) => {
        //       if (result.data?.InitSms.ok) window.location.reload();
        //     });
        //   }
    }


    const { Info } = Core;
    return <JDcontainer size={WindowSize.full}>
        <Info lastBtnProp={mode === "start" ? {
            thema: "primary",
            size: "longLarge",
            label: "시작하기",
            onClick: handleOnStart,
        } : undefined} />
    </JDcontainer>;
};

export default Init;
