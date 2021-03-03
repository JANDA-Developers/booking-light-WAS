import { JDicon } from '@janda-com/front';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';

interface IProp extends IDiv { }

export const Grab: React.FC<IProp> = ({ className, ...props }) => {
    return <div className={`grab ${className}`} {...props}>
    </div>;
};
