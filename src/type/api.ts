/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itemCreate
// ====================================================

export interface itemCreate_ItemCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface itemCreate_ItemCreate_data_pay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
}

export interface itemCreate_ItemCreate_data_product_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemCreate_ItemCreate_data_product_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemCreate_ItemCreate_data_product_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemCreate_ItemCreate_data_product_images_tags[];
  owner: itemCreate_ItemCreate_data_product_images_owner;
}

export interface itemCreate_ItemCreate_data_product_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemCreate_ItemCreate_data_product_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface itemCreate_ItemCreate_data_product_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemCreate_ItemCreate_data_product_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface itemCreate_ItemCreate_data_product_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: itemCreate_ItemCreate_data_product_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: itemCreate_ItemCreate_data_product_productGroup_list[];
}

export interface itemCreate_ItemCreate_data_product {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: itemCreate_ItemCreate_data_product_images[] | null;
  user: itemCreate_ItemCreate_data_product_user;
  store: itemCreate_ItemCreate_data_product_store;
  productGroup: itemCreate_ItemCreate_data_product_productGroup | null;
}

export interface itemCreate_ItemCreate_data_storeUser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemCreate_ItemCreate_data_storeUser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemCreate_ItemCreate_data_storeUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemCreate_ItemCreate_data_storeUser_profileImage_tags[];
  owner: itemCreate_ItemCreate_data_storeUser_profileImage_owner;
}

export interface itemCreate_ItemCreate_data_storeUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface itemCreate_ItemCreate_data_storeUser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: itemCreate_ItemCreate_data_storeUser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: itemCreate_ItemCreate_data_storeUser_zoneinfo;
  smsKey: string | null;
}

export interface itemCreate_ItemCreate_data {
  __typename: "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 회원 예약이라도 직접 입력 가능
   */
  phoneNumber: string | null;
  /**
   * 회원 예약이라도 직접 입력 가능.
   */
  name: string | null;
  /**
   * Email... 얘 존재하면 Notification 날려줘야됨 ㅎ
   */
  email: string | null;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  fromTm: any;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  toTm: any;
  /**
   * 예약한 Product 수
   */
  count: number;
  /**
   * 지불 금액 및 통화단위
   */
  pay: itemCreate_ItemCreate_data_pay | null;
  message: string | null;
  product: itemCreate_ItemCreate_data_product;
  storeUser: itemCreate_ItemCreate_data_storeUser;
}

export interface itemCreate_ItemCreate {
  __typename: "ItemCreateResponse";
  ok: boolean;
  error: itemCreate_ItemCreate_error | null;
  data: itemCreate_ItemCreate_data | null;
}

export interface itemCreate {
  ItemCreate: itemCreate_ItemCreate;
}

export interface itemCreateVariables {
  params: ItemCreateInput;
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itemDelete
// ====================================================

export interface itemDelete_ItemDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface itemDelete_ItemDelete_data_pay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
}

export interface itemDelete_ItemDelete_data_product_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemDelete_ItemDelete_data_product_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemDelete_ItemDelete_data_product_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemDelete_ItemDelete_data_product_images_tags[];
  owner: itemDelete_ItemDelete_data_product_images_owner;
}

export interface itemDelete_ItemDelete_data_product_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemDelete_ItemDelete_data_product_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface itemDelete_ItemDelete_data_product_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemDelete_ItemDelete_data_product_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface itemDelete_ItemDelete_data_product_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: itemDelete_ItemDelete_data_product_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: itemDelete_ItemDelete_data_product_productGroup_list[];
}

export interface itemDelete_ItemDelete_data_product {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: itemDelete_ItemDelete_data_product_images[] | null;
  user: itemDelete_ItemDelete_data_product_user;
  store: itemDelete_ItemDelete_data_product_store;
  productGroup: itemDelete_ItemDelete_data_product_productGroup | null;
}

export interface itemDelete_ItemDelete_data_storeUser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemDelete_ItemDelete_data_storeUser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemDelete_ItemDelete_data_storeUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemDelete_ItemDelete_data_storeUser_profileImage_tags[];
  owner: itemDelete_ItemDelete_data_storeUser_profileImage_owner;
}

export interface itemDelete_ItemDelete_data_storeUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface itemDelete_ItemDelete_data_storeUser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: itemDelete_ItemDelete_data_storeUser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: itemDelete_ItemDelete_data_storeUser_zoneinfo;
  smsKey: string | null;
}

export interface itemDelete_ItemDelete_data {
  __typename: "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 회원 예약이라도 직접 입력 가능
   */
  phoneNumber: string | null;
  /**
   * 회원 예약이라도 직접 입력 가능.
   */
  name: string | null;
  /**
   * Email... 얘 존재하면 Notification 날려줘야됨 ㅎ
   */
  email: string | null;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  fromTm: any;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  toTm: any;
  /**
   * 예약한 Product 수
   */
  count: number;
  /**
   * 지불 금액 및 통화단위
   */
  pay: itemDelete_ItemDelete_data_pay | null;
  message: string | null;
  product: itemDelete_ItemDelete_data_product;
  storeUser: itemDelete_ItemDelete_data_storeUser;
}

