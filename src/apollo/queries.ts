import { gql } from "@apollo/client";
import { F_USER } from "./fragments";

export const SIGNUP = gql`
  mutation signUp(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
    $company: String
    ) {
    SignUp(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      password: $password
      company: $company) {
      ok
      error {
        code
        message
        details
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USER}
`;