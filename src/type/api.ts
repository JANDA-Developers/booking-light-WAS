/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: errorGenerate
// ====================================================

export interface errorGenerate_ErrorGenerate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface errorGenerate_ErrorGenerate {
  __typename: "Response";
  ok: boolean;
  error: errorGenerate_ErrorGenerate_error | null;
}

export interface errorGenerate {
  ErrorGenerate: errorGenerate_ErrorGenerate;
}

export interface errorGenerateVariables {
  code: string;
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productList
// ====================================================

export interface productList_ProductList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageNumber: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: productList_ProductList_items_dailySchedulePolicy_SUN | null;
  MON: productList_ProductList_items_dailySchedulePolicy_MON | null;
  TUE: productList_ProductList_items_dailySchedulePolicy_TUE | null;
  WED: productList_ProductList_items_dailySchedulePolicy_WED | null;
  THU: productList_ProductList_items_dailySchedulePolicy_THU | null;
  FRI: productList_ProductList_items_dailySchedulePolicy_FRI | null;
  SAT: productList_ProductList_items_dailySchedulePolicy_SAT | null;
}

export interface productList_ProductList_items_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productList_ProductList_items_images_tags[];
  owner: productList_ProductList_items_images_owner;
}

export interface productList_ProductList_items_user_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_user_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_user_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productList_ProductList_items_user_profileImage_tags[];
  owner: productList_ProductList_items_user_profileImage_owner;
}

export interface productList_ProductList_items_user_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface productList_ProductList_items_user {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: productList_ProductList_items_user_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: productList_ProductList_items_user_zoneinfo;
  smsKey: string | null;
}

export interface productList_ProductList_items_store_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface productList_ProductList_items_store_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: productList_ProductList_items_store_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface productList_ProductList_items_store_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: productList_ProductList_items_store_products_dailySchedulePolicy_SUN | null;
  MON: productList_ProductList_items_store_products_dailySchedulePolicy_MON | null;
  TUE: productList_ProductList_items_store_products_dailySchedulePolicy_TUE | null;
  WED: productList_ProductList_items_store_products_dailySchedulePolicy_WED | null;
  THU: productList_ProductList_items_store_products_dailySchedulePolicy_THU | null;
  FRI: productList_ProductList_items_store_products_dailySchedulePolicy_FRI | null;
  SAT: productList_ProductList_items_store_products_dailySchedulePolicy_SAT | null;
}

export interface productList_ProductList_items_store_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_store_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_store_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productList_ProductList_items_store_products_images_tags[];
  owner: productList_ProductList_items_store_products_images_owner;
}

export interface productList_ProductList_items_store_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_store_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface productList_ProductList_items_store_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_store_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productList_ProductList_items_store_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: productList_ProductList_items_store_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: productList_ProductList_items_store_products_productGroup_list[];
}

export interface productList_ProductList_items_store_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: productList_ProductList_items_store_products_dailySchedulePolicy;
  images: productList_ProductList_items_store_products_images[] | null;
  user: productList_ProductList_items_store_products_user;
  store: productList_ProductList_items_store_products_store;
  productGroup: productList_ProductList_items_store_products_productGroup | null;
}

export interface productList_ProductList_items_store_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_store_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_store_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productList_ProductList_items_store_images_tags[];
  owner: productList_ProductList_items_store_images_owner;
}

export interface productList_ProductList_items_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: productList_ProductList_items_store_zoneinfo;
  code: string;
  description: string | null;
  user: productList_ProductList_items_store_user;
  products: productList_ProductList_items_store_products[];
  images: productList_ProductList_items_store_images[] | null;
}

export interface productList_ProductList_items_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productList_ProductList_items_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productList_ProductList_items_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: productList_ProductList_items_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: productList_ProductList_items_productGroup_list[];
}

export interface productList_ProductList_items {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: productList_ProductList_items_dailySchedulePolicy;
  images: productList_ProductList_items_images[] | null;
  user: productList_ProductList_items_user;
  store: productList_ProductList_items_store;
  productGroup: productList_ProductList_items_productGroup | null;
}

export interface productList_ProductList {
  __typename: "OffsetPagenatedProductData";
  pageInfo: productList_ProductList_pageInfo;
  items: productList_ProductList_items[];
}

