import { gql } from "@apollo/client";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE, F_FILE } from "./shared";

export const F_ITEM = gql`
fragment Fitem on IItem {
    ...FcollectionDataInterface
    type
    name
    thumbNail
    price
    code
    currency
    thumbNail
    keywards
    productCount
    description
    descriptionDetail
    attrs {
        ...Fattribute
    }
    images {
        ...Ffile
    }
}
${F_ATTRIBUTE}
${F_COLLECTION_DATA_INTERFACE}
${F_FILE}
`

export const F_ITEM_BOOKING = gql`
fragment FitemBooking on ItemBooking {
 ...Fitem
}
${F_ITEM}
`