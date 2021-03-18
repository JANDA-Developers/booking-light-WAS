import { JDcontainer, JDpageHeader, useModal } from '@janda-com/front';
import React, { useContext } from 'react';
import DotButton from '../../../component/dotButton/DotButton';
import { SenderViwer } from '../components/SenederViewer';
import { SmsSendRegistModal } from '../components/SmsSenderRegistModal';
import { NotificationContext } from '../context';

interface IProp { }

export const SenderRegist: React.FC<IProp> = () => {
    const { manager } = useContext(NotificationContext);
    const { senders } = manager;
    const registModalHook = useModal();

    return <div >
        <JDpageHeader title="SMS 설정" desc="SMS와 이메일의 자동발신 및 양식 설정" />
        <JDcontainer verticalPadding>
            {senders.map((sender, index) => <SenderViwer mb sender={sender} key={index + "sender"} />)}
            <DotButton onClick={registModalHook.openModal}>발신자 등록하기</DotButton>
        </JDcontainer>
        <SmsSendRegistModal key={registModalHook.isOpen ? "regist--open" : "regist--close"} modalHook={registModalHook} />
    </div>;
};
