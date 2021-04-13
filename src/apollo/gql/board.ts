import { gql } from "@apollo/client";
import {  F_BOARD, F_FILE, F_ITEM, F_PAGEINFO, F_USER, F_USERERROR } from "./fragment/fragments";
import { F_PURCHASE_BUNDLE } from "./fragment/purchase";


export const BOARD_UPDATE = gql`
    mutation boardUpdate(
        $input: BoardInput!
        $boardId: ObjectId!
    ) {
    BoardUpdate(
        boardId:$boardId
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

export const BOARD_CREATE = gql`
    mutation boardCreate(
        $input: BoardInput!
    ) {
        BoardCreate(
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

export const BOARD_DELETE = gql`
    mutation boardDelete(
        $boardId: ObjectId!
    ) {
    BoardDelete(
        boardId: $boardId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const BOARD_LIST = gql`
    query boardList(
        $sort: [_BoardSort!]
        $filter: _BoardFilter
        $pagingInput: OffsetPagingInput!
    ) {
    BoardList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fboard
        }
    }
}
${F_BOARD}
${F_PAGEINFO}
`


export const BOARD_FIND_BY_ID = gql`
    query boardFindById(
        $boardId: ObjectId!
    ) {
    BoardFindById(
        boardId: $boardId
    ) {
        ...Fboard
    }
}
${F_BOARD}
`


export const BOARD_FIND_BY_KEY = gql`
    query boardFindByKey(
        $key: String!
    ) {
    BoardFindByKey(
        key: $key
    ) {
        ...Fboard
    }
}
${F_BOARD}
`
