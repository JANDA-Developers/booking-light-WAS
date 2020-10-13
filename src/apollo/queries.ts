import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE, F_FILE, F_USER, F_ZONE_INFO, F_PRODUCT, F_STORE, F_PRODUCTGROUP, F_DAILYSCHEDULEPOLICIES, F_USERERROR, F_VERIFICATION } from "./fragments";

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




