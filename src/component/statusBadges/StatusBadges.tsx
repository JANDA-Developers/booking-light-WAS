import { JDbadge } from '@janda-com/front';
import React from 'react';

interface IProp {
    disabled: boolean | null | undefined;
}

export const DisableBadge: React.FC<IProp> = ({ disabled }) => {
    return <JDbadge className="disabledBadge" thema={disabled ? "grey2" : "primary"} >{disabled ? "비활성" : "활성"}</JDbadge>;
};
