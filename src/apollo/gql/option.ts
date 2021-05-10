import { gql } from "@apollo/client";
import { F_OPTION } from "./fragment/option";
import { F_PAGEINFO, F_USERERROR } from "../gql/fragment/fragments";

export const OPTION_UPDATE = gql`
    mutation optionUpdate($input: OptionUpdateInput!, $optionId: ObjectId!) {
        OptionUpdate(optionId: $optionId, input: $input) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OPTION_CREATE = gql`
    mutation optionCreate($input: OptionCreateInput!, $storeId: ObjectId!) {
        OptionCreate(input: $input, storeId: $storeId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OPTION_DELETE = gql`
    mutation optionDelete($optionId: ObjectId!) {
        OptionDelete(optionId: $optionId) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const OPTION_LIST = gql`
    query optionList(
        $sort: [_OptionSort!]
        $filter: _OptionFilter
        $pagingInput: OffsetPagingInput!
    ) {
        OptionList(sort: $sort, pagingInput: $pagingInput, filter: $filter) {
            pageInfo {
                ...FoffsetPagingInfo
            }
            items {
                ...Foption
            }
        }
    }
    ${F_PAGEINFO}
    ${F_OPTION}
`;

export const OPTION_FIND_BY_ID = gql`
    query optionFindById($optionId: ObjectId!) {
        OptionFindById(optionId: $optionId) {
            ...Foption
        }
    }
    ${F_OPTION}
`;
