import { JDbutton } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import React from 'react';

interface IProp extends IButtonProps { }

// 상단에 컨트롤 버튼 EG) 문자보내기 엑셀출력 등 
export const ModalBtn: React.FC<IProp> = ({ ...props }) => {
    return <JDbutton thema="grey4" mode="flat" br="square" padding="large" {...props} />;
};

export default ModalBtn;
