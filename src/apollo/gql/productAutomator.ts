import { gql } from "@apollo/client";
import { F_BOOKING, F_ITEM, F_PAGEINFO, F_PRODUCT, F_PRODUCT_AUTOMATOR, F_PURCHASE, F_USERERROR } from "./fragment/fragments";

export const PRODUCT_AUTOMATOR_BOOKING_UPDATE = gql`
    mutation productAutomatorBookingUpdate(
        $input: ProductAutomatorBookingUpdateInput!
        $id: ObjectId!
    ) {
    ProductAutomatorBookingUpdate(
        input: $input
        id: $id
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const PRODUCT_AUTOMATOR_BOOKING_CREATE = gql`
    mutation productAutomatorBookingCreate(
        $withGenerate: Boolean
        $input: ProductAutomatorBookingCreateInput!
    ) {
        ProductAutomatorBookingCreate(
            input:$input
            withGenerate: $withGenerate
        ) {
            ok
            error {
            ...FuserError
            }
        }
    }
    ${F_USERERROR}
`

export const PRODUCT_AUTOMATOR_DELETE = gql`
    mutation productAutomatorBookingDelete(
        $withDestroyProperties: Boolean 
        $id: ObjectId!
    ) {
    ProductAutomatorBookingDelete(
        withDestroyProperties: $withDestroyProperties
        id: $id
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
`

export const PRODUCT_AUTOMATOR_LIST = gql`
    query productAutomatorBookingList(
        $sort: [_ProductAutomatorBookingSort!]
        $filter: _ProductAutomatorBookingFilter
        $pagingInput: OffsetPagingInput!
    ) {
    ProductAutomatorBookingList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...FproductAutomator
        }
    }
}
${F_PAGEINFO}
${F_PRODUCT_AUTOMATOR}
`


export const PRODUCT_AUTOMATOR_FIND_BYID = gql`
    query productAutomatorBookingFindById(
        $automatorId: ObjectId!
    ) {
    ProductAutomatorBookingFindById(
        automatorId: $automatorId
    ) {
        ...FproductAutomator
    }
}
${F_PRODUCT_AUTOMATOR}
`
