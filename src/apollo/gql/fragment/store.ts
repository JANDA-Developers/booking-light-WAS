import { gql } from "@apollo/client";
import { F_PAYMENTOPTION } from "./payment";
import { F_COLLECTION_DATA_INTERFACE, F_LOCATION } from "./shared";
import { F_ZONE_INFO } from "./zoneInfo";


export const F_BUYPAGE = gql`
fragment FbuyPage on BuyPage {
    configure
    _id
}
`

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
    optionPayment {
        ...Fpaymentoption
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
${F_PAYMENTOPTION}
${F_LOCATION}
${F_ZONE_INFO}
`