export interface productList {
  ProductList: productList_ProductList;
}

export interface productListVariables {
  sort?: _ProductSort[] | null;
  filter?: _ProductFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: storeList
// ====================================================

export interface storeList_StoreList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageNumber: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface storeList_StoreList_items_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeList_StoreList_items_user_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeList_StoreList_items_user_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeList_StoreList_items_user_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeList_StoreList_items_user_profileImage_tags[];
  owner: storeList_StoreList_items_user_profileImage_owner;
}

export interface storeList_StoreList_items_user_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeList_StoreList_items_user {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: storeList_StoreList_items_user_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: storeList_StoreList_items_user_zoneinfo;
  smsKey: string | null;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeList_StoreList_items_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: storeList_StoreList_items_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface storeList_StoreList_items_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: storeList_StoreList_items_products_dailySchedulePolicy_SUN | null;
  MON: storeList_StoreList_items_products_dailySchedulePolicy_MON | null;
  TUE: storeList_StoreList_items_products_dailySchedulePolicy_TUE | null;
  WED: storeList_StoreList_items_products_dailySchedulePolicy_WED | null;
  THU: storeList_StoreList_items_products_dailySchedulePolicy_THU | null;
  FRI: storeList_StoreList_items_products_dailySchedulePolicy_FRI | null;
  SAT: storeList_StoreList_items_products_dailySchedulePolicy_SAT | null;
}

export interface storeList_StoreList_items_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeList_StoreList_items_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeList_StoreList_items_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeList_StoreList_items_products_images_tags[];
  owner: storeList_StoreList_items_products_images_owner;
}

export interface storeList_StoreList_items_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeList_StoreList_items_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface storeList_StoreList_items_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeList_StoreList_items_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface storeList_StoreList_items_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: storeList_StoreList_items_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: storeList_StoreList_items_products_productGroup_list[];
}

export interface storeList_StoreList_items_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: storeList_StoreList_items_products_dailySchedulePolicy;
  images: storeList_StoreList_items_products_images[] | null;
  user: storeList_StoreList_items_products_user;
  store: storeList_StoreList_items_products_store;
  productGroup: storeList_StoreList_items_products_productGroup | null;
}

export interface storeList_StoreList_items_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeList_StoreList_items_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeList_StoreList_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeList_StoreList_items_images_tags[];
  owner: storeList_StoreList_items_images_owner;
}

export interface storeList_StoreList_items {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: storeList_StoreList_items_zoneinfo;
  code: string;
  description: string | null;
  user: storeList_StoreList_items_user;
  products: storeList_StoreList_items_products[];
  images: storeList_StoreList_items_images[] | null;
}

export interface storeList_StoreList {
  __typename: "OffsetPagenatedStoreData";
  pageInfo: storeList_StoreList_pageInfo;
  items: storeList_StoreList_items[];
}

export interface storeList {
  StoreList: storeList_StoreList;
}

export interface storeListVariables {
  sort?: _StoreSort[] | null;
  filter?: _StoreFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_Me_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface me_Me_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface me_Me_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: me_Me_data_profileImage_tags[];
  owner: me_Me_data_profileImage_owner;
}

export interface me_Me_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface me_Me_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: me_Me_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: me_Me_data_zoneinfo;
  smsKey: string | null;
}

export interface me_Me {
  __typename: "MeResponse";
  ok: boolean;
  error: me_Me_error | null;
  data: me_Me_data | null;
}

export interface me {
  Me: me_Me;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: getprofile
// ====================================================

export interface getprofile_GetProfile_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface getprofile_GetProfile_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface getprofile_GetProfile_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface getprofile_GetProfile_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: getprofile_GetProfile_data_profileImage_tags[];
  owner: getprofile_GetProfile_data_profileImage_owner;
}

export interface getprofile_GetProfile_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface getprofile_GetProfile_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: getprofile_GetProfile_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: getprofile_GetProfile_data_zoneinfo;
  smsKey: string | null;
}

export interface getprofile_GetProfile {
  __typename: "MeResponse";
  ok: boolean;
  error: getprofile_GetProfile_error | null;
  data: getprofile_GetProfile_data | null;
}

