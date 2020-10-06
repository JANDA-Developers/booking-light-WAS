import { JDbutton, JDcontainer, useModal } from '@janda-com/front';
import React from 'react';
import JDSMS from "@janda-com/sms";
interface IProp {
    Core: JDSMS
}

export const Sender: React.FC<IProp> = ({ Core }) => {
    const { SnederList, SenderModal } = Core;
    const senderModalHook = useModal();

    return <JDcontainer>
        <JDbutton
            onClick={() => {
                senderModalHook.openModal();
            }}
            label="발신번호 추가"
            mb
        />
        <SnederList />
        <SenderModal modalHook={senderModalHook} />
    </JDcontainer>;
};

export default Sender;
