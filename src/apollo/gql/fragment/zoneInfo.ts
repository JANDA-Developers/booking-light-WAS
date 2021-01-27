import { gql } from "@apollo/client";

export const F_ZONE_INFO = gql`
fragment FzoneInfo on Zoneinfo {
    timezone
    offset
    callingCode
    alpha2Code
}
`