export interface getprofile {
  GetProfile: getprofile_GetProfile;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: users
// ====================================================

export interface users_users_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageNumber: number;
  /**
   * 페이지당 기준 데이터 수
   */
  pageItemCount: number;
  /**
   * 현재 페이지에서 출력한 데이터 수
   */
  currentItemCount: number;
  /**
   * 전체 페이지 수
   */
  totalPageCount: number;
}

export interface users_users_items_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface users_users_items_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface users_users_items_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: users_users_items_profileImage_tags[];
  owner: users_users_items_profileImage_owner;
}

export interface users_users_items_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface users_users_items {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: users_users_items_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: users_users_items_zoneinfo;
  smsKey: string | null;
}

export interface users_users {
  __typename: "OffsetPagenatedUserData";
  pageInfo: users_users_pageInfo;
  items: users_users_items[];
}

export interface users {
  users: users_users;
}

export interface usersVariables {
  pageInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: fileUploads
// ====================================================

export interface fileUploads_FileUploads_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface fileUploads_FileUploads_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface fileUploads_FileUploads_data_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface fileUploads_FileUploads_data {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: fileUploads_FileUploads_data_tags[];
  owner: fileUploads_FileUploads_data_owner;
}

export interface fileUploads_FileUploads {
  __typename: "FileUploadsResponse";
  ok: boolean;
  error: fileUploads_FileUploads_error | null;
  data: fileUploads_FileUploads_data[];
}

export interface fileUploads {
  FileUploads: fileUploads_FileUploads;
}

export interface fileUploadsVariables {
  files: FileInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productCreate
// ====================================================

export interface productCreate_ProductCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: productCreate_ProductCreate_data_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface productCreate_ProductCreate_data_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: productCreate_ProductCreate_data_dailySchedulePolicy_SUN | null;
  MON: productCreate_ProductCreate_data_dailySchedulePolicy_MON | null;
  TUE: productCreate_ProductCreate_data_dailySchedulePolicy_TUE | null;
  WED: productCreate_ProductCreate_data_dailySchedulePolicy_WED | null;
  THU: productCreate_ProductCreate_data_dailySchedulePolicy_THU | null;
  FRI: productCreate_ProductCreate_data_dailySchedulePolicy_FRI | null;
  SAT: productCreate_ProductCreate_data_dailySchedulePolicy_SAT | null;
}

export interface productCreate_ProductCreate_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productCreate_ProductCreate_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productCreate_ProductCreate_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productCreate_ProductCreate_data_images_tags[];
  owner: productCreate_ProductCreate_data_images_owner;
}

export interface productCreate_ProductCreate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productCreate_ProductCreate_data_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface productCreate_ProductCreate_data_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productCreate_ProductCreate_data_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productCreate_ProductCreate_data_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: productCreate_ProductCreate_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: productCreate_ProductCreate_data_productGroup_list[];
}

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: productCreate_ProductCreate_data_dailySchedulePolicy;
  images: productCreate_ProductCreate_data_images[] | null;
  user: productCreate_ProductCreate_data_user;
  store: productCreate_ProductCreate_data_store;
  productGroup: productCreate_ProductCreate_data_productGroup | null;
}

export interface productCreate_ProductCreate {
  __typename: "ProductCreateResponse";
  ok: boolean;
  error: productCreate_ProductCreate_error | null;
  data: productCreate_ProductCreate_data | null;
}

export interface productCreate {
  ProductCreate: productCreate_ProductCreate;
}

export interface productCreateVariables {
  input: ProductCreateInput;
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productDelete
// ====================================================

export interface productDelete_ProductDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: productDelete_ProductDelete_data_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface productDelete_ProductDelete_data_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: productDelete_ProductDelete_data_dailySchedulePolicy_SUN | null;
  MON: productDelete_ProductDelete_data_dailySchedulePolicy_MON | null;
  TUE: productDelete_ProductDelete_data_dailySchedulePolicy_TUE | null;
  WED: productDelete_ProductDelete_data_dailySchedulePolicy_WED | null;
  THU: productDelete_ProductDelete_data_dailySchedulePolicy_THU | null;
  FRI: productDelete_ProductDelete_data_dailySchedulePolicy_FRI | null;
  SAT: productDelete_ProductDelete_data_dailySchedulePolicy_SAT | null;
}

export interface productDelete_ProductDelete_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productDelete_ProductDelete_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDelete_ProductDelete_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productDelete_ProductDelete_data_images_tags[];
  owner: productDelete_ProductDelete_data_images_owner;
}

