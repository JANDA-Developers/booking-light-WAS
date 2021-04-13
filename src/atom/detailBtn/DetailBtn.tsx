import { IUseDrawer, JDbutton, Mr } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import React from 'react';
import JDIcon from '../../component/icons/Icons';

interface IProp extends IUseDrawer, Omit<IButtonProps, "onClick"> { }

export const DetailBtn: React.FC<IProp> = ({ onClick, open, ...props }) => {
    return <JDbutton padding="small" br="square" mode="border" onClick={onClick} thema="black" size="small" {...props}>{!open ? "자세히보기" : "간략히보기"}<Mr mr="small" /> <JDIcon icon={open ? "arrowUp" : "arrowDown"} /></JDbutton>;
};
