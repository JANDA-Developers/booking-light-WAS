import { copytoClipboard, IJDalignProp, JDtypho } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React from 'react';

interface IProp extends IJDtyphoProp {
}

export const Clip: React.FC<IProp> = ({ children, ...props }) => {
    return <JDtypho hover onClick={() => { copytoClipboard(children as string) }} {...props}>{children}</JDtypho>;
};