export interface productDelete_ProductDelete_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDelete_ProductDelete_data_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface productDelete_ProductDelete_data_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDelete_ProductDelete_data_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productDelete_ProductDelete_data_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: productDelete_ProductDelete_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: productDelete_ProductDelete_data_productGroup_list[];
}

export interface productDelete_ProductDelete_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: productDelete_ProductDelete_data_dailySchedulePolicy;
  images: productDelete_ProductDelete_data_images[] | null;
  user: productDelete_ProductDelete_data_user;
  store: productDelete_ProductDelete_data_store;
  productGroup: productDelete_ProductDelete_data_productGroup | null;
}

export interface productDelete_ProductDelete {
  __typename: "ProductDeleteResponse";
  ok: boolean;
  error: productDelete_ProductDelete_error | null;
  data: productDelete_ProductDelete_data | null;
}

export interface productDelete {
  ProductDelete: productDelete_ProductDelete;
}

export interface productDeleteVariables {
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productUpdate
// ====================================================

export interface productUpdate_ProductUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: productUpdate_ProductUpdate_data_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface productUpdate_ProductUpdate_data_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: productUpdate_ProductUpdate_data_dailySchedulePolicy_SUN | null;
  MON: productUpdate_ProductUpdate_data_dailySchedulePolicy_MON | null;
  TUE: productUpdate_ProductUpdate_data_dailySchedulePolicy_TUE | null;
  WED: productUpdate_ProductUpdate_data_dailySchedulePolicy_WED | null;
  THU: productUpdate_ProductUpdate_data_dailySchedulePolicy_THU | null;
  FRI: productUpdate_ProductUpdate_data_dailySchedulePolicy_FRI | null;
  SAT: productUpdate_ProductUpdate_data_dailySchedulePolicy_SAT | null;
}

export interface productUpdate_ProductUpdate_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productUpdate_ProductUpdate_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productUpdate_ProductUpdate_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: productUpdate_ProductUpdate_data_images_tags[];
  owner: productUpdate_ProductUpdate_data_images_owner;
}

export interface productUpdate_ProductUpdate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productUpdate_ProductUpdate_data_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface productUpdate_ProductUpdate_data_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productUpdate_ProductUpdate_data_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productUpdate_ProductUpdate_data_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: productUpdate_ProductUpdate_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: productUpdate_ProductUpdate_data_productGroup_list[];
}

export interface productUpdate_ProductUpdate_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: productUpdate_ProductUpdate_data_dailySchedulePolicy;
  images: productUpdate_ProductUpdate_data_images[] | null;
  user: productUpdate_ProductUpdate_data_user;
  store: productUpdate_ProductUpdate_data_store;
  productGroup: productUpdate_ProductUpdate_data_productGroup | null;
}

export interface productUpdate_ProductUpdate {
  __typename: "ProductUpdateResponse";
  ok: boolean;
  error: productUpdate_ProductUpdate_error | null;
  data: productUpdate_ProductUpdate_data | null;
}

export interface productUpdate {
  ProductUpdate: productUpdate_ProductUpdate;
}

export interface productUpdateVariables {
  input: ProductUpdateInput;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeCreate
// ====================================================

export interface storeCreate_StoreCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeCreate_StoreCreate_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeCreate_StoreCreate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: storeCreate_StoreCreate_data_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface storeCreate_StoreCreate_data_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: storeCreate_StoreCreate_data_products_dailySchedulePolicy_SUN | null;
  MON: storeCreate_StoreCreate_data_products_dailySchedulePolicy_MON | null;
  TUE: storeCreate_StoreCreate_data_products_dailySchedulePolicy_TUE | null;
  WED: storeCreate_StoreCreate_data_products_dailySchedulePolicy_WED | null;
  THU: storeCreate_StoreCreate_data_products_dailySchedulePolicy_THU | null;
  FRI: storeCreate_StoreCreate_data_products_dailySchedulePolicy_FRI | null;
  SAT: storeCreate_StoreCreate_data_products_dailySchedulePolicy_SAT | null;
}

export interface storeCreate_StoreCreate_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeCreate_StoreCreate_data_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeCreate_StoreCreate_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeCreate_StoreCreate_data_products_images_tags[];
  owner: storeCreate_StoreCreate_data_products_images_owner;
}