export interface itemDelete_ItemDelete {
  __typename: "ItemDeleteResponse";
  ok: boolean;
  error: itemDelete_ItemDelete_error | null;
  data: itemDelete_ItemDelete_data | null;
}

export interface itemDelete {
  ItemDelete: itemDelete_ItemDelete;
}

export interface itemDeleteVariables {
  itemId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeSignUp
// ====================================================

export interface storeSignUp_StoreSignUp_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeSignUp_StoreSignUp_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeSignUp_StoreSignUp_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeSignUp_StoreSignUp_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeSignUp_StoreSignUp_data_profileImage_tags[];
  owner: storeSignUp_StoreSignUp_data_profileImage_owner;
}

export interface storeSignUp_StoreSignUp_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeSignUp_StoreSignUp_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: storeSignUp_StoreSignUp_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: storeSignUp_StoreSignUp_data_zoneinfo;
  smsKey: string | null;
}

export interface storeSignUp_StoreSignUp {
  __typename: "StoreSignUpResponse";
  ok: boolean;
  error: storeSignUp_StoreSignUp_error | null;
  data: storeSignUp_StoreSignUp_data | null;
}

export interface storeSignUp {
  StoreSignUp: storeSignUp_StoreSignUp;
}

export interface storeSignUpVariables {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  company?: string | null;
  location: LocationInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itemUpdate
// ====================================================

export interface itemUpdate_ItemUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface itemUpdate_ItemUpdate_data_pay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
}

export interface itemUpdate_ItemUpdate_data_product_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemUpdate_ItemUpdate_data_product_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemUpdate_ItemUpdate_data_product_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemUpdate_ItemUpdate_data_product_images_tags[];
  owner: itemUpdate_ItemUpdate_data_product_images_owner;
}

export interface itemUpdate_ItemUpdate_data_product_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemUpdate_ItemUpdate_data_product_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface itemUpdate_ItemUpdate_data_product_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemUpdate_ItemUpdate_data_product_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface itemUpdate_ItemUpdate_data_product_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: itemUpdate_ItemUpdate_data_product_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: itemUpdate_ItemUpdate_data_product_productGroup_list[];
}

export interface itemUpdate_ItemUpdate_data_product {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: itemUpdate_ItemUpdate_data_product_images[] | null;
  user: itemUpdate_ItemUpdate_data_product_user;
  store: itemUpdate_ItemUpdate_data_product_store;
  productGroup: itemUpdate_ItemUpdate_data_product_productGroup | null;
}

export interface itemUpdate_ItemUpdate_data_storeUser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemUpdate_ItemUpdate_data_storeUser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemUpdate_ItemUpdate_data_storeUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemUpdate_ItemUpdate_data_storeUser_profileImage_tags[];
  owner: itemUpdate_ItemUpdate_data_storeUser_profileImage_owner;
}

export interface itemUpdate_ItemUpdate_data_storeUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface itemUpdate_ItemUpdate_data_storeUser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: itemUpdate_ItemUpdate_data_storeUser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: itemUpdate_ItemUpdate_data_storeUser_zoneinfo;
  smsKey: string | null;
}

export interface itemUpdate_ItemUpdate_data {
  __typename: "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 회원 예약이라도 직접 입력 가능
   */
  phoneNumber: string | null;
  /**
   * 회원 예약이라도 직접 입력 가능.
   */
  name: string | null;
  /**
   * Email... 얘 존재하면 Notification 날려줘야됨 ㅎ
   */
  email: string | null;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  fromTm: any;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  toTm: any;
  /**
   * 예약한 Product 수
   */
  count: number;
  /**
   * 지불 금액 및 통화단위
   */
  pay: itemUpdate_ItemUpdate_data_pay | null;
  message: string | null;
  product: itemUpdate_ItemUpdate_data_product;
  storeUser: itemUpdate_ItemUpdate_data_storeUser;
}

export interface itemUpdate_ItemUpdate {
  __typename: "ItemUpdateResponse";
  ok: boolean;
  error: itemUpdate_ItemUpdate_error | null;
  data: itemUpdate_ItemUpdate_data | null;
}

export interface itemUpdate {
  ItemUpdate: itemUpdate_ItemUpdate;
}

