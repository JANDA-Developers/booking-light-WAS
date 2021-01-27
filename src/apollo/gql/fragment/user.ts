import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_ZONE_INFO } from "./fragments";

export const F_USER = gql`
  fragment Fuser on User {
    ...FcollectionDataInterface
    name
    email
    phoneNumber
    profileImage {
        uri
    }
    isVerifiedPhoneNumber
    isVerifiedEmail
    role
    company
    zoneinfo {
        ...FzoneInfo
    }
  }
  ${F_ZONE_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`
