import { getRefetch } from "@janda-com/front";
import {
    OPTION_CREATE,
    OPTION_UPDATE,
    OPTION_DELETE,
    OPTION_LIST,
    OPTION_FIND_BY_ID,
} from "../apollo/gql/option";
import { ME } from "../apollo/gql/user";
import {
    optionCreate,
    optionCreateVariables,
    optionUpdate,
    optionUpdateVariables,
    optionDelete,
    optionDeleteVariables,
    optionList,
    optionListVariables,
    _InvoiceFilter,
    _InvoiceSort,
    _OptionFilter,
    _OptionSort,
    optionList_OptionList_items,
    optionFindById,
    optionFindByIdVariables,
    optionFindById_OptionFindById,
} from "../type/api";
import {
    generateFindQuery,
    generateListQueryHook,
    generateMutationHook,
} from "../utils/query";

export const useOptionList = generateListQueryHook<
    _OptionFilter,
    _OptionSort,
    optionList,
    optionListVariables,
    optionList_OptionList_items
>(OPTION_LIST, { initialSort: [_OptionSort.createdAt__desc] });
export const useOptionCreate = generateMutationHook<
    optionCreate,
    optionCreateVariables
>(OPTION_CREATE, { ...getRefetch(OPTION_LIST, ME) });
export const useOptionDelete = generateMutationHook<
    optionDelete,
    optionDeleteVariables
>(OPTION_DELETE, { ...getRefetch(OPTION_LIST) });
export const useOptionUpdate = generateMutationHook<
    optionUpdate,
    optionUpdateVariables
>(OPTION_UPDATE, { ...getRefetch(OPTION_LIST) });
export const useOptionFindById = generateFindQuery<
    optionFindById,
    optionFindByIdVariables,
    optionFindById_OptionFindById
>("optionId", OPTION_FIND_BY_ID);
