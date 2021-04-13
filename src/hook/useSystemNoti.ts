import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { systemNotiHideVariables,systemNotiHide,FsystemNoti,  systemNotiList, systemNotiListVariables, systemNotiRead, systemNotiReadVariables, _SystemNotiFilter, _SystemNotiSort, SystemNotiCreate, SystemNotiCreateVariables } from "../type/api";
import { SYSTEMNOTI_LIST, SYSTEMNOTI_READ, SYSTEMNOTI_HIDE, SYSTEMNOTI_CREATE } from "../apollo/gql/systemNoti";
import { getRefetch } from "@janda-com/front";
import { ME } from "../apollo/gql/user";

export const useSystemNotiList = generateListQueryHook<_SystemNotiFilter,_SystemNotiSort,systemNotiList,systemNotiListVariables, FsystemNoti>(SYSTEMNOTI_LIST,{initialSort:[_SystemNotiSort.createdAt__desc], initialViewCount:200});
export const useSystemNotiRead = generateMutationHook<systemNotiRead,systemNotiReadVariables>(SYSTEMNOTI_READ,{...getRefetch(SYSTEMNOTI_LIST), skipLoadingEffect: true});
export const useSystemNotiHide = generateMutationHook<systemNotiHide,systemNotiHideVariables>(SYSTEMNOTI_HIDE,{...getRefetch(SYSTEMNOTI_LIST,ME)});
export const useSystemNotiCreate = generateMutationHook<SystemNotiCreate,SystemNotiCreateVariables>(SYSTEMNOTI_CREATE,{...getRefetch(SYSTEMNOTI_LIST,ME)});
