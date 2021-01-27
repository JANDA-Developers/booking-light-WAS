import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./fragments";

export const F_ITEM = gql`
fragment Fitem on IItem {
    ...FcollectionDataInterface
    type
    name
    price
    currency
    attrs {
        name
        displayType
    }
    images {
        uri
    }
}
${F_COLLECTION_DATA_INTERFACE}
`