export interface itemUpdateVariables {
  input: ItemUpdateInput;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productTagsAdd
// ====================================================

export interface productTagsAdd_ProductTagsAdd_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productTagsAdd_ProductTagsAdd {
  __typename: "ProductResponse";
  ok: boolean;
  error: productTagsAdd_ProductTagsAdd_error | null;
}

export interface productTagsAdd {
  ProductTagsAdd: productTagsAdd_ProductTagsAdd;
}

export interface productTagsAddVariables {
  productId: any;
  tags: TagInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productTagsRemove
// ====================================================

export interface productTagsRemove_ProductTagsRemove_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productTagsRemove_ProductTagsRemove_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productTagsRemove_ProductTagsRemove_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productTagsRemove_ProductTagsRemove_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: productTagsRemove_ProductTagsRemove_data_images_tags[];
  owner: productTagsRemove_ProductTagsRemove_data_images_owner;
}

export interface productTagsRemove_ProductTagsRemove_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productTagsRemove_ProductTagsRemove_data_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface productTagsRemove_ProductTagsRemove_data_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productTagsRemove_ProductTagsRemove_data_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productTagsRemove_ProductTagsRemove_data_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productTagsRemove_ProductTagsRemove_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productTagsRemove_ProductTagsRemove_data_productGroup_list[];
}

export interface productTagsRemove_ProductTagsRemove_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: productTagsRemove_ProductTagsRemove_data_images[] | null;
  user: productTagsRemove_ProductTagsRemove_data_user;
  store: productTagsRemove_ProductTagsRemove_data_store;
  productGroup: productTagsRemove_ProductTagsRemove_data_productGroup | null;
}

export interface productTagsRemove_ProductTagsRemove {
  __typename: "ProductResponse";
  ok: boolean;
  error: productTagsRemove_ProductTagsRemove_error | null;
  data: productTagsRemove_ProductTagsRemove_data | null;
}

export interface productTagsRemove {
  ProductTagsRemove: productTagsRemove_ProductTagsRemove;
}

export interface productTagsRemoveVariables {
  keys: string[];
  productId: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
// GraphQL mutation operation: productDailySchedulerAdd
// ====================================================

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: productDailySchedulerAdd_ProductDailySchedulerAdd_data_images_tags[];
  owner: productDailySchedulerAdd_ProductDailySchedulerAdd_data_images_owner;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup_list[];
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: productDailySchedulerAdd_ProductDailySchedulerAdd_data_images[] | null;
  user: productDailySchedulerAdd_ProductDailySchedulerAdd_data_user;
  store: productDailySchedulerAdd_ProductDailySchedulerAdd_data_store;
  productGroup: productDailySchedulerAdd_ProductDailySchedulerAdd_data_productGroup | null;
}

export interface productDailySchedulerAdd_ProductDailySchedulerAdd {
  __typename: "ProductDailySchedulerAddResponse";
  ok: boolean;
  error: productDailySchedulerAdd_ProductDailySchedulerAdd_error | null;
  data: productDailySchedulerAdd_ProductDailySchedulerAdd_data | null;
}

export interface productDailySchedulerAdd {
  ProductDailySchedulerAdd: productDailySchedulerAdd_ProductDailySchedulerAdd;
}

export interface productDailySchedulerAddVariables {
  productId: any;
  dailySchedulers: DailySchedulerInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productGroupCreate
// ====================================================

export interface productGroupCreate_ProductGroupCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productGroupCreate_ProductGroupCreate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupCreate_ProductGroupCreate_data_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productGroupCreate_ProductGroupCreate_data {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productGroupCreate_ProductGroupCreate_data_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productGroupCreate_ProductGroupCreate_data_list[];
}

export interface productGroupCreate_ProductGroupCreate {
  __typename: "ProductGroupCreateResponse";
  ok: boolean;
  error: productGroupCreate_ProductGroupCreate_error | null;
  data: productGroupCreate_ProductGroupCreate_data | null;
}

export interface productGroupCreate {
  ProductGroupCreate: productGroupCreate_ProductGroupCreate;
}

export interface productGroupCreateVariables {
  params: ProductGroupCreateInput;
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productGroupDelete
// ====================================================

export interface productGroupDelete_ProductGroupDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productGroupDelete_ProductGroupDelete {
  __typename: "ProductGroupDeleteResponse";
  ok: boolean;
  error: productGroupDelete_ProductGroupDelete_error | null;
}

export interface productGroupDelete {
  ProductGroupDelete: productGroupDelete_ProductGroupDelete;
}

export interface productGroupDeleteVariables {
  productGroupId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productGroupUpdate
// ====================================================

export interface productGroupUpdate_ProductGroupUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productGroupUpdate_ProductGroupUpdate_data_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupUpdate_ProductGroupUpdate_data_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productGroupUpdate_ProductGroupUpdate_data {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productGroupUpdate_ProductGroupUpdate_data_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productGroupUpdate_ProductGroupUpdate_data_list[];
}

export interface productGroupUpdate_ProductGroupUpdate {
  __typename: "ProductGroupUpdateResponse";
  ok: boolean;
  error: productGroupUpdate_ProductGroupUpdate_error | null;
  data: productGroupUpdate_ProductGroupUpdate_data | null;
}

export interface productGroupUpdate {
  ProductGroupUpdate: productGroupUpdate_ProductGroupUpdate;
}

export interface productGroupUpdateVariables {
  params: ProductGroupUpdateInput;
  productGroupId: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: productCreate_ProductCreate_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productCreate_ProductCreate_data_productGroup_list[];
}

export interface productCreate_ProductCreate_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  params: ProductCreateInput;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: productDelete_ProductDelete_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productDelete_ProductDelete_data_productGroup_list[];
}

export interface productDelete_ProductDelete_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: productUpdate_ProductUpdate_data_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productUpdate_ProductUpdate_data_productGroup_list[];
}

export interface productUpdate_ProductUpdate_data {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  params: ProductUpdateInput;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: storeCreate_StoreCreate_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: storeCreate_StoreCreate_data_products_productGroup_list[];
}

export interface storeCreate_StoreCreate_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeCreate_StoreCreate_data_images_tags[];
  owner: storeCreate_StoreCreate_data_images_owner;
}

