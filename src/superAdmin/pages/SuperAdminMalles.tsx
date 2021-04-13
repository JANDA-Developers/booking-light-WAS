import React from 'react';
import { useSettlementMallList } from '../../hook/useSettlement';

interface IProp { }

export const SuperAdminMalls: React.FC<IProp> = () => {
    const {items} = useSettlementMallList();
    return <div />;
};
