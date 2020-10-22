
import { gql } from "@apollo/client";
import { F_FILE, F_ITEM, F_PRODUCT, F_PRODUCTGROUP, F_STORE, F_USER, F_USERERROR, F_VERIFICATION } from "./fragments";
/* :::::::::::::::::::::::::::::::::::::: 

    Mutations 
    
:::::::::::::::::::::::::::::::::::::: */

export const ITEM_CREATE = gql`
  mutation itemCreate(
    $params: ItemCreateInput!
    $productId: ObjectId!
  ) {
    ItemCreate(
      params: $params
      productId: $productId
    ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fitem
      }
    }
  }
  ${F_USERERROR}
  ${F_ITEM}
`

export const ITEM_DELETE = gql`
  mutation itemDelete(
    $itemId: ObjectId!
  ) {
    ItemDelete(
      itemId: $itemId 
    ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fitem
      }
    }
  }
  ${F_USERERROR}
  ${F_ITEM}
`

export const ITEM_SIGNUP = gql`
  mutation storeSignUp(
    $name: String!
    $email: String!
    $phoneNumber: String!
    $password: String!
    $company: String
    $location: LocationInput!
  ) {
    StoreSignUp(
      name: $name 
      email: $email
      phoneNumber: $phoneNumber 
      password: $password
      company: $company 
      location: $location 
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
`



export const ITEM_UPDATE = gql`
  mutation itemUpdate(
    $input: ItemUpdateInput!
    $id: ObjectId!
  ) {
    ItemUpdate(
      id:$id
      input:$input
    ) {
      ok
      error {
        ...FuserError
      }
      data {
        ...Fitem
      }
    }
  }
  ${F_USERERROR}
  ${F_ITEM}
`

export const PRODUCT_TAGS_ADD = gql`
  mutation productTagsAdd(
    $productId: ObjectId!
    $tags: [TagInput!]!
  ) {
    ProductTagsAdd(
      productId: $productId
      tags: $tags
    ) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`

export const PRODUCT_TAGS_REMOVE = gql`
  mutation productTagsRemove(
    $keys: [String!]!
    $productId: ObjectId!
  ) {
    ProductTagsRemove(
      keys: $keys
      productId: $productId
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
  ${F_PRODUCT}
  ${F_USERERROR}
  ${F_ITEM}
`


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

export const FPRODUCT_DAILY_SCHEDULER_ADD = gql`
  mutation productDailySchedulerAdd(
      $productId: ObjectId!
      $dailySchedulers: [DailySchedulerInput!]!
    ) {
      ProductDailySchedulerAdd(
        productId: $productId
        dailySchedulers: $dailySchedulers
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


export const FPRODUCT_GROUP_CREATE = gql`
  mutation productGroupCreate(
      $params: ProductGroupCreateInput!
      $storeId: ObjectId!
    ) {
      ProductGroupCreate(
        params: $params 
        storeId: $storeId
      ) {
          ok
          error {
            ...FuserError
          }
          data {
            ...FproductGroup
          }
        }
      }
  ${F_USERERROR}
  ${F_PRODUCTGROUP}
`;

export const FPRODUCT_GROUP_DELETE = gql`
  mutation productGroupDelete(
      $productGroupId: ObjectId!
    ) {
      ProductGroupDelete(
        productGroupId: $productGroupId 
      ) {
          ok
          error {
            ...FuserError
          }
        }
      }
  ${F_USERERROR}
`;

export const FPRODUCT_GROUP_UPDATE = gql`
  mutation productGroupUpdate(
    $params: ProductGroupUpdateInput!
    $productGroupId: ObjectId!
    ) {
      ProductGroupUpdate(
        productGroupId: $productGroupId
        params: $params
      ) {
          ok
          error {
            ...FuserError
          }
          data {
            ...FproductGroup
          }
        }
      }
  ${F_USERERROR}
  ${F_PRODUCTGROUP}
`;


export const PRODU_CTCREATE = gql`
  mutation productCreate(
      $params:ProductCreateInput!
      $storeId:ObjectId!
    ) {
    ProductCreate(
        params: $params
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
      $params: ProductUpdateInput!
      $id:ObjectId!
    ) {
    ProductUpdate(
        params:$params
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

export const STORE_IMG_ADD = gql`
  mutation storeImageAdd(
      $images: [ObjectId!]!
      $storeId: ObjectId!
    ) {
      StoreImageAdd(
        images: $images
        storeId: $storeId
      ) {
      ok
      error {
        ...FuserError
      }
    }
  }
  ${F_USERERROR}
`;

export const STORE_SIGN_IN = gql`
  mutation storeSignIn(
      $email: String!
      $password: String!
    ) {
      StoreSignIn(
        email:$email
        password:$password
      ) {
        ok
        error {
          ...FuserError
        }
      }
    }
  ${F_USERERROR}
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
      $location: LocationInput!
    ) {
    SignUp(
      name: $name
      email: $email
      phoneNumber: $phoneNumber
      password: $password
      location: $location
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
    ) {
    VerificationStart(
      target:$target
      payload:$payload
      event:$event
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

