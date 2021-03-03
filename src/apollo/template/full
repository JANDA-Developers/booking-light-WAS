import { gql } from "@apollo/client";
import { F_PAGEINFO } from "../gql/fragment/fragments";
import { F_USERERROR } from "../shared";

export const FOO_UPDATE = gql`
    mutation fooUpdate(
        $input: FooUpdateInput!
        $id: ObjectId!
    ) {
    FooUpdate(
        id:$id
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

export const FOO_CREATE = gql`
    mutation fooCreate(
        $input: FooCreateInput!
    ) {
        FooCreate(
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

export const FOO_DELETE = gql`
    mutation fooDelete(
        $input: FooDeleteInput!
        $id: ObjectId!
    ) {
    FooDelete(
        id:$id
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

export const FOOO_LIST = gql`
    query foooList(
        $sort: [_FOOOSort!]
        $filter: _FOOOFilter
        $pagingInput: OffsetPagingInput!
    ) {
    FOOOList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        ok
        error
        pageInfo {
            ...FoffsetPagingInfo
        }
        data  {
            ...Ffooo
        }
    }
}
${F_PAGEINFO}
`
