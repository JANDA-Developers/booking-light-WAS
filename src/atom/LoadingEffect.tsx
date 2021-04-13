import { JDloadingCard } from '@janda-com/front';
import React, { useEffect, useState } from 'react';

interface IProp {
    loading: boolean;
}

export const LoadingEffect: React.FC<IProp> = ({ loading, children }) => {
    return <>{children}</>
};
