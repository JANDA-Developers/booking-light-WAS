import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./fragments";


export const F_PRODUCT = gql`
fragment Fproduct on Product {
    ...FcollectionDataInterface
    type
    attrs {
        name
        value
    }
    code
}
${F_COLLECTION_DATA_INTERFACE}
`