export interface storeCreate_StoreCreate_data_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeCreate_StoreCreate_data_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface storeCreate_StoreCreate_data_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeCreate_StoreCreate_data_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface storeCreate_StoreCreate_data_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: storeCreate_StoreCreate_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: storeCreate_StoreCreate_data_products_productGroup_list[];
}

export interface storeCreate_StoreCreate_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: storeCreate_StoreCreate_data_products_dailySchedulePolicy;
  images: storeCreate_StoreCreate_data_products_images[] | null;
  user: storeCreate_StoreCreate_data_products_user;
  store: storeCreate_StoreCreate_data_products_store;
  productGroup: storeCreate_StoreCreate_data_products_productGroup | null;
}

export interface storeCreate_StoreCreate_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeCreate_StoreCreate_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeCreate_StoreCreate_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeCreate_StoreCreate_data_images_tags[];
  owner: storeCreate_StoreCreate_data_images_owner;
}

export interface storeCreate_StoreCreate_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: storeCreate_StoreCreate_data_zoneinfo;
  code: string;
  description: string | null;
  user: storeCreate_StoreCreate_data_user;
  products: storeCreate_StoreCreate_data_products[];
  images: storeCreate_StoreCreate_data_images[] | null;
}

export interface storeCreate_StoreCreate {
  __typename: "StoreCreateResponse";
  ok: boolean;
  error: storeCreate_StoreCreate_error | null;
  data: storeCreate_StoreCreate_data | null;
}

export interface storeCreate {
  StoreCreate: storeCreate_StoreCreate;
}

export interface storeCreateVariables {
  name: string;
  description?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeDelete
// ====================================================

export interface storeDelete_StoreDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeDelete_StoreDelete_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeDelete_StoreDelete_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: storeDelete_StoreDelete_data_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface storeDelete_StoreDelete_data_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: storeDelete_StoreDelete_data_products_dailySchedulePolicy_SUN | null;
  MON: storeDelete_StoreDelete_data_products_dailySchedulePolicy_MON | null;
  TUE: storeDelete_StoreDelete_data_products_dailySchedulePolicy_TUE | null;
  WED: storeDelete_StoreDelete_data_products_dailySchedulePolicy_WED | null;
  THU: storeDelete_StoreDelete_data_products_dailySchedulePolicy_THU | null;
  FRI: storeDelete_StoreDelete_data_products_dailySchedulePolicy_FRI | null;
  SAT: storeDelete_StoreDelete_data_products_dailySchedulePolicy_SAT | null;
}

export interface storeDelete_StoreDelete_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeDelete_StoreDelete_data_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeDelete_StoreDelete_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeDelete_StoreDelete_data_products_images_tags[];
  owner: storeDelete_StoreDelete_data_products_images_owner;
}

export interface storeDelete_StoreDelete_data_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeDelete_StoreDelete_data_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface storeDelete_StoreDelete_data_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeDelete_StoreDelete_data_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface storeDelete_StoreDelete_data_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: storeDelete_StoreDelete_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: storeDelete_StoreDelete_data_products_productGroup_list[];
}

export interface storeDelete_StoreDelete_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: storeDelete_StoreDelete_data_products_dailySchedulePolicy;
  images: storeDelete_StoreDelete_data_products_images[] | null;
  user: storeDelete_StoreDelete_data_products_user;
  store: storeDelete_StoreDelete_data_products_store;
  productGroup: storeDelete_StoreDelete_data_products_productGroup | null;
}

export interface storeDelete_StoreDelete_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeDelete_StoreDelete_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeDelete_StoreDelete_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeDelete_StoreDelete_data_images_tags[];
  owner: storeDelete_StoreDelete_data_images_owner;
}

export interface storeDelete_StoreDelete_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: storeDelete_StoreDelete_data_zoneinfo;
  code: string;
  description: string | null;
  user: storeDelete_StoreDelete_data_user;
  products: storeDelete_StoreDelete_data_products[];
  images: storeDelete_StoreDelete_data_images[] | null;
}

export interface storeDelete_StoreDelete {
  __typename: "StoreDeleteResponse";
  ok: boolean;
  error: storeDelete_StoreDelete_error | null;
  data: storeDelete_StoreDelete_data | null;
}

