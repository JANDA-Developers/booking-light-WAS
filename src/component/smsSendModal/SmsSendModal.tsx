import { IUseModal, JDmodal } from '@janda-com/front';
import { InputText } from '@janda-com/front/dist/components/InputText/InputText';
import React from 'react';
import { useSmsSendSingle } from '../../hook/useNotification';


interface ISmsSendModalInfo {
    receviers: string[]
}


// 어떻게하면 되지?

//replacements 에다가 원하는 부분들을 넣어서 보낼 수 있을?
// TODO 백엔드 구조 살펴보기

interface IProp {
    modalHook: IUseModal<ISmsSendModalInfo>;
}

export const SmsSendModal: React.FC<IProp> = ({ modalHook }) => {
    const [sendSms] = useSmsSendSingle()

    const handleSendSms = () => {
        // sendSms({
        //     variables: {
        //         input: {
        //             content,
        //             receivers,
        //             sender,
        //             replacements,
        //             tempalteId,
        //             title
        //         }
        //     }
        // })
    }

    return <JDmodal {...modalHook} >
        <InputText />
    </JDmodal>;
};
