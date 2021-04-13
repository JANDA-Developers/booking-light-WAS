import { gql } from "@apollo/client";
import { F_ITEM, F_ITEM_BOOKING, F_PAGEINFO, F_PRODUCT, F_PRODUCT_BOOKING, F_USERERROR } from "./fragment/fragments";
import { F_SUMMARY_BOOKING } from "./fragment/summary";


export const ITEM_BOOKING_UPDATE = gql`
    mutation ItemBookingUpdate(
        $input: ItemBookingUpdateInput!
        $itemId: ObjectId!
    ) {
    ItemBookingUpdate(
        input:$input
        itemId:$itemId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const ITEM_DELETE = gql`
    mutation itemDelete(
        $itemId: ObjectId!
    ) {
    ItemDelete(
        itemId: $itemId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const ITEM_LIST = gql`
    query itemList(
        $sort: [_IItemSort!]
        $filter: _IItemFilter
        $pagingInput: OffsetPagingInput!
    ) {
    ItemList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...on ItemBooking {
                ...FitemBooking
            }
        }
    }
}
${F_PAGEINFO}
${F_ITEM_BOOKING}
`

export const ITEMBOOKING_CREATE = gql`
    mutation itembookingCreate(
        $input: ItemBookingCreateInput!
        $storeId: ObjectId!
    ) {
        ItemBookingCreate(
            input:$input
            storeId:$storeId
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
${F_USERERROR}
`

export const ITEMBOOKING_UPDATE = gql`
    mutation itembookingUpdate(
        $input: ItemBookingUpdateInput!
        $itemId: ObjectId!
    ) {
    ItemBookingUpdate(
        input:$input
        itemId:$itemId
    ) {
        ok
        error {
            ...FuserError
        }
    }
    }
${F_USERERROR}
`

export const ITEM_FIND_BY_ID = gql`
query itemFindById(
    $itemId: ObjectId!
) {
    ItemFindById(
        itemId: $itemId
    ) {
        ...FitemBooking
        products {
            ...FproductBooking
        }
    }
}
${F_ITEM_BOOKING}
${F_PRODUCT_BOOKING}
${F_ITEM}
`

export const ITEM_SUMMARY_GET = gql`
    query itemSummaryGet(
        $code: String!
    ) {
        ItemSummaryGet(
            code: $code
        ) {
            ...FsummaryBooking
        }
    }
${F_USERERROR}
${F_SUMMARY_BOOKING}
`
