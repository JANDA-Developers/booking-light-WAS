import { getRefetch } from "@janda-com/front";
import { split } from "lodash";
import { useState } from "react";
import { ITEMBOOKING_CREATE } from "../apollo/gql/item";
import {  PURCHASE_LIST_FOR_CUSTOMER } from "../apollo/gql/product";
import { PURCHASE_BUNDLE_REFUND, PURCHASE_BUNDLE_CANCEL, PURCHASE_BUNDLE_CREATE, PURCHASE_BUNDLE_FIND_BY_ID, PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER, PURCHASE_BUNDLE_FIND_BY_INFO, PURCHASE_BUNDLE_SET_PAYMENT_STATUS, PURCHASE_FIND_BY_ID, PURCHASE_BUNDLE_DELETE, PURCHASE_BUNDLE_UPDATE,  } from "../apollo/gql/purchaseBundle";
import { Paths } from "../MainRouter";
import { BuyPagePaths } from "../page/buypageRouter/BuyPageRouter";
import {  _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort,  
    purchaseBundleFindByInfo,
    purchaseBundleFindByInfoVariables,
    purchaseBundleFindByInfo_PurchaseBundleFindByInfo,
    purchaseBundleCreate, purchaseBundleCreateVariables, purchaseFindByIdVariables, purchaseFindById, purchaseFindById_PurchaseFindById, purchaseListForBusinessUser, purchaseListForBusinessUserVariables, purchaseListForBusinessUser_PurchaseListForBusinessUser_items, purchaseListForBusinessUser_PurchaseListForBusinessUser, purchaseListForCustomer, purchaseListForCustomerVariables, purchaseListForCustomer_PurchaseListForCustomer_items, purchaseBundleCancel, purchaseBundleCancelVariables, purchaseBundleRefund, purchaseBundleRefundVariables, _PurchaseBundleFilter, _PurchaseBundleSort, verificationComplete_VerificationComplete_data, VerificationEvent, VerificationTarget, purchaseBundleFindById, purchaseBundleFindByIdVariables, purchaseBundleFindById_PurchaseBundleFindById, purchaseBundleListForCustomer, purchaseBundleListForBusinessUser, purchaseBundleListForBusinessUserVariables, purchaseBundleListForCustomerVariables, purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items, purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items, purchaseBundleSetPaymentStatus, purchaseBundleSetPaymentStatusVariables, purchaseBundleDelete, purchaseBundleDeleteVariables,  purchaseBundleUpdate, purchaseBundleUpdateVariables } from "../type/api";
import { completeMsg } from "../utils/onCompletedMessage";
import { generateFindQuery, generateListQueryHook, generateMutationHook, generateQueryHook } from "../utils/query";

export const usePurchaseFindById = generateFindQuery<purchaseFindById,purchaseFindByIdVariables,purchaseFindById_PurchaseFindById>("purchaseId", PURCHASE_FIND_BY_ID);
export const usePurchaseBusinessBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseBundleListForBusinessUser,purchaseBundleListForBusinessUserVariables,purchaseBundleListForBusinessUser_PurchaseBundleListForBusinessUser_items>(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER, {initialSort: [_PurchaseBundleSort.createdAt__desc]});
export const usePurchaseCustomerBundleList = generateListQueryHook<_PurchaseBundleFilter,_PurchaseBundleSort,purchaseBundleListForCustomer,purchaseBundleListForCustomerVariables,purchaseBundleListForCustomer_PurchaseBundleListForCustomer_items>(PURCHASE_LIST_FOR_CUSTOMER);
export const usePurchaseBundleUpdate = generateMutationHook<purchaseBundleUpdate,purchaseBundleUpdateVariables>(PURCHASE_BUNDLE_UPDATE,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleDelete = generateMutationHook<purchaseBundleDelete,purchaseBundleDeleteVariables>(PURCHASE_BUNDLE_DELETE,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleCreate = generateMutationHook<purchaseBundleCreate,purchaseBundleCreateVariables>(PURCHASE_BUNDLE_CREATE,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleCancel = generateMutationHook<purchaseBundleCancel,purchaseBundleCancelVariables>(PURCHASE_BUNDLE_CANCEL,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleRefund = generateMutationHook<purchaseBundleRefund, purchaseBundleRefundVariables>(PURCHASE_BUNDLE_REFUND,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)});
export const usePurchaseBundleFindById = generateFindQuery<purchaseBundleFindById,purchaseBundleFindByIdVariables,purchaseBundleFindById_PurchaseBundleFindById>("bundleId", PURCHASE_BUNDLE_FIND_BY_ID);
export const usePurchaseBundleFindByInfo = generateQueryHook<purchaseBundleFindByInfo,purchaseBundleFindByInfo_PurchaseBundleFindByInfo,purchaseBundleFindByInfoVariables>(PURCHASE_BUNDLE_FIND_BY_INFO);
export const usePurchaseBundleSetPaymentStatus = generateMutationHook<purchaseBundleSetPaymentStatus, purchaseBundleSetPaymentStatusVariables>(PURCHASE_BUNDLE_SET_PAYMENT_STATUS,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_BUNDLE_FIND_BY_ID)})
// export const usePurchaseBundleSetRefundStatus = generateMutationHook<purchaseBundleSetRefundStatus, purchaseBundleSetRefundStatusVariables>(PURCHASE_BUNDLE_SET_REFUND_STATUS,{...getRefetch(PURCHASE_BUNDLE_LIST_FOR_BUSINESSUSER,PURCHASE_LIST_FOR_CUSTOMER)})


export interface nicePayAuthData extends ReturnType<typeof purchaseCreatePaymentInfoReader> {}
export const purchaseCreatePaymentInfoReader = (paymentInfo:string, bundleId:string) => {
    const [editDate,priceOrigin,hash,moid] = paymentInfo.split("__")

    const customParam = JSON.stringify({
        purchaseBundleId: bundleId,
        returnURL: location.origin + BuyPagePaths.sucess + "/" + bundleId,
        errorURL: location.origin + Paths.error
    });

    return {
        editDate,
        priceOrigin,
        hash,
        moid,
        customParam
    }
}