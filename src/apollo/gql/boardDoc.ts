import { gql } from "@apollo/client";
import {  F_FILE, F_ITEM, F_PAGEINFO, F_BOARD_DOC, F_USER, F_USERERROR } from "./fragment/fragments";

export const BOARDDOC_UPDATE = gql`
    mutation boardDocUpdate(
        $input: BoardDocInput!
        $boardDocId: ObjectId!
    ) {
    BoardDocUpdate(
        boardDocId:$boardDocId
        input:$input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...FboardDoc
        }
    }
}
${F_BOARD_DOC}
${F_USERERROR}
`

export const BOARDDOC_CREATE = gql`
    mutation boardDocCreate(
        $boardKey: String!
        $input: BoardDocInput!
    ) {
        BoardDocCreate(
            boardKey: $boardKey
            input:$input
        ) {
            ok
            error {
            ...FuserError
            }
            data {
            ...FboardDoc
        }
        }
    }
${F_BOARD_DOC}
${F_USERERROR}
`

export const BOARDDOC_DELETE = gql`
    mutation boardDocDelete(
        $boardDocId: ObjectId!
    ) {
    BoardDocDelete(
        boardDocId: $boardDocId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...FboardDoc
        }
    }
}
${F_BOARD_DOC}
${F_USERERROR}
`

export const BOARDDOC_LIST = gql`
    query boardDocList(
        $sort: [_BoardDocSort!]
        $filter: _BoardDocFilter
        $pagingInput: OffsetPagingInput!
    ) {
    BoardDocList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FboardDoc
        }
    }
}
${F_FILE}
${F_BOARD_DOC}
${F_PAGEINFO}
`
2

export const BOARDDOC_FIND_BY_ID = gql`
    query boardDocFindById(
        $boardDocId: ObjectId!
    ) {
    BoardDocFindById(
        boardDocId: $boardDocId
    ) {
        ...FboardDoc
    }
}
${F_BOARD_DOC}
`
