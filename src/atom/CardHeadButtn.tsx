import { JDbutton } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import React from 'react';

interface IProp extends IButtonProps { }

export const CardHeadButton: React.FC<IProp> = (props) => {
    return <JDbutton size="tiny" thema="grey4" {...props} />;
};
