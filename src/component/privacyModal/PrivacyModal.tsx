import { IUseModal, JDbutton, JDmodal, JDmodalConfigProps, JDpolicyViewer } from '@janda-com/front';
import React from 'react';
import { ModalBtn } from '../btns/ModalBtn';

export interface IPrivacyModalInfo extends JDmodalConfigProps {
    policy: string;
    onAgree: () => void;
}

interface IProp {
    modalHook: IUseModal<IPrivacyModalInfo>
}

export const PrivacyModal: React.FC<IProp> = ({ modalHook, }) => {
    const { info } = modalHook;
    return <JDmodal foot={
        <div>
            <ModalBtn mr onClick={info?.onAgree} thema="primary">동의합니다.</ModalBtn>
            <ModalBtn onClick={modalHook.closeModal}>닫기</ModalBtn>
        </div>
    } {...modalHook} {...info} >
        <JDpolicyViewer>
            {info?.policy}
        </JDpolicyViewer>
    </JDmodal>;
};
