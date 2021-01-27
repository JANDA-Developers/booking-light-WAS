import { gql } from "@apollo/client";
import {  F_USER, F_USERERROR, F_VERIFICATION } from "./fragment/fragments";

export const BUSINESS_USER_RESET_PASSWORD = gql`
  mutation businessUserResetPassword($newPassword: String!) {
    BusinessUserResetPassword(newPassword: $newPassword) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;


export const CUSTOMER_USER_RESET_PASSWORD = gql`
  mutation customerResetPassword($newPassword: String!) {
    CustomerResetPassword(newPassword:$newPassword) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USER}
  ${F_USERERROR}
`;

export const BUSINESS_USER_FIND_EMAIL = gql`
  mutation businessUserFindEmail {
    BusinessUserFindEmail {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USER}
  ${F_USERERROR}
`;


export const CUSTOMER_USER_FIND_EMAIL = gql`
  mutation customerFindEmail {
    CustomerFindEmail {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;

export const SIGN_OUT = gql`
  mutation signOut {
    SignOut {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;

export const SIGN_UP = gql`
  mutation signUp($input: SignUpInput!) {
    SignUp(input: $input) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;

export const SIGN_IN = gql`
  mutation signIn($input: SignInInput!) {
    SignIn(input: $input) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;

export const STORE_SIGNIN_ANONYMOUSE_START = gql`
  mutation storeSignInAnonymousStart($input: StoreSignInAnonymousStartInput!) {
    StoreSignInAnonymousStart(input:$input) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fverification
      }
    }
  }
  ${F_VERIFICATION}
  ${F_USERERROR}
`;

export const STORE_SIGNIN_ANONYMOUSE_COMPLETE = gql`
  mutation storeSignInAnonymousComplete($input: StoreSignInAnonymousCompleteInput!) {
    StoreSignInAnonymousComplete(input:$input) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fverification
      }
    }
  }
  ${F_VERIFICATION}
  ${F_USERERROR}
`;

export const ME = gql`
  query me {
    Me {
      ...Fuser
    }
  }
  ${F_USER}
`

export const PROFILE = gql`
  query profile($role:UserRole!) {
    Profile(role:$role) {
      ...Fuser
    }
  }
  ${F_USER}
`

export const PROFILE_UPDATE_FOR_BUSINESS_USER = gql`
  mutation profileUpdateForBusinessUser($input: ProfileUpdateForBusinessUserInput!) {
    ProfileUpdateForBusinessUser(input:$input) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`

export const STORE_SIGINUP = gql`
  mutation storeSignUp($input: StoreSignUpInput!) {
    StoreSignUp(input:$input) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USERERROR}
  ${F_USER}
`


