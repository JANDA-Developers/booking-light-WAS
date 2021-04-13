import { gql } from "@apollo/client";
import { F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_BOARD = gql`
    fragment Fboard on Board   {
        ...FcollectionDataInterface
        key
        name
        fields
        writePermission
        readPermission
        inputs {
            ...Fattribute
        }
    }
    ${F_COLLECTION_DATA_INTERFACE}
    ${F_ATTRIBUTE}
`