
import { gql } from "@apollo/client";
import { F_FILE, F_PRODUCT, F_STORE, F_USER, F_USERERROR, F_VERIFICATION } from "./fragments";
/* :::::::::::::::::::::::::::::::::::::: 

    Mutations 
    
:::::::::::::::::::::::::::::::::::::: */

export const FILE_UPLOADS = gql`
  mutation fileUploads(
      $files: [FileInput!]!
    ) {
    FileUploads(
        files: $files
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Ffile
      }
    }
  }
  ${F_USERERROR}
  ${F_FILE}
`;


export const PRODU_CTCREATE = gql`
  mutation productCreate(
      $input:ProductCreateInput!
      $storeId:ObjectId!
    ) {
    ProductCreate(
        input: $input
        storeId:$storeId
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fproduct
      }
    }
  }
  ${F_USERERROR}
  ${F_PRODUCT}
`;


export const PRODUCT_DELETE = gql`
  mutation productDelete(
      $productId:ObjectId!
    ) {
    ProductDelete(
        productId:$productId
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fproduct
      }
    }
  }
  ${F_USERERROR}
  ${F_PRODUCT}
`;



export const PRODUCT_UPDATE = gql`
  mutation productUpdate(
      $input: ProductUpdateInput!
      $id:ObjectId!
    ) {
    ProductUpdate(
        input:$input
        id:$id
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fproduct
      }
    }
  }
  ${F_USERERROR}
  ${F_PRODUCT}
`


export const STORE_CREATE = gql`
  mutation storeCreate(
      $name: String!
      $description:String
    ) {
    StoreCreate(
        name:$name
        description:$description
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fstore
      }
    }
  }
  ${F_USERERROR}
  ${F_STORE}
`;



export const STORE_DELETE = gql`
  mutation storeDelete(
      $storeId: ObjectId!
    ) {
    StoreDelete(
        storeId:$storeId
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fstore
      }
    }
  }
  ${F_USERERROR}
  ${F_STORE}
`;


export const STORE_UPDATE = gql`
  mutation storeUpdate(
      $input: StoreUpdateInput!
      $id: ObjectId!
    ) {
    StoreUpdate(
        input:$input
        id:$id
      ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fstore
      }
    }
  }
  ${F_USERERROR}
  ${F_STORE}
`;



export const SIGNIN = gql`
  mutation signIn(
      $email: String!
      $password: String!
    ) {
    SignIn(
        email:$email
        password:$password
      ) {
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
`;



export const SIGNOUT = gql`
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
        ...FuserError
      }
      data {
        ...Fuser
      }
    }
  }
  ${F_USERERROR}
  ${F_USER}
`;



export const VERIFICATION_START = gql`
  mutation verificationStart(
      $target: VerificationTarget!
      $payload: String!
      $event: VerificationEvent!
      $storeGroupId: ObjectId
    ) {
    VerificationStart(
      target:$target
      payload:$payload
      event:$event
      storeGroupId:$storeGroupId
      ) {
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
  mutation verificationComplete(
      $verificationId: ObjectId!
      $target: VerificationTarget!
      $code: String!
      $payload: String!
    ) {
      VerificationComplete(
      verificationId:$verificationId
      target:$target
      code:$code
      payload:$payload
      ) {
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