export interface storeDelete {
  StoreDelete: storeDelete_StoreDelete;
}

export interface storeDeleteVariables {
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeUpdate
// ====================================================

export interface storeUpdate_StoreUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeUpdate_StoreUpdate_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeUpdate_StoreUpdate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface storeUpdate_StoreUpdate_data_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SUN | null;
  MON: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_MON | null;
  TUE: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_TUE | null;
  WED: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_WED | null;
  THU: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_THU | null;
  FRI: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_FRI | null;
  SAT: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy_SAT | null;
}

export interface storeUpdate_StoreUpdate_data_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeUpdate_StoreUpdate_data_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeUpdate_StoreUpdate_data_products_images_tags[];
  owner: storeUpdate_StoreUpdate_data_products_images_owner;
}

export interface storeUpdate_StoreUpdate_data_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface storeUpdate_StoreUpdate_data_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: storeUpdate_StoreUpdate_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: storeUpdate_StoreUpdate_data_products_productGroup_list[];
}

export interface storeUpdate_StoreUpdate_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: storeUpdate_StoreUpdate_data_products_dailySchedulePolicy;
  images: storeUpdate_StoreUpdate_data_products_images[] | null;
  user: storeUpdate_StoreUpdate_data_products_user;
  store: storeUpdate_StoreUpdate_data_products_store;
  productGroup: storeUpdate_StoreUpdate_data_products_productGroup | null;
}

export interface storeUpdate_StoreUpdate_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeUpdate_StoreUpdate_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUpdate_StoreUpdate_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: storeUpdate_StoreUpdate_data_images_tags[];
  owner: storeUpdate_StoreUpdate_data_images_owner;
}

export interface storeUpdate_StoreUpdate_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: storeUpdate_StoreUpdate_data_zoneinfo;
  code: string;
  description: string | null;
  user: storeUpdate_StoreUpdate_data_user;
  products: storeUpdate_StoreUpdate_data_products[];
  images: storeUpdate_StoreUpdate_data_images[] | null;
}

export interface storeUpdate_StoreUpdate {
  __typename: "StoreUpdateResponse";
  ok: boolean;
  error: storeUpdate_StoreUpdate_error | null;
  data: storeUpdate_StoreUpdate_data | null;
}

export interface storeUpdate {
  StoreUpdate: storeUpdate_StoreUpdate;
}

export interface storeUpdateVariables {
  input: StoreUpdateInput;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signIn
// ====================================================

export interface signIn_SignIn_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signIn_SignIn_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface signIn_SignIn_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface signIn_SignIn_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: signIn_SignIn_data_profileImage_tags[];
  owner: signIn_SignIn_data_profileImage_owner;
}

export interface signIn_SignIn_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface signIn_SignIn_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: signIn_SignIn_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: signIn_SignIn_data_zoneinfo;
  smsKey: string | null;
}

export interface signIn_SignIn {
  __typename: "SignInResponse";
  ok: boolean;
  error: signIn_SignIn_error | null;
  data: signIn_SignIn_data | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  email: string;
  password: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signOut
// ====================================================

export interface signOut_SignOut_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signOut_SignOut {
  __typename: "Response";
  ok: boolean;
  error: signOut_SignOut_error | null;
}

export interface signOut {
  SignOut: signOut_SignOut;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: signUp
// ====================================================

export interface signUp_SignUp_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface signUp_SignUp_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface signUp_SignUp_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface signUp_SignUp_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: signUp_SignUp_data_profileImage_tags[];
  owner: signUp_SignUp_data_profileImage_owner;
}

export interface signUp_SignUp_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface signUp_SignUp_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: signUp_SignUp_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: signUp_SignUp_data_zoneinfo;
  smsKey: string | null;
}

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: signUp_SignUp_error | null;
  data: signUp_SignUp_data | null;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  company?: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationStart
// ====================================================

export interface verificationStart_VerificationStart_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface verificationStart_VerificationStart_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeGroupCode: string;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationProcessResponse";
  ok: boolean;
  error: verificationStart_VerificationStart_error | null;
  data: verificationStart_VerificationStart_data | null;
}

export interface verificationStart {
  VerificationStart: verificationStart_VerificationStart;
}

