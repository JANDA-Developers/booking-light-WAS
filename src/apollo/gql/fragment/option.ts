import gql from "graphql-tag";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_OPTION = gql`
    fragment Foption on Option {
        ...FcollectionDataInterface
        dependentItem
        dependentProd
        dependentDetailProd
        dependentTime {
            start
            end
        }
        price
        tags {
            key
            value
        }
        label
        count
        count
        type
    }
    ${F_COLLECTION_DATA_INTERFACE}
`;
