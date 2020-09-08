import { gql } from "@apollo/client";

// Example Fragment
export const F_CUSTOM_FILED = gql`
  fragment FcustomField on CustomField {
    key
    label
    type
    placeHolder
    default
    isMandatory
    list
    fileUrl
  }
`;

// Example Query
export const GET_MY_STORES = gql`
  query getMyStores {
    GetMyStores {
      ok
      error {
        msg
        code
      }
      data {
        ...FcustomField
      }
    }
  }
  ${F_CUSTOM_FILED}
`;
// Example Mutation
export const DELETE_STORE = gql`
  mutation deleteStore($param: DeleteStoreInput!) {
    DeleteStore(param: $param) {
      ok
      error {
        msg
        code
      }
    }
  }
`;


export const COMPLETE_FIND_STORE_USER_EMAIL = gql`
  mutation completeFindStoreUserEmail($phoneNumber: String!, $code: String!) {
    CompleteFindStoreUserEmail(phoneNumber: $phoneNumber, code: $code) {
      ok
      error {
        code
        msg
        origin
      }
      email
    }
  }
`;
