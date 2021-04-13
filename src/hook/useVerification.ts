import { useState } from "react";
import { VERIFICATION_COMPLETE, VERIFICATION_START } from "../apollo/gql/verification";
import { verificationComplete, verificationCompleteVariables, verificationComplete_VerificationComplete_data, VerificationEvent, verificationStart, VerificationStartInput, verificationStartVariables, VerificationTarget } from "../type/api";
import { generateMutationHook } from "../utils/query";
import { completeMsg } from "../utils/utils";

export const useVerificationStart = generateMutationHook<verificationStart,verificationStartVariables>(VERIFICATION_START);
export const useVerificationComplete = generateMutationHook<verificationComplete,verificationCompleteVariables>(VERIFICATION_COMPLETE);


export type TuseVerification = ReturnType<typeof useVerification>

export const useVerification = (event:VerificationEvent,target: VerificationTarget) =>  {
    const [code, setCode] = useState("");
    const [verifiData, setVerifiData] = useState<verificationComplete_VerificationComplete_data>()
    const [verifyMu, {loading:startLoading}] = useVerificationStart({onCompleted:
        ({VerificationStart})=>{
            if(completeMsg(VerificationStart, "인증코드 발송"))
                setVerifiData(VerificationStart.data!)
    }});
    const [verifyCompleteMu, {loading:completeLoading}] = useVerificationComplete({
        onCompleted: ({VerificationComplete}) => {
            if(completeMsg(VerificationComplete, "인증완료")) {
                setVerifiData(VerificationComplete.data!)
            }
        }
    });

    const verifiStart = async (payload:string) => {
        return await verifyMu({
            variables: {
                input: {
                    event,
                    target,
                    payload
                }
            }
        }).then(result => {
            return {...result?.data?.VerificationStart};
        })
    }

    const verifiComplete = async (_code?:string) => {
        if(!verifiData) return;
        return await verifyCompleteMu({
            variables: {
                input: {
                    code: _code || code,
                    payload: verifiData.payload,
                    target: verifiData.target,
                    verificationId: verifiData._id
                }
            }
        }).then(result => {
            return {...result?.data?.VerificationComplete};
        })
    }

    const totalLoading = startLoading || completeLoading;

    return { code, setCode, verifiStart, verifiComplete, verifyMu, verifyCompleteMu, verifiData, totalLoading, setVerifiData};
}

