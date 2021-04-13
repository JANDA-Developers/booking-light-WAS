import { Flex, IJDalignProp, IUseModal, JDbutton, JDcheckBox, JDtypho } from '@janda-com/front';
import React from 'react';
import { IPrivacyModalInfo } from '../../../../../component/privacyModal/PrivacyModal';
import { useIdSelecter } from '../../../../../hook/useIdSelecter';
import { Fpolicy } from '../../../../../type/api';

interface IProp extends IJDalignProp {
    policy: Fpolicy
    policyIdHooks: ReturnType<typeof useIdSelecter>
    policyModalHook: IUseModal<IPrivacyModalInfo>;
    isLast?: boolean;
}

export const PolicyBlock: React.FC<IProp> = ({ policy, policyIdHooks, policyModalHook, ...props }) => {
    return <Flex key={policy._id} {...props} >
        <Flex>
            <JDtypho mr>{policy.name}</JDtypho>
            <JDcheckBox checked={policyIdHooks.isChecked(policy._id)}
                onChange={
                    () => {
                        policyIdHooks.toggle(policy._id)
                    }}
                size="small"
            />
        </Flex>
        <JDbutton onClick={() => {
            policyModalHook.openModal({
                onAgree: () => {
                    policyIdHooks.check(policy._id)
                    policyModalHook.closeModal()
                },
                policy: policy.content,
                head: {
                    title: policy.name + "약관",
                }
            })
        }} br="square" mode="flat" size="tiny" thema="black">약관보기</JDbutton>
    </Flex>;
};
