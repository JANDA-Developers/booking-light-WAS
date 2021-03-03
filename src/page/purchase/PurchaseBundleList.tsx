import React from 'react';
import { usePurchaseBusinessBundleList } from '../../hook/usePurchase';

interface IProp { }

export const PurchasBundleList: React.FC<IProp> = () => {
    const { items } = usePurchaseBusinessBundleList()
    
    return <div />;
};
