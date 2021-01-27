import { VERIFICATION_COMPLETE, VERIFICATION_START } from "../apollo/gql/verification";
import { verificationComplete, verificationCompleteVariables, verificationStart, verificationStartVariables } from "../type/api";
import { generateMutationHook } from "../utils/hookGen";

export const useVerificationStart = generateMutationHook<verificationStart,verificationStartVariables>(VERIFICATION_START);
export const useVerificationComplete = generateMutationHook<verificationComplete,verificationCompleteVariables>(VERIFICATION_COMPLETE);

