import { getRefetch } from "@janda-com/front";
import { BUSINESS_USER_FIND_EMAIL, BUSINESS_USER_RESET_PASSWORD, CUSTOMER_USER_FIND_EMAIL, CUSTOMER_USER_RESET_PASSWORD, ME, PROFILE, PROFILE_UPDATE_FOR_BUSINESS_USER, SIGN_IN, SIGN_UP, STORE_SIGINUP, STORE_SIGNIN_ANONYMOUSE_COMPLETE, STORE_SIGNIN_ANONYMOUSE_START } from "../apollo/gql/user";
import {  me, me_Me, profile, profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables, profileVariables,
      signInVariables,  signIn, signUp, signUpVariables, storeSignInAnonymousComplete, storeSignInAnonymousCompleteVariables, storeSignInAnonymousStart, storeSignInAnonymousStartVariables, storeSignUp, storeSignUpVariables, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, businessUserFindEmail, businessUserFindEmail_BusinessUserFindEmail, customerFindEmail, customerFindEmail_CustomerFindEmail, businessUserResetPassword, businessUserResetPasswordVariables, customerResetPassword_CustomerResetPassword, customerResetPassword, customerResetPasswordVariables} from "../type/api";
import {  generateMutationHook } from "../utils/hookGen";
import {  generateQueryHook } from "../utils/query";

export const useStoreSignInAnonymousStart = generateMutationHook<storeSignInAnonymousStart, storeSignInAnonymousStartVariables>(STORE_SIGNIN_ANONYMOUSE_START);
export const useStoreSignInAnonymousComplete = generateMutationHook<storeSignInAnonymousComplete, storeSignInAnonymousCompleteVariables>(STORE_SIGNIN_ANONYMOUSE_COMPLETE);
export const useStoreSignUp = generateMutationHook<storeSignUp, storeSignUpVariables>(STORE_SIGINUP);
export const useBusiProfileUpdate = generateMutationHook<profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables>(PROFILE_UPDATE_FOR_BUSINESS_USER);
export const useStoreSign = generateMutationHook<profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables>(PROFILE_UPDATE_FOR_BUSINESS_USER);
export const useMe = generateQueryHook<me,me_Me>(ME);
export const useProfile = generateQueryHook<profile,profileVariables>(PROFILE);

export const useSignUp = generateMutationHook<signUp,signUpVariables>(SIGN_UP);
export const useSignIn = generateMutationHook<signIn,signInVariables>(SIGN_IN,{...getRefetch(ME)});

export const useBusiEmailFind = generateQueryHook<businessUserFindEmail,businessUserFindEmail_BusinessUserFindEmail>(BUSINESS_USER_FIND_EMAIL);
export const useCustomerEmailFind = generateMutationHook<customerFindEmail,customerFindEmail_CustomerFindEmail>(CUSTOMER_USER_FIND_EMAIL);

export const useBusiResetPassword = generateMutationHook<businessUserResetPassword,businessUserResetPasswordVariables>(BUSINESS_USER_RESET_PASSWORD);
export const useCustomerResetPassword = generateMutationHook<customerResetPassword,customerResetPasswordVariables>(CUSTOMER_USER_RESET_PASSWORD);

