import { getRefetch } from "@janda-com/front";
import { BUYPAGE_POLICY_DELETE, BUYPAGE_POLICY_UPDATE } from "../apollo/gql/buypage";
import { ME } from "../apollo/gql/user";
import { boardUpdate, boardUpdateVariables, buypagePolicyDeleteVariables, buypagePolicyDelete, buypagePolicyUpdate, buypagePolicyUpdateVariables } from "../type/api";
import { generateMutationHook } from "../utils/query";

export const useBuypagePolicyUpdate = generateMutationHook<buypagePolicyUpdate, buypagePolicyUpdateVariables>(BUYPAGE_POLICY_UPDATE, {...getRefetch(ME)});
export const useBuypagePolicyDelete = generateMutationHook<buypagePolicyDelete, buypagePolicyDeleteVariables>(BUYPAGE_POLICY_DELETE, {...getRefetch(ME)});
