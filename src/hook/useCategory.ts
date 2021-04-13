import { getRefetch } from "@janda-com/front";
import { CATEGORY_CREATE, CATEGORY_UPDATE, CATEGORY_DELETE, CATEGORY_FIND_BY_ID, CATEGORY_LIST, CATEGORY_ORDER_UPDATE } from "../apollo/gql/category";
import { ME } from "../apollo/gql/user";
import {  categoryCreate, categoryCreateVariables, categoryUpdate, categoryUpdateVariables, categoryList_CategoryList_items,categoryDelete, categoryDeleteVariables, categoryFindById, categoryFindByIdVariables, categoryFindById_CategoryFindById, categoryList, categoryListVariables,  _CategoryFilter, _CategorySort, _InvoiceFilter, _InvoiceSort, categoryOrderUpdate, categoryOrderUpdateVariables } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const useCategoryFindById = generateFindQuery<categoryFindById,categoryFindByIdVariables,categoryFindById_CategoryFindById>("categoryId",CATEGORY_FIND_BY_ID);
export const useCategoryList = generateListQueryHook<_CategoryFilter,_CategorySort,categoryList,categoryListVariables,categoryList_CategoryList_items>(CATEGORY_LIST,{initialSort: [_CategorySort.createdAt__desc]});
export const useCategoryCreate = generateMutationHook<categoryCreate,categoryCreateVariables>(CATEGORY_CREATE,{...getRefetch(CATEGORY_LIST,ME)});
export const useCategoryDelete = generateMutationHook<categoryDelete,categoryDeleteVariables>(CATEGORY_DELETE,{...getRefetch(CATEGORY_LIST)});
export const useCategoryUpdate = generateMutationHook<categoryUpdate, categoryUpdateVariables>(CATEGORY_UPDATE,{...getRefetch(CATEGORY_LIST)});
export const useCategoryOrderUpdate = generateMutationHook<categoryOrderUpdate, categoryOrderUpdateVariables>(CATEGORY_ORDER_UPDATE,{...getRefetch(CATEGORY_LIST)});
