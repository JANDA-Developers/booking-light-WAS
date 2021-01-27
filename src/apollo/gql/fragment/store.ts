import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_LOCATION, F_PAYMENTOPTION, F_ZONE_INFO } from "./fragments";

export const F_STORE = gql`
fragment Fstore on Store {
    ...FcollectionDataInterface
    name
    description
    code
    location {
        ...Flocation
    }
    optionPayment {
        ...Fpaymentoption
    }
    zoneinfo {
        ...FzoneInfo
    }
}
${F_COLLECTION_DATA_INTERFACE}
${F_PAYMENTOPTION}
${F_LOCATION}
${F_ZONE_INFO}
`