export interface storeCreate_StoreCreate_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
// GraphQL mutation operation: storeImageAdd
// ====================================================

export interface storeImageAdd_StoreImageAdd_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeImageAdd_StoreImageAdd {
  __typename: "StoreResponse";
  ok: boolean;
  error: storeImageAdd_StoreImageAdd_error | null;
}

export interface storeImageAdd {
  StoreImageAdd: storeImageAdd_StoreImageAdd;
}

export interface storeImageAddVariables {
  images: any[];
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeSignIn
// ====================================================

export interface storeSignIn_StoreSignIn_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeSignIn_StoreSignIn {
  __typename: "StoreSignInResponse";
  ok: boolean;
  error: storeSignIn_StoreSignIn_error | null;
}

export interface storeSignIn {
  StoreSignIn: storeSignIn_StoreSignIn;
}

export interface storeSignInVariables {
  email: string;
  password: string;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: storeDelete_StoreDelete_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: storeDelete_StoreDelete_data_products_productGroup_list[];
}

export interface storeDelete_StoreDelete_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeDelete_StoreDelete_data_images_tags[];
  owner: storeDelete_StoreDelete_data_images_owner;
}

export interface storeDelete_StoreDelete_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: storeUpdate_StoreUpdate_data_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: storeUpdate_StoreUpdate_data_products_productGroup_list[];
}

export interface storeUpdate_StoreUpdate_data_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeUpdate_StoreUpdate_data_images_tags[];
  owner: storeUpdate_StoreUpdate_data_images_owner;
}

export interface storeUpdate_StoreUpdate_data {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
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
  location: LocationInput;
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
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeCode: string;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationStart_VerificationStart {
  __typename: "VerificationResponse";
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
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeCode: string;
  expiresAt: any;
  isExpire: boolean;
}

export interface verificationComplete_VerificationComplete {
  __typename: "VerificationResponse";
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
// GraphQL query operation: fileList
// ====================================================

export interface fileList_FileList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
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

export interface fileList_FileList_items_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface fileList_FileList_items_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface fileList_FileList_items {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: fileList_FileList_items_tags[];
  owner: fileList_FileList_items_owner;
}

export interface fileList_FileList {
  __typename: "OffsetPagenatedFileData";
  pageInfo: fileList_FileList_pageInfo;
  items: fileList_FileList_items[];
}

export interface fileList {
  FileList: fileList_FileList;
}

export interface fileListVariables {
  sort?: _FileSort[] | null;
  filter?: _FileFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: itemList
// ====================================================

export interface itemList_ItemList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
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

export interface itemList_ItemList_items_pay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
}

export interface itemList_ItemList_items_product_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemList_ItemList_items_product_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemList_ItemList_items_product_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemList_ItemList_items_product_images_tags[];
  owner: itemList_ItemList_items_product_images_owner;
}

export interface itemList_ItemList_items_product_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemList_ItemList_items_product_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface itemList_ItemList_items_product_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemList_ItemList_items_product_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface itemList_ItemList_items_product_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: itemList_ItemList_items_product_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: itemList_ItemList_items_product_productGroup_list[];
}

export interface itemList_ItemList_items_product {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: itemList_ItemList_items_product_images[] | null;
  user: itemList_ItemList_items_product_user;
  store: itemList_ItemList_items_product_store;
  productGroup: itemList_ItemList_items_product_productGroup | null;
}

export interface itemList_ItemList_items_storeUser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemList_ItemList_items_storeUser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface itemList_ItemList_items_storeUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: itemList_ItemList_items_storeUser_profileImage_tags[];
  owner: itemList_ItemList_items_storeUser_profileImage_owner;
}