export interface verificationStartVariables {
  target: VerificationTarget;
  payload: string;
  event: VerificationEvent;
  storeGroupId?: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: verificationComplete
// ====================================================

export interface verificationComplete_VerificationComplete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface verificationComplete_VerificationComplete_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeGroupCode: string;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationComplete_VerificationComplete {
  __typename: "VerificationProcessResponse";
  ok: boolean;
  error: verificationComplete_VerificationComplete_error | null;
  data: verificationComplete_VerificationComplete_data | null;
}

export interface verificationComplete {
  VerificationComplete: verificationComplete_VerificationComplete;
}

export interface verificationCompleteVariables {
  verificationId: any;
  target: VerificationTarget;
  code: string;
  payload: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FuserError
// ====================================================

export interface FuserError {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcollectionDataInterface
// ====================================================

export interface FcollectionDataInterface {
  __typename: "File" | "User" | "Verification" | "ProductGroup" | "Product" | "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FscheduleGenerator
// ====================================================

export interface FscheduleGenerator {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FscheduleGeneratorGroup
// ====================================================

export interface FscheduleGeneratorGroup_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FscheduleGeneratorGroup {
  __typename: "ScheduleGeneratorGroup";
  policies: FscheduleGeneratorGroup_policies[];
  from: number;
  to: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FdailySchedulePolicies
// ====================================================

export interface FdailySchedulePolicies_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_SUN_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_MON_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_TUE_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_WED_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_THU_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_FRI_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface FdailySchedulePolicies_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: FdailySchedulePolicies_SAT_policies[];
  from: number;
  to: number;
}

export interface FdailySchedulePolicies {
  __typename: "DailySchedulePolicies";
  SUN: FdailySchedulePolicies_SUN | null;
  MON: FdailySchedulePolicies_MON | null;
  TUE: FdailySchedulePolicies_TUE | null;
  WED: FdailySchedulePolicies_WED | null;
  THU: FdailySchedulePolicies_THU | null;
  FRI: FdailySchedulePolicies_FRI | null;
  SAT: FdailySchedulePolicies_SAT | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FzoneInfo
// ====================================================

export interface FzoneInfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ftag
// ====================================================

export interface Ftag {
  __typename: "Tag";
  key: string;
  value: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ffile_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Ffile {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Ffile_tags[];
  owner: Ffile_owner;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fuser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fuser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Fuser_profileImage_tags[];
  owner: Fuser_profileImage_owner;
}

export interface Fuser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fuser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  email: string;
  phoneNumber: string;
  profileImage: Fuser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: Fuser_zoneinfo;
  smsKey: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductGroup
// ====================================================

export interface FproductGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface FproductGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface FproductGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: FproductGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: FproductGroup_list[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fproduct_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: Fproduct_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface Fproduct_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: Fproduct_dailySchedulePolicy_SUN | null;
  MON: Fproduct_dailySchedulePolicy_MON | null;
  TUE: Fproduct_dailySchedulePolicy_TUE | null;
  WED: Fproduct_dailySchedulePolicy_WED | null;
  THU: Fproduct_dailySchedulePolicy_THU | null;
  FRI: Fproduct_dailySchedulePolicy_FRI | null;
  SAT: Fproduct_dailySchedulePolicy_SAT | null;
}

export interface Fproduct_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fproduct_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Fproduct_images_tags[];
  owner: Fproduct_images_owner;
}

export interface Fproduct_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fproduct_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface Fproduct_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fproduct_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface Fproduct_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: Fproduct_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: Fproduct_productGroup_list[];
}

export interface Fproduct {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: Fproduct_dailySchedulePolicy;
  images: Fproduct_images[] | null;
  user: Fproduct_user;
  store: Fproduct_store;
  productGroup: Fproduct_productGroup | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fstore
// ====================================================

export interface Fstore_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fstore_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fstore_products_dailySchedulePolicy_SUN_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_SUN {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_SUN_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_MON_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_MON {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_MON_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_TUE_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_TUE {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_TUE_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_WED_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_WED {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_WED_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_THU_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_THU {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_THU_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_FRI_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_FRI {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_FRI_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy_SAT_policies {
  __typename: "ScheduleGenerator";
  from: number;
  to: number;
  segmentLength: number;
  segmentCount: number;
  segmentBlockedIndexes: number[];
}

export interface Fstore_products_dailySchedulePolicy_SAT {
  __typename: "ScheduleGeneratorGroup";
  policies: Fstore_products_dailySchedulePolicy_SAT_policies[];
  from: number;
  to: number;
}

export interface Fstore_products_dailySchedulePolicy {
  __typename: "DailySchedulePolicies";
  SUN: Fstore_products_dailySchedulePolicy_SUN | null;
  MON: Fstore_products_dailySchedulePolicy_MON | null;
  TUE: Fstore_products_dailySchedulePolicy_TUE | null;
  WED: Fstore_products_dailySchedulePolicy_WED | null;
  THU: Fstore_products_dailySchedulePolicy_THU | null;
  FRI: Fstore_products_dailySchedulePolicy_FRI | null;
  SAT: Fstore_products_dailySchedulePolicy_SAT | null;
}

export interface Fstore_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fstore_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fstore_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Fstore_products_images_tags[];
  owner: Fstore_products_images_owner;
}

export interface Fstore_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fstore_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
}

export interface Fstore_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fstore_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface Fstore_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  user: Fstore_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  list: Fstore_products_productGroup_list[];
}

export interface Fstore_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
  dailySchedulePolicy: Fstore_products_dailySchedulePolicy;
  images: Fstore_products_images[] | null;
  user: Fstore_products_user;
  store: Fstore_products_store;
  productGroup: Fstore_products_productGroup | null;
}

export interface Fstore_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fstore_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fstore_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  description: string | null;
  extension: string;
  fileType: string;
  uri: string;
  tags: Fstore_images_tags[];
  owner: Fstore_images_owner;
}

export interface Fstore {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  name: string;
  zoneinfo: Fstore_zoneinfo;
  code: string;
  description: string | null;
  user: Fstore_user;
  products: Fstore_products[];
  images: Fstore_images[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fverification
// ====================================================

export interface Fverification {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any;
  isDeleted: boolean | null;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeGroupCode: string;
  expiresAt: any;
  isExpire: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 그룹 타입
 */
export enum GroupType {
  PRODUCT_GROUP = "PRODUCT_GROUP",
  STORE_GROUP = "STORE_GROUP",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  ANONYMOUS = "ANONYMOUS",
  BUYER = "BUYER",
  SELLER = "SELLER",
  STORE_USER = "STORE_USER",
  SUPERADMIN = "SUPERADMIN",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  UserFindEmail = "UserFindEmail",
  UserFindPassword = "UserFindPassword",
  UserUpdateInfo = "UserUpdateInfo",
  UserVerifyEmail = "UserVerifyEmail",
  UserVerifyPhone = "UserVerifyPhone",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationTarget {
  EMAIL = "EMAIL",
  PHONE = "PHONE",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  capacity_asc = "capacity_asc",
  capacity_desc = "capacity_desc",
  maxSelectPinCount_asc = "maxSelectPinCount_asc",
  maxSelectPinCount_desc = "maxSelectPinCount_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  subtitle_asc = "subtitle_asc",
  subtitle_desc = "subtitle_desc",
}

/**
 * Auto generated sort type
 */
export enum _StoreSort {
  name_asc = "name_asc",
  name_desc = "name_desc",
}

/**
 * File upload to s3
 */
export interface FileInput {
  upload: any;
  tags?: GqlTagInput[] | null;
}

export interface GqlTagInput {
  key: string;
  value: string;
}

export interface OffsetPagingInput {
  pageNumber: number;
  pageItemCount: number;
}

export interface ProductCreateInput {
  name: string;
  description: string;
  subtitle?: string | null;
  price: number;
  capacity: number;
  maxSelectPinCount: number;
}

export interface ProductUpdateInput {
  name?: string | null;
  description?: string | null;
  subtitle?: string | null;
  maxSelectPinCount?: number | null;
}

export interface StoreUpdateInput {
  name?: string | null;
  description?: string | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  OR?: _ProductFilter[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  subtitle_eq?: string | null;
  subtitle_not_eq?: string | null;
  subtitle_contains?: string | null;
  subtitle_not_contains?: string | null;
  subtitle_in?: string[] | null;
  subtitle_not_in?: string[] | null;
}

export interface _StoreFilter {
  AND?: _StoreFilter[] | null;
  OR?: _StoreFilter[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
