import React, { useEffect, useState } from 'react'
import StoreSetting from './StoreSetting'
import { usePagination } from '@janda-com/front';
import { useMutation, useQuery } from '@apollo/client';
import { STORE_LIST } from '../../apollo/queries';
import { storeCreate, storeCreateVariables, storeDelete, storeDeleteVariables, storeList, storeListVariables, storeUpdate, storeUpdateVariables, _StoreFilter, _StoreSort } from '../../type/api';
import { STORE_CREATE, STORE_DELETE, STORE_UPDATE } from '../../apollo/mutations';
import { queryResultMsg } from '../../utils/onCompletedMessage';
import { getOperationName } from '@apollo/client/utilities';
import { extractPageDoc } from '../../utils/dataExtraction';
import { IStore } from "./interface";
import { ISet } from '@janda-com/front/dist/types/interface';
// const headInfo = {
//     title: "상점설정",
//     desc: "운영중인 상품을 생성하고 관리할 수 있습니다"
// }

// const storeList: Tstroe[] = [
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

export interface IStoreWrapContext {
    setPage: (page: number) => void;
    setFilter: ISet<_StoreFilter | undefined>;
    setSort: ISet<_StoreSort[] | undefined>;
    storeUpdate: (variables: storeUpdateVariables) => void;
    storeDelete: (variables: storeDeleteVariables) => void;
    storeCreate: (variables: storeCreateVariables) => void;
    loading: {
        total: boolean;
        update: boolean;
        delete: boolean;
        create: boolean;
    };
}

const StoreSettingWrap = () => {
    const { page, setPage } = usePagination(0);
    const [filter, setFilter] = useState<_StoreFilter>();
    const [sort, setSort] = useState<_StoreSort[]>();

    const { data, loading: get_loading } = useQuery<storeList, storeListVariables>(STORE_LIST, {
        variables: {
            pagingInput: {
                pageItemCount: 20,
                pageNumber: page
            },
            filter,
            sort
        }
    })

    const { items: stores, pageInfo } = extractPageDoc(data, "StoreList", "items", [] as IStore[]);

    const [storeCreateMu, { loading: create_loading }] = useMutation<storeCreate, storeCreateVariables>(STORE_CREATE, {
        onCompleted: ({ StoreCreate }) => {
            queryResultMsg(StoreCreate, "스토어 생성 완료", "스토어 생성 실패");
        },
        refetchQueries: [getOperationName(STORE_LIST) || ""],
    })

    const [storeUpdateMu, { loading: update_loading }] = useMutation<storeUpdate, storeUpdateVariables>(STORE_UPDATE, {
        onCompleted: ({ StoreUpdate }) => {
            queryResultMsg(StoreUpdate, "스토어 업데이트 완료", "스토어 업데이트 실패");
        }
    })

    const [storeDeleteMu, { loading: delete_loading }] = useMutation<storeDelete, storeDeleteVariables>(STORE_DELETE, {
        onCompleted: ({ StoreDelete }) => {
            queryResultMsg(StoreDelete, "스토어 삭제완료", "스토어 삭제실패");
        }
    })

    const total_loading = update_loading || delete_loading || get_loading || create_loading;

    const storeCreate = (variables: storeCreateVariables) => {
        storeCreateMu({
            variables
        })
    }

    const storeDelete = (variables: storeDeleteVariables) => {
        storeDeleteMu({
            variables
        })
    }

    const storeUpdate = (variables: storeUpdateVariables) => {
        storeUpdateMu({
            variables
        })
    }


    const context: IStoreWrapContext = {
        setPage,
        setSort,
        setFilter,
        storeUpdate,
        storeDelete,
        storeCreate,
        loading: {
            total: total_loading,
            update: update_loading,
            delete: delete_loading,
            create: create_loading
        }
    }

    return (
        <StoreSetting context={context} storeList={stores} />
    )
}

export default StoreSettingWrap


