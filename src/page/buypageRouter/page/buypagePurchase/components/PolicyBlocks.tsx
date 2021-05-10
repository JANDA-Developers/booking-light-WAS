import { isLast, JDalign, JDcheckBox, useModal } from "@janda-com/front";
import React from "react";
import { PrivacyModal } from "../../../../../component/privacyModal/PrivacyModal";
import { useIdSelecter } from "../../../../../hook/useIdSelecter";
import { storeFindByCode_StoreFindByCode_buypage_policies } from "../../../../../type/api";
import { IPrivacyModalInfo } from "../../components/TimeCapacityPickerModal";
import { PolicyBlock } from "./PolicyBlock";

interface IProp {
    policies: storeFindByCode_StoreFindByCode_buypage_policies[];
    policyIdHooks: ReturnType<typeof useIdSelecter>;
}

export const PolicyBlocks: React.FC<IProp> = ({ policies, policyIdHooks }) => {
    const policyModalHook = useModal<IPrivacyModalInfo>();

    return (
        <JDalign>
            <JDcheckBox
                checked={policyIdHooks.isAllSelected}
                onChange={policyIdHooks.toggleAll}
                mb
                label="전체동의"
            />
            {policies.map((policy, index) => (
                <PolicyBlock
                    key={policy._id}
                    mb={isLast(index, policies) ? undefined : "small"}
                    policyModalHook={policyModalHook}
                    policyIdHooks={policyIdHooks}
                    policy={policy}
                />
            ))}
            <PrivacyModal modalHook={policyModalHook} />
        </JDalign>
    );
};
