import { useMutation } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';
import { onCompletedMessage } from '@janda-com/front';
import { isEmpty } from 'lodash';
import React, { useEffect, useState } from 'react';
import { PRODUCT_GROUP_UPDATE, PRODUCT_GROUP_CREATE, PRODUCT_GROUP_DELETE } from '../../apollo/mutations';
import { PRODUCT_GROUP_LIST, PRODUCT_GROUP_OPS } from '../../apollo/queries';
import { useProductGroupOps } from '../../hook/useProductGroupOps';
import { useProductList } from '../../hook/useProductList';
import { IUseStoreSelect, useStoreSelect } from '../../hook/useStore';
import { productGroupCreate, productGroupCreateVariables, productGroupDelete, productGroupDeleteVariables, productGroupList_ProductGroupList_items as IProductGroup, productGroupList_ProductGroupList_items, productGroupOps, productGroupOpsVariables, productGroupOps_ProductGroupList, productGroupOps_ProductGroupList_items, productGroupUpdate, productGroupUpdateVariables, productList_ProductList_items, _ProductFilter, _ProductGroupFilter, _ProductGroupSort, _ProductSort } from '../../type/api';
import { IUseListQuery, TfnMu } from '../../type/interface';
import { completeMsg } from '../../utils/utils';
import { ProductGroupSetting } from './ProductGroupSettings';


const refetchQueries = [getOperationName(PRODUCT_GROUP_LIST) || "", getOperationName(PRODUCT_GROUP_OPS) || ""];

export interface IProductGroupWrapContext {
    productGroupOpsHook: IUseListQuery<_ProductGroupSort, _ProductGroupFilter, productGroupOps_ProductGroupList_items>
    productHook: IUseListQuery<_ProductSort, _ProductFilter, productList_ProductList_items>
    productGroupCreate: TfnMu<productGroupCreateVariables>;
    productGroupDelete: TfnMu<productGroupDeleteVariables>;
    productGroupUpdate: TfnMu<productGroupUpdateVariables>;
    groupLoading: {
        total: boolean;
        create: boolean;
        update: boolean;
        delete: boolean;
    };
    storeSelectHook: IUseStoreSelect;
    productGetLoading: boolean;
}

export const ProductGroupSettingWrap: React.FC = () => {
    const storeSelectHook = useStoreSelect();
    if (isEmpty(storeSelectHook.storeptions)) throw Error("No store. you can't visit here");

    const productGroupOpsHook = useProductGroupOps({
        initialFilter: {
            // _store_id_in: storeSelectHook.selectedStoreId
        }
    });
    const { loading: get_loading, items: groups } = productGroupOpsHook;
    const [selectedGroup, setSelectedGroup] = useState("")

    const productsHook = useProductList({
        queryOptions: {
            skip: !!selectedGroup,
            variables: {
                pagingInput: {
                    pageIndex: 0,
                    pageItemCount: 99
                },
                // filter: {
                //     _storeId_eq: selectedGroup
                // }
            }
        }
    })
    const { loading: product_loading } = productsHook;

    const [productGroupCreateMu, { loading: createLoading }] = useMutation<productGroupCreate, productGroupCreateVariables>(PRODUCT_GROUP_CREATE, {
        onCompleted: ({ ProductGroupCreate }) => {
            completeMsg(ProductGroupCreate, "그룹추가", "그룹추가실패")
        },
        refetchQueries,
    });

    const [deleteProductMu, { loading: deleteLoading }] = useMutation<productGroupDelete, productGroupDeleteVariables>(PRODUCT_GROUP_DELETE, {
        onCompleted: ({ ProductGroupDelete }) => {
            completeMsg(ProductGroupDelete, "그룹추가", "그룹추가실패")
        },
        refetchQueries,
    });

    const [productGroupUpdateMu, { loading: updateLoading }] = useMutation<productGroupUpdate, productGroupUpdateVariables>(PRODUCT_GROUP_UPDATE, {
        onCompleted: ({ ProductGroupUpdate }) => {
            completeMsg(ProductGroupUpdate, "그룹추가", "그룹추가실패")
        },
        refetchQueries,
    });


    const productGroupCreate: TfnMu<productGroupCreateVariables> = (variables: productGroupCreateVariables, onSuccess) => {
        productGroupCreateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductGroupCreate.ok)
                onSuccess?.()
        })
    }

    const productGroupDelete: TfnMu<productGroupDeleteVariables> = (variables: productGroupDeleteVariables, onSuccess) => {
        deleteProductMu({
            variables
        }).then((data) => {
            if (data.data?.ProductGroupDelete.ok)
                onSuccess?.()
        })
    }

    const productGroupUpdate: TfnMu<productGroupUpdateVariables> = (variables: productGroupUpdateVariables, onSuccess) => {
        productGroupUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.ProductGroupUpdate.ok)
                onSuccess?.()
        })
    }

    const total_loading = updateLoading || createLoading || deleteLoading || get_loading;

    const context: IProductGroupWrapContext = {
        productGroupOpsHook: productGroupOpsHook,
        productHook: productsHook,
        productGroupCreate,
        productGroupDelete,
        productGroupUpdate,
        groupLoading: {
            total: total_loading,
            create: createLoading,
            update: updateLoading,
            delete: deleteLoading
        },
        productGetLoading: product_loading,
        storeSelectHook
    }

    useEffect(() => {
        if (!selectedGroup && !isEmpty(groups)) {
            setSelectedGroup(groups[0]._id)
        }
    })

    return <ProductGroupSetting context={context} />;
};

export default ProductGroupSettingWrap;