export interface itemList_ItemList_items_storeUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface itemList_ItemList_items_storeUser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: itemList_ItemList_items_storeUser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: itemList_ItemList_items_storeUser_zoneinfo;
  smsKey: string | null;
}

export interface itemList_ItemList_items {
  __typename: "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 회원 예약이라도 직접 입력 가능
   */
  phoneNumber: string | null;
  /**
   * 회원 예약이라도 직접 입력 가능.
   */
  name: string | null;
  /**
   * Email... 얘 존재하면 Notification 날려줘야됨 ㅎ
   */
  email: string | null;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  fromTm: any;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  toTm: any;
  /**
   * 예약한 Product 수
   */
  count: number;
  /**
   * 지불 금액 및 통화단위
   */
  pay: itemList_ItemList_items_pay | null;
  message: string | null;
  product: itemList_ItemList_items_product;
  storeUser: itemList_ItemList_items_storeUser;
}

export interface itemList_ItemList {
  __typename: "OffsetPagenatedItemData";
  pageInfo: itemList_ItemList_pageInfo;
  items: itemList_ItemList_items[];
}

export interface itemList {
  ItemList: itemList_ItemList;
}

export interface itemListVariables {
  sort?: _ItemSort[] | null;
  filter?: _ItemFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: storeFindByCode
// ====================================================

export interface storeFindByCode_StoreFindByCode_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeFindByCode_StoreFindByCode_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_products_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeFindByCode_StoreFindByCode_products_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_products_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeFindByCode_StoreFindByCode_products_images_tags[];
  owner: storeFindByCode_StoreFindByCode_products_images_owner;
}

export interface storeFindByCode_StoreFindByCode_products_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_products_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_products_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_products_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface storeFindByCode_StoreFindByCode_products_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: storeFindByCode_StoreFindByCode_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: storeFindByCode_StoreFindByCode_products_productGroup_list[];
}

export interface storeFindByCode_StoreFindByCode_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: storeFindByCode_StoreFindByCode_products_images[] | null;
  user: storeFindByCode_StoreFindByCode_products_user;
  store: storeFindByCode_StoreFindByCode_products_store;
  productGroup: storeFindByCode_StoreFindByCode_products_productGroup | null;
}

export interface storeFindByCode_StoreFindByCode_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeFindByCode_StoreFindByCode_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeFindByCode_StoreFindByCode_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeFindByCode_StoreFindByCode_images_tags[];
  owner: storeFindByCode_StoreFindByCode_images_owner;
}

export interface storeFindByCode_StoreFindByCode {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  zoneinfo: storeFindByCode_StoreFindByCode_zoneinfo;
  code: string;
  description: string | null;
  user: storeFindByCode_StoreFindByCode_user;
  products: storeFindByCode_StoreFindByCode_products[];
  images: storeFindByCode_StoreFindByCode_images[] | null;
}

export interface storeFindByCode {
  StoreFindByCode: storeFindByCode_StoreFindByCode | null;
}

export interface storeFindByCodeVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: storeUserProfile
// ====================================================

export interface storeUserProfile_StoreUserProfile_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeUserProfile_StoreUserProfile_data_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeUserProfile_StoreUserProfile_data_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface storeUserProfile_StoreUserProfile_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeUserProfile_StoreUserProfile_data_profileImage_tags[];
  owner: storeUserProfile_StoreUserProfile_data_profileImage_owner;
}

export interface storeUserProfile_StoreUserProfile_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeUserProfile_StoreUserProfile_data {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: storeUserProfile_StoreUserProfile_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: storeUserProfile_StoreUserProfile_data_zoneinfo;
  smsKey: string | null;
}

export interface storeUserProfile_StoreUserProfile {
  __typename: "StoreUserProfileResponse";
  ok: boolean;
  error: storeUserProfile_StoreUserProfile_error | null;
  data: storeUserProfile_StoreUserProfile_data | null;
}

