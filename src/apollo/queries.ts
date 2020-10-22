import { gql } from "@apollo/client";
import { 
  F_FILE,
  F_USER,
  F_ZONE_INFO,
  F_PRODUCT,
  F_STORE,
  F_USERERROR,
  F_PRODUCTGROUP,
  F_COLLECTION_DATA_INTERFACE, 
  F_DAILY_SCHEDULER,
  F_PAGEINFO,
  F_ITEM
} from "./fragments";

/* :::::::::::::::::::::::::::::::::::::: 

  Queries 
  
:::::::::::::::::::::::::::::::::::::: */

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

export const FILE_LIST = gql`
  query fileList(
    $sort: [_FileSort!]
    $filter: _FileFilter
    $pagingInput: OffsetPagingInput!
  ) {
    FileList(
      sort: $sort 
      filter: $filter 
      pagingInput: $pagingInput
    ) {
      pageInfo {
        ...FoffsetPagingInfo
      }
      items {
        ...Ffile
      }
    }
  }
  ${F_FILE}
  ${F_PAGEINFO}
`

export const ITEM_LIST = gql`
  query itemList(
    $sort: [_ItemSort!]
    $filter: _ItemFilter
    $pagingInput: OffsetPagingInput!
  ) {
    ItemList(
      sort: $sort
      filter: $filter
      pagingInput: $pagingInput
    ) {
      pageInfo {
        ...FoffsetPagingInfo
      }
      items {
        ...Fitem
      }
    }
  }
  ${F_PAGEINFO}
  ${F_ITEM}
`



export const STORE_FIND_BY_CODE = gql`
  query storeFindByCode(
    $code: String!
  ) {
    StoreFindByCode(
      code: $code
    ) {
      ...Fstore
    }
  }
  ${F_STORE}
`

export const STORE_USER_PROFILE = gql`
  query storeUserProfile {
    StoreUserProfile {
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

export const PRODUCT_GROUP_LIST = gql`
  query productGroupList(
    $sort: [_ProductGroupSort!]
    $filter: _ProductGroupFilter!
    $pagingInput: OffsetPagingInput!
  ) {
    ProductGroupList(
      sort: $sort
      filter: $filter
      pagingInput: $pagingInput
    ) {
      pageInfo {
        ...FoffsetPagingInfo
      }
      items {
        ...FproductGroup
      }
    }
  }
  ${F_PAGEINFO}
  ${F_PRODUCTGROUP}
`

export const PRODUCT_GROUP_FIND_BY_CODE = gql`
  query productGroupFindByCode(
    $code: String!
  ) {
    ProductGroupFindByCode(
      code: $code
    ) {
        _id
        createdAt
        updatedAt
        name
        type
        code
        description
        hashTags
        list {
          ...Fproduct
        }
      }
    }
  ${F_PRODUCT}
  ${F_PAGEINFO}
  ${F_ITEM}
`

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
          ...FoffsetPagingInfo
        },
        items {
          ...FcollectionDataInterface
          name
          subtitle
          code
          description
          price
          capacity
          dailySchedulers {
              ...FdailyScheduler
          }
          images {
            ...Ffile
          }
        }
      }
  }
  ${F_DAILY_SCHEDULER}
  ${F_PAGEINFO}
  ${F_COLLECTION_DATA_INTERFACE}
  ${F_DAILY_SCHEDULER}
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
          ...FoffsetPagingInfo
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
  ${F_PAGEINFO}
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



export const GET_PROFILE = gql`
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
          ...FoffsetPagingInfo
        }
      }
  }
  ${F_PAGEINFO}
`;




