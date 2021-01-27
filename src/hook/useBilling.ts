import { BILLING_METHOD_DELETE, BILLING_METHOD_REGIST } from "../apollo/gql/invoice";
import { billingMethodDelete, billingMethodDeleteVariables, billingMethodRegist, billingMethodRegistVariables } from "../type/api";
import { generateMutationHook } from "../utils/hookGen";

export const useBillingMethodRegist = generateMutationHook<billingMethodRegist,billingMethodRegistVariables>(BILLING_METHOD_REGIST);
export const useBillingMethodDelete = generateMutationHook<billingMethodDelete, billingMethodDeleteVariables>(BILLING_METHOD_DELETE);
