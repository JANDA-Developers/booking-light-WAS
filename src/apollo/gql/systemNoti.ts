import { gql } from "@apollo/client";
import { F_PAGEINFO, F_SYSTEMNOTI, F_USERERROR } from "./fragment/fragments";

export const SYSTEMNOTI_LIST = gql`
    query systemNotiList(
        $sort: [_SystemNotiSort!]
        $filter: _SystemNotiFilter
        $pagingInput: OffsetPagingInput!
    ) {
        SystemNotiList(
            sort: $sort
            pagingInput: $pagingInput
            filter: $filter
        ) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...FsystemNoti
            }
        }
    }
    ${F_PAGEINFO}
    ${F_SYSTEMNOTI}
`;

export const SYSTEMNOTI_READ = gql`
    mutation systemNotiRead($ids: [String!]!) {
        SystemNotiRead(ids: $ids) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SYSTEMNOTI_HIDE = gql`
    mutation systemNotiHide($ids: [String!]!) {
        SystemNotiHide(ids: $ids) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const SYSTEMNOTI_CREATE = gql`
    mutation SystemNotiCreate($message: String!, $userIds: [String!]) {
        SystemNotiCreate(message: $message, userIds: $userIds) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
