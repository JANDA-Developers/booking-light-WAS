import { MutationHookOptions, useMutation } from "@apollo/client";
import { getRefetch, toast } from "@janda-com/front";
import { useEffect, useState } from "react";
import { BUSINESS_USER_FIND_EMAIL, BUSINESS_USER_RESET_PASSWORD, CUSTOMER_USER_FIND_EMAIL, CUSTOMER_USER_RESET_PASSWORD, ME,  MY_NOTIFICATION_MANAGER,  PROFILE,  PROFILE_UPDATE_FOR_BUSINESS_USER, SIGN_IN, SIGN_OUT, SIGN_UP, STORE_SIGINUP, STORE_SIGNIN_ANONYMOUSE_COMPLETE, STORE_SIGNIN_ANONYMOUSE_START, USER_DUPLICATE_CHECK } from "../apollo/gql/user";
import {  me, me_Me,  profileUpdateForBusinessUser, profileUpdateForBusinessUserVariables,
      signInVariables,  signIn, signUp, signUpVariables, storeSignInAnonymousComplete, storeSignInAnonymousCompleteVariables, storeSignInAnonymousStart, storeSignInAnonymousStartVariables, storeSignUp, storeSignUpVariables, _IItemFilter, _IItemSort, _InvoiceFilter, _InvoiceSort, businessUserFindEmail, businessUserFindEmail_BusinessUserFindEmail, customerFindEmail, customerFindEmail_CustomerFindEmail, businessUserResetPassword, businessUserResetPasswordVariables, customerResetPassword_CustomerResetPassword, customerResetPassword, customerResetPasswordVariables, signOut, userDuplicateCheck, userDuplicateCheckVariables, userDuplicateCheck_UserDuplicateCheck, UserRole, Fuser, profileVariables, VerificationTarget, verificationComplete_VerificationComplete_data, myNotificationManager, myNotificationManager_MyNotificationManager} from "../type/api";
import { completeMsg, errorMessage } from "../utils/onCompletedMessage";
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

export const useMyNotificationManager = generateQueryHook<myNotificationManager, myNotificationManager_MyNotificationManager>(MY_NOTIFICATION_MANAGER)

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
                  success: `이메일 ${email}은 사용 가능합니다.`
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


export type TUseAnnonymouseVerifi  = ReturnType<typeof useAnnonymouseVerifi>
export const useAnnonymouseVerifi= ( target: VerificationTarget) => {
    const [code, setCode] = useState("");
    const [verifiData, setVerifiData] = useState<verificationComplete_VerificationComplete_data>()

    const [verifiAnony, {loading:startLoading}] = useStoreSignInAnonymousStart({onCompleted:
        ({StoreSignInAnonymousStart})=>{
            if(completeMsg(StoreSignInAnonymousStart, "인증코드 발송"))
                setVerifiData(StoreSignInAnonymousStart.data!)
    }});
    const [verifiAnonyComplete,{loading:completeLoading}] = useStoreSignInAnonymousComplete({
        onCompleted: ({StoreSignInAnonymousComplete}) => {
            if(completeMsg(StoreSignInAnonymousComplete, "인증완료", "인증번호를 다시 확인 해주세요")) {
                setVerifiData(StoreSignInAnonymousComplete.data!)
            } 
        }
    });

    
    const verifiStart = async (payload:string) => {
        return await verifiAnony({
            variables: {
                input: {
                    target,
                    payload
                }
            }
        }).then(result => {
            return {...result?.data?.StoreSignInAnonymousStart};
        })
    }

    const verifiComplete = async () => {
        if(!verifiData) return;
        return await verifiAnonyComplete({
            variables: {
                input: {
                    code,
                    payload: verifiData.payload,
                    target: verifiData.target,
                    verificationId: verifiData._id
                }
            }
        }).then(result => {
            return {...result?.data?.StoreSignInAnonymousComplete};
        })
    }

    const totalLoading = startLoading || completeLoading;

    return { code, setCode, verifiStart, verifiComplete, verifiAnony, verifiAnonyComplete, verifiData, totalLoading, setVerifiData,target};

}