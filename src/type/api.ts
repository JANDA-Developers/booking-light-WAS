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

export interface fileList_FileList_items_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface fileList_FileList_items_owner {
  __typename: "BusinessUser" | "SuperAdmin" | "Customer";
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
  expectedBillingDayOfMonth: number;
  isBilled: boolean;
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
  expectedBillingDayOfMonth: number;
  isBilled: boolean;
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

export interface itemList_ItemList_items_attrs {
  __typename: "Attribute";
  name: string;
  displayType: DisplayType;
}

export interface itemList_ItemList_items_images {
  __typename: "File";
  uri: string;
}

export interface itemList_ItemList_items {
  __typename: "ItemBooking" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  currency: Currency;
  /**
   * 커스텀 입력폼: 비지니스 유저가 
   *         Item을 토대로한 상품을 만들어낼때. 
   *         어떤 필드들을 입력할지를 나타냄 
   *         이건 프론트엔드가 사용하는 입력폼임 
   *         프론트엔드가 어떤 상품 그룹을 정의할떄
   *         어떤 출력이 필요한지 고려해서 만드는 부분임.
   * 
   *         * 모델을 나눌 수도 있겠지만 이필드를 통해서
   *         핵심적인 로직이 변하지 않는이상 모델을 나누는건 회피해야함
   */
  attrs: itemList_ItemList_items_attrs[];
  images: itemList_ItemList_items_images[] | null;
}

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

export interface notificationSenderAdd_NotificationSenderAdd_data {
  __typename: "NotificationSender";
  type: NotificationMethod;
  sender: string;
  isVerified: boolean;
  isRegisteredToAligo: boolean;
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
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: notificationmanagerFindById
// ====================================================

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

export interface productList_ProductList_items_attrs {
  __typename: "AttributeParam";
  name: string;
  value: string;
}

export interface productList_ProductList_items {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * 아이템 attrs 와 쌍으로 돌아가는 부분
   * 프론트엔드가 정의한 필드들을 입력 받는 부분임.
   */
  attrs: productList_ProductList_items_attrs[];
  code: string;
}

export interface productList_ProductList {
  __typename: "OffsetPagenatedProductData";
  pageInfo: productList_ProductList_pageInfo;
  items: productList_ProductList_items[];
}

export interface productList {
  /**
   * BusinessUser 전용임..
   */
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

export interface productFindById_ProductFindById_attrs {
  __typename: "AttributeParam";
  name: string;
  value: string;
}

export interface productFindById_ProductFindById {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * 아이템 attrs 와 쌍으로 돌아가는 부분
   * 프론트엔드가 정의한 필드들을 입력 받는 부분임.
   */
  attrs: productFindById_ProductFindById_attrs[];
  code: string;
}

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

export interface purchaseBundleCreate_PurchaseBundleCreate {
  __typename: "PurchaseBundleCreateResponse";
  ok: boolean;
  error: purchaseBundleCreate_PurchaseBundleCreate_error | null;
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
// GraphQL query operation: purchasebundlelistforcustomer
// ====================================================

export interface purchasebundlelistforcustomer_PurchaseBundleListForCustomer_pageInfo {
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

export interface purchasebundlelistforcustomer_PurchaseBundleListForCustomer_items {
  __typename: "PurchaseBundle";
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
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  paymentAt: any | null;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
}

export interface purchasebundlelistforcustomer_PurchaseBundleListForCustomer {
  __typename: "OffsetPagenatedPurchaseBundleData";
  pageInfo: purchasebundlelistforcustomer_PurchaseBundleListForCustomer_pageInfo;
  items: purchasebundlelistforcustomer_PurchaseBundleListForCustomer_items[];
}

export interface purchasebundlelistforcustomer {
  /**
   * Customer 전용
   */
  PurchaseBundleListForCustomer: purchasebundlelistforcustomer_PurchaseBundleListForCustomer;
}

export interface purchasebundlelistforcustomerVariables {
  sort?: _PurchaseBundleSort[] | null;
  filter?: _PurchaseBundleFilter | null;
  pagingInput: OffsetPagingInput;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: purchasebundlelistforBusinessUser
// ====================================================

export interface purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser_pageInfo {
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

export interface purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser_items {
  __typename: "PurchaseBundle";
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
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  paymentAt: any | null;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
}

export interface purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser {
  __typename: "OffsetPagenatedPurchaseBundleData";
  pageInfo: purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser_pageInfo;
  items: purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser_items[];
}

export interface purchasebundlelistforBusinessUser {
  /**
   * BusinessUser 전용. 현재 사용 불가능.. PurchaseBundleListForBusinessUser 대신에 PurchaseList 함수 사용 요망
   */
  PurchaseBundleListForBusinessUser: purchasebundlelistforBusinessUser_PurchaseBundleListForBusinessUser;
}

export interface purchasebundlelistforBusinessUserVariables {
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
// GraphQL mutation operation: servicePlanTemplateList
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
  offerResources: servicePlanTemplateList_ServicePlanTemplateList_offerResources[];
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
  settlementMallHashId: string;
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
  settlementMallHashId: string;
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
  settlementMallHashId: string;
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
  settlementMallHashId: string;
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
  settlementMallHashId: string;
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
// GraphQL query operation: storeCustomerProfile
// ====================================================

export interface storeCustomerProfile_StoreCustomerProfile_profileImage {
  __typename: "File";
  uri: string;
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
  email: string | null;
  phoneNumber: string | null;
  profileImage: storeCustomerProfile_StoreCustomerProfile_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
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

export interface storeList_StoreList_items_optionPayment_commission {
  __typename: "CommissionTable";
  forCard: number;
  forBankTransfer: number;
}

export interface storeList_StoreList_items_optionPayment {
  __typename: "PaymentOption";
  merchantId: string | null;
  merchantKey: string | null;
  authDate: any | null;
  isAuthorized: boolean | null;
  commission: storeList_StoreList_items_optionPayment_commission;
  enabledPaymethods: Paymethod[];
}

export interface storeList_StoreList_items_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeList_StoreList_items {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  location: storeList_StoreList_items_location;
  optionPayment: storeList_StoreList_items_optionPayment;
  zoneinfo: storeList_StoreList_items_zoneinfo | null;
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

export interface storeFindByCode_StoreFindByCode_optionPayment_commission {
  __typename: "CommissionTable";
  forCard: number;
  forBankTransfer: number;
}

export interface storeFindByCode_StoreFindByCode_optionPayment {
  __typename: "PaymentOption";
  merchantId: string | null;
  merchantKey: string | null;
  authDate: any | null;
  isAuthorized: boolean | null;
  commission: storeFindByCode_StoreFindByCode_optionPayment_commission;
  enabledPaymethods: Paymethod[];
}

export interface storeFindByCode_StoreFindByCode_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeFindByCode_StoreFindByCode {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  location: storeFindByCode_StoreFindByCode_location;
  optionPayment: storeFindByCode_StoreFindByCode_optionPayment;
  zoneinfo: storeFindByCode_StoreFindByCode_zoneinfo | null;
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

export interface storeFindById_StoreFindById_optionPayment_commission {
  __typename: "CommissionTable";
  forCard: number;
  forBankTransfer: number;
}

export interface storeFindById_StoreFindById_optionPayment {
  __typename: "PaymentOption";
  merchantId: string | null;
  merchantKey: string | null;
  authDate: any | null;
  isAuthorized: boolean | null;
  commission: storeFindById_StoreFindById_optionPayment_commission;
  enabledPaymethods: Paymethod[];
}

export interface storeFindById_StoreFindById_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface storeFindById_StoreFindById {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  location: storeFindById_StoreFindById_location;
  optionPayment: storeFindById_StoreFindById_optionPayment;
  zoneinfo: storeFindById_StoreFindById_zoneinfo | null;
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

export interface purchaseBundleRefund_PurchaseBundleRefund_data {
  __typename: "PurchaseBundle";
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
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  paymentAt: any | null;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
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
  uri: string;
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
  email: string | null;
  phoneNumber: string | null;
  profileImage: customerResetPassword_CustomerResetPassword_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
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
  uri: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface businessUserFindEmail_BusinessUserFindEmail_data {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: businessUserFindEmail_BusinessUserFindEmail_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: businessUserFindEmail_BusinessUserFindEmail_data_zoneinfo;
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
  uri: string;
}

export interface me_Me_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface me_Me {
  __typename: "BusinessUser";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: me_Me_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: me_Me_zoneinfo;
}

export interface me {
  Me: me_Me | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL query operation: profile
// ====================================================

export interface profile_Profile_profileImage {
  __typename: "File";
  uri: string;
}

export interface profile_Profile_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface profile_Profile {
  __typename: "BusinessUser" | "SuperAdmin" | "Customer";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  email: string | null;
  phoneNumber: string | null;
  profileImage: profile_Profile_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
  company: string | null;
  zoneinfo: profile_Profile_zoneinfo;
}

export interface profile {
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
  uri: string;
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
  email: string | null;
  phoneNumber: string | null;
  profileImage: storeSignUp_StoreSignUp_data_profileImage | null;
  isVerifiedPhoneNumber: boolean;
  isVerifiedEmail: boolean;
  role: UserRole;
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
// GraphQL fragment: Ffile
// ====================================================

export interface Ffile_tags {
  __typename: "Tag";
  key: string;
  value: string;
}

export interface Ffile_owner {
  __typename: "BusinessUser" | "SuperAdmin" | "Customer";
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
// GraphQL fragment: FcollectionDataInterface
// ====================================================

export interface FcollectionDataInterface {
  __typename: "File" | "NotificationTrigger" | "Verification" | "ServicePricing" | "ServiceUsage" | "Store" | "PurchaseBundle" | "Settlement" | "ServicePlan" | "Invoice" | "ServicePlanTemplate" | "BillingMethod" | "Billing" | "TemplateSms" | "TemplateEmail" | "BusinessUser" | "SuperAdmin" | "SmsHistoryItem" | "EmailHistoryItem" | "TransactionPayment" | "TransactionRefund" | "Customer" | "SettlementMallPlain" | "SettlementMall" | "ItemBooking" | "ProductBooking" | "Booking" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
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
// GraphQL fragment: Finvoice
// ====================================================

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
  expectedBillingDayOfMonth: number;
  isBilled: boolean;
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

export interface Fitem_attrs {
  __typename: "Attribute";
  name: string;
  displayType: DisplayType;
}

export interface Fitem_images {
  __typename: "File";
  uri: string;
}

export interface Fitem {
  __typename: "ItemBooking" | "ItemService";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ItemType;
  name: string;
  /**
   * Product에게 상속하는 price값임 실제로 쓰이는건 product의 price
   */
  price: number;
  currency: Currency;
  /**
   * 커스텀 입력폼: 비지니스 유저가 
   *         Item을 토대로한 상품을 만들어낼때. 
   *         어떤 필드들을 입력할지를 나타냄 
   *         이건 프론트엔드가 사용하는 입력폼임 
   *         프론트엔드가 어떤 상품 그룹을 정의할떄
   *         어떤 출력이 필요한지 고려해서 만드는 부분임.
   * 
   *         * 모델을 나눌 수도 있겠지만 이필드를 통해서
   *         핵심적인 로직이 변하지 않는이상 모델을 나누는건 회피해야함
   */
  attrs: Fitem_attrs[];
  images: Fitem_images[] | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: FnotificationManager
// ====================================================

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
// GraphQL fragment: FnotificationSender
// ====================================================

export interface FnotificationSender {
  __typename: "NotificationSender";
  type: NotificationMethod;
  sender: string;
  isVerified: boolean;
  isRegisteredToAligo: boolean;
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
  _id: any;
  createdAt: any;
  updatedAt: any;
  sender: string;
  event: NotificationTriggerEvent;
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
  merchantId: string | null;
  merchantKey: string | null;
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
// GraphQL fragment: Fproduct
// ====================================================

export interface Fproduct_attrs {
  __typename: "AttributeParam";
  name: string;
  value: string;
}

export interface Fproduct {
  __typename: "ProductBooking";
  _id: any;
  createdAt: any;
  updatedAt: any;
  type: ProductType;
  /**
   * 아이템 attrs 와 쌍으로 돌아가는 부분
   * 프론트엔드가 정의한 필드들을 입력 받는 부분임.
   */
  attrs: Fproduct_attrs[];
  code: string;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpurchase
// ====================================================

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
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fpurchasebundle
// ====================================================

export interface Fpurchasebundle {
  __typename: "PurchaseBundle";
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
  isPaymentCompleted: boolean | null;
  fullRefundPendingAt: any | null;
  fullRefundCompletedAt: any | null;
  paymentAt: any | null;
  useNicepay: boolean | null;
  paymentTimeExpired: boolean;
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
  offerResources: FservicePlanTemplate_offerResources[];
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
  settlementMallHashId: string;
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
// GraphQL fragment: Fstore
// ====================================================

export interface Fstore_location {
  __typename: "Location";
  address: string;
  addressDetail: string | null;
  lat: number | null;
  lng: number | null;
}

export interface Fstore_optionPayment_commission {
  __typename: "CommissionTable";
  forCard: number;
  forBankTransfer: number;
}

export interface Fstore_optionPayment {
  __typename: "PaymentOption";
  merchantId: string | null;
  merchantKey: string | null;
  authDate: any | null;
  isAuthorized: boolean | null;
  commission: Fstore_optionPayment_commission;
  enabledPaymethods: Paymethod[];
}

export interface Fstore_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fstore {
  __typename: "Store";
  _id: any;
  createdAt: any;
  updatedAt: any;
  name: string;
  description: string;
  /**
   * Public한 접근을 위한 코드임.
   */
  code: string;
  location: Fstore_location;
  optionPayment: Fstore_optionPayment;
  zoneinfo: Fstore_zoneinfo | null;
}

/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

// ====================================================
// GraphQL fragment: Fuser
// ====================================================

export interface Fuser_profileImage {
  __typename: "File";
  uri: string;
}

export interface Fuser_zoneinfo {
  __typename: "Zoneinfo";
  timezone: string;
  offset: number;
  callingCode: string;
  alpha2Code: string;
}

export interface Fuser {
  __typename: "BusinessUser" | "SuperAdmin" | "Customer";
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

/**
 * 통화
 */
export enum Currency {
  JPY = "JPY",
  KRW = "KRW",
  USD = "USD",
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
}

export enum InvoiceStatus {
  PAID = "PAID",
  PENDING = "PENDING",
  UNPAID = "UNPAID",
}

export enum ItemType {
  BOOKING = "BOOKING",
  EVENT = "EVENT",
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
  BUSINESS_USER = "BUSINESS_USER",
  STORE_USER = "STORE_USER",
  SUPERADMIN = "SUPERADMIN",
}

/**
 * 인증 타겟 Enum
 */
export enum VerificationEvent {
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
export enum _FileSort {
  _id_asc = "_id_asc",
  _id_desc = "_id_desc",
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
export enum _IItemSort {
  _imageIds_asc = "_imageIds_asc",
  _imageIds_desc = "_imageIds_desc",
  _ownerId_asc = "_ownerId_asc",
  _ownerId_desc = "_ownerId_desc",
  _storeId_asc = "_storeId_asc",
  _storeId_desc = "_storeId_desc",
  currency_asc = "currency_asc",
  currency_desc = "currency_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  price_asc = "price_asc",
  price_desc = "price_desc",
}

/**
 * Auto generated sort type
 */
export enum _IPurchaseSort {
  _id_asc = "_id_asc",
  _id_desc = "_id_desc",
  count_asc = "count_asc",
  count_desc = "count_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  currency_asc = "currency_asc",
  currency_desc = "currency_desc",
  isFullRefunded_asc = "isFullRefunded_asc",
  isFullRefunded_desc = "isFullRefunded_desc",
  isPaymentCompleted_asc = "isPaymentCompleted_asc",
  isPaymentCompleted_desc = "isPaymentCompleted_desc",
  isRefundedPartial_asc = "isRefundedPartial_asc",
  isRefundedPartial_desc = "isRefundedPartial_desc",
  message_asc = "message_asc",
  message_desc = "message_desc",
  paymentExpiresAt_asc = "paymentExpiresAt_asc",
  paymentExpiresAt_desc = "paymentExpiresAt_desc",
  paymentStatus_asc = "paymentStatus_asc",
  paymentStatus_desc = "paymentStatus_desc",
  paymethod_asc = "paymethod_asc",
  paymethod_desc = "paymethod_desc",
  pricePaymentCompleted_asc = "pricePaymentCompleted_asc",
  pricePaymentCompleted_desc = "pricePaymentCompleted_desc",
  pricePaymentPending_asc = "pricePaymentPending_asc",
  pricePaymentPending_desc = "pricePaymentPending_desc",
  priceRefundCompleted_asc = "priceRefundCompleted_asc",
  priceRefundCompleted_desc = "priceRefundCompleted_desc",
  priceRefundPending_asc = "priceRefundPending_asc",
  priceRefundPending_desc = "priceRefundPending_desc",
  refundStatus_asc = "refundStatus_asc",
  refundStatus_desc = "refundStatus_desc",
  status_asc = "status_asc",
  status_desc = "status_desc",
  type_asc = "type_asc",
  type_desc = "type_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _ITemplateSort {
  _id_asc = "_id_asc",
  _id_desc = "_id_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _InvoiceSort {
  _businessUserId_asc = "_businessUserId_asc",
  _businessUserId_desc = "_businessUserId_desc",
  billingAt_asc = "billingAt_asc",
  billingAt_desc = "billingAt_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  month_asc = "month_asc",
  month_desc = "month_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  serviceProviderName_asc = "serviceProviderName_asc",
  serviceProviderName_desc = "serviceProviderName_desc",
  status_asc = "status_asc",
  status_desc = "status_desc",
  unpaidReason_asc = "unpaidReason_asc",
  unpaidReason_desc = "unpaidReason_desc",
  year_asc = "year_asc",
  year_desc = "year_desc",
  yyyymm_asc = "yyyymm_asc",
  yyyymm_desc = "yyyymm_desc",
}

/**
 * Auto generated sort type
 */
export enum _NotificationHistoryItemSort {
  method_asc = "method_asc",
  method_desc = "method_desc",
  sender_asc = "sender_asc",
  sender_desc = "sender_desc",
  successCount_asc = "successCount_asc",
  successCount_desc = "successCount_desc",
}

/**
 * Auto generated sort type
 */
export enum _ProductSort {
  _id_asc = "_id_asc",
  _id_desc = "_id_desc",
  _itemId_asc = "_itemId_asc",
  _itemId_desc = "_itemId_desc",
  _ownerId_asc = "_ownerId_asc",
  _ownerId_desc = "_ownerId_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  type_asc = "type_asc",
  type_desc = "type_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _PurchaseBundleSort {
  _customerId_asc = "_customerId_asc",
  _customerId_desc = "_customerId_desc",
  _id_asc = "_id_asc",
  _id_desc = "_id_desc",
  _purchaseIds_asc = "_purchaseIds_asc",
  _purchaseIds_desc = "_purchaseIds_desc",
  createdAt_asc = "createdAt_asc",
  createdAt_desc = "createdAt_desc",
  currency_asc = "currency_asc",
  currency_desc = "currency_desc",
  isFullRefunded_asc = "isFullRefunded_asc",
  isFullRefunded_desc = "isFullRefunded_desc",
  isRefundedPartial_asc = "isRefundedPartial_asc",
  isRefundedPartial_desc = "isRefundedPartial_desc",
  message_asc = "message_asc",
  message_desc = "message_desc",
  paymentAt_asc = "paymentAt_asc",
  paymentAt_desc = "paymentAt_desc",
  paymentExpiresAt_asc = "paymentExpiresAt_asc",
  paymentExpiresAt_desc = "paymentExpiresAt_desc",
  paymentStatus_asc = "paymentStatus_asc",
  paymentStatus_desc = "paymentStatus_desc",
  paymethod_asc = "paymethod_asc",
  paymethod_desc = "paymethod_desc",
  pricePaymentCompleted_asc = "pricePaymentCompleted_asc",
  pricePaymentCompleted_desc = "pricePaymentCompleted_desc",
  pricePaymentPending_asc = "pricePaymentPending_asc",
  pricePaymentPending_desc = "pricePaymentPending_desc",
  priceRefundCompleted_asc = "priceRefundCompleted_asc",
  priceRefundCompleted_desc = "priceRefundCompleted_desc",
  priceRefundPending_asc = "priceRefundPending_asc",
  priceRefundPending_desc = "priceRefundPending_desc",
  refundStatus_asc = "refundStatus_asc",
  refundStatus_desc = "refundStatus_desc",
  updatedAt_asc = "updatedAt_asc",
  updatedAt_desc = "updatedAt_desc",
}

/**
 * Auto generated sort type
 */
export enum _SettlementSort {
  amount_asc = "amount_asc",
  amount_desc = "amount_desc",
  canceledAt_asc = "canceledAt_asc",
  canceledAt_desc = "canceledAt_desc",
  description_asc = "description_asc",
  description_desc = "description_desc",
  message_asc = "message_asc",
  message_desc = "message_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
  sequence_asc = "sequence_asc",
  sequence_desc = "sequence_desc",
  settlementDate_asc = "settlementDate_asc",
  settlementDate_desc = "settlementDate_desc",
  status_asc = "status_asc",
  status_desc = "status_desc",
  submallId_asc = "submallId_asc",
  submallId_desc = "submallId_desc",
}

/**
 * Auto generated sort type
 */
export enum _StoreSort {
  description_asc = "description_asc",
  description_desc = "description_desc",
  name_asc = "name_asc",
  name_desc = "name_desc",
}

export interface AttributeInput {
  name: string;
  displayType: DisplayType;
}

export interface AttributeParamInput {
  name: string;
  value: string;
}

export interface BillingMethodRegistInput {
  cardNo: string;
  idNo: string;
  cardPw: string;
  expYear: string;
  expMonth: string;
  description?: string | null;
}

export interface BookingInput {
  itemId: any;
  productId: any;
  countDetails?: UsageInput[] | null;
  priceOrigin?: number | null;
}

export interface CapacityInput {
  name: string;
  count: number;
  label: string;
  price: number;
}

export interface DateRangeInput {
  from?: any | null;
  to?: any | null;
}

/**
 * File upload to s3
 */
export interface FileInput {
  upload: any;
  tags?: TagInput[] | null;
}

export interface ItemBookingCreateInput {
  name: string;
  description?: string | null;
  attrs: AttributeInput[];
  imageIds?: any[] | null;
  currency?: Currency | null;
  price: number;
}

export interface ItemBookingUpdateInput {
  name?: string | null;
  description?: string | null;
  attrsAdd?: AttributeInput[] | null;
  attrsRemove?: string[] | null;
  imageIdsAdd?: any[] | null;
  imageIdsRemove?: any[] | null;
  currency?: Currency | null;
  price?: number | null;
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

export interface ProductBookingCreateInput {
  attrParams: AttributeParamInput[];
  disabled?: boolean | null;
  dateRangeForSale?: DateRangeInput | null;
  dateRangeForUse?: DateRangeInput | null;
  capacity: number;
  price: number;
  currency?: Currency | null;
  capacityPick?: number | null;
  capacityDetails: CapacityInput[];
}

export interface ProductBookingUpdateInput {
  disabled?: boolean | null;
  dateRangeForSale?: DateRangeInput | null;
  dateRangeForUse?: DateRangeInput | null;
  capacity?: number | null;
  price?: number | null;
  currency?: Currency | null;
  capacityPick?: number | null;
  capacityDetailsAdd?: CapacityInput[] | null;
  capacityDetailsRemove?: string[] | null;
  attrParamsAdd?: AttributeParamInput[] | null;
  attrParamsRemove?: string[] | null;
}

export interface ProfileUpdateForBusinessUserInput {
  name?: string | null;
  company?: string | null;
  location?: LocationInput | null;
  expectedBillingDayOfMonth: number;
}

export interface PurchaseBundleCreateInput {
  bookingInputs: BookingInput[];
  paymethod: Paymethod;
  priceOrigin: number;
  currency?: Currency | null;
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
  offerResources: ServiceOfferResourceCreateInput[];
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

export interface StoreCreateInput {
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
  name?: string | null;
  description?: string | null;
  location?: LocationInput | null;
  zoneinfo?: ZoneinfoInput | null;
}

export interface TagInput {
  key: string;
  value: string;
}

export interface UsageInput {
  name: string;
  label: string;
  count: number;
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
  updatedAt_eq?: any | null;
  updatedAt_not_eq?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
}

export interface _IItemFilter {
  AND?: _IItemFilter[] | null;
  OR?: _IItemFilter[] | null;
  name_eq?: string | null;
  name_not_eq?: string | null;
  name_contains?: string | null;
  name_not_contains?: string | null;
  name_in?: string[] | null;
  name_not_in?: string[] | null;
  price_eq?: number | null;
  price_not_eq?: number | null;
  price_gte?: number | null;
  price_gt?: number | null;
  price_lte?: number | null;
  price_lt?: number | null;
  currency_eq?: Currency | null;
  currency_not_eq?: Currency | null;
  currency_in?: Currency[] | null;
  currency_not_in?: Currency[] | null;
  _ownerId_eq?: any | null;
  _ownerId_not_eq?: any | null;
  _ownerId_in?: any[] | null;
  _ownerId_not_in?: any[] | null;
  _storeId_eq?: any | null;
  _storeId_not_eq?: any | null;
  _storeId_in?: any[] | null;
  _storeId_not_in?: any[] | null;
  _imageIds_eq?: any | null;
  _imageIds_not_eq?: any | null;
  _imageIds_in?: any[] | null;
  _imageIds_not_in?: any[] | null;
}

export interface _IPurchaseFilter {
  AND?: _IPurchaseFilter[] | null;
  OR?: _IPurchaseFilter[] | null;
  status_eq?: Status | null;
  status_not_eq?: Status | null;
  status_in?: Status[] | null;
  status_not_in?: Status[] | null;
  isPaymentCompleted_eq?: boolean | null;
  isPaymentCompleted_not_eq?: boolean | null;
  isPaymentCompleted_in?: boolean[] | null;
  isPaymentCompleted_not_in?: boolean[] | null;
  count_eq?: number | null;
  count_not_eq?: number | null;
  count_in?: number[] | null;
  count_not_in?: number[] | null;
  count_gte?: number | null;
  count_gt?: number | null;
  count_lte?: number | null;
  count_lt?: number | null;
  type_eq?: ItemType | null;
  type_not_eq?: ItemType | null;
  type_in?: ItemType[] | null;
  type_not_in?: ItemType[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  updatedAt_eq?: any | null;
  updatedAt_not_eq?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  paymentStatus_eq?: Status | null;
  paymentStatus_not_eq?: Status | null;
  paymentStatus_in?: Status[] | null;
  paymentStatus_not_in?: Status[] | null;
  refundStatus_eq?: Status | null;
  refundStatus_not_eq?: Status | null;
  refundStatus_in?: Status[] | null;
  refundStatus_not_in?: Status[] | null;
  paymethod_eq?: Paymethod | null;
  paymethod_not_eq?: Paymethod | null;
  paymethod_in?: Paymethod[] | null;
  paymethod_not_in?: Paymethod[] | null;
  paymentExpiresAt_eq?: any | null;
  paymentExpiresAt_not_eq?: any | null;
  paymentExpiresAt_in?: any[] | null;
  paymentExpiresAt_not_in?: any[] | null;
  paymentExpiresAt_gte?: any | null;
  paymentExpiresAt_gt?: any | null;
  paymentExpiresAt_lte?: any | null;
  paymentExpiresAt_lt?: any | null;
  currency_eq?: Currency | null;
  currency_not_eq?: Currency | null;
  currency_in?: Currency[] | null;
  currency_not_in?: Currency[] | null;
  pricePaymentPending_eq?: number | null;
  pricePaymentPending_not_eq?: number | null;
  pricePaymentPending_gte?: number | null;
  pricePaymentPending_gt?: number | null;
  pricePaymentPending_lte?: number | null;
  pricePaymentPending_lt?: number | null;
  pricePaymentCompleted_eq?: number | null;
  pricePaymentCompleted_not_eq?: number | null;
  pricePaymentCompleted_gte?: number | null;
  pricePaymentCompleted_gt?: number | null;
  pricePaymentCompleted_lte?: number | null;
  pricePaymentCompleted_lt?: number | null;
  priceRefundPending_eq?: number | null;
  priceRefundPending_not_eq?: number | null;
  priceRefundPending_gte?: number | null;
  priceRefundPending_gt?: number | null;
  priceRefundPending_lte?: number | null;
  priceRefundPending_lt?: number | null;
  priceRefundCompleted_eq?: number | null;
  priceRefundCompleted_not_eq?: number | null;
  priceRefundCompleted_gte?: number | null;
  priceRefundCompleted_gt?: number | null;
  priceRefundCompleted_lte?: number | null;
  priceRefundCompleted_lt?: number | null;
  isFullRefunded_eq?: boolean | null;
  isFullRefunded_not_eq?: boolean | null;
  isFullRefunded_in?: boolean[] | null;
  isFullRefunded_not_in?: boolean[] | null;
  isRefundedPartial_eq?: boolean | null;
  isRefundedPartial_not_eq?: boolean | null;
  isRefundedPartial_in?: boolean[] | null;
  isRefundedPartial_not_in?: boolean[] | null;
  message_eq?: string | null;
  message_not_eq?: string | null;
  message_contains?: string | null;
  message_not_contains?: string | null;
}

export interface _ITemplateFilter {
  AND?: _ITemplateFilter[] | null;
  OR?: _ITemplateFilter[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  updatedAt_eq?: any | null;
  updatedAt_not_eq?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
}

export interface _InvoiceFilter {
  AND?: _InvoiceFilter[] | null;
  OR?: _InvoiceFilter[] | null;
  year_eq?: number | null;
  year_not_eq?: number | null;
  year_gte?: number | null;
  year_gt?: number | null;
  year_lte?: number | null;
  year_lt?: number | null;
  month_eq?: number | null;
  month_not_eq?: number | null;
  month_gte?: number | null;
  month_gt?: number | null;
  month_lte?: number | null;
  month_lt?: number | null;
  yyyymm_eq?: number | null;
  yyyymm_not_eq?: number | null;
  yyyymm_gte?: number | null;
  yyyymm_gt?: number | null;
  yyyymm_lte?: number | null;
  yyyymm_lt?: number | null;
  status_eq?: InvoiceStatus | null;
  status_not_eq?: InvoiceStatus | null;
  status_in?: InvoiceStatus[] | null;
  status_not_in?: InvoiceStatus[] | null;
  unpaidReason_eq?: string | null;
  unpaidReason_not_eq?: string | null;
  unpaidReason_contains?: string | null;
  unpaidReason_not_contains?: string | null;
  _businessUserId_eq?: any | null;
  _businessUserId_not_eq?: any | null;
  _businessUserId_in?: any[] | null;
  _businessUserId_not_in?: any[] | null;
  serviceProviderName_eq?: string | null;
  serviceProviderName_not_eq?: string | null;
  serviceProviderName_contains?: string | null;
  serviceProviderName_not_contains?: string | null;
  billingAt_eq?: any | null;
  billingAt_not_eq?: any | null;
  billingAt_gte?: any | null;
  billingAt_lte?: any | null;
  billingAt_gt?: any | null;
  billingAt_lt?: any | null;
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
  description_in?: string[] | null;
  description_not_in?: string[] | null;
}

export interface _NotificationHistoryItemFilter {
  AND?: _NotificationHistoryItemFilter[] | null;
  OR?: _NotificationHistoryItemFilter[] | null;
  method_eq?: NotificationMethod | null;
  method_not_eq?: NotificationMethod | null;
  method_in?: NotificationMethod[] | null;
  method_not_in?: NotificationMethod[] | null;
  sender_eq?: string | null;
  sender_not_eq?: string | null;
  sender_in?: string[] | null;
  sender_not_in?: string[] | null;
  sender_contains?: string | null;
  sender_not_contains?: string | null;
}

export interface _ProductFilter {
  AND?: _ProductFilter[] | null;
  OR?: _ProductFilter[] | null;
  type_eq?: ProductType | null;
  type_not_eq?: ProductType | null;
  type_in?: ProductType[] | null;
  type_not_in?: ProductType[] | null;
  _itemId_eq?: any | null;
  _itemId_not_eq?: any | null;
  _itemId_in?: any[] | null;
  _itemId_not_in?: any[] | null;
  _ownerId_eq?: any | null;
  _ownerId_not_eq?: any | null;
  _ownerId_in?: any[] | null;
  _ownerId_not_in?: any[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  updatedAt_eq?: any | null;
  updatedAt_not_eq?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
}

export interface _PurchaseBundleFilter {
  AND?: _PurchaseBundleFilter[] | null;
  OR?: _PurchaseBundleFilter[] | null;
  paymentAt_eq?: any | null;
  paymentAt_not_eq?: any | null;
  paymentAt_gte?: any | null;
  paymentAt_gt?: any | null;
  paymentAt_lte?: any | null;
  paymentAt_lt?: any | null;
  _customerId_eq?: any | null;
  _customerId_not_eq?: any | null;
  _customerId_in?: any[] | null;
  _customerId_not_in?: any[] | null;
  _purchaseIds_eq?: any[] | null;
  _purchaseIds_not_eq?: any[] | null;
  _purchaseIds_in?: any[] | null;
  _purchaseIds_not_in?: any[] | null;
  _id_eq?: any | null;
  _id_not_eq?: any | null;
  _id_in?: any[] | null;
  _id_not_in?: any[] | null;
  updatedAt_eq?: any | null;
  updatedAt_not_eq?: any | null;
  updatedAt_in?: any[] | null;
  updatedAt_not_in?: any[] | null;
  createdAt_eq?: any | null;
  createdAt_not_eq?: any | null;
  createdAt_in?: any[] | null;
  createdAt_not_in?: any[] | null;
  paymentStatus_eq?: Status | null;
  paymentStatus_not_eq?: Status | null;
  paymentStatus_in?: Status[] | null;
  paymentStatus_not_in?: Status[] | null;
  refundStatus_eq?: Status | null;
  refundStatus_not_eq?: Status | null;
  refundStatus_in?: Status[] | null;
  refundStatus_not_in?: Status[] | null;
  paymethod_eq?: Paymethod | null;
  paymethod_not_eq?: Paymethod | null;
  paymethod_in?: Paymethod[] | null;
  paymethod_not_in?: Paymethod[] | null;
  paymentExpiresAt_eq?: any | null;
  paymentExpiresAt_not_eq?: any | null;
  paymentExpiresAt_in?: any[] | null;
  paymentExpiresAt_not_in?: any[] | null;
  paymentExpiresAt_gte?: any | null;
  paymentExpiresAt_gt?: any | null;
  paymentExpiresAt_lte?: any | null;
  paymentExpiresAt_lt?: any | null;
  currency_eq?: Currency | null;
  currency_not_eq?: Currency | null;
  currency_in?: Currency[] | null;
  currency_not_in?: Currency[] | null;
  pricePaymentPending_eq?: number | null;
  pricePaymentPending_not_eq?: number | null;
  pricePaymentPending_gte?: number | null;
  pricePaymentPending_gt?: number | null;
  pricePaymentPending_lte?: number | null;
  pricePaymentPending_lt?: number | null;
  pricePaymentCompleted_eq?: number | null;
  pricePaymentCompleted_not_eq?: number | null;
  pricePaymentCompleted_gte?: number | null;
  pricePaymentCompleted_gt?: number | null;
  pricePaymentCompleted_lte?: number | null;
  pricePaymentCompleted_lt?: number | null;
  priceRefundPending_eq?: number | null;
  priceRefundPending_not_eq?: number | null;
  priceRefundPending_gte?: number | null;
  priceRefundPending_gt?: number | null;
  priceRefundPending_lte?: number | null;
  priceRefundPending_lt?: number | null;
  priceRefundCompleted_eq?: number | null;
  priceRefundCompleted_not_eq?: number | null;
  priceRefundCompleted_gte?: number | null;
  priceRefundCompleted_gt?: number | null;
  priceRefundCompleted_lte?: number | null;
  priceRefundCompleted_lt?: number | null;
  isFullRefunded_eq?: boolean | null;
  isFullRefunded_not_eq?: boolean | null;
  isFullRefunded_in?: boolean[] | null;
  isFullRefunded_not_in?: boolean[] | null;
  isRefundedPartial_eq?: boolean | null;
  isRefundedPartial_not_eq?: boolean | null;
  isRefundedPartial_in?: boolean[] | null;
  isRefundedPartial_not_in?: boolean[] | null;
  message_eq?: string | null;
  message_not_eq?: string | null;
  message_contains?: string | null;
  message_not_contains?: string | null;
}

export interface _SettlementFilter {
  AND?: _SettlementFilter[] | null;
  OR?: _SettlementFilter[] | null;
  amount_eq?: number | null;
  amount_not_eq?: number | null;
  amount_gte?: number | null;
  amount_lte?: number | null;
  amount_gt?: number | null;
  amount_lt?: number | null;
  message_eq?: string | null;
  message_not_eq?: string | null;
  message_in?: string[] | null;
  message_not_in?: string[] | null;
  message_contains?: string | null;
  message_not_contains?: string | null;
  settlementDate_eq?: any | null;
  settlementDate_not_eq?: any | null;
  settlementDate_gte?: any | null;
  settlementDate_lte?: any | null;
  settlementDate_gt?: any | null;
  settlementDate_lt?: any | null;
  submallId_eq?: string | null;
  submallId_not_eq?: string | null;
  submallId_in?: string[] | null;
  submallId_not_in?: string[] | null;
  sequence_eq?: string | null;
  sequence_not_eq?: string | null;
  sequence_in?: string[] | null;
  sequence_not_in?: string[] | null;
  canceledAt_eq?: any | null;
  canceledAt_not_eq?: any | null;
  status_eq?: Status | null;
  status_not_eq?: Status | null;
  status_in?: Status[] | null;
  status_not_in?: Status[] | null;
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
  description_in?: string[] | null;
  description_not_in?: string[] | null;
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
  description_eq?: string | null;
  description_not_eq?: string | null;
  description_contains?: string | null;
  description_not_contains?: string | null;
  description_in?: string[] | null;
  description_not_in?: string[] | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
