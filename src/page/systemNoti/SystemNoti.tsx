import React from 'react';
import { useSystemNotiList } from '../../hook/useSystemNoti';

interface IProp { }

export const SystemNotiList: React.FC<IProp> = () => {
    const { items } = useSystemNotiList();
    return <div />;
};

export default SystemNotiList;
