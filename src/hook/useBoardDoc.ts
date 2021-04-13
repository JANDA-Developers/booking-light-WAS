import { getRefetch } from "@janda-com/front";
import { BOARDDOC_FIND_BY_ID,BOARDDOC_CREATE, BOARDDOC_DELETE, BOARDDOC_LIST, BOARDDOC_UPDATE,  } from "../apollo/gql/boardDoc";
import { ME } from "../apollo/gql/user";
import { boardDocCreate, boardDocCreateVariables, boardDocUpdate, boardDocUpdateVariables, boardDocDelete, boardDocDeleteVariables, boardDocFindById, boardDocFindByIdVariables,  boardDocList, boardDocListVariables, _InvoiceFilter, _InvoiceSort, _BoardFilter, _BoardSort, boardDocFindById_BoardDocFindById, boardDocList_BoardDocList_items, _BoardDocFilter, _BoardDocSort } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useBoardDocFindById = generateFindQuery<boardDocFindById,boardDocFindByIdVariables,boardDocFindById_BoardDocFindById>("boardDocId",BOARDDOC_FIND_BY_ID);
export const useBoardDocList = generateListQueryHook<_BoardDocFilter,_BoardDocSort,boardDocList,boardDocListVariables,boardDocList_BoardDocList_items>(BOARDDOC_LIST);
export const useBoardDocCreate = generateMutationHook<boardDocCreate,boardDocCreateVariables>(BOARDDOC_CREATE, {...getRefetch(BOARDDOC_LIST, ME)});
export const useBoardDocDelete = generateMutationHook<boardDocDelete,boardDocDeleteVariables>(BOARDDOC_DELETE, {...getRefetch(BOARDDOC_LIST,ME)});
export const useBoardDocUpdate = generateMutationHook<boardDocUpdate, boardDocUpdateVariables>(BOARDDOC_UPDATE, {...getRefetch(BOARDDOC_LIST)});
