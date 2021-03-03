import { getRefetch } from "@janda-com/front";
import { ITEMBOOKING_CREATE } from "../apollo/gql/item";
import {  PURCHASE_LIST_FOR_CUSTOMER } from "../apollo/gql/product";
import { PURCHASE_BUNDLE_CANCEL, PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER, PURCHASE_FIND_BY_ID } from "../apollo/gql/purchaseBundle";
import { PURCHASE_BUNDLE_REFUND } from "../apollo/gql/store";
import {  _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort,  purchaseBundleCreate, purchaseBundleCreateVariables, purchaseFindByIdVariables, purchaseFindById, purchaseFindById_PurchaseFindById, purchaseListForBusinessUser, purchaseListForBusinessUserVariables, purchaseListForBusinessUser_PurchaseListForBusinessUser_items, purchaseListForBusinessUser_PurchaseListForBusinessUser, purchaseListForCustomer, purchaseListForCustomerVariables, purchaseListForCustomer_PurchaseListForCustomer_items, purchaseBundleCancel, purchaseBundleCancelVariables, purchaseBundleRefund, purchaseBundleRefundVariables, _PurchaseBundleFilter, _PurchaseBundleSort } from "../type/api";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";

export const usePurchaseFindById = generateFindQuery<purchaseFindById,purchaseFindByIdVariables,purchaseFindById_PurchaseFindById>("purchaseId", PURCHASE_FIND_BY_ID);
export const usePurchaseBusinessBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseListForBusinessUser,purchaseListForBusinessUserVariables,purchaseListForBusinessUser_PurchaseListForBusinessUser_items>(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER);
export const usePurchaseCustomerBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseListForCustomer,purchaseListForCustomerVariables,purchaseListForCustomer_PurchaseListForCustomer_items>(PURCHASE_LIST_FOR_CUSTOMER);
export const usePurchaseBundleCreate = generateMutationHook<purchaseBundleCreate,purchaseBundleCreateVariables>(ITEMBOOKING_CREATE,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleCancel = generateMutationHook<purchaseBundleCancel,purchaseBundleCancelVariables>(PURCHASE_BUNDLE_CANCEL,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleRefund = generateMutationHook<purchaseBundleRefund, purchaseBundleRefundVariables>(PURCHASE_BUNDLE_REFUND,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
