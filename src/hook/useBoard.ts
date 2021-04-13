import { getRefetch } from "@janda-com/front";
import { BOARD_FIND_BY_ID,BOARD_CREATE, BOARD_DELETE, BOARD_LIST, BOARD_UPDATE, BOARD_FIND_BY_KEY,  } from "../apollo/gql/board";
import { ME } from "../apollo/gql/user";
import { boardCreate, boardCreateVariables, boardUpdate, boardUpdateVariables, boardDelete, boardDeleteVariables, boardFindById, boardFindByIdVariables, boardFindById_BoardFindById, boardList, boardListVariables, _InvoiceFilter, _InvoiceSort, _BoardFilter, _BoardSort, boardList_BoardList_items, boardFindByKey, boardFindByKeyVariables, boardFindByKey_BoardFindByKey } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useBoardFindByKey = generateFindQuery<boardFindByKey,boardFindByKeyVariables,boardFindByKey_BoardFindByKey>("key",BOARD_FIND_BY_KEY);
export const useBoardFindById = generateFindQuery<boardFindById,boardFindByIdVariables,boardFindById_BoardFindById>("boardId",BOARD_FIND_BY_ID);
export const useBoardList = generateListQueryHook<_BoardFilter,_BoardSort,boardList,boardListVariables,boardList_BoardList_items>(BOARD_LIST);
export const useBoardCreate = generateMutationHook<boardCreate,boardCreateVariables>(BOARD_CREATE, {...getRefetch(BOARD_LIST, ME)});
export const useBoardDelete = generateMutationHook<boardDelete,boardDeleteVariables>(BOARD_DELETE, {...getRefetch(BOARD_LIST,ME)});
export const useBoardUpdate = generateMutationHook<boardUpdate, boardUpdateVariables>(BOARD_UPDATE, {...getRefetch(BOARD_LIST)});
