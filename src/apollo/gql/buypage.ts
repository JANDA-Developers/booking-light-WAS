import gql from "graphql-tag";
import { F_USERERROR } from "./fragment/shared";

export const BUYPAGE_POLICY_UPDATE = gql`
    mutation buypagePolicyUpdate(
        $input: PolicyInput
        $inputs: [PolicyInput!]
        $storeId: ObjectId!
    ) {
        BuypagePolicyUpdate(storeId: $storeId, input: $input, inputs: $inputs) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;

export const BUYPAGE_POLICY_DELETE = gql`
    mutation buypagePolicyDelete($policyKey: String!, $storeId: ObjectId!) {
        BuypagePolicyDelete(storeId: $storeId, policyKey: $policyKey) {
            ok
            error {
                ...FuserError
            }
        }
    }
    ${F_USERERROR}
`;