export interface storeUserProfile {
  StoreUserProfile: storeUserProfile_StoreUserProfile;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productGroupList
// ====================================================

export interface productGroupList_ProductGroupList_pageInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
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

export interface productGroupList_ProductGroupList_items_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupList_ProductGroupList_items_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productGroupList_ProductGroupList_items {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productGroupList_ProductGroupList_items_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productGroupList_ProductGroupList_items_list[];
}

export interface productGroupList_ProductGroupList {
  __typename: "OffsetPagenatedProductGroupData";
  pageInfo: productGroupList_ProductGroupList_pageInfo;
  items: productGroupList_ProductGroupList_items[];
}

export interface productGroupList {
  ProductGroupList: productGroupList_ProductGroupList;
}

export interface productGroupListVariables {
  sort?: _ProductGroupSort[] | null;
  filter: _ProductGroupFilter;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productGroupFindByCode
// ====================================================

export interface productGroupFindByCode_ProductGroupFindByCode_list_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: productGroupFindByCode_ProductGroupFindByCode_list_images_tags[];
  owner: productGroupFindByCode_ProductGroupFindByCode_list_images_owner;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface productGroupFindByCode_ProductGroupFindByCode_list_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: productGroupFindByCode_ProductGroupFindByCode_list_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productGroupFindByCode_ProductGroupFindByCode_list_productGroup_list[];
}

export interface productGroupFindByCode_ProductGroupFindByCode_list {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: productGroupFindByCode_ProductGroupFindByCode_list_images[] | null;
  user: productGroupFindByCode_ProductGroupFindByCode_list_user;
  store: productGroupFindByCode_ProductGroupFindByCode_list_store;
  productGroup: productGroupFindByCode_ProductGroupFindByCode_list_productGroup | null;
}

export interface productGroupFindByCode_ProductGroupFindByCode {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: productGroupFindByCode_ProductGroupFindByCode_list[];
}

export interface productGroupFindByCode {
  ProductGroupFindByCode: productGroupFindByCode_ProductGroupFindByCode | null;
}

export interface productGroupFindByCodeVariables {
  code: string;
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
  pageIndex: number;
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

export interface productList_ProductList_items_dailySchedulers_scheduler_timelinePolicies {
  __typename: "TimelinePolicy";
  /**
   * Segments의 시작 지점. MinuteOfDay로 표시.
   */
  from: number;
  /**
   * Segments의 끝 지점. MinuteOfDay로 표시
   */
  to: number;
  /**
   * Segment의 크기. Minute 으로 표현함. 항상 5의 배수다.
   */
  size: number;
  count: number;
  /**
   * Segments에서 예약이 불가능한 from의 배열
   */
  edges: number[];
}

export interface productList_ProductList_items_dailySchedulers_scheduler_priceSegmentTable {
  __typename: "PriceSegmentTable";
  price: number;
  currency: Currency | null;
}

export interface productList_ProductList_items_dailySchedulers_scheduler {
  __typename: "Scheduler";
  from: number;
  to: number;
  timelinePolicies: productList_ProductList_items_dailySchedulers_scheduler_timelinePolicies[];
  priceSegmentTable: productList_ProductList_items_dailySchedulers_scheduler_priceSegmentTable[];
  /**
   * 최대 수용 가능 인원 수
   */
  maxCapacity: number | null;
}

export interface productList_ProductList_items_dailySchedulers {
  __typename: "DailyScheduler";
  days: DayOfWeek[];
  scheduler: productList_ProductList_items_dailySchedulers_scheduler;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: productList_ProductList_items_images_tags[];
  owner: productList_ProductList_items_images_owner;
}

export interface productList_ProductList_items {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  dailySchedulers: productList_ProductList_items_dailySchedulers[];
  images: productList_ProductList_items_images[] | null;
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
  pageIndex: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: storeList_StoreList_items_user_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: storeList_StoreList_items_user_zoneinfo;
  smsKey: string | null;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: storeList_StoreList_items_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: storeList_StoreList_items_products_productGroup_list[];
}

export interface storeList_StoreList_items_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: storeList_StoreList_items_images_tags[];
  owner: storeList_StoreList_items_images_owner;
}

export interface storeList_StoreList_items {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
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
  pageIndex: number;
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

export interface users_users {
  __typename: "OffsetPagenatedUserData";
  pageInfo: users_users_pageInfo;
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
// GraphQL fragment: FoffsetPagingInfo
// ====================================================

export interface FoffsetPagingInfo {
  __typename: "OffsetPagingInfo";
  /**
   * 선택한 페이지 번호
   */
  pageIndex: number;
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

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FtimelinePolicy
// ====================================================

export interface FtimelinePolicy {
  __typename: "TimelinePolicy";
  /**
   * Segments의 시작 지점. MinuteOfDay로 표시.
   */
  from: number;
  /**
   * Segments의 끝 지점. MinuteOfDay로 표시
   */
  to: number;
  /**
   * Segment의 크기. Minute 으로 표현함. 항상 5의 배수다.
   */
  size: number;
  count: number;
  /**
   * Segments에서 예약이 불가능한 from의 배열
   */
  edges: number[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FpriceSegmentTable
// ====================================================

export interface FpriceSegmentTable {
  __typename: "PriceSegmentTable";
  price: number;
  currency: Currency | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fscheduler
// ====================================================

export interface Fscheduler_timelinePolicies {
  __typename: "TimelinePolicy";
  /**
   * Segments의 시작 지점. MinuteOfDay로 표시.
   */
  from: number;
  /**
   * Segments의 끝 지점. MinuteOfDay로 표시
   */
  to: number;
  /**
   * Segment의 크기. Minute 으로 표현함. 항상 5의 배수다.
   */
  size: number;
  count: number;
  /**
   * Segments에서 예약이 불가능한 from의 배열
   */
  edges: number[];
}

export interface Fscheduler_priceSegmentTable {
  __typename: "PriceSegmentTable";
  price: number;
  currency: Currency | null;
}

export interface Fscheduler {
  __typename: "Scheduler";
  from: number;
  to: number;
  timelinePolicies: Fscheduler_timelinePolicies[];
  priceSegmentTable: Fscheduler_priceSegmentTable[];
  /**
   * 최대 수용 가능 인원 수
   */
  maxCapacity: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FdailyScheduler
// ====================================================

export interface FdailyScheduler_scheduler_timelinePolicies {
  __typename: "TimelinePolicy";
  /**
   * Segments의 시작 지점. MinuteOfDay로 표시.
   */
  from: number;
  /**
   * Segments의 끝 지점. MinuteOfDay로 표시
   */
  to: number;
  /**
   * Segment의 크기. Minute 으로 표현함. 항상 5의 배수다.
   */
  size: number;
  count: number;
  /**
   * Segments에서 예약이 불가능한 from의 배열
   */
  edges: number[];
}

export interface FdailyScheduler_scheduler_priceSegmentTable {
  __typename: "PriceSegmentTable";
  price: number;
  currency: Currency | null;
}

export interface FdailyScheduler_scheduler {
  __typename: "Scheduler";
  from: number;
  to: number;
  timelinePolicies: FdailyScheduler_scheduler_timelinePolicies[];
  priceSegmentTable: FdailyScheduler_scheduler_priceSegmentTable[];
  /**
   * 최대 수용 가능 인원 수
   */
  maxCapacity: number | null;
}

export interface FdailyScheduler {
  __typename: "DailyScheduler";
  days: DayOfWeek[];
  scheduler: FdailyScheduler_scheduler;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpay
// ====================================================

export interface Fpay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
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
  __typename: "File" | "User" | "Verification" | "ProductGroup" | "Product" | "Store" | "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  name: string;
  email: string | null;
  phoneNumber: string | null;
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
  user: FproductGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: FproductGroup_list[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: Fproduct_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: Fproduct_productGroup_list[];
}

export interface Fproduct {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
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
  user: Fstore_products_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: Fstore_products_productGroup_list[];
}

export interface Fstore_products {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
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
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: Fstore_images_tags[];
  owner: Fstore_images_owner;
}

export interface Fstore {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시 
   *             	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeCode: string;
  expiresAt: any;
  isExpire: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fitem
// ====================================================

export interface Fitem_pay {
  __typename: "Pay";
  amount: number;
  currency: Currency;
}

export interface Fitem_product_images_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fitem_product_images_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fitem_product_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: Fitem_product_images_tags[];
  owner: Fitem_product_images_owner;
}

export interface Fitem_product_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fitem_product_store {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
}

export interface Fitem_product_productGroup_user {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fitem_product_productGroup_list {
  __typename: "Product";
  _id: any;
  name: string;
  code: string;
  price: number;
}

export interface Fitem_product_productGroup {
  __typename: "ProductGroup";
  _id: any;
  createdAt: any;
  updatedAt: any;
  user: Fitem_product_productGroup_user;
  name: string;
  type: GroupType;
  code: string;
  description: string | null;
  hashTags: string[];
  /**
   * Product List
   */
  list: Fitem_product_productGroup_list[];
}

export interface Fitem_product {
  __typename: "Product";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  subtitle: string;
  code: string;
  description: string | null;
  price: number;
  capacity: number;
  images: Fitem_product_images[] | null;
  user: Fitem_product_user;
  store: Fitem_product_store;
  productGroup: Fitem_product_productGroup | null;
}

export interface Fitem_storeUser_profileImage_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fitem_storeUser_profileImage_owner {
  __typename: "User";
  _id: any;
  name: string;
}

export interface Fitem_storeUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
  tags: Fitem_storeUser_profileImage_tags[];
  owner: Fitem_storeUser_profileImage_owner;
}

export interface Fitem_storeUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fitem_storeUser {
  __typename: "User";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: Fitem_storeUser_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: Fitem_storeUser_zoneinfo;
  smsKey: string | null;
}

export interface Fitem {
  __typename: "Item";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 회원 예약이라도 직접 입력 가능
   */
  phoneNumber: string | null;
  /**
   * 회원 예약이라도 직접 입력 가능.
   */
  name: string | null;
  /**
   * Email... 얘 존재하면 Notification 날려줘야됨 ㅎ
   */
  email: string | null;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  fromTm: any;
  /**
   * Millisec단위 시간 => 숫자로 표시
   */
  toTm: any;
  /**
   * 예약한 Product 수
   */
  count: number;
  /**
   * 지불 금액 및 통화단위
   */
  pay: Fitem_pay | null;
  message: string | null;
  product: Fitem_product;
  storeUser: Fitem_storeUser;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

/**
 * 통화
 */
export enum Currency {
  JPY = "JPY",
  KRW = "KRW",
  USD = "USD",
}

/**
 * 요일
 */
export enum DayOfWeek {
  FRI = "FRI",
  MON = "MON",
  SAT = "SAT",
  SUN = "SUN",
  THU = "THU",
  TUE = "TUE",
  WED = "WED",
}

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
  BUYER = "BUYER",
  SELLER = "SELLER",
  STORE_USER = "STORE_USER",
  SUPERADMIN = "SUPERADMIN",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  SignInWithEmail = "SignInWithEmail",
  SignInWithPhone = "SignInWithPhone",
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
export enum _FileSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  fileType_asc = "fileType_asc",
  fileType_desc = "fileType_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _ItemSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  fromTm_asc = "fromTm_asc",
  fromTm_desc = "fromTm_desc",
  toTm_asc = "toTm_asc",
  toTm_desc = "toTm_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductGroupSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  capacity_asc = "capacity_asc",
  capacity_desc = "capacity_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  selectableMinutesMax_asc = "selectableMinutesMax_asc",
  selectableMinutesMax_desc = "selectableMinutesMax_desc",
  subtitle_asc = "subtitle_asc",
  subtitle_desc = "subtitle_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _StoreSort {
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

export interface DailySchedulerInput {
  days: DayOfWeek[];
  schedulerInput: SchedulerInput;
}

/**
 * File upload to s3
 */
export interface FileInput {
  upload: any;
  tags?: TagInput[] | null;
}

export interface ItemCreateInput {
  fromTm: any;
  toTm: any;
  paid?: PayInput | null;
  count: number;
  message?: string | null;
  name?: string | null;
  phoneNumber?: string | null;
}

export interface ItemUpdateInput {
  message?: string | null;
}

export interface LocationInput {
  address: string;
  addressDetail?: string | null;
  lat?: number | null;
  lng?: number | null;
}

export interface OffsetPagingInput {
  pageIndex: number;
  pageItemCount: number;
}

export interface PayInput {
  amount: number;
  currency?: Currency | null;
}

export interface ProductCreateInput {
  name: string;
  description: string;
  subtitle?: string | null;
  price: number;
  capacity: number;
  selectableMinutesMax: number;
}

export interface ProductGroupCreateInput {
  description?: string | null;
  name: string;
  productIds: any[];
  hashTags?: string[] | null;
}

export interface ProductGroupUpdateInput {
  name?: string | null;
  description?: string | null;
  hashTags?: string[] | null;
  listIdToAdd?: any[] | null;
  listIdToRemove?: any[] | null;
}

export interface ProductUpdateInput {
  name?: string | null;
  description?: string | null;
  subtitle?: string | null;
  selectableMinutesMax?: number | null;
}

export interface SchedulerInput {
  maxCapacity?: number | null;
  timelinePolicyInputs: TimelinePolicyInput[];
}

export interface StoreUpdateInput {
  name?: string | null;
  description?: string | null;
  location?: LocationInput | null;
}

export interface TagInput {
  key: string;
  value: string;
}

export interface TimelinePolicyInput {
  from: number;
  size: number;
  count: number;
  edges?: number[] | null;
}

export interface _FileFilter {
  AND?: _FileFilter[] | null;
  OR?: _FileFilter[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  description_eq?: string | null;
  description_not_eq?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  fileType_eq?: string | null;
  fileType_not_eq?: string | null;
  fileType_in?: string[] | null;
  fileType_not_in?: string[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
}

export interface _ItemFilter {
  AND?: _ItemFilter[] | null;
  OR?: _ItemFilter[] | null;
  fromTm_eq?: string | null;
  fromTm_not_eq?: string | null;
  fromTm_gt?: string | null;
  fromTm_gte?: string | null;
  fromTm_lte?: string | null;
  fromTm_lt?: string | null;
  toTm_eq?: string | null;
  toTm_not_eq?: string | null;
  toTm_gt?: string | null;
  toTm_gte?: string | null;
  toTm_lte?: string | null;
  toTm_lt?: string | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
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
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
}

export interface _ProductGroupFilter {
  AND?: _ProductGroupFilter[] | null;
  OR?: _ProductGroupFilter[] | null;
  hashTags_eq?: string[] | null;
  hashTags_not_eq?: string[] | null;
  hashTags_in?: string[] | null;
  hashTags_not_in?: string[] | null;
  _id_eq?: string | null;
  _id_not_eq?: string | null;
  _id_in?: string[] | null;
  _id_not_in?: string[] | null;
  _id_contains?: string | null;
  _id_not_contains?: string | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  description_eq?: string | null;
  description_not_eq?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
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
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
