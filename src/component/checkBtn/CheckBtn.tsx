import { JDbutton, Mr } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import React from 'react';
import { JDicon } from '../icons/Icons';

interface IProp extends IButtonProps {
    checked?: boolean;
}

export const CheckBtn: React.FC<IProp> = ({ checked, children, ...props }) => {
    return <JDbutton disabled={!!checked} br="square" mode={checked ? "flat" : "border"} {...props}>
        <Mr mr="tiny">{children}</Mr>
        {checked && <JDicon icon="checkCircle" />}
    </JDbutton>;
};
