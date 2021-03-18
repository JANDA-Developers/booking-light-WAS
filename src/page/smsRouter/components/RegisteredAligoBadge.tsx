import { JDbadge } from '@janda-com/front';
import React from 'react';

interface IProp {
    isRegisteredToAligo: boolean;
}

export const RegisteredAligoBadge: React.FC<IProp> = ({ isRegisteredToAligo }) => {
    return isRegisteredToAligo ? <JDbadge thema="primary">등록됨</JDbadge> : <JDbadge thema="grey2">등록중</JDbadge>;
};
