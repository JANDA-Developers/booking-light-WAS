import React from 'react'
import StoreSetting from './StoreSetting'
import { useMutation } from '@apollo/client';
import { ME, STORE_LIST } from '../../apollo/queries';
import { storeCreate, storeCreateVariables, storeDelete, storeDeleteVariables, storeList, storeListVariables, storeUpdate, storeUpdateVariables, _StoreFilter, _StoreSort } from '../../type/api';
import { STORE_CREATE, STORE_DELETE, STORE_UPDATE } from '../../apollo/mutations';
import { completeMsg } from '../../utils/onCompletedMessage';
import { getOperationName } from '@apollo/client/utilities';
import { TfnMu } from '../../type/interface';
import { IUseStoreList, useStoreList } from '../../hook/useStoreList';
// const headInfo = {
//     title: "상점설정",
//     desc: "운영중인 상품을 생성하고 관리할 수 있습니다"
// }

// const storeList: Tstore[] = [
//     {
//         _id: s4(),
//         image: "/img/storeset/movie.jpg",
//         name: "잔다 시네마",
//         address: "부산 남구 전포대로 110-10",
//         goodsCount: 15,
//         sold: 100,
//         generated: new Date(),
//         member: 40,
//         desc: "잔다 시네마는 자율좌석제입니다. 영화관 입장 후 편하신 좌석에서 관람하시면 됩니다 2.",
//     },
// ]

export interface IStoreWrapContext extends IUseStoreList {
    storeUpdate: TfnMu<storeUpdateVariables>;
    storeDelete: TfnMu<storeDeleteVariables>;
    storeCreate: TfnMu<storeCreateVariables>;
    loading: {
        total: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
    };
}

const StoreSettingWrap = () => {
    const { getLoading, pageInfo, paginatorHook, setFilter, setSort, viewCount, setViewCount, stores } = useStoreList()

    const refetchQueries = [getOperationName(STORE_LIST) || "", getOperationName(ME) || ""];

    const [storeCreateMu, { loading: createLoading }] = useMutation<storeCreate, storeCreateVariables>(STORE_CREATE, {
        onCompleted: ({ StoreCreate }) => {
            completeMsg(StoreCreate, "스토어 생성 완료", "스토어 생성 실패");
        },
        refetchQueries,
    })

    const [storeUpdateMu, { loading: updateLoading }] = useMutation<storeUpdate, storeUpdateVariables>(STORE_UPDATE, {
        onCompleted: ({ StoreUpdate }) => {
            completeMsg(StoreUpdate, "스토어 업데이트 완료", "스토어 업데이트 실패");
        },
        refetchQueries,
    })

    const [storeDeleteMu, { loading: deleteLoading }] = useMutation<storeDelete, storeDeleteVariables>(STORE_DELETE, {
        onCompleted: ({ StoreDelete }) => {
            completeMsg(StoreDelete, "스토어 삭제완료", "스토어 삭제실패");
        },
        refetchQueries,
    })

    const total_loading = updateLoading || deleteLoading || getLoading || createLoading;

    const storeCreate = (variables: storeCreateVariables, onSucess?: () => void) => {
        storeCreateMu({
            variables
        }).then((data) => {
            if (data.data?.StoreCreate.ok) {
                onSucess?.()
            }
        })
    }

    const storeDelete = (variables: storeDeleteVariables, onSucess?: () => void) => {
        return storeDeleteMu({
            variables
        }).then((data) => {
            if (data.data?.StoreDelete.ok) {
                onSucess?.()
            }
        })
    }

    const storeUpdate = (variables: storeUpdateVariables, onSucess?: () => void) => {
        storeUpdateMu({
            variables
        }).then((data) => {
            if (data.data?.StoreUpdate.ok) {
                onSucess?.()
            }
        })
    }


    const context: IStoreWrapContext = {
        getLoading,
        pageInfo,
        paginatorHook,
        setFilter,
        setSort,
        setViewCount,
        viewCount,
        stores,
        storeUpdate,
        storeDelete,
        storeCreate,
        loading: {
            total: total_loading,
            update: updateLoading,
            delete: deleteLoading,
            create: createLoading
        }
    }

    return (
        <StoreSetting context={context} storeList={stores} />
    )
}

export default StoreSettingWrap


