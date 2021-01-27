import { gql } from "@apollo/client";
import { F_USERERROR, F_VERIFICATION } from "./fragment/fragments";

export const VERIFICATION_START = gql`
mutation verificationStart($input: VerificationStartInput!) {
  VerificationStart(input:$input) {
    ok
    error {
      ...FuserError
    }
    data {
      ...Fverification
    }
  }
}
${F_USERERROR}
${F_VERIFICATION}
`;


export const VERIFICATION_COMPLETE = gql`
mutation verificationComplete($input: VerificationCompleteInput!) {
 VerificationComplete(input:$input) {
    ok
    error {
      ...FuserError
    }
    data {
      ...Fverification
    }
  }
}
${F_USERERROR}
${F_VERIFICATION}
`;
