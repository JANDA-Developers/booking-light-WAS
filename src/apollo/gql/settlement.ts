import { gql } from "@apollo/client";
import { F_PAGEINFO, F_USERERROR } from "./fragment/fragments";
import { F_SETTLEMENT, F_SETTLEMENT_MALL } from "./fragment/settlement";

export const SETTLEMENT_MALL_FIND_BY_HASHID = gql`
    query settlementMallFindByHashId(
        $hashId: String!
    ) {
    SettlementMallFindByHashId(
        hashId: $hashId
    ) {
        ...FsettlementMall
    }
}
${F_SETTLEMENT_MALL}
`

export const SETTLEMENT_MALL_CREATE = gql`
    mutation settlementMallCreate(
        $input: SettlementMallCreateInput!
    ) {
    SettlementMallCreate(
        input: $input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...FsettlementMall
        }
    }
}
${F_USERERROR}
${F_SETTLEMENT_MALL}
`


export const SETTLEMENT_TRANSFER = gql`
    mutation settlementTransfer(
        $input: SettlementTransferInput!
    ) {
    SettlementTransfer(
        input: $input
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fsettlement
        }
    }
}
${F_USERERROR}
${F_SETTLEMENT}
`

export const SETTLEMENT_PLAIN_TRANSFER = gql`
    mutation settlementPlainTransfer(
        $input: SettlementTransferInput!
        $mallHashId: String!
    ) {
    SettlementPlainTransfer(
        input: $input
        mallHashId: $mallHashId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fsettlement
        }
    }
}
${F_USERERROR}
${F_SETTLEMENT}
`

export const SETTLEMENT_REFRESH = gql`
    mutation settlementRefresh(
        $input: SettlementRefreshInput!
    ) {
    SettlementRefresh(
        input: $input
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const SETTLEMENT_TRANSFER_CANCEL = gql`
    mutation settlementTransferCancel(
        $settlementId: ObjectId!
    ) {
    SettlementTransferCancel(
        settlementId: $settlementId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fsettlement
        }
    }
}
${F_USERERROR}
${F_SETTLEMENT}
`

export const SETTLEMENT_TRANSFER_PLAIN_CANCEL = gql`
    mutation settlementPlainTransferCancel(
        $settlementId: ObjectId!
    ) {
    SettlementPlainTransferCancel(
        settlementId: $settlementId
    ) {
        ok
        error {
            ...FuserError
        }
        data {
            ...Fsettlement
        }
    }
}
${F_USERERROR}
${F_SETTLEMENT}
`

// export const SETTLEMENT_MALL_PLAIN_CREATE = gql`
//     mutation settlementMallPlainCreate(
//         $input: SettlementMallPlainCreateInput!
//     ) {
//     SettlementMallPlainCreate(
//         input: $input
//     ) {
//         ok
//         error {
//             ...FuserError
//         }
//         data {
//             ...FsettlementMall
//         }
//     }
// }
// ${F_USERERROR}
// ${F_SETTLEMENT_MALL}
// `

export const SETTLEMENT_TRANSFTER_LIST = gql`
    query settlementTransferList(
        $sort: [_SettlementSort!]
        $filter: _SettlementFilter
        $pagingInput: OffsetPagingInput!
    ) {
    SettlementTransferList(
        sort: $sort
        filter: $filter
        pagingInput: $pagingInput
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Fsettlement
        }
    }
}
${F_PAGEINFO}
${F_SETTLEMENT}
`



export const SETTLEMENT_MALL_LIST = gql`
    query settlementMallList(
        $sort: [_SettlementMallSort!]
        $filter: _SettlementMallFilter
        $pagingInput: OffsetPagingInput!
    ) {
    SettlementMallList(
        sort: $sort
        filter: $filter
        pagingInput: $pagingInput
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FsettlementMall
        }
    }
}
${F_PAGEINFO}
${F_SETTLEMENT_MALL}
`
