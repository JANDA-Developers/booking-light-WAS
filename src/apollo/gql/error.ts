import { gql } from "@apollo/client";
import { F_USERERROR } from "./fragment/fragments";

export const ERROR_GENERATOR = gql`
  query errorGenerate(
      $code: String!
      $message: String!
    ) {
      ErrorGenerate(
        code: $code
        message: $message
      ) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;
