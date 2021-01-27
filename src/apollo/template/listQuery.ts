import { gql } from "@apollo/client";

export const FOOO_LIST = gql`
    query foooList(
        $sort: [_FoooSort!]
        $filter: _FoooFilter
        $pagingInput: OffsetPagingInput!
    ) {
    FoooList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Ffooo
        }
    }
}
${F_PAGEINFO}
${F_FOOO}
`