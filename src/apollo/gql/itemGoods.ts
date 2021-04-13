// import { gql } from "@apollo/client";
// import { F_ITEM, F_ITEM_BOOKING, F_PAGEINFO, F_PRODUCT, F_PRODUCT_BOOKING, F_USERERROR } from "./fragment/fragments";
// import { F_SUMMARY_BOOKING } from "./fragment/summary";


// export const ITEM_BOOKING_UPDATE = gql`
//     mutation ItemGoodsUpdate(
//         $input: ItemGoodsUpdateInput!
//         $itemId: ObjectId!
//     ) {
//     ItemGoodsUpdate(
//         input:$input
//         itemId:$itemId
//     ) {
//         ok
//         error {
//             ...FuserError
//         }
//     }
//     }
// ${F_USERERROR}
// `

// export const ITEM_DELETE = gql`
//     mutation itemDelete(
//         $itemId: ObjectId!
//     ) {
//     ItemDelete(
//         itemId: $itemId
//     ) {
//         ok
//         error {
//             ...FuserError
//         }
//     }
// }
// ${F_USERERROR}
// `

// export const ITEM_LIST = gql`
//     query itemList(
//         $sort: [_IItemSort!]
//         $filter: _IItemFilter
//         $pagingInput: OffsetPagingInput!
//     ) {
//     ItemList(
//         sort: $sort
//         pagingInput: $pagingInput
//         filter: $filter
//     ) {
//         pageInfo {
//             ...FoffsetPagingInfo
//         }
//         items {
//             ...on ItemGoods {
//                 ...FitemGoods
//             }
//         }
//     }
// }
// ${F_PAGEINFO}
// ${F_ITEM_BOOKING}
// `

// export const ITEMGOODS_CREATE = gql`
//     mutation itemgoodsCreate(
//         $input: ItemGoodsCreateInput!
//         $storeId: ObjectId!
//     ) {
//         ItemGoodsCreate(
//             input:$input
//             storeId:$storeId
//         ) {
//             ok
//             error {
//             ...FuserError
//             }
//         }
//     }
// ${F_USERERROR}
// `

// export const ITEMGOODS_UPDATE = gql`
//     mutation itemgoodsUpdate(
//         $input: ItemGoodsUpdateInput!
//         $itemId: ObjectId!
//     ) {
//     ItemGoodsUpdate(
//         input:$input
//         itemId:$itemId
//     ) {
//         ok
//         error {
//             ...FuserError
//         }
//     }
//     }
// ${F_USERERROR}
// `

// export const ITEM_FIND_BY_ID = gql`
// query itemFindById(
//     $itemId: ObjectId!
// ) {
//     ItemFindById(
//         itemId: $itemId
//     ) {
//         ...FitemGoods
//         products {
//             ...FproductBooking
//         }
//     }
// }
// ${F_ITEM_BOOKING}
// ${F_PRODUCT_BOOKING}
// ${F_ITEM}
// `

// export const ITEM_SUMMARY_GET = gql`
//     query itemSummaryGet(
//         $code: String!
//     ) {
//         ItemSummaryGet(
//             code: $code
//         ) {
//             ...FsummaryBooking
//         }
//     }
// ${F_USERERROR}
// ${F_SUMMARY_BOOKING}
// `
export default ""