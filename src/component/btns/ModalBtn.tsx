import { JDbutton } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import React from 'react';

interface IProp extends IButtonProps { }

// 모달 하단에 있는 버튼
export const ModalBtn: React.FC<IProp> = ({ ...props }) => {
    return <JDbutton thema="grey4" mode="flat" padding="huge" {...props} />;
};

