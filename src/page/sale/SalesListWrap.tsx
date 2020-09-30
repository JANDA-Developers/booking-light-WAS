import { usePagination } from '@janda-com/front';
import React from 'react';
import SalesList from './SalesList';

interface IProp { }

export const SalesListWrap: React.FC<IProp> = () => {
    const paginationHook = usePagination(0);

    return <SalesList paginationHook={paginationHook} />;
};

export default SalesListWrap