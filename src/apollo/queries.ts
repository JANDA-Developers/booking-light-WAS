import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_FILE, F_USER, F_ZONE_INFO, F_PRODUCT, F_STORE, F_PRODUCTGROUP, F_DAILYSCHEDULEPOLICIES, F_USERERROR, F_VERIFICATION } from "./fragments";



/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */


export const ERRORGENERATOR = gql`
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


export const PRODUCT_LIST = gql`
  query productList(
      $sort: [_ProductSort!]
      $filter: _ProductFilter
      $pagingInput: OffsetPagingInput!
    ) {
      ProductList(
        sort: $sort
        filter: $filter
        pagingInput: $pagingInput
      ) {
        pageInfo {
          pageNumber
          pageItemCount
          currentItemCount
          totalPageCount
        },
        items {
          ...FcollectionDataInterface
          name
          subtitle
          code
          description
          price
          capacity
          maxSelectPinCount
          dailySchedulePolicy {
            ...FdailySchedulePolicies
          }
          images {
            ...Ffile
          }
          user {
            ...Fuser
          }
          store {
            ...Fstore
          }
          productGroup {
            ...FproductGroup
          }
        }
      }
  }
  ${F_COLLECTION_DATA_INTERFACE}
  ${F_DAILYSCHEDULEPOLICIES}
  ${F_FILE}
  ${F_USER}
  ${F_STORE}
  ${F_PRODUCTGROUP}
`;


export const STORE_LIST = gql`
  query storeList(
      $sort: [_StoreSort!]
      $filter: _StoreFilter
      $pagingInput: OffsetPagingInput!
    ) {
      StoreList(
        sort: $sort
        filter: $filter
        pagingInput: $pagingInput
      ) {
        pageInfo {
          pageNumber
          pageItemCount
          currentItemCount
          totalPageCount
        },
        items {
          ...FcollectionDataInterface
          name
          zoneinfo {
            ...FzoneInfo
          }
          code
          description
          user {
            ...Fuser
          }
          products {
            ...Fproduct
          }
          images {
            ...Ffile
          }
        }
      }
  }
  ${F_COLLECTION_DATA_INTERFACE}
  ${F_ZONE_INFO}
  ${F_USER}
  ${F_PRODUCT}
  ${F_FILE}
`;


export const ME = gql`
  query me {
    Me {
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



export const GETPROFILE = gql`
  query getprofile {
    GetProfile {
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


export const USERS = gql`
  query users (
      $pageInput: OffsetPagingInput!
    ) {
      users(
        pageInput: $pageInput
      ) {
        pageInfo {
          pageNumber
          pageItemCount
          currentItemCount
          totalPageCount
        },
        items {
          ...Fuser
        }
      }
  }
  ${F_USER}
`;


/* :::::::::::::::::::::::::::::::::::::: 

    Mutations 
    
:::::::::::::::::::::::::::::::::::::: */


export const FILEUPLOADS = gql`
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


export const PRODUCTCREATE = gql`
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


export const PRODUCTDELETE = gql`
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



export const PRODUCTUPDATE = gql`
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


export const STORECREATE = gql`
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



export const STOREDELETE = gql`
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


export const STOREUPDATE = gql`
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
        company: $company
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



export const VERIFICATIONSTART = gql`
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



export const VERIFICATIONCOMPLETE = gql`
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




