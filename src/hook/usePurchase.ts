import { getRefetch } from "@janda-com/front";
import { useState } from "react";
import { ITEMBOOKING_CREATE } from "../apollo/gql/item";
import {  PURCHASE_LIST_FOR_CUSTOMER } from "../apollo/gql/product";
import { PURCHASE_BUNDLE_CANCEL, PURCHASE_BUNDLE_CREATE, PURCHASE_BUNDLE_FIND_BY_ID, PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER, PURCHASE_FIND_BY_ID } from "../apollo/gql/purchaseBundle";
import { PURCHASE_BUNDLE_REFUND } from "../apollo/gql/store";
import {  _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort,  purchaseBundleCreate, purchaseBundleCreateVariables, purchaseFindByIdVariables, purchaseFindById, purchaseFindById_PurchaseFindById, purchaseListForBusinessUser, purchaseListForBusinessUserVariables, purchaseListForBusinessUser_PurchaseListForBusinessUser_items, purchaseListForBusinessUser_PurchaseListForBusinessUser, purchaseListForCustomer, purchaseListForCustomerVariables, purchaseListForCustomer_PurchaseListForCustomer_items, purchaseBundleCancel, purchaseBundleCancelVariables, purchaseBundleRefund, purchaseBundleRefundVariables, _PurchaseBundleFilter, _PurchaseBundleSort, verificationComplete_VerificationComplete_data, VerificationEvent, VerificationTarget, purchaseBundleFindById, purchaseBundleFindByIdVariables, purchaseBundleFindById_PurchaseBundleFindById, purchaseBundleListForCustomer, purchaseBundleListForBusinessUser, purchaseBundleListForBusinessUserVariables, purchaseBundleListForCustomerVariables, purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items, purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items } from "../type/api";
import { completeMsg } from "../utils/onCompletedMessage";
import { generateFindQuery, generateListQueryHook, generateMutationHook } from "../utils/query";
import { useStoreSignInAnonymousComplete, useStoreSignInAnonymousStart } from "./useUser";

export const usePurchaseFindById = generateFindQuery<purchaseFindById,purchaseFindByIdVariables,purchaseFindById_PurchaseFindById>("purchaseId", PURCHASE_FIND_BY_ID);
export const usePurchaseBusinessBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseBundleListForBusinessUser,purchaseBundleListForBusinessUserVariables,purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items>(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER);
export const usePurchaseCustomerBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseBundleListForCustomer,purchaseBundleListForCustomerVariables,purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items>(PURCHASE_LIST_FOR_CUSTOMER);
export const usePurchaseBundleCreate = generateMutationHook<purchaseBundleCreate,purchaseBundleCreateVariables>(PURCHASE_BUNDLE_CREATE,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleCancel = generateMutationHook<purchaseBundleCancel,purchaseBundleCancelVariables>(PURCHASE_BUNDLE_CANCEL,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleRefund = generateMutationHook<purchaseBundleRefund, purchaseBundleRefundVariables>(PURCHASE_BUNDLE_REFUND,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleFindById = generateFindQuery<purchaseBundleFindById,purchaseBundleFindByIdVariables,purchaseBundleFindById_PurchaseBundleFindById>("bundleId", PURCHASE_BUNDLE_FIND_BY_ID);
