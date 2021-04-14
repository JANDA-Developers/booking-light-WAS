/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardUpdate
// ====================================================

export interface boardUpdate_BoardUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardUpdate_BoardUpdate {
  __typename: "BoardUpdateResponse";
  ok: boolean;
  error: boardUpdate_BoardUpdate_error | null;
}

export interface boardUpdate {
  BoardUpdate: boardUpdate_BoardUpdate;
}

export interface boardUpdateVariables {
  input: BoardInput;
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardCreate
// ====================================================

export interface boardCreate_BoardCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardCreate_BoardCreate {
  __typename: "BoardCreateResponse";
  ok: boolean;
  error: boardCreate_BoardCreate_error | null;
}

export interface boardCreate {
  BoardCreate: boardCreate_BoardCreate;
}

export interface boardCreateVariables {
  input: BoardInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDelete
// ====================================================

export interface boardDelete_BoardDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDelete_BoardDelete {
  __typename: "BoardDeleteResponse";
  ok: boolean;
  error: boardDelete_BoardDelete_error | null;
}

export interface boardDelete {
  BoardDelete: boardDelete_BoardDelete;
}

export interface boardDeleteVariables {
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardList
// ====================================================

export interface boardList_BoardList_pageInfo {
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

export interface boardList_BoardList_items_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardList_BoardList_items_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardList_BoardList_items_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardList_BoardList_items {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardList_BoardList_items_inputs[];
}

export interface boardList_BoardList {
  __typename: "OffsetPagenatedBoardData";
  pageInfo: boardList_BoardList_pageInfo;
  items: boardList_BoardList_items[];
}

export interface boardList {
  /**
   * Function for Exam Admin
   */
  BoardList: boardList_BoardList;
}

export interface boardListVariables {
  sort?: _BoardSort[] | null;
  filter?: _BoardFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardFindById
// ====================================================

export interface boardFindById_BoardFindById_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardFindById_BoardFindById_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardFindById_BoardFindById_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardFindById_BoardFindById {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardFindById_BoardFindById_inputs[];
}

export interface boardFindById {
  BoardFindById: boardFindById_BoardFindById | null;
}

export interface boardFindByIdVariables {
  boardId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardFindByKey
// ====================================================

export interface boardFindByKey_BoardFindByKey_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardFindByKey_BoardFindByKey_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardFindByKey_BoardFindByKey_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardFindByKey_BoardFindByKey {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: boardFindByKey_BoardFindByKey_inputs[];
}

export interface boardFindByKey {
  BoardFindByKey: boardFindByKey_BoardFindByKey | null;
}

export interface boardFindByKeyVariables {
  key: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocUpdate
// ====================================================

export interface boardDocUpdate_BoardDocUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocUpdate_BoardDocUpdate_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocUpdate_BoardDocUpdate_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocUpdate_BoardDocUpdate_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocUpdate_BoardDocUpdate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocUpdate_BoardDocUpdate_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocUpdate_BoardDocUpdate_data_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocUpdate_BoardDocUpdate_data_attachFiles[] | null;
  thumb: boardDocUpdate_BoardDocUpdate_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocUpdate_BoardDocUpdate_data_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocUpdate_BoardDocUpdate {
  __typename: "BoardDocUpdateResponse";
  ok: boolean;
  error: boardDocUpdate_BoardDocUpdate_error | null;
  data: boardDocUpdate_BoardDocUpdate_data | null;
}

export interface boardDocUpdate {
  BoardDocUpdate: boardDocUpdate_BoardDocUpdate;
}

export interface boardDocUpdateVariables {
  input: BoardDocInput;
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocCreate
// ====================================================

export interface boardDocCreate_BoardDocCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocCreate_BoardDocCreate_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocCreate_BoardDocCreate_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocCreate_BoardDocCreate_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocCreate_BoardDocCreate_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocCreate_BoardDocCreate_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocCreate_BoardDocCreate_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocCreate_BoardDocCreate_data_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocCreate_BoardDocCreate_data_attachFiles[] | null;
  thumb: boardDocCreate_BoardDocCreate_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocCreate_BoardDocCreate_data_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocCreate_BoardDocCreate {
  __typename: "BoardDocCreateResponse";
  ok: boolean;
  error: boardDocCreate_BoardDocCreate_error | null;
  data: boardDocCreate_BoardDocCreate_data | null;
}

export interface boardDocCreate {
  BoardDocCreate: boardDocCreate_BoardDocCreate;
}

export interface boardDocCreateVariables {
  boardKey: string;
  input: BoardDocInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: boardDocDelete
// ====================================================

export interface boardDocDelete_BoardDocDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface boardDocDelete_BoardDocDelete_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocDelete_BoardDocDelete_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocDelete_BoardDocDelete_data_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocDelete_BoardDocDelete_data_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocDelete_BoardDocDelete_data_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocDelete_BoardDocDelete_data {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocDelete_BoardDocDelete_data_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocDelete_BoardDocDelete_data_attachFiles[] | null;
  thumb: boardDocDelete_BoardDocDelete_data_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocDelete_BoardDocDelete_data_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocDelete_BoardDocDelete {
  __typename: "BoardDocDeleteResponse";
  ok: boolean;
  error: boardDocDelete_BoardDocDelete_error | null;
  data: boardDocDelete_BoardDocDelete_data | null;
}

export interface boardDocDelete {
  BoardDocDelete: boardDocDelete_BoardDocDelete;
}

export interface boardDocDeleteVariables {
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardDocList
// ====================================================

export interface boardDocList_BoardDocList_pageInfo {
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

export interface boardDocList_BoardDocList_items_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocList_BoardDocList_items_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocList_BoardDocList_items_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocList_BoardDocList_items_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocList_BoardDocList_items_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocList_BoardDocList_items {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocList_BoardDocList_items_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocList_BoardDocList_items_attachFiles[] | null;
  thumb: boardDocList_BoardDocList_items_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocList_BoardDocList_items_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocList_BoardDocList {
  __typename: "OffsetPagenatedBoardDocData";
  pageInfo: boardDocList_BoardDocList_pageInfo;
  items: boardDocList_BoardDocList_items[];
}

export interface boardDocList {
  /**
   * Function for Exam Admin
   */
  BoardDocList: boardDocList_BoardDocList;
}

export interface boardDocListVariables {
  sort?: _BoardDocSort[] | null;
  filter?: _BoardDocFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: boardDocFindById
// ====================================================

export interface boardDocFindById_BoardDocFindById_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: boardDocFindById_BoardDocFindById_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface boardDocFindById_BoardDocFindById_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocFindById_BoardDocFindById_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface boardDocFindById_BoardDocFindById_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface boardDocFindById_BoardDocFindById {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: boardDocFindById_BoardDocFindById_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: boardDocFindById_BoardDocFindById_attachFiles[] | null;
  thumb: boardDocFindById_BoardDocFindById_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: boardDocFindById_BoardDocFindById_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

export interface boardDocFindById {
  BoardDocFindById: boardDocFindById_BoardDocFindById | null;
}

export interface boardDocFindByIdVariables {
  boardDocId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: buypagePolicyUpdate
// ====================================================

export interface buypagePolicyUpdate_BuypagePolicyUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface buypagePolicyUpdate_BuypagePolicyUpdate {
  __typename: "BuypagePolicyUpdateResponse";
  ok: boolean;
  error: buypagePolicyUpdate_BuypagePolicyUpdate_error | null;
}

export interface buypagePolicyUpdate {
  BuypagePolicyUpdate: buypagePolicyUpdate_BuypagePolicyUpdate;
}

export interface buypagePolicyUpdateVariables {
  input: PolicyInput;
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: buypagePolicyDelete
// ====================================================

export interface buypagePolicyDelete_BuypagePolicyDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface buypagePolicyDelete_BuypagePolicyDelete {
  __typename: "BuypagePolicyDeleteResponse";
  ok: boolean;
  error: buypagePolicyDelete_BuypagePolicyDelete_error | null;
}

export interface buypagePolicyDelete {
  BuypagePolicyDelete: buypagePolicyDelete_BuypagePolicyDelete;
}

export interface buypagePolicyDeleteVariables {
  policyKey: string;
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryUpdate
// ====================================================

export interface categoryUpdate_CategoryUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryUpdate_CategoryUpdate {
  __typename: "CategoryUpdateResponse";
  ok: boolean;
  error: categoryUpdate_CategoryUpdate_error | null;
}

export interface categoryUpdate {
  CategoryUpdate: categoryUpdate_CategoryUpdate;
}

export interface categoryUpdateVariables {
  input: CategoryUpdateInput;
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryOrderUpdate
// ====================================================

export interface categoryOrderUpdate_CategoryOrderUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryOrderUpdate_CategoryOrderUpdate {
  __typename: "CategoryOrderUpdateResponse";
  ok: boolean;
  error: categoryOrderUpdate_CategoryOrderUpdate_error | null;
}

export interface categoryOrderUpdate {
  CategoryOrderUpdate: categoryOrderUpdate_CategoryOrderUpdate;
}

export interface categoryOrderUpdateVariables {
  input: CategoryOrderUpdateInput[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryCreate
// ====================================================

export interface categoryCreate_CategoryCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryCreate_CategoryCreate {
  __typename: "CategoryCreateResponse";
  ok: boolean;
  error: categoryCreate_CategoryCreate_error | null;
}

export interface categoryCreate {
  CategoryCreate: categoryCreate_CategoryCreate;
}

export interface categoryCreateVariables {
  storeId: any;
  input: CategoryCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: categoryDelete
// ====================================================

export interface categoryDelete_CategoryDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface categoryDelete_CategoryDelete {
  __typename: "CategoryDeleteResponse";
  ok: boolean;
  error: categoryDelete_CategoryDelete_error | null;
}

export interface categoryDelete {
  CategoryDelete: categoryDelete_CategoryDelete;
}

export interface categoryDeleteVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryList
// ====================================================

export interface categoryList_CategoryList_pageInfo {
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

export interface categoryList_CategoryList_items {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: string;
  order: number;
}

export interface categoryList_CategoryList {
  __typename: "OffsetPagenatedCategoryData";
  pageInfo: categoryList_CategoryList_pageInfo;
  items: categoryList_CategoryList_items[];
}

export interface categoryList {
  /**
   * Function for Exam Admin
   */
  CategoryList: categoryList_CategoryList;
}

export interface categoryListVariables {
  sort?: _CategorySort[] | null;
  filter?: _CategoryFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindById
// ====================================================

export interface categoryFindById_CategoryFindById {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: string;
  order: number;
}

export interface categoryFindById {
  CategoryFindById: categoryFindById_CategoryFindById | null;
}

export interface categoryFindByIdVariables {
  categoryId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: categoryFindByKey
// ====================================================

export interface categoryFindByKey_CategoryFindByKey {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: string;
  order: number;
}

export interface categoryFindByKey {
  CategoryFindByKey: categoryFindByKey_CategoryFindByKey | null;
}

export interface categoryFindByKeyVariables {
  key: string;
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
// GraphQL mutation operation: fileDeletes
// ====================================================

export interface fileDeletes_FileDeletes_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface fileDeletes_FileDeletes {
  __typename: "Response";
  ok: boolean;
  error: fileDeletes_FileDeletes_error | null;
}

export interface fileDeletes {
  FileDeletes: fileDeletes_FileDeletes;
}

export interface fileDeletesVariables {
  deleteFileList: any[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: invoiceFindOne
// ====================================================

export interface invoiceFindOne_InvoiceFindOne_serviceUsageDetails {
  __typename: "ServiceUsageDetails";
  type: ServiceUsageType;
  action: Action;
  isBillingTarget: boolean;
  count: number;
  amount: number;
  servicePricingHashId: string;
}

export interface invoiceFindOne_InvoiceFindOne_summaryTotal {
  __typename: "ServiceUsageDetailSummary";
  /**
   * 요금제를 적용한 후 가격
   */
  amount: number;
  /**
   * 요금제를 적용하기 전 가격을 말함.
   */
  amountOrigin: number;
  /**
   * 몇개의 항목에 대해서 과금된건지
   */
  count: number;
}

export interface invoiceFindOne_InvoiceFindOne {
  __typename: "Invoice";
  year: number;
  month: number;
  yyyymm: number;
  hashId: string;
  currency: Currency;
  /**
   * Invoice 결제 상태를 말함.
   */
  status: InvoiceStatus;
  unpaidReason: string | null;
  billingAt: any | null;
  expectedBillingDayOfMonth: number | null;
  isBilled: boolean;
  serviceUsageDetails: invoiceFindOne_InvoiceFindOne_serviceUsageDetails[];
  /**
   * 사용량 최종 요약
   */
  summaryTotal: invoiceFindOne_InvoiceFindOne_summaryTotal;
}

export interface invoiceFindOne {
  InvoiceFindOne: invoiceFindOne_InvoiceFindOne | null;
}

export interface invoiceFindOneVariables {
  yyyymm: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: invoiceList
// ====================================================

export interface invoiceList_InvoiceList_pageInfo {
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

export interface invoiceList_InvoiceList_items_serviceUsageDetails {
  __typename: "ServiceUsageDetails";
  type: ServiceUsageType;
  action: Action;
  isBillingTarget: boolean;
  count: number;
  amount: number;
  servicePricingHashId: string;
}

export interface invoiceList_InvoiceList_items_summaryTotal {
  __typename: "ServiceUsageDetailSummary";
  /**
   * 요금제를 적용한 후 가격
   */
  amount: number;
  /**
   * 요금제를 적용하기 전 가격을 말함.
   */
  amountOrigin: number;
  /**
   * 몇개의 항목에 대해서 과금된건지
   */
  count: number;
}

export interface invoiceList_InvoiceList_items {
  __typename: "Invoice";
  year: number;
  month: number;
  yyyymm: number;
  hashId: string;
  currency: Currency;
  /**
   * Invoice 결제 상태를 말함.
   */
  status: InvoiceStatus;
  unpaidReason: string | null;
  billingAt: any | null;
  expectedBillingDayOfMonth: number | null;
  isBilled: boolean;
  serviceUsageDetails: invoiceList_InvoiceList_items_serviceUsageDetails[];
  /**
   * 사용량 최종 요약
   */
  summaryTotal: invoiceList_InvoiceList_items_summaryTotal;
}

export interface invoiceList_InvoiceList {
  __typename: "OffsetPagenatedInvoiceData";
  pageInfo: invoiceList_InvoiceList_pageInfo;
  items: invoiceList_InvoiceList_items[];
}

export interface invoiceList {
  /**
   * BusinessUser 전용
   */
  InvoiceList: invoiceList_InvoiceList;
}

export interface invoiceListVariables {
  sort?: _InvoiceSort[] | null;
  filter?: _InvoiceFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: billingMethodRegist
// ====================================================

export interface billingMethodRegist_BillingMethodRegist_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface billingMethodRegist_BillingMethodRegist {
  __typename: "BillingMethodRegistResponse";
  ok: boolean;
  error: billingMethodRegist_BillingMethodRegist_error | null;
}

export interface billingMethodRegist {
  BillingMethodRegist: billingMethodRegist_BillingMethodRegist;
}

export interface billingMethodRegistVariables {
  input: BillingMethodRegistInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: billingMethodDelete
// ====================================================

export interface billingMethodDelete_BillingMethodDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface billingMethodDelete_BillingMethodDelete {
  __typename: "BillingMethodDeleteResponse";
  ok: boolean;
  error: billingMethodDelete_BillingMethodDelete_error | null;
}

export interface billingMethodDelete {
  BillingMethodDelete: billingMethodDelete_BillingMethodDelete;
}

export interface billingMethodDeleteVariables {
  billingId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: ItemBookingUpdate
// ====================================================

export interface ItemBookingUpdate_ItemBookingUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface ItemBookingUpdate_ItemBookingUpdate {
  __typename: "ItemBookingUpdateResponse";
  ok: boolean;
  error: ItemBookingUpdate_ItemBookingUpdate_error | null;
}

export interface ItemBookingUpdate {
  ItemBookingUpdate: ItemBookingUpdate_ItemBookingUpdate;
}

export interface ItemBookingUpdateVariables {
  input: ItemBookingUpdateInput;
  itemId: any;
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

export interface itemDelete_ItemDelete {
  __typename: "Response";
  ok: boolean;
  error: itemDelete_ItemDelete_error | null;
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

export interface itemList_ItemList_items_ItemGoods {
  __typename: "ItemGoods" | "ItemService";
}

export interface itemList_ItemList_items_ItemBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemList_ItemList_items_ItemBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: itemList_ItemList_items_ItemBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface itemList_ItemList_items_ItemBooking_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface itemList_ItemList_items_ItemBooking {
  __typename: "ItemBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: itemList_ItemList_items_ItemBooking_attrs[];
  images: itemList_ItemList_items_ItemBooking_images[];
}

export type itemList_ItemList_items = itemList_ItemList_items_ItemGoods | itemList_ItemList_items_ItemBooking;

export interface itemList_ItemList {
  __typename: "OffsetPagenatedIItemData";
  pageInfo: itemList_ItemList_pageInfo;
  items: itemList_ItemList_items[];
}

export interface itemList {
  ItemList: itemList_ItemList;
}

export interface itemListVariables {
  sort?: _IItemSort[] | null;
  filter?: _IItemFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itembookingCreate
// ====================================================

export interface itembookingCreate_ItemBookingCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface itembookingCreate_ItemBookingCreate {
  __typename: "ItemBookingCreateResponse";
  ok: boolean;
  error: itembookingCreate_ItemBookingCreate_error | null;
}

export interface itembookingCreate {
  ItemBookingCreate: itembookingCreate_ItemBookingCreate;
}

export interface itembookingCreateVariables {
  input: ItemBookingCreateInput;
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: itembookingUpdate
// ====================================================

export interface itembookingUpdate_ItemBookingUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface itembookingUpdate_ItemBookingUpdate {
  __typename: "ItemBookingUpdateResponse";
  ok: boolean;
  error: itembookingUpdate_ItemBookingUpdate_error | null;
}

export interface itembookingUpdate {
  ItemBookingUpdate: itembookingUpdate_ItemBookingUpdate;
}

export interface itembookingUpdateVariables {
  input: ItemBookingUpdateInput;
  itemId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: itemFindById
// ====================================================

export interface itemFindById_ItemFindById_ItemGoods_products_ProductGoods {
  __typename: "ProductGoods";
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface itemFindById_ItemFindById_ItemGoods_products_ProductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_capacityDetails[];
  usageDetails: itemFindById_ItemFindById_ItemGoods_products_ProductBooking_usageDetails[];
  code: string;
}

export type itemFindById_ItemFindById_ItemGoods_products = itemFindById_ItemFindById_ItemGoods_products_ProductGoods | itemFindById_ItemFindById_ItemGoods_products_ProductBooking;

export interface itemFindById_ItemFindById_ItemGoods {
  __typename: "ItemGoods" | "ItemService";
  products: itemFindById_ItemFindById_ItemGoods_products[];
}

export interface itemFindById_ItemFindById_ItemBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemFindById_ItemFindById_ItemBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: itemFindById_ItemFindById_ItemBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface itemFindById_ItemFindById_ItemBooking_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductGoods {
  __typename: "ProductGoods";
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface itemFindById_ItemFindById_ItemBooking_products_ProductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_capacityDetails[];
  usageDetails: itemFindById_ItemFindById_ItemBooking_products_ProductBooking_usageDetails[];
  code: string;
}

export type itemFindById_ItemFindById_ItemBooking_products = itemFindById_ItemFindById_ItemBooking_products_ProductGoods | itemFindById_ItemFindById_ItemBooking_products_ProductBooking;

export interface itemFindById_ItemFindById_ItemBooking {
  __typename: "ItemBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: itemFindById_ItemFindById_ItemBooking_attrs[];
  images: itemFindById_ItemFindById_ItemBooking_images[];
  products: itemFindById_ItemFindById_ItemBooking_products[];
}

export type itemFindById_ItemFindById = itemFindById_ItemFindById_ItemGoods | itemFindById_ItemFindById_ItemBooking;

export interface itemFindById {
  ItemFindById: itemFindById_ItemFindById | null;
}

export interface itemFindByIdVariables {
  itemId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: itemSummaryGet
// ====================================================

export interface itemSummaryGet_ItemSummaryGet__id {
  __typename: "SummaryItemBookingId";
  itemId: any;
  productId: any;
}

export interface itemSummaryGet_ItemSummaryGet_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface itemSummaryGet_ItemSummaryGet_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface itemSummaryGet_ItemSummaryGet_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: itemSummaryGet_ItemSummaryGet_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface itemSummaryGet_ItemSummaryGet_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemSummaryGet_ItemSummaryGet_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface itemSummaryGet_ItemSummaryGet {
  __typename: "SummaryItemBooking";
  _id: itemSummaryGet_ItemSummaryGet__id;
  /**
   * 현재 item의 variant에 대한 사용수
   */
  usage: number;
  /**
   * 현재 Item의 variant에 대한 사용율. 1을 기준으로 계산
   */
  usageRatio: number | null;
  usageDetails: itemSummaryGet_ItemSummaryGet_usageDetails[];
  type: ItemType;
  price: number;
  currency: Currency;
  /**
   * Item에서 정의된 필드들
   */
  attrs: itemSummaryGet_ItemSummaryGet_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: itemSummaryGet_ItemSummaryGet_dateRangeForSale | null;
  /**
   * 사용 기간. (고정임)
   */
  dateRangeForUse: itemSummaryGet_ItemSummaryGet_dateRangeForUse | null;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
}

export interface itemSummaryGet {
  ItemSummaryGet: itemSummaryGet_ItemSummaryGet | null;
}

export interface itemSummaryGetVariables {
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationHistory
// ====================================================

export interface notificationHistory_NotificationHistory_pageInfo {
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

export interface notificationHistory_NotificationHistory_items {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: any;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

export interface notificationHistory_NotificationHistory {
  __typename: "OffsetPagenatedNotificationHistoryItemData";
  pageInfo: notificationHistory_NotificationHistory_pageInfo;
  items: notificationHistory_NotificationHistory_items[];
}

export interface notificationHistory {
  NotificationHistory: notificationHistory_NotificationHistory;
}

export interface notificationHistoryVariables {
  sort?: _NotificationHistoryItemSort[] | null;
  filter?: _NotificationHistoryItemFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationSenderAdd
// ====================================================

export interface notificationSenderAdd_NotificationSenderAdd_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationSenderAdd_NotificationSenderAdd_data_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface notificationSenderAdd_NotificationSenderAdd_data {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: notificationSenderAdd_NotificationSenderAdd_data_files[];
  isRegisteredToAligo: boolean;
  createdAt: any;
}

export interface notificationSenderAdd_NotificationSenderAdd {
  __typename: "NotificationSenderResponse";
  ok: boolean;
  error: notificationSenderAdd_NotificationSenderAdd_error | null;
  data: notificationSenderAdd_NotificationSenderAdd_data | null;
}

export interface notificationSenderAdd {
  /**
   * Verificaiton 모델을 이용하여 Sender를 추가함.
   */
  NotificationSenderAdd: notificationSenderAdd_NotificationSenderAdd;
}

export interface notificationSenderAddVariables {
  target: VerificationTarget;
  label: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationmanagerFindById
// ====================================================

export interface notificationmanagerFindById_NotificationManagerFindById_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface notificationmanagerFindById_NotificationManagerFindById_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: notificationmanagerFindById_NotificationManagerFindById_senders_files[];
  isRegisteredToAligo: boolean;
  createdAt: any;
}

export interface notificationmanagerFindById_NotificationManagerFindById {
  __typename: "NotificationManager";
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: notificationmanagerFindById_NotificationManagerFindById_senders[];
}

export interface notificationmanagerFindById {
  NotificationManagerFindById: notificationmanagerFindById_NotificationManagerFindById;
}

export interface notificationmanagerFindByIdVariables {
  notificationManagerId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationTemplateList
// ====================================================

export interface notificationTemplateList_NotificationTemplateList_pageInfo {
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

export interface notificationTemplateList_NotificationTemplateList_items_trigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface notificationTemplateList_NotificationTemplateList_items_trigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  storeIds: any[];
  isEnabled: boolean;
  tags: notificationTemplateList_NotificationTemplateList_items_trigger_tags[];
}

export interface notificationTemplateList_NotificationTemplateList_items {
  __typename: "TemplateSms" | "TemplateEmail";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  content: string;
  notificationMethod: NotificationMethod;
  replacers: string[];
  trigger: notificationTemplateList_NotificationTemplateList_items_trigger[];
}

export interface notificationTemplateList_NotificationTemplateList {
  __typename: "OffsetPagenatedITemplateData";
  pageInfo: notificationTemplateList_NotificationTemplateList_pageInfo;
  items: notificationTemplateList_NotificationTemplateList_items[];
}

export interface notificationTemplateList {
  /**
   * BusinessUser 전용
   */
  NotificationTemplateList: notificationTemplateList_NotificationTemplateList;
}

export interface notificationTemplateListVariables {
  sort?: _ITemplateSort[] | null;
  filter?: _ITemplateFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendSingle
// ====================================================

export interface smsSendSingle_SmsSendSingle_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface smsSendSingle_SmsSendSingle {
  __typename: "SmsSingleMessageSendResponse";
  ok: boolean;
  error: smsSendSingle_SmsSendSingle_error | null;
}

export interface smsSendSingle {
  SmsSendSingle: smsSendSingle_SmsSendSingle;
}

export interface smsSendSingleVariables {
  input: SmsSendInput;
  method: NotificationMethod;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsSendWithTemplate
// ====================================================

export interface smsSendWithTemplate_SmsSendWithTemplate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface smsSendWithTemplate_SmsSendWithTemplate {
  __typename: "SmsTemplateMessageSendResponse";
  ok: boolean;
  error: smsSendWithTemplate_SmsSendWithTemplate_error | null;
}

export interface smsSendWithTemplate {
  SmsSendWithTemplate: smsSendWithTemplate_SmsSendWithTemplate;
}

export interface smsSendWithTemplateVariables {
  input: SmsSendWithTemplateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: notificationTemplateCreate
// ====================================================

export interface notificationTemplateCreate_NotificationTemplateCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface notificationTemplateCreate_NotificationTemplateCreate {
  __typename: "NotificationTemplateCreateResponse";
  ok: boolean;
  error: notificationTemplateCreate_NotificationTemplateCreate_error | null;
}

export interface notificationTemplateCreate {
  NotificationTemplateCreate: notificationTemplateCreate_NotificationTemplateCreate;
}

export interface notificationTemplateCreateVariables {
  input: NotificationTemplateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsTemplateDelete
// ====================================================

export interface smsTemplateDelete_SmsTemplateDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface smsTemplateDelete_SmsTemplateDelete {
  __typename: "SmsTemplateDeleteResponse";
  ok: boolean;
  error: smsTemplateDelete_SmsTemplateDelete_error | null;
}

export interface smsTemplateDelete {
  SmsTemplateDelete: smsTemplateDelete_SmsTemplateDelete;
}

export interface smsTemplateDeleteVariables {
  templateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: smsTemplateUpdate
// ====================================================

export interface smsTemplateUpdate_SmsTemplateUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface smsTemplateUpdate_SmsTemplateUpdate {
  __typename: "SmsTemplateUpdateResponse";
  ok: boolean;
  error: smsTemplateUpdate_SmsTemplateUpdate_error | null;
}

export interface smsTemplateUpdate {
  SmsTemplateUpdate: smsTemplateUpdate_SmsTemplateUpdate;
}

export interface smsTemplateUpdateVariables {
  input: SmsTemplateUpdateInput;
  templateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productBookingUpdate
// ====================================================

export interface productBookingUpdate_ProductBookingUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productBookingUpdate_ProductBookingUpdate {
  __typename: "ProductBookingUpdateResponse";
  ok: boolean;
  error: productBookingUpdate_ProductBookingUpdate_error | null;
}

export interface productBookingUpdate {
  ProductBookingUpdate: productBookingUpdate_ProductBookingUpdate;
}

export interface productBookingUpdateVariables {
  input: ProductBookingUpdateInput;
  productBookingId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productBookingCreate
// ====================================================

export interface productBookingCreate_ProductBookingCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productBookingCreate_ProductBookingCreate {
  __typename: "ProductBookingCreateResponse";
  ok: boolean;
  error: productBookingCreate_ProductBookingCreate_error | null;
}

export interface productBookingCreate {
  ProductBookingCreate: productBookingCreate_ProductBookingCreate;
}

export interface productBookingCreateVariables {
  input: ProductBookingCreateInput;
  itemId: any;
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

export interface productDelete_ProductDelete {
  __typename: "Response";
  ok: boolean;
  error: productDelete_ProductDelete_error | null;
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

export interface productList_ProductList_items_ProductGoods {
  __typename: "ProductGoods";
}

export interface productList_ProductList_items_ProductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productList_ProductList_items_ProductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: productList_ProductList_items_ProductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface productList_ProductList_items_ProductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface productList_ProductList_items_ProductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface productList_ProductList_items_ProductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productList_ProductList_items_ProductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface productList_ProductList_items_ProductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: productList_ProductList_items_ProductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: productList_ProductList_items_ProductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: productList_ProductList_items_ProductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: productList_ProductList_items_ProductBooking_capacityDetails[];
  usageDetails: productList_ProductList_items_ProductBooking_usageDetails[];
  code: string;
}

export type productList_ProductList_items = productList_ProductList_items_ProductGoods | productList_ProductList_items_ProductBooking;

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
// GraphQL query operation: productFindById
// ====================================================

export interface productFindById_ProductFindById_ProductGoods_item_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_ProductGoods_item_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: productFindById_ProductFindById_ProductGoods_item_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface productFindById_ProductFindById_ProductGoods_item_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface productFindById_ProductFindById_ProductGoods_item {
  __typename: "ItemBooking" | "ItemGoods" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: productFindById_ProductFindById_ProductGoods_item_attrs[];
  images: productFindById_ProductFindById_ProductGoods_item_images[];
}

export interface productFindById_ProductFindById_ProductGoods_purchase_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productFindById_ProductFindById_ProductGoods_purchase {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: productFindById_ProductFindById_ProductGoods_purchase_countDetails[];
}

export interface productFindById_ProductFindById_ProductGoods {
  __typename: "ProductGoods";
  item: productFindById_ProductFindById_ProductGoods_item;
  purchase: productFindById_ProductFindById_ProductGoods_purchase[];
}

export interface productFindById_ProductFindById_ProductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_ProductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: productFindById_ProductFindById_ProductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface productFindById_ProductFindById_ProductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface productFindById_ProductFindById_ProductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface productFindById_ProductFindById_ProductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productFindById_ProductFindById_ProductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface productFindById_ProductFindById_ProductBooking_item_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface productFindById_ProductFindById_ProductBooking_item_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: productFindById_ProductFindById_ProductBooking_item_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface productFindById_ProductFindById_ProductBooking_item_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface productFindById_ProductFindById_ProductBooking_item {
  __typename: "ItemBooking" | "ItemGoods" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: productFindById_ProductFindById_ProductBooking_item_attrs[];
  images: productFindById_ProductFindById_ProductBooking_item_images[];
}

export interface productFindById_ProductFindById_ProductBooking_purchase_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productFindById_ProductFindById_ProductBooking_purchase {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: productFindById_ProductFindById_ProductBooking_purchase_countDetails[];
}

export interface productFindById_ProductFindById_ProductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: productFindById_ProductFindById_ProductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: productFindById_ProductFindById_ProductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: productFindById_ProductFindById_ProductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: productFindById_ProductFindById_ProductBooking_capacityDetails[];
  usageDetails: productFindById_ProductFindById_ProductBooking_usageDetails[];
  code: string;
  item: productFindById_ProductFindById_ProductBooking_item;
  purchase: productFindById_ProductFindById_ProductBooking_purchase[];
}

export type productFindById_ProductFindById = productFindById_ProductFindById_ProductGoods | productFindById_ProductFindById_ProductBooking;

export interface productFindById {
  ProductFindById: productFindById_ProductFindById | null;
}

export interface productFindByIdVariables {
  productId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseListForBusinessUser
// ====================================================

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser_pageInfo {
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

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct {
  __typename: "ProductBooking" | "ProductGoods";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct_attrs[];
}

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser_items {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseListForBusinessUser_PurchaseListForBusinessUser_items_purchasedProduct;
}

export interface purchaseListForBusinessUser_PurchaseListForBusinessUser {
  __typename: "OffsetPagenatedIPurchaseData";
  pageInfo: purchaseListForBusinessUser_PurchaseListForBusinessUser_pageInfo;
  items: purchaseListForBusinessUser_PurchaseListForBusinessUser_items[];
}

export interface purchaseListForBusinessUser {
  /**
   * BusinessUser 전용. 현재 사용 불가능.. PurchaseBundleListForBusinessUser 대신에 PurchaseList 함수 사용 요망
   */
  PurchaseListForBusinessUser: purchaseListForBusinessUser_PurchaseListForBusinessUser;
}

export interface purchaseListForBusinessUserVariables {
  sort?: _IPurchaseSort[] | null;
  filter?: _IPurchaseFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseListForCustomer
// ====================================================

export interface purchaseListForCustomer_PurchaseListForCustomer_pageInfo {
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

export interface purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct {
  __typename: "ProductBooking" | "ProductGoods";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct_attrs[];
}

export interface purchaseListForCustomer_PurchaseListForCustomer_items {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseListForCustomer_PurchaseListForCustomer_items_purchasedProduct;
}

export interface purchaseListForCustomer_PurchaseListForCustomer {
  __typename: "OffsetPagenatedIPurchaseData";
  pageInfo: purchaseListForCustomer_PurchaseListForCustomer_pageInfo;
  items: purchaseListForCustomer_PurchaseListForCustomer_items[];
}

export interface purchaseListForCustomer {
  /**
   * BusinessUser 전용. 현재 사용 불가능.. PurchaseBundleListForBusinessUser 대신에 PurchaseList 함수 사용 요망
   */
  PurchaseListForCustomer: purchaseListForCustomer_PurchaseListForCustomer;
}

export interface purchaseListForCustomerVariables {
  sort?: _IPurchaseSort[] | null;
  filter?: _IPurchaseFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productAutomatorBookingUpdate
// ====================================================

export interface productAutomatorBookingUpdate_ProductAutomatorBookingUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productAutomatorBookingUpdate_ProductAutomatorBookingUpdate {
  __typename: "ProductAutomatorBookingResponse";
  ok: boolean;
  error: productAutomatorBookingUpdate_ProductAutomatorBookingUpdate_error | null;
}

export interface productAutomatorBookingUpdate {
  ProductAutomatorBookingUpdate: productAutomatorBookingUpdate_ProductAutomatorBookingUpdate;
}

export interface productAutomatorBookingUpdateVariables {
  input: ProductAutomatorBookingUpdateInput;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productAutomatorBookingCreate
// ====================================================

export interface productAutomatorBookingCreate_ProductAutomatorBookingCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productAutomatorBookingCreate_ProductAutomatorBookingCreate {
  __typename: "ProductAutomatorBookingResponse";
  ok: boolean;
  error: productAutomatorBookingCreate_ProductAutomatorBookingCreate_error | null;
}

export interface productAutomatorBookingCreate {
  ProductAutomatorBookingCreate: productAutomatorBookingCreate_ProductAutomatorBookingCreate;
}

export interface productAutomatorBookingCreateVariables {
  withGenerate?: boolean | null;
  input: ProductAutomatorBookingCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: productAutomatorBookingDelete
// ====================================================

export interface productAutomatorBookingDelete_ProductAutomatorBookingDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface productAutomatorBookingDelete_ProductAutomatorBookingDelete {
  __typename: "ProductAutomatorBookingResponse";
  ok: boolean;
  error: productAutomatorBookingDelete_ProductAutomatorBookingDelete_error | null;
}

export interface productAutomatorBookingDelete {
  /**
   * 삭제는... 딱히 Validation 할게 없을것 같기도 하고 ㅎㅎㅎ
   */
  ProductAutomatorBookingDelete: productAutomatorBookingDelete_ProductAutomatorBookingDelete;
}

export interface productAutomatorBookingDeleteVariables {
  withDestroyProperties?: boolean | null;
  id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productAutomatorBookingList
// ====================================================

export interface productAutomatorBookingList_ProductAutomatorBookingList_pageInfo {
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

export interface productAutomatorBookingList_ProductAutomatorBookingList_items_templates_timeRangeForUse {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface productAutomatorBookingList_ProductAutomatorBookingList_items_templates_timeRangeForSale {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface productAutomatorBookingList_ProductAutomatorBookingList_items_templates_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productAutomatorBookingList_ProductAutomatorBookingList_items_templates {
  __typename: "ProductBookingTemplate";
  capacity: number;
  capacityPick: number | null;
  price: number;
  currency: Currency | null;
  timeRangeForUse: productAutomatorBookingList_ProductAutomatorBookingList_items_templates_timeRangeForUse;
  timeRangeForSale: productAutomatorBookingList_ProductAutomatorBookingList_items_templates_timeRangeForSale | null;
  capacityDetails: productAutomatorBookingList_ProductAutomatorBookingList_items_templates_capacityDetails[];
}

export interface productAutomatorBookingList_ProductAutomatorBookingList_items {
  __typename: "ProductAutomatorBooking";
  _id: any;
  updatedAt: any;
  createdAt: any;
  latestGenerate: any | null;
  latestDestroy: any | null;
  isDisabled: boolean | null;
  name: string;
  description: string | null;
  type: ProductType;
  targetItemId: any;
  targetItemName: string;
  ownerId: any;
  /**
   * 이 템플릿을 반복 생성함 하루씩 더해서 생성함
   */
  templates: productAutomatorBookingList_ProductAutomatorBookingList_items_templates[];
  /**
   * 현재날짜 기준으로 몇일 앞까지 인가
   */
  countDate: number;
  exceptedDayOfWeeks: DayOfWeek[];
}

export interface productAutomatorBookingList_ProductAutomatorBookingList {
  __typename: "OffsetPagenatedProductAutomatorBookingData";
  pageInfo: productAutomatorBookingList_ProductAutomatorBookingList_pageInfo;
  items: productAutomatorBookingList_ProductAutomatorBookingList_items[];
}

export interface productAutomatorBookingList {
  ProductAutomatorBookingList: productAutomatorBookingList_ProductAutomatorBookingList;
}

export interface productAutomatorBookingListVariables {
  sort?: _ProductAutomatorBookingSort[] | null;
  filter?: _ProductAutomatorBookingFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: productAutomatorBookingFindById
// ====================================================

export interface productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_timeRangeForUse {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_timeRangeForSale {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates {
  __typename: "ProductBookingTemplate";
  capacity: number;
  capacityPick: number | null;
  price: number;
  currency: Currency | null;
  timeRangeForUse: productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_timeRangeForUse;
  timeRangeForSale: productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_timeRangeForSale | null;
  capacityDetails: productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates_capacityDetails[];
}

export interface productAutomatorBookingFindById_ProductAutomatorBookingFindById {
  __typename: "ProductAutomatorBooking";
  _id: any;
  updatedAt: any;
  createdAt: any;
  latestGenerate: any | null;
  latestDestroy: any | null;
  isDisabled: boolean | null;
  name: string;
  description: string | null;
  type: ProductType;
  targetItemId: any;
  targetItemName: string;
  ownerId: any;
  /**
   * 이 템플릿을 반복 생성함 하루씩 더해서 생성함
   */
  templates: productAutomatorBookingFindById_ProductAutomatorBookingFindById_templates[];
  /**
   * 현재날짜 기준으로 몇일 앞까지 인가
   */
  countDate: number;
  exceptedDayOfWeeks: DayOfWeek[];
}

export interface productAutomatorBookingFindById {
  ProductAutomatorBookingFindById: productAutomatorBookingFindById_ProductAutomatorBookingFindById | null;
}

export interface productAutomatorBookingFindByIdVariables {
  automatorId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleCreate
// ====================================================

export interface purchaseBundleCreate_PurchaseBundleCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleCreate_PurchaseBundleCreate_data {
  __typename: "PurchaseBundle";
  _id: any;
}

export interface purchaseBundleCreate_PurchaseBundleCreate {
  __typename: "PurchaseBundleCreateResponse";
  ok: boolean;
  error: purchaseBundleCreate_PurchaseBundleCreate_error | null;
  /**
   * editDate__priceOrigin__hashed__moid
   */
  paymentInfo: string | null;
  data: purchaseBundleCreate_PurchaseBundleCreate_data | null;
}

export interface purchaseBundleCreate {
  PurchaseBundleCreate: purchaseBundleCreate_PurchaseBundleCreate;
}

export interface purchaseBundleCreateVariables {
  input: PurchaseBundleCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleRefund
// ====================================================

export interface purchaseBundleRefund_PurchaseBundleRefund_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleRefund_PurchaseBundleRefund_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleRefund_PurchaseBundleRefund_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleRefund_PurchaseBundleRefund_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleRefund_PurchaseBundleRefund_data_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleRefund_PurchaseBundleRefund_data {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleRefund_PurchaseBundleRefund_data_attrs[] | null;
  devlieryInfo: purchaseBundleRefund_PurchaseBundleRefund_data_devlieryInfo | null;
}

export interface purchaseBundleRefund_PurchaseBundleRefund {
  __typename: "PurchaseBundleRefundResponse";
  ok: boolean;
  error: purchaseBundleRefund_PurchaseBundleRefund_error | null;
  data: purchaseBundleRefund_PurchaseBundleRefund_data | null;
}

export interface purchaseBundleRefund {
  PurchaseBundleRefund: purchaseBundleRefund_PurchaseBundleRefund;
}

export interface purchaseBundleRefundVariables {
  amount: number;
  purchaseBundleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleDelete
// ====================================================

export interface purchaseBundleDelete_PurchaseBundleDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleDelete_PurchaseBundleDelete_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleDelete_PurchaseBundleDelete_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleDelete_PurchaseBundleDelete_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleDelete_PurchaseBundleDelete_data_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleDelete_PurchaseBundleDelete_data {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleDelete_PurchaseBundleDelete_data_attrs[] | null;
  devlieryInfo: purchaseBundleDelete_PurchaseBundleDelete_data_devlieryInfo | null;
}

export interface purchaseBundleDelete_PurchaseBundleDelete {
  __typename: "PurchaseBundleDeleteResponse";
  ok: boolean;
  error: purchaseBundleDelete_PurchaseBundleDelete_error | null;
  data: purchaseBundleDelete_PurchaseBundleDelete_data | null;
}

export interface purchaseBundleDelete {
  /**
   *  순수하게 isDeleted 를 true로 둠.
   */
  PurchaseBundleDelete: purchaseBundleDelete_PurchaseBundleDelete;
}

export interface purchaseBundleDeleteVariables {
  purchaseBundleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleUpdate
// ====================================================

export interface purchaseBundleUpdate_PurchaseBundleUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleUpdate_PurchaseBundleUpdate_data_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleUpdate_PurchaseBundleUpdate_data_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleUpdate_PurchaseBundleUpdate_data_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleUpdate_PurchaseBundleUpdate_data_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleUpdate_PurchaseBundleUpdate_data {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleUpdate_PurchaseBundleUpdate_data_attrs[] | null;
  devlieryInfo: purchaseBundleUpdate_PurchaseBundleUpdate_data_devlieryInfo | null;
}

export interface purchaseBundleUpdate_PurchaseBundleUpdate {
  __typename: "PurchaseBundleUpdateResponse";
  ok: boolean;
  error: purchaseBundleUpdate_PurchaseBundleUpdate_error | null;
  data: purchaseBundleUpdate_PurchaseBundleUpdate_data | null;
}

export interface purchaseBundleUpdate {
  PurchaseBundleUpdate: purchaseBundleUpdate_PurchaseBundleUpdate;
}

export interface purchaseBundleUpdateVariables {
  purchaseBundleId: any;
  input: PurchaseBundleUpdateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleCancel
// ====================================================

export interface purchaseBundleCancel_PurchaseBundleCancel_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleCancel_PurchaseBundleCancel {
  __typename: "PurchaseBundleCancelResponse";
  ok: boolean;
  error: purchaseBundleCancel_PurchaseBundleCancel_error | null;
}

export interface purchaseBundleCancel {
  /**
   * 장바구니 구매 목록 전체에 대한 취소. (환불 동시 진행)
   */
  PurchaseBundleCancel: purchaseBundleCancel_PurchaseBundleCancel;
}

export interface purchaseBundleCancelVariables {
  message: string;
  purchaseBundleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: purchaseBundleSetPaymentStatus
// ====================================================

export interface purchaseBundleSetPaymentStatus_PurchaseBundleSetPaymentStatus_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface purchaseBundleSetPaymentStatus_PurchaseBundleSetPaymentStatus {
  __typename: "PurchaseBundleUpdateResponse";
  ok: boolean;
  error: purchaseBundleSetPaymentStatus_PurchaseBundleSetPaymentStatus_error | null;
}

export interface purchaseBundleSetPaymentStatus {
  PurchaseBundleSetPaymentStatus: purchaseBundleSetPaymentStatus_PurchaseBundleSetPaymentStatus;
}

export interface purchaseBundleSetPaymentStatusVariables {
  input: PurchaseBundleStatusSetInput;
  purchaseBundleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseBundleListForCustomer
// ====================================================

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_pageInfo {
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

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_purchases_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_purchases {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_purchases_countDetails[];
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_attrs[] | null;
  devlieryInfo: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_devlieryInfo | null;
  purchases: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items_purchases[];
}

export interface purchaseBundleListForCustomer_PurchaseBundleListForCustomer {
  __typename: "OffsetPagenatedPurchaseBundleData";
  pageInfo: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_pageInfo;
  items: purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items[];
}

export interface purchaseBundleListForCustomer {
  /**
   * Customer 전용
   */
  PurchaseBundleListForCustomer: purchaseBundleListForCustomer_PurchaseBundleListForCustomer;
}

export interface purchaseBundleListForCustomerVariables {
  sort?: _PurchaseBundleSort[] | null;
  filter?: _PurchaseBundleFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseBundleListForBusinessUser
// ====================================================

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_pageInfo {
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

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_capacityDetails[];
  usageDetails: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct_usageDetails[];
  code: string;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_countDetails[];
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases_purchasedProduct;
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items {
  __typename: "PurchaseBundle";
  code: string;
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_attrs[] | null;
  devlieryInfo: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_devlieryInfo | null;
  purchases: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items_purchases[];
}

export interface purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser {
  __typename: "OffsetPagenatedPurchaseBundleData";
  pageInfo: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_pageInfo;
  items: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items[];
}

export interface purchaseBundleListForBusinessUser {
  PurchaseBundleListForBusinessUser: purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser;
}

export interface purchaseBundleListForBusinessUserVariables {
  sort?: _PurchaseBundleSort[] | null;
  filter?: _PurchaseBundleFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseFindById
// ====================================================

export interface purchaseFindById_PurchaseFindById_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductGoods {
  __typename: "ProductGoods";
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_capacityDetails[];
  usageDetails: purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking_usageDetails[];
  code: string;
}

export type purchaseFindById_PurchaseFindById_purchasedProduct = purchaseFindById_PurchaseFindById_purchasedProduct_ProductGoods | purchaseFindById_PurchaseFindById_purchasedProduct_ProductBooking;

export interface purchaseFindById_PurchaseFindById {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: purchaseFindById_PurchaseFindById_countDetails[];
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseFindById_PurchaseFindById_purchasedProduct;
}

export interface purchaseFindById {
  PurchaseFindById: purchaseFindById_PurchaseFindById | null;
}

export interface purchaseFindByIdVariables {
  purchaseId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseBundleFindByInfo
// ====================================================

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_capacityDetails[];
  usageDetails: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct_usageDetails[];
  code: string;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_countDetails[];
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases_purchasedProduct;
}

export interface purchaseBundleFindByInfo_PurchaseBundleFindByInfo {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_attrs[] | null;
  devlieryInfo: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_devlieryInfo | null;
  purchases: purchaseBundleFindByInfo_PurchaseBundleFindByInfo_purchases[];
}

export interface purchaseBundleFindByInfo {
  PurchaseBundleFindByInfo: purchaseBundleFindByInfo_PurchaseBundleFindByInfo | null;
}

export interface purchaseBundleFindByInfoVariables {
  name: string;
  contact: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchaseBundleFindById
// ====================================================

export interface purchaseBundleFindById_PurchaseBundleFindById_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleFindById_PurchaseBundleFindById_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_capacityDetails[];
  usageDetails: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct_usageDetails[];
  code: string;
}

export interface purchaseBundleFindById_PurchaseBundleFindById_purchases {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: purchaseBundleFindById_PurchaseBundleFindById_purchases_countDetails[];
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: purchaseBundleFindById_PurchaseBundleFindById_purchases_purchasedProduct;
}

export interface purchaseBundleFindById_PurchaseBundleFindById {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: purchaseBundleFindById_PurchaseBundleFindById_attrs[] | null;
  devlieryInfo: purchaseBundleFindById_PurchaseBundleFindById_devlieryInfo | null;
  purchases: purchaseBundleFindById_PurchaseBundleFindById_purchases[];
}

export interface purchaseBundleFindById {
  PurchaseBundleFindById: purchaseBundleFindById_PurchaseBundleFindById | null;
}

export interface purchaseBundleFindByIdVariables {
  bundleId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: servicePlanDesubscribe
// ====================================================

export interface servicePlanDesubscribe_ServicePlanDesubscribe_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface servicePlanDesubscribe_ServicePlanDesubscribe {
  __typename: "Response";
  ok: boolean;
  error: servicePlanDesubscribe_ServicePlanDesubscribe_error | null;
}

export interface servicePlanDesubscribe {
  ServicePlanDesubscribe: servicePlanDesubscribe_ServicePlanDesubscribe;
}

export interface servicePlanDesubscribeVariables {
  servicePlanId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: servicePlanSubscribe
// ====================================================

export interface servicePlanSubscribe_ServicePlanSubscribe_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface servicePlanSubscribe_ServicePlanSubscribe {
  __typename: "ServicePlanSubscribeResponse";
  ok: boolean;
  error: servicePlanSubscribe_ServicePlanSubscribe_error | null;
}

export interface servicePlanSubscribe {
  /**
   * 이미 등록된 요금제가 존재한다면 기존 요금제를 해지 후 가입시킴
   */
  ServicePlanSubscribe: servicePlanSubscribe_ServicePlanSubscribe;
}

export interface servicePlanSubscribeVariables {
  servicePlanTemplateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: servicePlanTemplateCreate
// ====================================================

export interface servicePlanTemplateCreate_ServicePlanTemplateCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface servicePlanTemplateCreate_ServicePlanTemplateCreate {
  __typename: "ServicePlanTemplateResponse";
  ok: boolean;
  error: servicePlanTemplateCreate_ServicePlanTemplateCreate_error | null;
}

export interface servicePlanTemplateCreate {
  /**
   * Admin Only
   */
  ServicePlanTemplateCreate: servicePlanTemplateCreate_ServicePlanTemplateCreate;
}

export interface servicePlanTemplateCreateVariables {
  input: ServicePlanTemplateCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: servicePlanTemplateUpdate
// ====================================================

export interface servicePlanTemplateUpdate_ServicePlanTemplateUpdate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface servicePlanTemplateUpdate_ServicePlanTemplateUpdate {
  __typename: "ServicePlanTemplateResponse";
  ok: boolean;
  error: servicePlanTemplateUpdate_ServicePlanTemplateUpdate_error | null;
}

export interface servicePlanTemplateUpdate {
  /**
   * Admin Only
   */
  ServicePlanTemplateUpdate: servicePlanTemplateUpdate_ServicePlanTemplateUpdate;
}

export interface servicePlanTemplateUpdateVariables {
  params: ServicePlanTemplateUpdateInput;
  servicePlanTemplateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: servicePlanTemplateDelete
// ====================================================

export interface servicePlanTemplateDelete_ServicePlanTemplateDelete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface servicePlanTemplateDelete_ServicePlanTemplateDelete {
  __typename: "Response";
  ok: boolean;
  error: servicePlanTemplateDelete_ServicePlanTemplateDelete_error | null;
}

export interface servicePlanTemplateDelete {
  /**
   * Admin Only
   */
  ServicePlanTemplateDelete: servicePlanTemplateDelete_ServicePlanTemplateDelete;
}

export interface servicePlanTemplateDeleteVariables {
  servicePlanTemplateId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: servicePlanTemplateList
// ====================================================

export interface servicePlanTemplateList_ServicePlanTemplateList_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface servicePlanTemplateList_ServicePlanTemplateList {
  __typename: "ServicePlanTemplate";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  billingFrequency: number;
  price: number;
  description: string | null;
  serviceProviderName: string;
  /**
   * 기본적으로 어떤것들을 제공하는지...
   */
  offerResources: (servicePlanTemplateList_ServicePlanTemplateList_offerResources | null)[];
}

export interface servicePlanTemplateList {
  /**
   * 등록 가능한 요금제 목록
   */
  ServicePlanTemplateList: servicePlanTemplateList_ServicePlanTemplateList[];
}

export interface servicePlanTemplateListVariables {
  serviceProviderName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementMallFindByHashId
// ====================================================

export interface settlementMallFindByHashId_SettlementMallFindByHashId {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface settlementMallFindByHashId {
  SettlementMallFindByHashId: settlementMallFindByHashId_SettlementMallFindByHashId | null;
}

export interface settlementMallFindByHashIdVariables {
  hashId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementMallCreate
// ====================================================

export interface settlementMallCreate_SettlementMallCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementMallCreate_SettlementMallCreate_data {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface settlementMallCreate_SettlementMallCreate {
  __typename: "SettlementMallCreateResponse";
  ok: boolean;
  error: settlementMallCreate_SettlementMallCreate_error | null;
  data: settlementMallCreate_SettlementMallCreate_data | null;
}

export interface settlementMallCreate {
  SettlementMallCreate: settlementMallCreate_SettlementMallCreate;
}

export interface settlementMallCreateVariables {
  input: SettlementMallCreateInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementTransfer
// ====================================================

export interface settlementTransfer_SettlementTransfer_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementTransfer_SettlementTransfer_data {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

export interface settlementTransfer_SettlementTransfer {
  __typename: "SettlementTransferResponse";
  ok: boolean;
  error: settlementTransfer_SettlementTransfer_error | null;
  data: settlementTransfer_SettlementTransfer_data | null;
}

export interface settlementTransfer {
  SettlementTransfer: settlementTransfer_SettlementTransfer;
}

export interface settlementTransferVariables {
  input: SettlementTransferInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementPlainTransfer
// ====================================================

export interface settlementPlainTransfer_SettlementPlainTransfer_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementPlainTransfer_SettlementPlainTransfer_data {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

export interface settlementPlainTransfer_SettlementPlainTransfer {
  __typename: "SettlementPlainTransferResponse";
  ok: boolean;
  error: settlementPlainTransfer_SettlementPlainTransfer_error | null;
  data: settlementPlainTransfer_SettlementPlainTransfer_data | null;
}

export interface settlementPlainTransfer {
  SettlementPlainTransfer: settlementPlainTransfer_SettlementPlainTransfer;
}

export interface settlementPlainTransferVariables {
  input: SettlementTransferInput;
  mallHashId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementRefresh
// ====================================================

export interface settlementRefresh_SettlementRefresh_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementRefresh_SettlementRefresh {
  __typename: "Response";
  ok: boolean;
  error: settlementRefresh_SettlementRefresh_error | null;
}

export interface settlementRefresh {
  SettlementRefresh: settlementRefresh_SettlementRefresh;
}

export interface settlementRefreshVariables {
  input: SettlementRefreshInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementTransferCancel
// ====================================================

export interface settlementTransferCancel_SettlementTransferCancel_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementTransferCancel_SettlementTransferCancel_data {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

export interface settlementTransferCancel_SettlementTransferCancel {
  __typename: "SettlementTransferCancelResponse";
  ok: boolean;
  error: settlementTransferCancel_SettlementTransferCancel_error | null;
  data: settlementTransferCancel_SettlementTransferCancel_data | null;
}

export interface settlementTransferCancel {
  SettlementTransferCancel: settlementTransferCancel_SettlementTransferCancel;
}

export interface settlementTransferCancelVariables {
  settlementId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: settlementPlainTransferCancel
// ====================================================

export interface settlementPlainTransferCancel_SettlementPlainTransferCancel_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface settlementPlainTransferCancel_SettlementPlainTransferCancel_data {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

export interface settlementPlainTransferCancel_SettlementPlainTransferCancel {
  __typename: "SettlementPlainTransferCancelResponse";
  ok: boolean;
  error: settlementPlainTransferCancel_SettlementPlainTransferCancel_error | null;
  data: settlementPlainTransferCancel_SettlementPlainTransferCancel_data | null;
}

export interface settlementPlainTransferCancel {
  SettlementPlainTransferCancel: settlementPlainTransferCancel_SettlementPlainTransferCancel;
}

export interface settlementPlainTransferCancelVariables {
  settlementId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementTransferList
// ====================================================

export interface settlementTransferList_SettlementTransferList_pageInfo {
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

export interface settlementTransferList_SettlementTransferList_items {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

export interface settlementTransferList_SettlementTransferList {
  __typename: "OffsetPagenatedSettlementData";
  pageInfo: settlementTransferList_SettlementTransferList_pageInfo;
  items: settlementTransferList_SettlementTransferList_items[];
}

export interface settlementTransferList {
  /**
   * BusinessUser 전용
   */
  SettlementTransferList: settlementTransferList_SettlementTransferList;
}

export interface settlementTransferListVariables {
  sort?: _SettlementSort[] | null;
  filter?: _SettlementFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: settlementMallList
// ====================================================

export interface settlementMallList_SettlementMallList_pageInfo {
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

export interface settlementMallList_SettlementMallList_items {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface settlementMallList_SettlementMallList {
  __typename: "OffsetPagenatedSettlementMallData";
  pageInfo: settlementMallList_SettlementMallList_pageInfo;
  items: settlementMallList_SettlementMallList_items[];
}

export interface settlementMallList {
  /**
   * BusinessUser 전용
   */
  SettlementMallList: settlementMallList_SettlementMallList;
}

export interface settlementMallListVariables {
  sort?: _SettlementMallSort[] | null;
  filter?: _SettlementMallFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: storeCustomerProfile
// ====================================================

export interface storeCustomerProfile_StoreCustomerProfile_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface storeCustomerProfile_StoreCustomerProfile_location {
  __typename: "Location";
  address: string;
}

export interface storeCustomerProfile_StoreCustomerProfile_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeCustomerProfile_StoreCustomerProfile {
  __typename: "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: storeCustomerProfile_StoreCustomerProfile_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: storeCustomerProfile_StoreCustomerProfile_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: storeCustomerProfile_StoreCustomerProfile_zoneinfo;
}

export interface storeCustomerProfile {
  StoreCustomerProfile: storeCustomerProfile_StoreCustomerProfile | null;
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

export interface storeUpdate_StoreUpdate {
  __typename: "StoreUpdateResponse";
  ok: boolean;
  error: storeUpdate_StoreUpdate_error | null;
}

export interface storeUpdate {
  StoreUpdate: storeUpdate_StoreUpdate;
}

export interface storeUpdateVariables {
  input: StoreUpdateInput;
  storeId: any;
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

export interface storeCreate_StoreCreate {
  __typename: "StoreCreateResponse";
  ok: boolean;
  error: storeCreate_StoreCreate_error | null;
}

export interface storeCreate {
  StoreCreate: storeCreate_StoreCreate;
}

export interface storeCreateVariables {
  input: StoreCreateInput;
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

export interface storeDelete_StoreDelete {
  __typename: "Response";
  ok: boolean;
  error: storeDelete_StoreDelete_error | null;
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

export interface storeList_StoreList_items_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface storeList_StoreList_items_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeList_StoreList_items_buypage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface storeList_StoreList_items_buypage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface storeList_StoreList_items_buypage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeList_StoreList_items_buypage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: storeList_StoreList_items_buypage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface storeList_StoreList_items_buypage {
  __typename: "BuyPage";
  delivery: storeList_StoreList_items_buypage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: storeList_StoreList_items_buypage_policies[] | null;
  attrs: storeList_StoreList_items_buypage_attrs[] | null;
  configure: any | null;
  _id: any;
}

export interface storeList_StoreList_items_image {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface storeList_StoreList_items {
  __typename: "Store";
  /**
   * 타입을 가지고 어떤 클라이언트 출력 화면이 가질지 결정됨.
   */
  type: StoreType;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  itemCount: number;
  location: storeList_StoreList_items_location | null;
  zoneinfo: storeList_StoreList_items_zoneinfo | null;
  buypage: storeList_StoreList_items_buypage;
  _id: any;
  createdAt: any;
  updatedAt: any;
  image: storeList_StoreList_items_image | null;
}

export interface storeList_StoreList {
  __typename: "OffsetPagenatedStoreData";
  pageInfo: storeList_StoreList_pageInfo;
  items: storeList_StoreList_items[];
}

export interface storeList {
  /**
   * BusinessUser 전용
   */
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
// GraphQL query operation: storeFindByCode
// ====================================================

export interface storeFindByCode_StoreFindByCode_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface storeFindByCode_StoreFindByCode_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeFindByCode_StoreFindByCode_buypage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface storeFindByCode_StoreFindByCode_buypage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface storeFindByCode_StoreFindByCode_buypage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeFindByCode_StoreFindByCode_buypage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: storeFindByCode_StoreFindByCode_buypage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface storeFindByCode_StoreFindByCode_buypage {
  __typename: "BuyPage";
  delivery: storeFindByCode_StoreFindByCode_buypage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: storeFindByCode_StoreFindByCode_buypage_policies[] | null;
  attrs: storeFindByCode_StoreFindByCode_buypage_attrs[] | null;
  configure: any | null;
  _id: any;
}

export interface storeFindByCode_StoreFindByCode_itemCategories {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: string;
  order: number;
}

export interface storeFindByCode_StoreFindByCode_items_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeFindByCode_StoreFindByCode_items_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: storeFindByCode_StoreFindByCode_items_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface storeFindByCode_StoreFindByCode_items_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface storeFindByCode_StoreFindByCode_items {
  __typename: "ItemBooking" | "ItemGoods" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: storeFindByCode_StoreFindByCode_items_attrs[];
  images: storeFindByCode_StoreFindByCode_items_images[];
}

export interface storeFindByCode_StoreFindByCode {
  __typename: "Store";
  /**
   * 타입을 가지고 어떤 클라이언트 출력 화면이 가질지 결정됨.
   */
  type: StoreType;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  itemCount: number;
  location: storeFindByCode_StoreFindByCode_location | null;
  zoneinfo: storeFindByCode_StoreFindByCode_zoneinfo | null;
  buypage: storeFindByCode_StoreFindByCode_buypage;
  _id: any;
  createdAt: any;
  updatedAt: any;
  itemCategories: storeFindByCode_StoreFindByCode_itemCategories[] | null;
  items: storeFindByCode_StoreFindByCode_items[] | null;
}

export interface storeFindByCode {
  /**
   * Store에 Public하게 접근시 사용함
   */
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
// GraphQL query operation: storeFindById
// ====================================================

export interface storeFindById_StoreFindById_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface storeFindById_StoreFindById_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeFindById_StoreFindById_buypage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface storeFindById_StoreFindById_buypage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface storeFindById_StoreFindById_buypage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface storeFindById_StoreFindById_buypage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: storeFindById_StoreFindById_buypage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface storeFindById_StoreFindById_buypage {
  __typename: "BuyPage";
  delivery: storeFindById_StoreFindById_buypage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: storeFindById_StoreFindById_buypage_policies[] | null;
  attrs: storeFindById_StoreFindById_buypage_attrs[] | null;
  configure: any | null;
  _id: any;
}

export interface storeFindById_StoreFindById {
  __typename: "Store";
  /**
   * 타입을 가지고 어떤 클라이언트 출력 화면이 가질지 결정됨.
   */
  type: StoreType;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  itemCount: number;
  location: storeFindById_StoreFindById_location | null;
  zoneinfo: storeFindById_StoreFindById_zoneinfo | null;
  buypage: storeFindById_StoreFindById_buypage;
  _id: any;
  createdAt: any;
  updatedAt: any;
}

export interface storeFindById {
  StoreFindById: storeFindById_StoreFindById | null;
}

export interface storeFindByIdVariables {
  storeId: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: systemNotiList
// ====================================================

export interface systemNotiList_SystemNotiList_pageInfo {
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

export interface systemNotiList_SystemNotiList_items {
  __typename: "SystemNoti";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

export interface systemNotiList_SystemNotiList {
  __typename: "OffsetPagenatedSystemNotiData";
  pageInfo: systemNotiList_SystemNotiList_pageInfo;
  items: systemNotiList_SystemNotiList_items[];
}

export interface systemNotiList {
  SystemNotiList: systemNotiList_SystemNotiList;
}

export interface systemNotiListVariables {
  sort?: _SystemNotiSort[] | null;
  filter?: _SystemNotiFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiRead
// ====================================================

export interface systemNotiRead_SystemNotiRead_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface systemNotiRead_SystemNotiRead {
  __typename: "SystemNotiReadResponse";
  ok: boolean;
  error: systemNotiRead_SystemNotiRead_error | null;
}

export interface systemNotiRead {
  SystemNotiRead: systemNotiRead_SystemNotiRead;
}

export interface systemNotiReadVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: systemNotiHide
// ====================================================

export interface systemNotiHide_SystemNotiHide_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface systemNotiHide_SystemNotiHide {
  __typename: "SystemNotiHideResponse";
  ok: boolean;
  error: systemNotiHide_SystemNotiHide_error | null;
}

export interface systemNotiHide {
  SystemNotiHide: systemNotiHide_SystemNotiHide;
}

export interface systemNotiHideVariables {
  ids: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: SystemNotiCreate
// ====================================================

export interface SystemNotiCreate_SystemNotiCreate_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface SystemNotiCreate_SystemNotiCreate {
  __typename: "SystemNotiCreateResponse";
  ok: boolean;
  error: SystemNotiCreate_SystemNotiCreate_error | null;
}

export interface SystemNotiCreate {
  SystemNotiCreate: SystemNotiCreate_SystemNotiCreate;
}

export interface SystemNotiCreateVariables {
  message: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: businessUserResetPassword
// ====================================================

export interface businessUserResetPassword_BusinessUserResetPassword_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface businessUserResetPassword_BusinessUserResetPassword {
  __typename: "BusinessUserResetPasswordResponse";
  ok: boolean;
  error: businessUserResetPassword_BusinessUserResetPassword_error | null;
}

export interface businessUserResetPassword {
  BusinessUserResetPassword: businessUserResetPassword_BusinessUserResetPassword;
}

export interface businessUserResetPasswordVariables {
  newPassword: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerResetPassword
// ====================================================

export interface customerResetPassword_CustomerResetPassword_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface customerResetPassword_CustomerResetPassword_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface customerResetPassword_CustomerResetPassword_data_location {
  __typename: "Location";
  address: string;
}

export interface customerResetPassword_CustomerResetPassword_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface customerResetPassword_CustomerResetPassword_data {
  __typename: "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: customerResetPassword_CustomerResetPassword_data_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: customerResetPassword_CustomerResetPassword_data_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: customerResetPassword_CustomerResetPassword_data_zoneinfo;
}

export interface customerResetPassword_CustomerResetPassword {
  __typename: "CustomerResetPasswordResponse";
  ok: boolean;
  error: customerResetPassword_CustomerResetPassword_error | null;
  data: customerResetPassword_CustomerResetPassword_data | null;
}

export interface customerResetPassword {
  CustomerResetPassword: customerResetPassword_CustomerResetPassword;
}

export interface customerResetPasswordVariables {
  newPassword: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: businessUserFindEmail
// ====================================================

export interface businessUserFindEmail_BusinessUserFindEmail_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_location {
  __typename: "Location";
  address: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_billingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_subscribPlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_subscribPlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: businessUserFindEmail_BusinessUserFindEmail_data_subscribPlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_settlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: businessUserFindEmail_BusinessUserFindEmail_data_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: businessUserFindEmail_BusinessUserFindEmail_data_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: businessUserFindEmail_BusinessUserFindEmail_data_zoneinfo;
  billingMethod: businessUserFindEmail_BusinessUserFindEmail_data_billingMethod[] | null;
  subscribPlan: businessUserFindEmail_BusinessUserFindEmail_data_subscribPlan | null;
  settlementMall: businessUserFindEmail_BusinessUserFindEmail_data_settlementMall | null;
}

export interface businessUserFindEmail_BusinessUserFindEmail {
  __typename: "BusinessUserFindEmailResponse";
  ok: boolean;
  error: businessUserFindEmail_BusinessUserFindEmail_error | null;
  data: businessUserFindEmail_BusinessUserFindEmail_data | null;
}

export interface businessUserFindEmail {
  BusinessUserFindEmail: businessUserFindEmail_BusinessUserFindEmail;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: customerFindEmail
// ====================================================

export interface customerFindEmail_CustomerFindEmail_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface customerFindEmail_CustomerFindEmail {
  __typename: "CustomerFindEmailResponse";
  ok: boolean;
  error: customerFindEmail_CustomerFindEmail_error | null;
}

export interface customerFindEmail {
  CustomerFindEmail: customerFindEmail_CustomerFindEmail;
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

export interface signUp_SignUp {
  __typename: "SignUpResponse";
  ok: boolean;
  error: signUp_SignUp_error | null;
}

export interface signUp {
  SignUp: signUp_SignUp;
}

export interface signUpVariables {
  input: SignUpInput;
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

export interface signIn_SignIn {
  __typename: "SignInResponse";
  ok: boolean;
  error: signIn_SignIn_error | null;
}

export interface signIn {
  SignIn: signIn_SignIn;
}

export interface signInVariables {
  input: SignInInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeSignInAnonymousStart
// ====================================================

export interface storeSignInAnonymousStart_StoreSignInAnonymousStart_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeSignInAnonymousStart_StoreSignInAnonymousStart_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface storeSignInAnonymousStart_StoreSignInAnonymousStart {
  __typename: "StoreSignInAnonymousResponse";
  ok: boolean;
  error: storeSignInAnonymousStart_StoreSignInAnonymousStart_error | null;
  data: storeSignInAnonymousStart_StoreSignInAnonymousStart_data | null;
}

export interface storeSignInAnonymousStart {
  StoreSignInAnonymousStart: storeSignInAnonymousStart_StoreSignInAnonymousStart;
}

export interface storeSignInAnonymousStartVariables {
  input: StoreSignInAnonymousStartInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: storeSignInAnonymousComplete
// ====================================================

export interface storeSignInAnonymousComplete_StoreSignInAnonymousComplete_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface storeSignInAnonymousComplete_StoreSignInAnonymousComplete_data {
  __typename: "Verification";
  _id: any;
  createdAt: any;
  updatedAt: any;
  payload: string;
  target: VerificationTarget;
  isVerified: boolean;
  /**
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

export interface storeSignInAnonymousComplete_StoreSignInAnonymousComplete {
  __typename: "StoreSignInAnonymousCompleteResponse";
  ok: boolean;
  error: storeSignInAnonymousComplete_StoreSignInAnonymousComplete_error | null;
  data: storeSignInAnonymousComplete_StoreSignInAnonymousComplete_data | null;
}

export interface storeSignInAnonymousComplete {
  StoreSignInAnonymousComplete: storeSignInAnonymousComplete_StoreSignInAnonymousComplete;
}

export interface storeSignInAnonymousCompleteVariables {
  input: StoreSignInAnonymousCompleteInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: me
// ====================================================

export interface me_Me_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface me_Me_location {
  __typename: "Location";
  address: string;
}

export interface me_Me_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface me_Me_billingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

export interface me_Me_subscribPlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface me_Me_subscribPlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: me_Me_subscribPlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

export interface me_Me_settlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface me_Me_stores_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface me_Me_stores_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface me_Me_stores_buypage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface me_Me_stores_buypage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface me_Me_stores_buypage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface me_Me_stores_buypage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: me_Me_stores_buypage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface me_Me_stores_buypage {
  __typename: "BuyPage";
  delivery: me_Me_stores_buypage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: me_Me_stores_buypage_policies[] | null;
  attrs: me_Me_stores_buypage_attrs[] | null;
  configure: any | null;
  _id: any;
}

export interface me_Me_stores_items {
  __typename: "ItemBooking" | "ItemGoods" | "ItemService";
  _id: any;
  name: string;
}

export interface me_Me_stores {
  __typename: "Store";
  /**
   * 타입을 가지고 어떤 클라이언트 출력 화면이 가질지 결정됨.
   */
  type: StoreType;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  itemCount: number;
  location: me_Me_stores_location | null;
  zoneinfo: me_Me_stores_zoneinfo | null;
  buypage: me_Me_stores_buypage;
  _id: any;
  createdAt: any;
  updatedAt: any;
  items: me_Me_stores_items[] | null;
}

export interface me_Me {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: me_Me_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: me_Me_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: me_Me_zoneinfo;
  billingMethod: me_Me_billingMethod[] | null;
  subscribPlan: me_Me_subscribPlan | null;
  settlementMall: me_Me_settlementMall | null;
  stores: me_Me_stores[];
}

export interface me {
  /**
   * 비지니스 유저용
   */
  Me: me_Me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: superMe
// ====================================================

export interface superMe_SuperMe_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface superMe_SuperMe_location {
  __typename: "Location";
  address: string;
}

export interface superMe_SuperMe_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface superMe_SuperMe {
  __typename: "SuperAdmin";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: superMe_SuperMe_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: superMe_SuperMe_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: superMe_SuperMe_zoneinfo;
}

export interface superMe {
  /**
   * 슈퍼 유저용
   */
  SuperMe: superMe_SuperMe | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: myNotificationManager
// ====================================================

export interface myNotificationManager_MyNotificationManager_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface myNotificationManager_MyNotificationManager_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: myNotificationManager_MyNotificationManager_senders_files[];
  isRegisteredToAligo: boolean;
  createdAt: any;
}

export interface myNotificationManager_MyNotificationManager {
  __typename: "NotificationManager";
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: myNotificationManager_MyNotificationManager_senders[];
}

export interface myNotificationManager {
  /**
   * 비지니스 유저용
   */
  MyNotificationManager: myNotificationManager_MyNotificationManager | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: profile
// ====================================================

export interface profile_Profile_SuperAdmin_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface profile_Profile_SuperAdmin_location {
  __typename: "Location";
  address: string;
}

export interface profile_Profile_SuperAdmin_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface profile_Profile_SuperAdmin {
  __typename: "SuperAdmin" | "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: profile_Profile_SuperAdmin_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: profile_Profile_SuperAdmin_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: profile_Profile_SuperAdmin_zoneinfo;
}

export interface profile_Profile_BusinessUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface profile_Profile_BusinessUser_location {
  __typename: "Location";
  address: string;
}

export interface profile_Profile_BusinessUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface profile_Profile_BusinessUser_billingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

export interface profile_Profile_BusinessUser_subscribPlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface profile_Profile_BusinessUser_subscribPlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: profile_Profile_BusinessUser_subscribPlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

export interface profile_Profile_BusinessUser_settlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface profile_Profile_BusinessUser {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: profile_Profile_BusinessUser_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: profile_Profile_BusinessUser_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: profile_Profile_BusinessUser_zoneinfo;
  billingMethod: profile_Profile_BusinessUser_billingMethod[] | null;
  subscribPlan: profile_Profile_BusinessUser_subscribPlan | null;
  settlementMall: profile_Profile_BusinessUser_settlementMall | null;
}

export type profile_Profile = profile_Profile_SuperAdmin | profile_Profile_BusinessUser;

export interface profile {
  /**
   * 세션에 계정이 여러개 저장될 수 있으므로 이 함수가 필요하다.
   */
  Profile: profile_Profile;
}

export interface profileVariables {
  role: UserRole;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userDuplicateCheck
// ====================================================

export interface userDuplicateCheck_UserDuplicateCheck {
  __typename: "DuplicateCheckResponse";
  duplicated: boolean;
}

export interface userDuplicateCheck {
  UserDuplicateCheck: userDuplicateCheck_UserDuplicateCheck;
}

export interface userDuplicateCheckVariables {
  role: UserRole;
  target: string;
  value: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL mutation operation: profileUpdateForBusinessUser
// ====================================================

export interface profileUpdateForBusinessUser_ProfileUpdateForBusinessUser_error {
  __typename: "UserError";
  code: string | null;
  message: string;
  /**
   * 다음과 같은 포멧으로 출력됨 => ${FIELD}: ${VALIDATION_FAIL_MESSAGE}
   */
  details: string[] | null;
}

export interface profileUpdateForBusinessUser_ProfileUpdateForBusinessUser {
  __typename: "ProfileUpdateResponse";
  ok: boolean;
  error: profileUpdateForBusinessUser_ProfileUpdateForBusinessUser_error | null;
}

export interface profileUpdateForBusinessUser {
  ProfileUpdateForBusinessUser: profileUpdateForBusinessUser_ProfileUpdateForBusinessUser;
}

export interface profileUpdateForBusinessUserVariables {
  input: ProfileUpdateForBusinessUserInput;
  pw: string;
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
}

export interface storeSignUp_StoreSignUp_data_location {
  __typename: "Location";
  address: string;
}

export interface storeSignUp_StoreSignUp_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeSignUp_StoreSignUp_data {
  __typename: "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: storeSignUp_StoreSignUp_data_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: storeSignUp_StoreSignUp_data_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: storeSignUp_StoreSignUp_data_zoneinfo;
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
  input: StoreSignUpInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: userList
// ====================================================

export interface userList_UserList_pageInfo {
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

export interface userList_UserList_items_SuperAdmin_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface userList_UserList_items_SuperAdmin_location {
  __typename: "Location";
  address: string;
}

export interface userList_UserList_items_SuperAdmin_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface userList_UserList_items_SuperAdmin {
  __typename: "SuperAdmin" | "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: userList_UserList_items_SuperAdmin_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: userList_UserList_items_SuperAdmin_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: userList_UserList_items_SuperAdmin_zoneinfo;
}

export interface userList_UserList_items_BusinessUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface userList_UserList_items_BusinessUser_location {
  __typename: "Location";
  address: string;
}

export interface userList_UserList_items_BusinessUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface userList_UserList_items_BusinessUser_billingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

export interface userList_UserList_items_BusinessUser_subscribPlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface userList_UserList_items_BusinessUser_subscribPlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: userList_UserList_items_BusinessUser_subscribPlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

export interface userList_UserList_items_BusinessUser_settlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface userList_UserList_items_BusinessUser {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: userList_UserList_items_BusinessUser_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: userList_UserList_items_BusinessUser_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: userList_UserList_items_BusinessUser_zoneinfo;
  billingMethod: userList_UserList_items_BusinessUser_billingMethod[] | null;
  subscribPlan: userList_UserList_items_BusinessUser_subscribPlan | null;
  settlementMall: userList_UserList_items_BusinessUser_settlementMall | null;
}

export type userList_UserList_items = userList_UserList_items_SuperAdmin | userList_UserList_items_BusinessUser;

export interface userList_UserList {
  __typename: "OffsetPagenatedIUserData";
  pageInfo: userList_UserList_pageInfo;
  items: userList_UserList_items[];
}

export interface userList {
  /**
   * Admin 전용
   */
  UserList: userList_UserList;
}

export interface userListVariables {
  sort?: _IUserSort[] | null;
  filter?: _IUserFilter | null;
  pagingInput: OffsetPagingInput;
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
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
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
  input: VerificationStartInput;
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
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
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
  input: VerificationCompleteInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbillingMethod
// ====================================================

export interface FbillingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fboard
// ====================================================

export interface Fboard_inputs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fboard_inputs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fboard_inputs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fboard {
  __typename: "Board";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  fields: string[];
  writePermission: UserRole[];
  readPermission: UserRole[];
  inputs: Fboard_inputs[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FboardDoc
// ====================================================

export interface FboardDoc_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FboardDoc_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FboardDoc_attachFiles {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FboardDoc_thumb {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FboardDoc_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FboardDoc {
  __typename: "BoardDoc";
  _id: any;
  createdAt: any;
  updatedAt: any;
  title: string;
  contents: string;
  authorName: string;
  authorRole: string;
  isNotice: boolean | null;
  attrs: FboardDoc_attrs[];
  isOpen: boolean | null;
  summary: string | null;
  subTitle: string | null;
  keyWards: string[] | null;
  attachFiles: FboardDoc_attachFiles[] | null;
  thumb: FboardDoc_thumb | null;
  viewCount: number;
  likeCount: number;
  slug: string;
  tags: FboardDoc_tags[];
  boardKey: string;
  _boardId: any;
  boardName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpolicy
// ====================================================

export interface Fpolicy {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbuyPage
// ====================================================

export interface FbuyPage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface FbuyPage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface FbuyPage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FbuyPage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FbuyPage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FbuyPage {
  __typename: "BuyPage";
  delivery: FbuyPage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: FbuyPage_policies[] | null;
  attrs: FbuyPage_attrs[] | null;
  configure: any | null;
  _id: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcategory
// ====================================================

export interface Fcategory {
  __typename: "Category";
  _id: any;
  updatedAt: any;
  createdAt: any;
  type: CategoryType;
  label: string;
  order: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FserviceUsageDetails
// ====================================================

export interface FserviceUsageDetails {
  __typename: "ServiceUsageDetails";
  type: ServiceUsageType;
  action: Action;
  isBillingTarget: boolean;
  count: number;
  amount: number;
  servicePricingHashId: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Finvoice
// ====================================================

export interface Finvoice_serviceUsageDetails {
  __typename: "ServiceUsageDetails";
  type: ServiceUsageType;
  action: Action;
  isBillingTarget: boolean;
  count: number;
  amount: number;
  servicePricingHashId: string;
}

export interface Finvoice_summaryTotal {
  __typename: "ServiceUsageDetailSummary";
  /**
   * 요금제를 적용한 후 가격
   */
  amount: number;
  /**
   * 요금제를 적용하기 전 가격을 말함.
   */
  amountOrigin: number;
  /**
   * 몇개의 항목에 대해서 과금된건지
   */
  count: number;
}

export interface Finvoice {
  __typename: "Invoice";
  year: number;
  month: number;
  yyyymm: number;
  hashId: string;
  currency: Currency;
  /**
   * Invoice 결제 상태를 말함.
   */
  status: InvoiceStatus;
  unpaidReason: string | null;
  billingAt: any | null;
  expectedBillingDayOfMonth: number | null;
  isBilled: boolean;
  serviceUsageDetails: Finvoice_serviceUsageDetails[];
  /**
   * 사용량 최종 요약
   */
  summaryTotal: Finvoice_summaryTotal;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FservicePlan
// ====================================================

export interface FservicePlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface FservicePlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: FservicePlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fitem
// ====================================================

export interface Fitem_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fitem_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fitem_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fitem_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface Fitem {
  __typename: "ItemBooking" | "ItemGoods" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: Fitem_attrs[];
  images: Fitem_images[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FitemBooking
// ====================================================

export interface FitemBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FitemBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FitemBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FitemBooking_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FitemBooking {
  __typename: "ItemBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: FitemBooking_attrs[];
  images: FitemBooking_images[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FitemGoods
// ====================================================

export interface FitemGoods_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FitemGoods_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FitemGoods_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FitemGoods_images {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FitemGoods {
  __typename: "ItemGoods";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  thumbNail: string | null;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  code: string;
  categoryName: string | null;
  currency: Currency;
  keywards: string[];
  productCount: number;
  description: string;
  categoryId: any | null;
  /**
   * HTML정보
   */
  descriptionDetail: string;
  attrs: FitemGoods_attrs[];
  images: FitemGoods_images[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationSender
// ====================================================

export interface FnotificationSender_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FnotificationSender {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: FnotificationSender_files[];
  isRegisteredToAligo: boolean;
  createdAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationManager
// ====================================================

export interface FnotificationManager_senders_files {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface FnotificationManager_senders {
  __typename: "NotificationSender";
  type: NotificationMethod;
  label: string | null;
  sender: string;
  isVerified: boolean;
  files: FnotificationManager_senders_files[];
  isRegisteredToAligo: boolean;
  createdAt: any;
}

export interface FnotificationManager {
  __typename: "NotificationManager";
  /**
   * 건당 비용. 단위는 KRW
   */
  emailPricing: number;
  currency: Currency;
  /**
   * Email, SMS 뭘로 보내든 포인트 차감
   */
  pointRemains: number;
  senders: FnotificationManager_senders[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationHistoryItem
// ====================================================

export interface FnotificationHistoryItem {
  __typename: "SmsHistoryItem" | "EmailHistoryItem";
  _id: any;
  createdAt: any;
  updatedAt: any;
  method: NotificationMethod;
  sender: string;
  receivers: string[];
  title: string | null;
  /**
   * Template에서 변수가 치환되지 않은 채로 출력 될 수 있음.
   */
  content: string;
  count: number;
  successCount: number;
  errorCount: number;
  /**
   * 전송 후 남은 포인트
   */
  pointRemains: number;
  /**
   * 포인트 소모량
   */
  pointConsumed: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationTrigger
// ====================================================

export interface FnotificationTrigger_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FnotificationTrigger {
  __typename: "NotificationTrigger";
  sender: string;
  event: NotificationTriggerEvent;
  storeIds: any[];
  isEnabled: boolean;
  tags: FnotificationTrigger_tags[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationTemplate
// ====================================================

export interface FnotificationTemplate {
  __typename: "TemplateSms" | "TemplateEmail";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  content: string;
  notificationMethod: NotificationMethod;
  replacers: string[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpaymentoption
// ====================================================

export interface Fpaymentoption_commission {
  __typename: "CommissionTable";
  forCard: number;
  forBankTransfer: number;
}

export interface Fpaymentoption {
  __typename: "PaymentOption";
  authDate: any | null;
  isAuthorized: boolean | null;
  commission: Fpaymentoption_commission;
  enabledPaymethods: Paymethod[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FbaseTransaction
// ====================================================

export interface FbaseTransaction {
  __typename: "TransactionPayment" | "TransactionRefund";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: TransactionStatus;
  type: TrxUpdatedType;
  paymethod: Paymethod;
  price: number;
  currency: Currency;
  message: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnicepayBillpayResult
// ====================================================

export interface FnicepayBillpayResult {
  __typename: "NicepayBillpayResult";
  /**
   * 3001이면 성공임
   */
  resultCode: string;
  resultMsg: string;
  cardName: string;
  /**
   * 부가세
   */
  goodsVat: number;
  /**
   * 공급가액
   */
  supplyAmt: number;
  amt: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fcapacity
// ====================================================

export interface Fcapacity {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcapacitySummary
// ====================================================

export interface FcapacitySummary {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fproduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fproduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fproduct {
  __typename: "ProductBooking" | "ProductGoods";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: Fproduct_attrs[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductBooking
// ====================================================

export interface FproductBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FproductBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FproductBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FproductBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface FproductBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface FproductBooking_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface FproductBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface FproductBooking {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: FproductBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: FproductBooking_dateRangeForSale | null;
  /**
   * 상품 사용 기간. or 이용 시간 몇시~몇시까지?(고정임)
   */
  dateRangeForUse: FproductBooking_dateRangeForUse | null;
  itemCode: string;
  itemName: string;
  _itemId: any;
  currency: Currency;
  price: number;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number | null;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
  /**
   * 어떤 타입의 Capacity가 몇개 들어갈 수 있는지 정의함
   */
  capacityDetails: FproductBooking_capacityDetails[];
  usageDetails: FproductBooking_usageDetails[];
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductBookingTemplate
// ====================================================

export interface FproductBookingTemplate_timeRangeForUse {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface FproductBookingTemplate_timeRangeForSale {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface FproductBookingTemplate_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface FproductBookingTemplate {
  __typename: "ProductBookingTemplate";
  capacity: number;
  capacityPick: number | null;
  price: number;
  currency: Currency | null;
  timeRangeForUse: FproductBookingTemplate_timeRangeForUse;
  timeRangeForSale: FproductBookingTemplate_timeRangeForSale | null;
  capacityDetails: FproductBookingTemplate_capacityDetails[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FproductAutomator
// ====================================================

export interface FproductAutomator_templates_timeRangeForUse {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface FproductAutomator_templates_timeRangeForSale {
  __typename: "TimeRange";
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  start: number;
  /**
   * 4자리 숫자. 앞 2자리 = 시간, 뒤 2자리 = 분
   */
  end: number;
}

export interface FproductAutomator_templates_capacityDetails {
  __typename: "Capacity";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface FproductAutomator_templates {
  __typename: "ProductBookingTemplate";
  capacity: number;
  capacityPick: number | null;
  price: number;
  currency: Currency | null;
  timeRangeForUse: FproductAutomator_templates_timeRangeForUse;
  timeRangeForSale: FproductAutomator_templates_timeRangeForSale | null;
  capacityDetails: FproductAutomator_templates_capacityDetails[];
}

export interface FproductAutomator {
  __typename: "ProductAutomatorBooking";
  _id: any;
  updatedAt: any;
  createdAt: any;
  latestGenerate: any | null;
  latestDestroy: any | null;
  isDisabled: boolean | null;
  name: string;
  description: string | null;
  type: ProductType;
  targetItemId: any;
  targetItemName: string;
  ownerId: any;
  /**
   * 이 템플릿을 반복 생성함 하루씩 더해서 생성함
   */
  templates: FproductAutomator_templates[];
  /**
   * 현재날짜 기준으로 몇일 앞까지 인가
   */
  countDate: number;
  exceptedDayOfWeeks: DayOfWeek[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fbooking
// ====================================================

export interface Fbooking_countDetails {
  __typename: "Usage";
  /**
   * User에게는 표시되지 않고 Front쪽에서 임의로 사용하는 Key 같은 아이... 변수이름 정도로 생각하면됨!
   */
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface Fbooking {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  countDetails: Fbooking_countDetails[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpurchase
// ====================================================

export interface Fpurchase_purchasedProduct_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fpurchase_purchasedProduct_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fpurchase_purchasedProduct_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fpurchase_purchasedProduct {
  __typename: "ProductBooking" | "ProductGoods";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * item에서 설정한 필드값
   */
  attrs: Fpurchase_purchasedProduct_attrs[];
}

export interface Fpurchase {
  __typename: "Booking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  message: string | null;
  status: Status;
  isPaymentCompleted: boolean | null;
  /**
   * Booking의 경우 Count에 입력하는게 아니라 countDetails에 입력해야함. (Booking.count = countDetails.count의 합)
   */
  count: number;
  type: ItemType;
  paymentTimeExpired: boolean;
  itemName: string;
  purchaserName: string;
  purchaserContact: string;
  /**
   * 구매 내용 조회 및 필터를 하기위한
   */
  purchasedProduct: Fpurchase_purchasedProduct;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpurchasebundle
// ====================================================

export interface Fpurchasebundle_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fpurchasebundle_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fpurchasebundle_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fpurchasebundle_devlieryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
}

export interface Fpurchasebundle {
  __typename: "PurchaseBundle";
  _id: any;
  createdAt: any;
  updatedAt: any;
  status: Status;
  paymentStatus: Status;
  refundStatus: Status | null;
  paymethod: Paymethod;
  paymentExpiresAt: any | null;
  currency: Currency | null;
  pricePaymentPending: number;
  pricePaymentCompleted: number;
  priceRefundPending: number;
  priceRefundCompleted: number;
  isFullRefunded: boolean | null;
  isRefundedPartial: boolean | null;
  code: string;
  sellerMemo: string | null;
  message: string | null;
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  purchaserMessage: string | null;
  paymentAt: any | null;
  purchaserName: string;
  purchaserContact: string;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
  attrs: Fpurchasebundle_attrs[] | null;
  devlieryInfo: Fpurchasebundle_devlieryInfo | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FserviceOfferResource
// ====================================================

export interface FserviceOfferResource {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FservicePlanTemplate
// ====================================================

export interface FservicePlanTemplate_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface FservicePlanTemplate {
  __typename: "ServicePlanTemplate";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  billingFrequency: number;
  price: number;
  description: string | null;
  serviceProviderName: string;
  /**
   * 기본적으로 어떤것들을 제공하는지...
   */
  offerResources: (FservicePlanTemplate_offerResources | null)[];
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fsettlement
// ====================================================

export interface Fsettlement {
  __typename: "Settlement";
  _id: any;
  createdAt: any;
  updatedAt: any;
  /**
   * 얼마?
   */
  amount: number;
  message: string | null;
  settlementDate: any;
  submallId: string;
  sequence: string;
  canceledAt: any | null;
  status: Status;
  accountHolder: string;
  /**
   * 마스킹 되어있음.
   */
  accountNumber: string;
  bankCode: BankCode;
  latestRefresh: any;
  settlementMallHashId: string | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsettlementMall
// ====================================================

export interface FsettlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsettlementMallPlain
// ====================================================

export interface FsettlementMallPlain {
  __typename: "SettlementMallPlain";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FcollectionDataInterface
// ====================================================

export interface FcollectionDataInterface {
  __typename: "File" | "Verification" | "ServicePricing" | "ServiceUsage" | "Category" | "Policy" | "BuyPage" | "Store" | "SystemNoti" | "PurchaseBundle" | "Settlement" | "ServicePlan" | "Invoice" | "ServicePlanTemplate" | "Board" | "BoardDoc" | "BillingMethod" | "ProductAutomatorBooking" | "Billing" | "SuperAdmin" | "TransactionPayment" | "TransactionRefund" | "TemplateSms" | "TemplateEmail" | "BusinessUser" | "SmsHistoryItem" | "EmailHistoryItem" | "Customer" | "ItemBooking" | "ProductBooking" | "Booking" | "SettlementMallPlain" | "SettlementMall" | "ItemGoods" | "ProductGoods" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fdelivery
// ====================================================

export interface Fdelivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FdeliveryInfo
// ====================================================

export interface FdeliveryInfo {
  __typename: "DeliveryInfo";
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryStatus: Status;
  deliveryNumber: string | null;
  deliveryPrice: number;
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
// GraphQL fragment: Flocation
// ====================================================

export interface Flocation {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
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
   * 어떤 액션을 위해 인증을 하는 것인지 표시	 - ex) UserVerifyPhone, UserVerifyEmail, UserFindPassword, UserFindEmail, UserUpdateInfo
   */
  event: VerificationEvent;
  storeId: any | null;
  expiresAt: any;
  isExpire: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Ffile
// ====================================================

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
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fattribute
// ====================================================

export interface Fattribute_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fattribute {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fattribute_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fstore
// ====================================================

export interface Fstore_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface Fstore_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fstore_buypage_delivery {
  __typename: "Delivery";
  fee: number | null;
  overFreePrice: number | null;
  lowerPrice: number | null;
}

export interface Fstore_buypage_policies {
  __typename: "Policy";
  _id: any;
  createdAt: any;
  updatedAt: any;
  key: string;
  name: string;
  content: string;
  version: number;
  require: boolean;
}

export interface Fstore_buypage_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Fstore_buypage_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: Fstore_buypage_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface Fstore_buypage {
  __typename: "BuyPage";
  delivery: Fstore_buypage_delivery | null;
  /**
   * 대표 폴리시
   */
  policies: Fstore_buypage_policies[] | null;
  attrs: Fstore_buypage_attrs[] | null;
  configure: any | null;
  _id: any;
}

export interface Fstore {
  __typename: "Store";
  /**
   * 타입을 가지고 어떤 클라이언트 출력 화면이 가질지 결정됨.
   */
  type: StoreType;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  itemCount: number;
  location: Fstore_location | null;
  zoneinfo: Fstore_zoneinfo | null;
  buypage: Fstore_buypage;
  _id: any;
  createdAt: any;
  updatedAt: any;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Frange
// ====================================================

export interface Frange {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsummaryBooking
// ====================================================

export interface FsummaryBooking__id {
  __typename: "SummaryItemBookingId";
  itemId: any;
  productId: any;
}

export interface FsummaryBooking_usageDetails {
  __typename: "CapacitySummary";
  key: string;
  label: string;
  capacityCount: number;
  usage: number;
  /**
   * 1을 기준으로 소수점 3자리까지 출력. 곱하기 100해서 사용할것
   */
  usageRatio: number;
  /**
   * Product에 등록되어있는 가격임.
   */
  price: number;
}

export interface FsummaryBooking_attrs_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface FsummaryBooking_attrs {
  __typename: "Attribute";
  /**
   * 기타 옵션값
   */
  tags: FsummaryBooking_attrs_tags[] | null;
  /**
   * 이건 예약시 받는 값
   */
  value: string | null;
  placeHolder: string | null;
  default: string | null;
  require: boolean | null;
  options: string[] | null;
  label: string | null;
  key: string;
  displayType: DisplayType;
}

export interface FsummaryBooking_dateRangeForSale {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface FsummaryBooking_dateRangeForUse {
  __typename: "DateRange";
  from: any | null;
  to: any | null;
}

export interface FsummaryBooking {
  __typename: "SummaryItemBooking";
  _id: FsummaryBooking__id;
  /**
   * 현재 item의 variant에 대한 사용수
   */
  usage: number;
  /**
   * 현재 Item의 variant에 대한 사용율. 1을 기준으로 계산
   */
  usageRatio: number | null;
  usageDetails: FsummaryBooking_usageDetails[];
  type: ItemType;
  price: number;
  currency: Currency;
  /**
   * Item에서 정의된 필드들
   */
  attrs: FsummaryBooking_attrs[];
  disabled: boolean | null;
  /**
   * 판매 기간. null 인경우 항상 판매.
   */
  dateRangeForSale: FsummaryBooking_dateRangeForSale | null;
  /**
   * 사용 기간. (고정임)
   */
  dateRangeForUse: FsummaryBooking_dateRangeForUse | null;
  /**
   * PurchaseBooking.Count를 이용하여 검증함
   */
  capacity: number;
  /**
   * 한번 예약시 선택 가능한 수. null 이면 제한 없음..
   */
  capacityPick: number | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FsystemNoti
// ====================================================

export interface FsystemNoti {
  __typename: "SystemNoti";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: SystemNotiType;
  /**
   * html
   */
  content: string;
  isRead: boolean;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_SuperAdmin_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface Fuser_SuperAdmin_location {
  __typename: "Location";
  address: string;
}

export interface Fuser_SuperAdmin_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fuser_SuperAdmin {
  __typename: "SuperAdmin" | "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: Fuser_SuperAdmin_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: Fuser_SuperAdmin_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: Fuser_SuperAdmin_zoneinfo;
}

export interface Fuser_BusinessUser_profileImage {
  __typename: "File";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string | null;
  extension: string;
  fileType: string | null;
  uri: string;
}

export interface Fuser_BusinessUser_location {
  __typename: "Location";
  address: string;
}

export interface Fuser_BusinessUser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fuser_BusinessUser_billingMethod {
  __typename: "BillingMethod";
  _id: any;
  updatedAt: any;
  createdAt: any;
  /**
   * 마스킹된 카드번호
   */
  cardNo: string;
  /**
   * 카드사
   */
  cardName: string;
  /**
   * 신용카드? 체크카드?
   */
  cardType: CardType;
  billkeyStatus: BillkeyStatus;
  description: string;
}

export interface Fuser_BusinessUser_subscribPlan_offerResources {
  __typename: "ServiceOfferResource";
  serviceUsageType: ServiceUsageType;
  action: Action;
  /**
   * 제공량
   */
  offerCount: number;
  /**
   * 무제한?
   */
  isFree: boolean | null;
  description: string | null;
  serviceProviderName: string;
}

export interface Fuser_BusinessUser_subscribPlan {
  __typename: "ServicePlan";
  _id: any;
  name: string;
  price: number;
  /**
   * 결제 주기 => '달(Month)' 단위, (default = 1)
   */
  billingFrequency: number | null;
  /**
   * 가입시 제공되는 기본 서비스 리소스 사용량
   */
  offerResources: Fuser_BusinessUser_subscribPlan_offerResources[];
  _servicePlanTemplateId: string;
  description: string | null;
  serviceProviderName: string;
  isDesubscribed: boolean | null;
  /**
   * 구독 취소일
   */
  desubscribedAt: any | null;
}

export interface Fuser_BusinessUser_settlementMall {
  __typename: "SettlementMall";
  _id: any;
  createdAt: any;
  updatedAt: any;
  submallId: string;
  submallName: string;
  brcNumber: string;
  hashId: string;
  description: string | null;
  accountHolder: string;
  accountNumber: string;
  bankCode: BankCode;
}

export interface Fuser_BusinessUser {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string;
  unReadSystemNoties: any[];
  phoneNumber: string;
  profileImage: Fuser_BusinessUser_profileImage | null;
  isVerifiedPhoneNumber: boolean | null;
  isVerifiedEmail: boolean | null;
  role: UserRole;
  location: Fuser_BusinessUser_location | null;
  introduce: string | null;
  adminMemo: string | null;
  company: string | null;
  zoneinfo: Fuser_BusinessUser_zoneinfo;
  billingMethod: Fuser_BusinessUser_billingMethod[] | null;
  subscribPlan: Fuser_BusinessUser_subscribPlan | null;
  settlementMall: Fuser_BusinessUser_settlementMall | null;
}

export type Fuser = Fuser_SuperAdmin | Fuser_BusinessUser;

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

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum Action {
  CREATE = "CREATE",
  DELETE = "DELETE",
  READ = "READ",
  UPDATE = "UPDATE",
}

export enum BankCode {
  BOK = "BOK",
  BUSAN = "BUSAN",
  CITY = "CITY",
  DAEGU = "DAEGU",
  GUANGJU = "GUANGJU",
  HANA = "HANA",
  IBK = "IBK",
  JEJU = "JEJU",
  KAKAO = "KAKAO",
  KB = "KB",
  KDB = "KDB",
  KN_BANK = "KN_BANK",
  NONGHYUP = "NONGHYUP",
  POST = "POST",
  SHINHAN = "SHINHAN",
  STANDARD_CHARTERED = "STANDARD_CHARTERED",
  SUHYUP = "SUHYUP",
  WOORI = "WOORI",
}

export enum BillkeyStatus {
  NORMAL = "NORMAL",
  REMOVED = "REMOVED",
}

export enum CardType {
  CREDIT = "CREDIT",
  DEBIT = "DEBIT",
}

/**
 * 카테고리 타입
 */
export enum CategoryType {
  ITEM = "ITEM",
}

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

export enum DisplayType {
  CHECK_BOX = "CHECK_BOX",
  DATETIME_PICKER = "DATETIME_PICKER",
  DATETIME_RANGE_PICKER = "DATETIME_RANGE_PICKER",
  DATE_PICKER = "DATE_PICKER",
  DATE_RANGE_PICKER = "DATE_RANGE_PICKER",
  DROPDOWN = "DROPDOWN",
  NUMBER_SELECTOR = "NUMBER_SELECTOR",
  RADIO_BOX = "RADIO_BOX",
  TEXT_INPUT = "TEXT_INPUT",
  TIME_PICKER = "TIME_PICKER",
}

export enum InvoiceStatus {
  FAIL = "FAIL",
  PAID = "PAID",
  PENDING = "PENDING",
  UNPAID = "UNPAID",
}

export enum ItemType {
  BOOKING = "BOOKING",
  EVENT = "EVENT",
  GOODS = "GOODS",
  PLACE = "PLACE",
  SERVICE = "SERVICE",
}

/**
 * 노티 수단...
 */
export enum NotificationMethod {
  EMAIL = "EMAIL",
  SMS = "SMS",
}

export enum NotificationTriggerEvent {
  PURCHASE_BUNDLE_CANCEL = "PURCHASE_BUNDLE_CANCEL",
  PURCHASE_BUNDLE_CREATE_COMPLETE = "PURCHASE_BUNDLE_CREATE_COMPLETE",
  PURCHASE_BUNDLE_CREATE_PENDING = "PURCHASE_BUNDLE_CREATE_PENDING",
  PURCHASE_BUNDLE_REFUND = "PURCHASE_BUNDLE_REFUND",
}

export enum Paymethod {
  BANK_TRANSFER = "BANK_TRANSFER",
  CARD = "CARD",
  CASH = "CASH",
}

export enum ProductType {
  BOOKING = "BOOKING",
  GOODS = "GOODS",
  NORMAL = "NORMAL",
}

export enum ServiceUsageType {
  FILE = "FILE",
  ITEM = "ITEM",
  NOTIFICATION = "NOTIFICATION",
  NOTIFICATION_EMAIL = "NOTIFICATION_EMAIL",
  NOTIFICATION_LMS = "NOTIFICATION_LMS",
  NOTIFICATION_MMS = "NOTIFICATION_MMS",
  NOTIFICATION_SMS = "NOTIFICATION_SMS",
  NOTIFICATION_TEMPLATE = "NOTIFICATION_TEMPLATE",
  PRODUCT = "PRODUCT",
  PRODUCT_AUTOMATOR = "PRODUCT_AUTOMATOR",
  PURCHASE = "PURCHASE",
  SETTLEMENT = "SETTLEMENT",
  SETTLEMENT_MALL = "SETTLEMENT_MALL",
  STORE = "STORE",
  USER = "USER",
  USER_BUSINESS = "USER_BUSINESS",
  USER_CUSTOMER = "USER_CUSTOMER",
}

export enum Status {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

export enum StoreType {
  ACCOMMODATION = "ACCOMMODATION",
  CAFE = "CAFE",
  ELSE = "ELSE",
  EXPERIENCE = "EXPERIENCE",
  LEISURE = "LEISURE",
  PUP = "PUP",
  RENTAL = "RENTAL",
  RESTAURANT = "RESTAURANT",
  SHOPPING = "SHOPPING",
  SHOW = "SHOW",
}

/**
 * 시스템 노티피케이션 타입
 */
export enum SystemNotiType {
  booking = "booking",
  cancel = "cancel",
  janda = "janda",
  payment = "payment",
  system = "system",
  user = "user",
}

export enum TransactionStatus {
  CANCELED = "CANCELED",
  COMPLETED = "COMPLETED",
  PENDING = "PENDING",
}

/**
 * 거래 타입.
 */
export enum TrxUpdatedType {
  PAY = "PAY",
  REFUND = "REFUND",
}

/**
 * 유저 역할!
 */
export enum UserRole {
  ADMIN = "ADMIN",
  BUSINESS_USER = "BUSINESS_USER",
  STORE_USER = "STORE_USER",
  SUPERADMIN = "SUPERADMIN",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
  FindPurchaseBundle = "FindPurchaseBundle",
  NotificationSenderAdd = "NotificationSenderAdd",
  SignInWithEmail = "SignInWithEmail",
  SignInWithPhone = "SignInWithPhone",
  UserFindEmail = "UserFindEmail",
  UserResetPassword = "UserResetPassword",
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
export enum _BoardDocSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  isNotice__asc = "isNotice__asc",
  isNotice__desc = "isNotice__desc",
  likeCount__asc = "likeCount__asc",
  likeCount__desc = "likeCount__desc",
  subTitle__asc = "subTitle__asc",
  subTitle__desc = "subTitle__desc",
  title__asc = "title__asc",
  title__desc = "title__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
  viewCount__asc = "viewCount__asc",
  viewCount__desc = "viewCount__desc",
}

/**
 * Auto generated sort type
 */
export enum _BoardSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _CategorySort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  _storeId__asc = "_storeId__asc",
  _storeId__desc = "_storeId__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  order__asc = "order__asc",
  order__desc = "order__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _FileSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  description__asc = "description__asc",
  description__desc = "description__desc",
  fileType__asc = "fileType__asc",
  fileType__desc = "fileType__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _IItemSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  _ownerId__asc = "_ownerId__asc",
  _ownerId__desc = "_ownerId__desc",
  _storeId__asc = "_storeId__asc",
  _storeId__desc = "_storeId__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  currency__asc = "currency__asc",
  currency__desc = "currency__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  price__asc = "price__asc",
  price__desc = "price__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _IPurchaseSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  count__asc = "count__asc",
  count__desc = "count__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  currency__asc = "currency__asc",
  currency__desc = "currency__desc",
  isFullRefunded__asc = "isFullRefunded__asc",
  isFullRefunded__desc = "isFullRefunded__desc",
  isPaymentCompleted__asc = "isPaymentCompleted__asc",
  isPaymentCompleted__desc = "isPaymentCompleted__desc",
  isRefundedPartial__asc = "isRefundedPartial__asc",
  isRefundedPartial__desc = "isRefundedPartial__desc",
  message__asc = "message__asc",
  message__desc = "message__desc",
  paymentExpiresAt__asc = "paymentExpiresAt__asc",
  paymentExpiresAt__desc = "paymentExpiresAt__desc",
  paymentStatus__asc = "paymentStatus__asc",
  paymentStatus__desc = "paymentStatus__desc",
  paymethod__asc = "paymethod__asc",
  paymethod__desc = "paymethod__desc",
  pricePaymentCompleted__asc = "pricePaymentCompleted__asc",
  pricePaymentCompleted__desc = "pricePaymentCompleted__desc",
  pricePaymentPending__asc = "pricePaymentPending__asc",
  pricePaymentPending__desc = "pricePaymentPending__desc",
  priceRefundCompleted__asc = "priceRefundCompleted__asc",
  priceRefundCompleted__desc = "priceRefundCompleted__desc",
  priceRefundPending__asc = "priceRefundPending__asc",
  priceRefundPending__desc = "priceRefundPending__desc",
  refundStatus__asc = "refundStatus__asc",
  refundStatus__desc = "refundStatus__desc",
  status__asc = "status__asc",
  status__desc = "status__desc",
  type__asc = "type__asc",
  type__desc = "type__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ITemplateSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _IUserSort {
  description__asc = "description__asc",
  description__desc = "description__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
}

/**
 * Auto generated sort type
 */
export enum _InvoiceSort {
  _businessUserId__asc = "_businessUserId__asc",
  _businessUserId__desc = "_businessUserId__desc",
  billingAt__asc = "billingAt__asc",
  billingAt__desc = "billingAt__desc",
  description__asc = "description__asc",
  description__desc = "description__desc",
  month__asc = "month__asc",
  month__desc = "month__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  serviceProviderName__asc = "serviceProviderName__asc",
  serviceProviderName__desc = "serviceProviderName__desc",
  status__asc = "status__asc",
  status__desc = "status__desc",
  unpaidReason__asc = "unpaidReason__asc",
  unpaidReason__desc = "unpaidReason__desc",
  year__asc = "year__asc",
  year__desc = "year__desc",
  yyyymm__asc = "yyyymm__asc",
  yyyymm__desc = "yyyymm__desc",
}

/**
 * Auto generated sort type
 */
export enum _NotificationHistoryItemSort {
  errorCount__asc = "errorCount__asc",
  errorCount__desc = "errorCount__desc",
  method__asc = "method__asc",
  method__desc = "method__desc",
  sender__asc = "sender__asc",
  sender__desc = "sender__desc",
  successCount__asc = "successCount__asc",
  successCount__desc = "successCount__desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductAutomatorBookingSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  _itemId__asc = "_itemId__asc",
  _itemId__desc = "_itemId__desc",
  _ownerId__asc = "_ownerId__asc",
  _ownerId__desc = "_ownerId__desc",
  capacityPick__asc = "capacityPick__asc",
  capacityPick__desc = "capacityPick__desc",
  capacity__asc = "capacity__asc",
  capacity__desc = "capacity__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  currency__asc = "currency__asc",
  currency__desc = "currency__desc",
  dateRangeForSale__asc = "dateRangeForSale__asc",
  dateRangeForSale__desc = "dateRangeForSale__desc",
  disabled__asc = "disabled__asc",
  disabled__desc = "disabled__desc",
  price__asc = "price__asc",
  price__desc = "price__desc",
  type__asc = "type__asc",
  type__desc = "type__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _PurchaseBundleSort {
  _agreePolicies__asc = "_agreePolicies__asc",
  _agreePolicies__desc = "_agreePolicies__desc",
  _customerId__asc = "_customerId__asc",
  _customerId__desc = "_customerId__desc",
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  _purchaseIds__asc = "_purchaseIds__asc",
  _purchaseIds__desc = "_purchaseIds__desc",
  _sellerId__asc = "_sellerId__asc",
  _sellerId__desc = "_sellerId__desc",
  _storeId__asc = "_storeId__asc",
  _storeId__desc = "_storeId__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  currency__asc = "currency__asc",
  currency__desc = "currency__desc",
  isFullRefunded__asc = "isFullRefunded__asc",
  isFullRefunded__desc = "isFullRefunded__desc",
  isRefundedPartial__asc = "isRefundedPartial__asc",
  isRefundedPartial__desc = "isRefundedPartial__desc",
  message__asc = "message__asc",
  message__desc = "message__desc",
  paymentAt__asc = "paymentAt__asc",
  paymentAt__desc = "paymentAt__desc",
  paymentExpiresAt__asc = "paymentExpiresAt__asc",
  paymentExpiresAt__desc = "paymentExpiresAt__desc",
  paymentStatus__asc = "paymentStatus__asc",
  paymentStatus__desc = "paymentStatus__desc",
  paymethod__asc = "paymethod__asc",
  paymethod__desc = "paymethod__desc",
  pricePaymentCompleted__asc = "pricePaymentCompleted__asc",
  pricePaymentCompleted__desc = "pricePaymentCompleted__desc",
  pricePaymentPending__asc = "pricePaymentPending__asc",
  pricePaymentPending__desc = "pricePaymentPending__desc",
  priceRefundCompleted__asc = "priceRefundCompleted__asc",
  priceRefundCompleted__desc = "priceRefundCompleted__desc",
  priceRefundPending__asc = "priceRefundPending__asc",
  priceRefundPending__desc = "priceRefundPending__desc",
  refundStatus__asc = "refundStatus__asc",
  refundStatus__desc = "refundStatus__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * Auto generated sort type
 */
export enum _SettlementMallSort {
  description__asc = "description__asc",
  description__desc = "description__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
}

/**
 * Auto generated sort type
 */
export enum _SettlementSort {
  amount__asc = "amount__asc",
  amount__desc = "amount__desc",
  canceledAt__asc = "canceledAt__asc",
  canceledAt__desc = "canceledAt__desc",
  description__asc = "description__asc",
  description__desc = "description__desc",
  message__asc = "message__asc",
  message__desc = "message__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
  sequence__asc = "sequence__asc",
  sequence__desc = "sequence__desc",
  settlementDate__asc = "settlementDate__asc",
  settlementDate__desc = "settlementDate__desc",
  status__asc = "status__asc",
  status__desc = "status__desc",
  submallId__asc = "submallId__asc",
  submallId__desc = "submallId__desc",
}

/**
 * Auto generated sort type
 */
export enum _StoreSort {
  description__asc = "description__asc",
  description__desc = "description__desc",
  name__asc = "name__asc",
  name__desc = "name__desc",
}

/**
 * Auto generated sort type
 */
export enum _SystemNotiSort {
  _id__asc = "_id__asc",
  _id__desc = "_id__desc",
  createdAt__asc = "createdAt__asc",
  createdAt__desc = "createdAt__desc",
  type__asc = "type__asc",
  type__desc = "type__desc",
  updatedAt__asc = "updatedAt__asc",
  updatedAt__desc = "updatedAt__desc",
}

/**
 * 예약시 받을 추가필드
 */
export interface AttributeInput {
  tags?: TagInput[] | null;
  value?: string | null;
  placeHolder?: string | null;
  default?: string | null;
  require?: boolean | null;
  options?: string[] | null;
  label?: string | null;
  key: string;
  displayType: DisplayType;
}

export interface BillingMethodRegistInput {
  cardNo: string;
  idNo: string;
  cardPw: string;
  expYear: string;
  expMonth: string;
  description?: string | null;
}

export interface BoardDocInput {
  title: string;
  contents: string;
  isNotice?: boolean | null;
  attrs: AttributeInput[];
  isOpen: boolean;
  summary?: string | null;
  subTitle?: string | null;
  keyWards?: string[] | null;
  attachFiles?: FileInput[] | null;
  thumb?: FileInput | null;
  tags: TagInput[];
}

export interface BoardInput {
  key: string;
  name?: string | null;
  writePermission?: UserRole[] | null;
  readPermission?: UserRole[] | null;
  inputs?: AttributeInput[] | null;
}

export interface BookingInput {
  itemId: any;
  productId: any;
  countDetails?: UsageInput[] | null;
  priceOrigin?: number | null;
  attrs?: AttributeInput[] | null;
}

export interface BuypagingInput {
  configure?: any | null;
  delivery?: DeliveryConfig | null;
  attrs?: AttributeInput[] | null;
}

export interface CapacityInput {
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface CategoryCreateInput {
  label: string;
  type: CategoryType;
}

export interface CategoryOrderUpdateInput {
  id: any;
  order: number;
}

export interface CategoryUpdateInput {
  label?: string | null;
  type?: CategoryType | null;
  order?: number | null;
}

export interface DateRangeInput {
  from?: any | null;
  to?: any | null;
}

export interface DeliveryConfig {
  fee?: number | null;
  overFreePrice?: number | null;
  lowerPrice?: number | null;
}

export interface DeliveryInput {
  receiverSmaeWithBuyer: boolean;
  receiverName: string;
  receiverPhone: string;
  address: string;
  addressDetail: string;
  deliveryPrice: number;
}

/**
 * 임베딩용 인풋
 */
export interface FileCreateInput {
  name?: string | null;
  description?: string | null;
  extension?: string | null;
  fileType?: string | null;
  uri: string;
  owner?: string | null;
}

/**
 * 날파일 올릴때 사용 File upload to s3 이후에는 FileCreateInput 으로 임베딩
 */
export interface FileInput {
  upload: any;
  tags?: TagInput[] | null;
}

export interface ItemBookingCreateInput {
  type: ItemType;
  name: string;
  description?: string | null;
  descriptionDetail?: string | null;
  attrs: AttributeInput[];
  images?: FileCreateInput[] | null;
  currency?: Currency | null;
  categoryId?: string | null;
  price: number;
  tags: TagInput[];
  keywards?: string[] | null;
}

export interface ItemBookingUpdateInput {
  type?: ItemType | null;
  name?: string | null;
  description?: string | null;
  descriptionDetail?: string | null;
  attrs?: AttributeInput[] | null;
  currency?: Currency | null;
  price?: number | null;
  categoryId?: any | null;
  images?: FileCreateInput[] | null;
  tags?: TagInput[] | null;
  keywards?: string[] | null;
}

export interface LocationInput {
  address: string;
  addressDetail?: string | null;
  lat?: number | null;
  lng?: number | null;
}

export interface NotificationTemplateCreateInput {
  name: string;
  content: string;
  method: NotificationMethod;
  description?: string | null;
  triggers?: NotificationTriggerInput[] | null;
}

export interface NotificationTriggerInput {
  sender: string;
  event: NotificationTriggerEvent;
  isEnabled: boolean;
  tags: TagInput[];
  storeIds: any[];
}

export interface OffsetPagingInput {
  pageIndex: number;
  pageItemCount: number;
}

export interface PolicyInput {
  key: string;
  name: string;
  content: string;
  require: boolean;
  version: number;
}

export interface ProductAutomatorBookingCreateInput {
  name: string;
  description?: string | null;
  targetItemId: any;
  type: ProductType;
  dateCount: number;
  templates: ProductBookingTemplateInput[];
  exceptedDayOfWeeks?: DayOfWeek[] | null;
  isDisabled?: boolean | null;
}

export interface ProductAutomatorBookingUpdateInput {
  name: string;
  description?: string | null;
  dateCount?: number | null;
  templates?: ProductBookingTemplateInput[] | null;
  exceptedDayOfWeeks?: DayOfWeek[] | null;
  isDisabled?: boolean | null;
}

export interface ProductBookingCreateInput {
  disabled?: boolean | null;
  dateRangeForSale?: DateRangeInput | null;
  dateRangeForUse?: DateRangeInput | null;
  capacity: number;
  price: number;
  currency?: Currency | null;
  capacityPick?: number | null;
  capacityDetails: CapacityInput[];
}

export interface ProductBookingTemplateInput {
  capacity: number;
  capacityPick?: number | null;
  price: number;
  currency?: Currency | null;
  attrs: AttributeInput[];
  timeRangeForUse: TimeRangeInput;
  timeRangeForSale?: TimeRangeInput | null;
  capacityDetails?: CapacityInput[] | null;
}

export interface ProductBookingUpdateInput {
  disabled?: boolean | null;
  dateRangeForSale?: DateRangeInput | null;
  dateRangeForUse?: DateRangeInput | null;
  capacity?: number | null;
  price?: number | null;
  currency?: Currency | null;
  capacityPick?: number | null;
  capacityDetails?: CapacityInput[] | null;
  attrs?: AttributeInput[] | null;
}

export interface ProfileUpdateForBusinessUserInput {
  email?: string | null;
  profileImage?: FileCreateInput | null;
  phoneNumber?: string | null;
  name?: string | null;
  company?: string | null;
  adminMemo?: string | null;
  introduce?: string | null;
  location?: LocationInput | null;
  expectedBillingDayOfMonth?: number | null;
}

export interface PurchaseBundleCreateInput {
  bookingInputs: BookingInput[];
  attrs?: AttributeInput[] | null;
  purchaserName: string;
  purchaseContact: string;
  deliveryInput?: DeliveryInput | null;
  paymethod: Paymethod;
  priceOrigin: number;
  currency?: Currency | null;
  purchaserMessage?: string | null;
}

export interface PurchaseBundleStatusSetInput {
  status: Status;
  message?: string | null;
}

export interface PurchaseBundleUpdateInput {
  devlieryInfo?: DeliveryInput | null;
  purchaserName?: string | null;
  purchaserContact?: string | null;
  purchaserMessage?: string | null;
  attrs?: AttributeInput[] | null;
  sellerMemo?: string | null;
}

/**
 * 수신자번호 + 치환문자열 객체 INPUT
 */
export interface ReceiverWithReplacementSetsInput {
  receivers: string[];
  replacementSets: ReplacementSetInput[];
}

export interface ReplacementSetInput {
  key: string;
  value: string;
}

export interface ServiceOfferResourceCreateInput {
  serviceUsageType: ServiceUsageType;
  action: Action;
  offerCount: number;
  isFree: boolean;
  description: string;
}

export interface ServicePlanTemplateCreateInput {
  name: string;
  billingFrequency: number;
  price: number;
  description?: string | null;
  offerResources?: ServiceOfferResourceCreateInput[] | null;
}

export interface ServicePlanTemplateUpdateInput {
  name?: string | null;
  billingFrequency?: number | null;
  price?: number | null;
  description?: string | null;
  offerResourceRemoveList?: string[] | null;
  offerResourceAddList?: ServiceOfferResourceCreateInput[] | null;
}

export interface SettlementMallCreateInput {
  submallId: string;
  bankCode: BankCode;
  submallName: string;
  description?: string | null;
  brcNumber: string;
  accountNumber: string;
  accountHolder: string;
}

export interface SettlementRefreshInput {
  subId: string;
  settlementDate: any;
}

export interface SettlementTransferInput {
  settlementDate: any;
  amount: number;
  duplicateCheck?: boolean | null;
  settlementMallId: string;
}

export interface SignInInput {
  email: string;
  password: string;
}

export interface SignUpInput {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  company?: string | null;
  location: LocationInput;
}

export interface SmsSendInput {
  sender: string;
  title?: string | null;
  content: string;
  receivers: string[];
  tempalteId?: any | null;
  replacements?: ReplacementSetInput | null;
}

export interface SmsSendWithTemplateInput {
  templateId?: any | null;
  content?: string | null;
  sender: string;
  replacements: ReceiverWithReplacementSetsInput[];
}

export interface SmsTemplateUpdateInput {
  content?: string | null;
  name?: string | null;
  description?: string | null;
  triggers?: NotificationTriggerInput[] | null;
}

export interface StoreCreateInput {
  image?: FileCreateInput | null;
  type: StoreType;
  name: string;
  description?: string | null;
  location?: LocationInput | null;
  zoneinfo?: ZoneinfoInput | null;
}

export interface StoreSignInAnonymousCompleteInput {
  verificationId: any;
  target: VerificationTarget;
  code: string;
  payload: string;
}

export interface StoreSignInAnonymousStartInput {
  target: VerificationTarget;
  payload: string;
}

export interface StoreSignUpInput {
  name: string;
  email: string;
  phoneNumber: string;
  password: string;
  company?: string | null;
  location: LocationInput;
}

export interface StoreUpdateInput {
  image?: FileCreateInput | null;
  name?: string | null;
  type?: StoreType | null;
  description?: string | null;
  location?: LocationInput | null;
  zoneinfo?: ZoneinfoInput | null;
  buypage?: BuypagingInput | null;
}

export interface TagInput {
  key: string;
  value: string;
}

export interface TimeRangeInput {
  start: number;
  end: number;
}

export interface UsageInput {
  key: string;
  count: number;
  label: string;
  price: number;
}

export interface VerificationCompleteInput {
  verificationId: any;
  target: VerificationTarget;
  code: string;
  payload: string;
}

export interface VerificationStartInput {
  target: VerificationTarget;
  payload: string;
  event: VerificationEvent;
}

export interface ZoneinfoInput {
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface _BoardDocFilter {
  AND?: _BoardDocFilter[] | null;
  OR?: _BoardDocFilter[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  title__not_contains?: string | null;
  title__in?: string[] | null;
  title__not_in?: string[] | null;
  authorEmail__eq?: string | null;
  authorEmail__not_eq?: string | null;
  authorEmail__in?: string[] | null;
  authorName__eq?: string | null;
  authorName__not_eq?: string | null;
  authorRole__eq?: UserRole | null;
  authorRole__not_eq?: UserRole | null;
  isNotice__eq?: boolean | null;
  isNotice__not_eq?: boolean | null;
  isOpen__eq?: boolean | null;
  isOpen__not_eq?: boolean | null;
  subTitle__eq?: string | null;
  subTitle__not_eq?: string | null;
  subTitle__contains?: string | null;
  subTitle__not_contains?: string | null;
  subTitle__in?: string[] | null;
  subTitle__not_in?: string[] | null;
  keyWards__eq?: string | null;
  keyWards__not_eq?: string | null;
  keyWards__in?: string[] | null;
  keyWards__contains?: string | null;
  boardKey__eq?: string | null;
  boardKey__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _BoardFilter {
  AND?: _BoardFilter[] | null;
  OR?: _BoardFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _CategoryFilter {
  AND?: _CategoryFilter[] | null;
  OR?: _CategoryFilter[] | null;
  label__eq?: string | null;
  label__not_eq?: string | null;
  type__eq?: CategoryType | null;
  type__not_eq?: CategoryType | null;
  _storeId__eq?: any | null;
  _storeId__not_eq?: any | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _FileFilter {
  AND?: _FileFilter[] | null;
  OR?: _FileFilter[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  fileType__eq?: string | null;
  fileType__not_eq?: string | null;
  fileType__in?: string[] | null;
  fileType__not_in?: string[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _IItemFilter {
  AND?: _IItemFilter[] | null;
  OR?: _IItemFilter[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  price__eq?: number | null;
  price__not_eq?: number | null;
  price__gte?: number | null;
  price__gt?: number | null;
  price__lte?: number | null;
  price__lt?: number | null;
  currency__eq?: Currency | null;
  currency__not_eq?: Currency | null;
  currency__in?: Currency[] | null;
  currency__not_in?: Currency[] | null;
  categoryName__eq?: string | null;
  categoryName__not_eq?: string | null;
  categoryId__eq?: string | null;
  categoryId__not_eq?: string | null;
  keywards__eq?: string | null;
  keywards__not_eq?: string | null;
  keywards__in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  _ownerId__eq?: any | null;
  _ownerId__not_eq?: any | null;
  _ownerId__in?: any[] | null;
  _ownerId__not_in?: any[] | null;
  _storeId__eq?: any | null;
  _storeId__not_eq?: any | null;
  _storeId__in?: any[] | null;
  _storeId__not_in?: any[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _IPurchaseFilter {
  AND?: _IPurchaseFilter[] | null;
  OR?: _IPurchaseFilter[] | null;
  status__eq?: Status | null;
  status__not_eq?: Status | null;
  status__in?: Status[] | null;
  status__not_in?: Status[] | null;
  isPaymentCompleted__eq?: boolean | null;
  isPaymentCompleted__not_eq?: boolean | null;
  isPaymentCompleted__in?: boolean[] | null;
  isPaymentCompleted__not_in?: boolean[] | null;
  count__eq?: number | null;
  count__not_eq?: number | null;
  count__in?: number[] | null;
  count__not_in?: number[] | null;
  count__gte?: number | null;
  count__gt?: number | null;
  count__lte?: number | null;
  count__lt?: number | null;
  purchasedProduct_type__eq?: ProductType | null;
  purchasedProduct_type__not_eq?: ProductType | null;
  purchasedProduct_type__in?: ProductType[] | null;
  purchasedProduct_type__not_in?: ProductType[] | null;
  purchasedProduct_code__eq?: string | null;
  purchasedProduct_code__not_eq?: string | null;
  purchasedProduct_itemCode__eq?: string | null;
  purchasedProduct_itemCode__not_eq?: string | null;
  purchasedProduct_itemName__eq?: string | null;
  purchasedProduct_itemName__not_eq?: string | null;
  purchasedProduct_itemName__contains?: string | null;
  purchasedProduct__storeId__eq?: any | null;
  purchasedProduct__storeId__not_eq?: any | null;
  purchasedProduct__itemId__eq?: any | null;
  purchasedProduct__itemId__not_eq?: any | null;
  purchasedProduct__itemId__in?: any[] | null;
  purchasedProduct__itemId__not_in?: any[] | null;
  purchasedProduct__ownerId__eq?: any | null;
  purchasedProduct__ownerId__not_eq?: any | null;
  purchasedProduct__ownerId__in?: any[] | null;
  purchasedProduct__ownerId__not_in?: any[] | null;
  purchaserName__eq?: string | null;
  purchaserName__not_eq?: string | null;
  purchaserName__in?: string[] | null;
  purchaserName__contains?: string | null;
  purchaserContact__eq?: string | null;
  purchaserContact__not_eq?: string | null;
  purchaserContact__in?: string[] | null;
  purchaserContact__contains?: string | null;
  type__eq?: ItemType | null;
  type__not_eq?: ItemType | null;
  type__in?: ItemType[] | null;
  type__not_in?: ItemType[] | null;
  itemName__eq?: string | null;
  itemName__not_eq?: string | null;
  itemName__contains?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
  paymentStatus__eq?: Status | null;
  paymentStatus__not_eq?: Status | null;
  paymentStatus__in?: Status[] | null;
  paymentStatus__not_in?: Status[] | null;
  refundStatus__eq?: Status | null;
  refundStatus__not_eq?: Status | null;
  refundStatus__in?: Status[] | null;
  refundStatus__not_in?: Status[] | null;
  paymethod__eq?: Paymethod | null;
  paymethod__not_eq?: Paymethod | null;
  paymethod__in?: Paymethod[] | null;
  paymethod__not_in?: Paymethod[] | null;
  paymentExpiresAt__eq?: any | null;
  paymentExpiresAt__not_eq?: any | null;
  paymentExpiresAt__in?: any[] | null;
  paymentExpiresAt__not_in?: any[] | null;
  paymentExpiresAt__gte?: any | null;
  paymentExpiresAt__gt?: any | null;
  paymentExpiresAt__lte?: any | null;
  paymentExpiresAt__lt?: any | null;
  currency__eq?: Currency | null;
  currency__not_eq?: Currency | null;
  currency__in?: Currency[] | null;
  currency__not_in?: Currency[] | null;
  pricePaymentPending__eq?: number | null;
  pricePaymentPending__not_eq?: number | null;
  pricePaymentPending__gte?: number | null;
  pricePaymentPending__gt?: number | null;
  pricePaymentPending__lte?: number | null;
  pricePaymentPending__lt?: number | null;
  pricePaymentCompleted__eq?: number | null;
  pricePaymentCompleted__not_eq?: number | null;
  pricePaymentCompleted__gte?: number | null;
  pricePaymentCompleted__gt?: number | null;
  pricePaymentCompleted__lte?: number | null;
  pricePaymentCompleted__lt?: number | null;
  priceRefundPending__eq?: number | null;
  priceRefundPending__not_eq?: number | null;
  priceRefundPending__gte?: number | null;
  priceRefundPending__gt?: number | null;
  priceRefundPending__lte?: number | null;
  priceRefundPending__lt?: number | null;
  priceRefundCompleted__eq?: number | null;
  priceRefundCompleted__not_eq?: number | null;
  priceRefundCompleted__gte?: number | null;
  priceRefundCompleted__gt?: number | null;
  priceRefundCompleted__lte?: number | null;
  priceRefundCompleted__lt?: number | null;
  isFullRefunded__eq?: boolean | null;
  isFullRefunded__not_eq?: boolean | null;
  isFullRefunded__in?: boolean[] | null;
  isFullRefunded__not_in?: boolean[] | null;
  isRefundedPartial__eq?: boolean | null;
  isRefundedPartial__not_eq?: boolean | null;
  isRefundedPartial__in?: boolean[] | null;
  isRefundedPartial__not_in?: boolean[] | null;
  message__eq?: string | null;
  message__not_eq?: string | null;
  message__contains?: string | null;
  message__not_contains?: string | null;
}

export interface _ITemplateFilter {
  AND?: _ITemplateFilter[] | null;
  OR?: _ITemplateFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _IUserFilter {
  AND?: _IUserFilter[] | null;
  OR?: _IUserFilter[] | null;
  role__eq?: UserRole | null;
  role__not_eq?: UserRole | null;
  role__in?: UserRole[] | null;
  role__not_in?: UserRole[] | null;
  company__eq?: string | null;
  company__not_eq?: string | null;
  company__contains?: string | null;
  company__not_contains?: string | null;
  company__in?: string[] | null;
  company__not_in?: string[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _InvoiceFilter {
  AND?: _InvoiceFilter[] | null;
  OR?: _InvoiceFilter[] | null;
  year__eq?: number | null;
  year__not_eq?: number | null;
  year__gte?: number | null;
  year__gt?: number | null;
  year__lte?: number | null;
  year__lt?: number | null;
  month__eq?: number | null;
  month__not_eq?: number | null;
  month__gte?: number | null;
  month__gt?: number | null;
  month__lte?: number | null;
  month__lt?: number | null;
  yyyymm__eq?: number | null;
  yyyymm__not_eq?: number | null;
  yyyymm__gte?: number | null;
  yyyymm__gt?: number | null;
  yyyymm__lte?: number | null;
  yyyymm__lt?: number | null;
  status__eq?: InvoiceStatus | null;
  status__not_eq?: InvoiceStatus | null;
  status__in?: InvoiceStatus[] | null;
  status__not_in?: InvoiceStatus[] | null;
  unpaidReason__eq?: string | null;
  unpaidReason__not_eq?: string | null;
  unpaidReason__contains?: string | null;
  unpaidReason__not_contains?: string | null;
  _businessUserId__eq?: any | null;
  _businessUserId__not_eq?: any | null;
  _businessUserId__in?: any[] | null;
  _businessUserId__not_in?: any[] | null;
  serviceProviderName__eq?: string | null;
  serviceProviderName__not_eq?: string | null;
  serviceProviderName__contains?: string | null;
  serviceProviderName__not_contains?: string | null;
  billingAt__eq?: any | null;
  billingAt__not_eq?: any | null;
  billingAt__gte?: any | null;
  billingAt__lte?: any | null;
  billingAt__gt?: any | null;
  billingAt__lt?: any | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _NotificationHistoryItemFilter {
  AND?: _NotificationHistoryItemFilter[] | null;
  OR?: _NotificationHistoryItemFilter[] | null;
  method__eq?: NotificationMethod | null;
  method__not_eq?: NotificationMethod | null;
  method__in?: NotificationMethod[] | null;
  method__not_in?: NotificationMethod[] | null;
  sender__eq?: string | null;
  sender__not_eq?: string | null;
  sender__in?: string[] | null;
  sender__not_in?: string[] | null;
  sender__contains?: string | null;
  sender__not_contains?: string | null;
  receivers__eq?: string | null;
  receivers__not_eq?: string | null;
  receivers__in?: string[] | null;
  title__eq?: string | null;
  title__not_eq?: string | null;
  title__contains?: string | null;
  content__eq?: string | null;
  content__not_eq?: string | null;
  content__contains?: string | null;
}

export interface _ProductAutomatorBookingFilter {
  AND?: _ProductAutomatorBookingFilter[] | null;
  OR?: _ProductAutomatorBookingFilter[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  OR?: _ProductFilter[] | null;
  type__eq?: ProductType | null;
  type__not_eq?: ProductType | null;
  type__in?: ProductType[] | null;
  type__not_in?: ProductType[] | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  itemCode__eq?: string | null;
  itemCode__not_eq?: string | null;
  itemName__eq?: string | null;
  itemName__not_eq?: string | null;
  itemName__contains?: string | null;
  _storeId__eq?: any | null;
  _storeId__not_eq?: any | null;
  _itemId__eq?: any | null;
  _itemId__not_eq?: any | null;
  _itemId__in?: any[] | null;
  _itemId__not_in?: any[] | null;
  _ownerId__eq?: any | null;
  _ownerId__not_eq?: any | null;
  _ownerId__in?: any[] | null;
  _ownerId__not_in?: any[] | null;
  from__eq?: any | null;
  from__not_eq?: any | null;
  from__gte?: any | null;
  from__gt?: any | null;
  from__lte?: any | null;
  from__lt?: any | null;
  to__eq?: any | null;
  to__not_eq?: any | null;
  to__gte?: any | null;
  to__gt?: any | null;
  to__lte?: any | null;
  to__lt?: any | null;
  disabled__eq?: boolean | null;
  disabled__not_eq?: boolean | null;
  dateRangeForSale_from__eq?: any | null;
  dateRangeForSale_from__not_eq?: any | null;
  dateRangeForSale_from__gte?: any | null;
  dateRangeForSale_from__gt?: any | null;
  dateRangeForSale_from__lte?: any | null;
  dateRangeForSale_from__lt?: any | null;
  dateRangeForSale_to__eq?: any | null;
  dateRangeForSale_to__not_eq?: any | null;
  dateRangeForSale_to__gte?: any | null;
  dateRangeForSale_to__gt?: any | null;
  dateRangeForSale_to__lte?: any | null;
  dateRangeForSale_to__lt?: any | null;
  dateRangeForUse_from__eq?: any | null;
  dateRangeForUse_from__not_eq?: any | null;
  dateRangeForUse_from__gte?: any | null;
  dateRangeForUse_from__gt?: any | null;
  dateRangeForUse_from__lte?: any | null;
  dateRangeForUse_from__lt?: any | null;
  dateRangeForUse_to__eq?: any | null;
  dateRangeForUse_to__not_eq?: any | null;
  dateRangeForUse_to__gte?: any | null;
  dateRangeForUse_to__gt?: any | null;
  dateRangeForUse_to__lte?: any | null;
  dateRangeForUse_to__lt?: any | null;
  currency__eq?: Currency | null;
  currency__not_eq?: Currency | null;
  currency__in?: Currency[] | null;
  currency__not_in?: Currency[] | null;
  price__eq?: number | null;
  price__not_eq?: number | null;
  price__gte?: number | null;
  price__gt?: number | null;
  price__lte?: number | null;
  price__lt?: number | null;
  capacity__eq?: number | null;
  capacity__not_eq?: number | null;
  capacity__gte?: number | null;
  capacity__gt?: number | null;
  capacity__lte?: number | null;
  capacity__lt?: number | null;
  capacityPick__eq?: number | null;
  capacityPick__not_eq?: number | null;
  capacityPick__gte?: number | null;
  capacityPick__gt?: number | null;
  capacityPick__lte?: number | null;
  capacityPick__lt?: number | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

export interface _PurchaseBundleFilter {
  AND?: _PurchaseBundleFilter[] | null;
  OR?: _PurchaseBundleFilter[] | null;
  code__eq?: string | null;
  code__not_eq?: string | null;
  paymentAt__eq?: any | null;
  paymentAt__not_eq?: any | null;
  paymentAt__gte?: any | null;
  paymentAt__gt?: any | null;
  paymentAt__lte?: any | null;
  paymentAt__lt?: any | null;
  purchaserName__eq?: string | null;
  purchaserName__not_eq?: string | null;
  purchaserName__in?: string[] | null;
  purchaserName__contains?: string | null;
  purchaserContact__eq?: string | null;
  purchaserContact__not_eq?: string | null;
  purchaserContact__in?: string[] | null;
  purchaserContact__contains?: string | null;
  purchaserMessage__eq?: string | null;
  purchaserMessage__not_eq?: string | null;
  purchaserMessage__in?: string[] | null;
  purchaserMessage__contains?: string | null;
  sellerMemo__eq?: string | null;
  sellerMemo__not_eq?: string | null;
  sellerMemo__in?: string[] | null;
  sellerMemo__contains?: string | null;
  devlieryInfo_deliveryStatus__eq?: string | null;
  devlieryInfo_deliveryStatus__not_eq?: string | null;
  devlieryInfo_deliveryNumber__eq?: string | null;
  devlieryInfo_deliveryNumber__not_eq?: string | null;
  devlieryInfo_deliveryNumber__contains?: string | null;
  _agreePolicies__eq?: any[] | null;
  _agreePolicies__not_eq?: any[] | null;
  _agreePolicies__in?: any[] | null;
  _agreePolicies__not_in?: any[] | null;
  _storeId__eq?: any | null;
  _storeId__not_eq?: any | null;
  _storeId__in?: any[] | null;
  _storeId__not_in?: any[] | null;
  _sellerId__eq?: any | null;
  _sellerId__not_eq?: any | null;
  _sellerId__in?: any[] | null;
  _sellerId__not_in?: any[] | null;
  _customerId__eq?: any | null;
  _customerId__not_eq?: any | null;
  _customerId__in?: any[] | null;
  _customerId__not_in?: any[] | null;
  _purchaseIds__eq?: any[] | null;
  _purchaseIds__not_eq?: any[] | null;
  _purchaseIds__in?: any[] | null;
  _purchaseIds__not_in?: any[] | null;
  _purchaseItemIds__eq?: any[] | null;
  _purchaseItemIds__not_eq?: any[] | null;
  _purchaseItemIds__in?: any[] | null;
  _purchaseItemIds__not_in?: any[] | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
  paymentStatus__eq?: Status | null;
  paymentStatus__not_eq?: Status | null;
  paymentStatus__in?: Status[] | null;
  paymentStatus__not_in?: Status[] | null;
  refundStatus__eq?: Status | null;
  refundStatus__not_eq?: Status | null;
  refundStatus__in?: Status[] | null;
  refundStatus__not_in?: Status[] | null;
  paymethod__eq?: Paymethod | null;
  paymethod__not_eq?: Paymethod | null;
  paymethod__in?: Paymethod[] | null;
  paymethod__not_in?: Paymethod[] | null;
  paymentExpiresAt__eq?: any | null;
  paymentExpiresAt__not_eq?: any | null;
  paymentExpiresAt__in?: any[] | null;
  paymentExpiresAt__not_in?: any[] | null;
  paymentExpiresAt__gte?: any | null;
  paymentExpiresAt__gt?: any | null;
  paymentExpiresAt__lte?: any | null;
  paymentExpiresAt__lt?: any | null;
  currency__eq?: Currency | null;
  currency__not_eq?: Currency | null;
  currency__in?: Currency[] | null;
  currency__not_in?: Currency[] | null;
  pricePaymentPending__eq?: number | null;
  pricePaymentPending__not_eq?: number | null;
  pricePaymentPending__gte?: number | null;
  pricePaymentPending__gt?: number | null;
  pricePaymentPending__lte?: number | null;
  pricePaymentPending__lt?: number | null;
  pricePaymentCompleted__eq?: number | null;
  pricePaymentCompleted__not_eq?: number | null;
  pricePaymentCompleted__gte?: number | null;
  pricePaymentCompleted__gt?: number | null;
  pricePaymentCompleted__lte?: number | null;
  pricePaymentCompleted__lt?: number | null;
  priceRefundPending__eq?: number | null;
  priceRefundPending__not_eq?: number | null;
  priceRefundPending__gte?: number | null;
  priceRefundPending__gt?: number | null;
  priceRefundPending__lte?: number | null;
  priceRefundPending__lt?: number | null;
  priceRefundCompleted__eq?: number | null;
  priceRefundCompleted__not_eq?: number | null;
  priceRefundCompleted__gte?: number | null;
  priceRefundCompleted__gt?: number | null;
  priceRefundCompleted__lte?: number | null;
  priceRefundCompleted__lt?: number | null;
  isFullRefunded__eq?: boolean | null;
  isFullRefunded__not_eq?: boolean | null;
  isFullRefunded__in?: boolean[] | null;
  isFullRefunded__not_in?: boolean[] | null;
  isRefundedPartial__eq?: boolean | null;
  isRefundedPartial__not_eq?: boolean | null;
  isRefundedPartial__in?: boolean[] | null;
  isRefundedPartial__not_in?: boolean[] | null;
  message__eq?: string | null;
  message__not_eq?: string | null;
  message__contains?: string | null;
  message__not_contains?: string | null;
}

export interface _SettlementFilter {
  AND?: _SettlementFilter[] | null;
  OR?: _SettlementFilter[] | null;
  amount__eq?: number | null;
  amount__not_eq?: number | null;
  amount__gte?: number | null;
  amount__lte?: number | null;
  amount__gt?: number | null;
  amount__lt?: number | null;
  message__eq?: string | null;
  message__not_eq?: string | null;
  message__in?: string[] | null;
  message__not_in?: string[] | null;
  message__contains?: string | null;
  message__not_contains?: string | null;
  settlementDate__eq?: any | null;
  settlementDate__not_eq?: any | null;
  settlementDate__gte?: any | null;
  settlementDate__lte?: any | null;
  settlementDate__gt?: any | null;
  settlementDate__lt?: any | null;
  submallId__eq?: string | null;
  submallId__not_eq?: string | null;
  submallId__in?: string[] | null;
  submallId__not_in?: string[] | null;
  sequence__eq?: string | null;
  sequence__not_eq?: string | null;
  sequence__in?: string[] | null;
  sequence__not_in?: string[] | null;
  canceledAt__eq?: any | null;
  canceledAt__not_eq?: any | null;
  status__eq?: Status | null;
  status__not_eq?: Status | null;
  status__in?: Status[] | null;
  status__not_in?: Status[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _SettlementMallFilter {
  AND?: _SettlementMallFilter[] | null;
  OR?: _SettlementMallFilter[] | null;
  submallId__eq?: string | null;
  submallId__not_eq?: string | null;
  submallId__in?: string[] | null;
  submallName__eq?: string | null;
  submallName__not_eq?: string | null;
  submallName__in?: string[] | null;
  submallName__contains?: string | null;
  brcNumber__eq?: string | null;
  brcNumber__not_eq?: string | null;
  brcNumber__in?: string[] | null;
  brcNumber__contains?: string | null;
  accountHolder__eq?: string | null;
  accountHolder__not_eq?: string | null;
  accountHolder__in?: string[] | null;
  accountHolder__contains?: string | null;
  accountNumber__eq?: string | null;
  accountNumber__not_eq?: string | null;
  accountNumber__in?: string[] | null;
  accountNumber__contains?: string | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _StoreFilter {
  AND?: _StoreFilter[] | null;
  OR?: _StoreFilter[] | null;
  name__eq?: string | null;
  name__not_eq?: string | null;
  name__contains?: string | null;
  name__not_contains?: string | null;
  name__in?: string[] | null;
  name__not_in?: string[] | null;
  description__eq?: string | null;
  description__not_eq?: string | null;
  description__contains?: string | null;
  description__not_contains?: string | null;
  description__in?: string[] | null;
  description__not_in?: string[] | null;
}

export interface _SystemNotiFilter {
  AND?: _SystemNotiFilter[] | null;
  OR?: _SystemNotiFilter[] | null;
  type__eq?: string | null;
  type__not_eq?: string | null;
  _id__eq?: any | null;
  _id__not_eq?: any | null;
  _id__in?: any[] | null;
  _id__not_in?: any[] | null;
  updatedAt__eq?: any | null;
  updatedAt__not_eq?: any | null;
  updatedAt__gte?: any | null;
  updatedAt__lte?: any | null;
  updatedAt__lt?: any | null;
  updatedAt__gt?: any | null;
  createdAt__eq?: any | null;
  createdAt__not_eq?: any | null;
  createdAt__gte?: any | null;
  createdAt__lte?: any | null;
  createdAt__lt?: any | null;
  createdAt__gt?: any | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
