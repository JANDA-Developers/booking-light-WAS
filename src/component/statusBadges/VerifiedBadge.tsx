import { JDbadge } from '@janda-com/front';
import React from 'react';

interface IProp {
    isVerified: boolean;
}

export const VerifiedBadge: React.FC<IProp> = ({ isVerified }) => {
    return isVerified ? <JDbadge thema="primary">인증완료</JDbadge> : <JDbadge thema="grey2">미인증</JDbadge>;
};
