import { gql } from "@apollo/client";

export const FOO_FIND_BY_CODE = gql`
    query fooFindByCode(
        $code: String!
    ) {
    FooFindByCode(
        code: $code 
    ) {
        ok
        error
        data  {
            ...Ffoo
        }
    }
}
${F_FOO}
`
