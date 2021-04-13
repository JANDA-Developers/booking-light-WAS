import { gql } from "@apollo/client";
import { F_BUYPAGE, F_POLICY } from "./buypage";
import { F_COLLECTION_DATA_INTERFACE, F_DELIVERY, F_LOCATION } from "./shared";
import { F_ZONE_INFO } from "./zoneInfo";


export const F_STORE = gql`
fragment Fstore on Store {
    type
    name
    description
    code
    itemCount
    location {
        ...Flocation
    }
    zoneinfo {
        ...FzoneInfo
    }
    buypage {
        ...FbuyPage
    }
    ...FcollectionDataInterface
}
${F_BUYPAGE}
${F_COLLECTION_DATA_INTERFACE}
${F_LOCATION}
${F_ZONE_INFO}
`

