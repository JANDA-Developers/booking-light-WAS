import { gql } from "@apollo/client";

export const F_CATEGORY = gql`
    fragment Fcategory on Category  {
        _id
        updatedAt
        createdAt
        type
        label
        order
    }
`