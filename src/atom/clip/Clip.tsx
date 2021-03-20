import { copytoClipboard, IJDalignProp, JDtypho, toast } from '@janda-com/front';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React from 'react';

interface IProp extends IJDtyphoProp {
}

export const Clip: React.FC<IProp> = ({ children, ...props }) => {
    return <JDtypho className="JDclip" hover onClick={() => {
        copytoClipboard(children as string)
        toast("클립보드에 복사 되었습니다.")
    }} {...props}>{children}</JDtypho>;
};
