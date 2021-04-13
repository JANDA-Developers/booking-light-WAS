import { gql } from "@apollo/client";
import {  F_ATTRIBUTE, F_COLLECTION_DATA_INTERFACE, F_DELIVERY } from "./shared";

export const F_POLICY = gql`
    fragment Fpolicy on Policy {
        ...FcollectionDataInterface
        key
        name
        content
        version
        require
    }
    ${F_COLLECTION_DATA_INTERFACE}
`


export const F_BUYPAGE = gql`
fragment FbuyPage on BuyPage {
    delivery {
        ...Fdelivery
    }
    policies {
        ...Fpolicy
    }
    attrs {
        ...Fattribute
    }
    configure
    _id
}
${F_ATTRIBUTE}
${F_POLICY}
${F_DELIVERY}
`