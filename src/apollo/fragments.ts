import { gql } from "@apollo/client";


export const F_COLLECTION_DATA_INTERFACE =gql`
    fragment FcollectionDataInterface on CollectionDataInterface {
        _id
        createdAt
        updatedAt
        isDeleted
    }
`

export const F_ZONE_INFO = gql`
    fragment FzoneInfo on Zoneinfo {
        timezone
        offset
        callingCode
        alpha2Code
    }
`

export const F_FILE = gql`
    fragment Ffile on File {
        name
        description
        extension
        fileType
        uri
        tags {
            key
            value
        }
    }
`

export const F_USER = gql`
  fragment Fuser on User {
    name
    email
    phoneNumber
    profileImage {
        ...Ffile
    }
    isVerifiedPhoneNumber
    isVerifiedEmail
    role
    company
    zoneinfo {
        ...FzoneInfo
    }
    smsKey
    ...FcollectionDataInterface
  }
  ${F_FILE}
  ${F_ZONE_INFO}
  ${F_COLLECTION_DATA_INTERFACE}
`;
