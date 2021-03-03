import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";
import { F_ZONE_INFO } from "./zoneInfo";

export const F_USER = gql`
  fragment Fuser on IUser {
    ...FcollectionDataInterface
    name
    email
    unReadSystemNoties
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
