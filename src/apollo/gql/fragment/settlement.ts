import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_SETTLEMENT = gql`
fragment Fsettlement on Settlement {
    ...FcollectionDataInterface
    amount
    message
    settlementDate
    submallId
    sequence
    canceledAt
    status
    accountHolder
    accountNumber
    bankCode
    latestRefresh
    settlementMallHashId
}
${F_COLLECTION_DATA_INTERFACE}
`

export const F_SETTLEMENT_MALL = gql`
fragment FsettlementMall on SettlementMall {
    ...FcollectionDataInterface
    submallId
    submallName
    brcNumber
    hashId
    description
    accountHolder
    accountNumber
    bankCode
}
${F_COLLECTION_DATA_INTERFACE}
`


export const F_SETTLEMENT_MALL_PLAIN = gql`
fragment FsettlementMallPlain on SettlementMallPlain {
    ...FcollectionDataInterface
    submallId
    submallName
    brcNumber
    hashId
    description
    accountHolder
    accountNumber
    bankCode
}
${F_COLLECTION_DATA_INTERFACE}
`


//will deprecated
export const F_SETTLEMENTMALL_PLAIN = gql`
fragment FsettlementMallPlain on SettlementMallPlain {
    ...FcollectionDataInterface
    submallId
    submallName
    brcNumber
    hashId
    description
    accountHolder
    accountNumber
    bankCode
}
${F_COLLECTION_DATA_INTERFACE}
`

