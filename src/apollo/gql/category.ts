import { gql } from "@apollo/client";
import {   F_CATEGORY, F_PAGEINFO, F_USERERROR } from "./fragment/fragments";


export const CATEGORY_UPDATE = gql`
    mutation categoryUpdate(
        $input: CategoryUpdateInput!
        $categoryId: ObjectId!
    ) {
    CategoryUpdate(
        categoryId:$categoryId
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
    }
    }
${F_USERERROR}
`

export const CATEGORY_ORDER_UPDATE = gql`
    mutation categoryOrderUpdate(
        $input: [CategoryOrderUpdateInput!]!
    ) {
    CategoryOrderUpdate(
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
    }
    }
${F_USERERROR}
`

export const CATEGORY_CREATE = gql`
    mutation categoryCreate(
        $storeId: ObjectId!
        $input: CategoryCreateInput!
    ) {
        CategoryCreate(
            storeId:$storeId
            input:$input
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const CATEGORY_DELETE = gql`
    mutation categoryDelete(
        $categoryId: ObjectId!
    ) {
    CategoryDelete(
        categoryId: $categoryId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const CATEGORY_LIST = gql`
    query categoryList(
        $sort: [_CategorySort!]
        $filter: _CategoryFilter
        $pagingInput: OffsetPagingInput!
    ) {
    CategoryList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fcategory
        }
    }
}
${F_CATEGORY}
${F_PAGEINFO}
`


export const CATEGORY_FIND_BY_ID = gql`
    query categoryFindById(
        $categoryId: ObjectId!
    ) {
    CategoryFindById(
        categoryId: $categoryId
    ) {
        ...Fcategory
    }
}
${F_CATEGORY}
`


export const CATEGORY_FIND_BY_KEY = gql`
    query categoryFindByKey(
        $key: String!
    ) {
    CategoryFindByKey(
        key: $key
    ) {
        ...Fcategory
    }
}
${F_CATEGORY}
`
