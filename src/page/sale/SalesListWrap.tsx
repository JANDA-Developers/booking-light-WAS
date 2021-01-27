import { useMutation } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';
import React from 'react';
import { ITEM_CREATE, ITEM_DELETE, ITEM_UPDATE } from '../../apollo/mutations';
import { ITEM_LIST, STORE_LIST } from '../../apollo/queries';
import { useItemCreate } from '../../hook/useItemCreate';
import { useItemDelete } from '../../hook/useItemDelete';
import { useItemList, IUseItemList } from '../../hook/useItemList';
import { useItemUpdate } from '../../hook/useItemUpdate';
import { itemCreate, itemCreateVariables, itemDelete, itemDeleteVariables, itemUpdate, itemUpdateVariables, _ItemSort } from '../../type/api';
import { TfnMu } from '../../type/interface';
import { completeMsg } from '../../utils/onCompletedMessage';
import { TCRUD_loading } from '../storeSetting/interface';
import SalesList from './SalesList';



export interface IsaleListContext extends IUseItemList {
    itemUpdate: TfnMu<itemUpdateVariables>;
    itemDelete: TfnMu<itemDeleteVariables>;
    itemCreate: TfnMu<itemCreateVariables>;
    loading: TCRUD_loading;
}

interface IProps { }

export const SalesListWrap: React.FC<IProps> = () => {
    const {
        items,
        pageInfo,
        paginatorHook,
        setFilter,
        setSort,
        filter,
        sort,
        sorter,
        setViewCount,
        viewCount,
        getLoading
    } = useItemList({
        initialSort: [_ItemSort.createdAt_desc]
    })

    const { createLoading, itemCreate } = useItemCreate()
    const { deleteLoading, itemDelete } = useItemDelete();
    const { updateLoading, itemUpdate } = useItemUpdate();

    const total_loading = updateLoading || deleteLoading || getLoading || createLoading;


    const context: IsaleListContext = {
        items,
        pageInfo,
        sorter,
        paginatorHook,
        filter,
        sort,
        setFilter,
        setSort,
        setViewCount,
        viewCount,
        getLoading,
        loading: {
            total: total_loading,
            get: getLoading,
            update: updateLoading,
            delete: deleteLoading,
            create: createLoading
        },
        itemUpdate,
        itemDelete,
        itemCreate,
    }


    return <SalesList context={context} />;
};

export default SalesListWrap