import { MutationHookOptions, useMutation } from "@apollo/client";
import { getRefetch, toast } from "@janda-com/front";
import { useEffect, useState } from "react";
import { BUSINESS_USER_FIND_EMAIL, BUSINESS_USER_RESET_PASSWORD, CUSTOMER_USER_FIND_EMAIL, CUSTOMER_USER_RESET_PASSWORD, ME,  PROFILE,  PROFILE_UPDATE_FOR_BUSINESS_USER, SIGN_IN, SIGN_OUT, SIGN_UP, STORE_SIGINUP, STORE_SIGNIN_ANONYMOUSE_COMPLETE, STORE_SIGNIN_ANONYMOUSE_START, USER_DUPLICATE_CHECK } from "../apollo/gql/user";
import {  me, me_Me,  profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables,
      signInVariables,  signIn, signUp, signUpVariables, storeSignInAnonymousComplete, storeSignInAnonymousCompleteVariables, storeSignInAnonymousStart, storeSignInAnonymousStartVariables, storeSignUp, storeSignUpVariables, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, businessUserFindEmail, businessUserFindEmail_BusinessUserFindEmail, customerFindEmail, customerFindEmail_CustomerFindEmail, businessUserResetPassword, businessUserResetPasswordVariables, customerResetPassword_CustomerResetPassword, customerResetPassword, customerResetPasswordVariables, signOut, userDuplicateCheck, userDuplicateCheckVariables, userDuplicateCheck_UserDuplicateCheck, UserRole, Fuser, profileVariables} from "../type/api";
import {  generateMutationHook, generateQueryHook } from "../utils/query";

export const useStoreSignInAnonymousStart = generateMutationHook<storeSignInAnonymousStart, storeSignInAnonymousStartVariables>(STORE_SIGNIN_ANONYMOUSE_START);
export const useStoreSignInAnonymousComplete = generateMutationHook<storeSignInAnonymousComplete, storeSignInAnonymousCompleteVariables>(STORE_SIGNIN_ANONYMOUSE_COMPLETE);
export const useStoreSignUp = generateMutationHook<storeSignUp, storeSignUpVariables>(STORE_SIGINUP);
export const useBusiProfileUpdate = generateMutationHook<profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables>(PROFILE_UPDATE_FOR_BUSINESS_USER);
export const useStoreSign = generateMutationHook<profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables>(PROFILE_UPDATE_FOR_BUSINESS_USER);
export const useMe = generateQueryHook<me,me_Me>(ME);
export const useProfile = generateQueryHook<any,profileVariables>(PROFILE);
export const useUserDuplicateCheck = generateQueryHook<userDuplicateCheck,userDuplicateCheck_UserDuplicateCheck,userDuplicateCheckVariables>(USER_DUPLICATE_CHECK, { skipInit: true });

export const useSignUp = generateMutationHook<signUp,signUpVariables>(SIGN_UP);
export const useSignIn = generateMutationHook<signIn,signInVariables>(SIGN_IN,{...getRefetch(ME)});
export const useSignOut = (options?:MutationHookOptions<signOut>) => useMutation<signOut>(SIGN_OUT,options)

export const useBusiEmailFind = generateQueryHook<businessUserFindEmail,businessUserFindEmail_BusinessUserFindEmail>(BUSINESS_USER_FIND_EMAIL);
export const useCustomerEmailFind = generateMutationHook<customerFindEmail,customerFindEmail_CustomerFindEmail>(CUSTOMER_USER_FIND_EMAIL);

export const useBusiResetPassword = generateMutationHook<businessUserResetPassword,businessUserResetPasswordVariables>(BUSINESS_USER_RESET_PASSWORD);
export const useCustomerResetPassword = generateMutationHook<customerResetPassword,customerResetPasswordVariables>(CUSTOMER_USER_RESET_PASSWORD);

export const useDuplicateCheck = () => {
      const [message,setMessage] = useState({
            success: "",
            fail: ""
      })
      const [duplicateChecked, setDuplicateCheck] = useState(false);
      const {getData:duplicateCheck} = useUserDuplicateCheck({
            onCompleted: ({UserDuplicateCheck}) => {
                  if(UserDuplicateCheck) { 
                        setDuplicateCheck(!UserDuplicateCheck.duplicated)
                        if(UserDuplicateCheck.duplicated) toast.warn(message.fail)
                        else  toast.success(message.success);
                  }
            }
      })

      const checkEmailDuplicate = (email:string,role:UserRole,) => {
            setMessage({
                  fail: `${email}은 이미 생성된 이메일 입니다.`,
                  success: `${email}를 사용할 수 있습니다. 입니다.`
            })
            
            duplicateCheck({
                   variables: {
                         role,
                         target: "email" as keyof Fuser,
                         value: email
                   }
            })
      }

      return {duplicateChecked, setDuplicateCheck, checkEmailDuplicate}
}