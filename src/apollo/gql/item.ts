import { gql } from "@apollo/client";
import { F_ITEM, F_PAGEINFO, F_USERERROR } from "./fragment/fragments";


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
            ...Fitem
        }
    }
}
${F_PAGEINFO}
${F_ITEM}
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
