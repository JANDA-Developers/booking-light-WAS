import { JDbutton, JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
import { IJDbadge } from '@janda-com/front/dist/components/badge/Badge';
import React, { useContext } from 'react';
import { ServiceCard } from '../../component/serviceCard/ServiceCard';
import AppContext from '../../context';
import { useServicePlanSubDescribe, useServicePlanSubscribe, useServicePlanTemplateList, useServiceTemplateDelete, useServiceTemplateUpdate } from '../../hook/useService';
import { servicePlanTemplateList_ServicePlanTemplateList } from '../../type/api';
import { completeMsg } from '../../utils/onCompletedMessage';
import { promptConfirm } from '../../utils/prompt';

interface IProp { }

export const MemberShip: React.FC<IProp> = () => {
    const { me } = useContext(AppContext);
    const subscribPlan = me?.subscribPlan
    const { data: items } = useServicePlanTemplateList({
        variables: {
            serviceProviderName: "JANDA"
        }
    });
    const [subscribe] = useServicePlanSubscribe({
        onCompleted: ({ ServicePlanSubscribe }) => {
            completeMsg(ServicePlanSubscribe, "서비스 구독완료");
        }
    });
    const [deSubscribe] = useServicePlanSubDescribe({
        onCompleted: ({ ServicePlanDesubscribe }) => {
            completeMsg(ServicePlanDesubscribe, "서비스 구독해제");
        }
    });

    const handleSubScribe = (plan: servicePlanTemplateList_ServicePlanTemplateList) => () => {
        promptConfirm(plan.name, `정말로 서비스 사용제를 구독 하실려면 ${plan.name}을 정확하게 입력 해주세요.`, () => {
            subscribe({
                variables: {
                    servicePlanTemplateId: plan._id
                }
            })
        })
    }

    const handleDeSubscribe = () => {
        if (!subscribPlan) return;
        promptConfirm(subscribPlan.name, `정말로 서비스 사용제를 구독 하실려면 ${subscribPlan.name}을 정확하게 입력 해주세요.`, () => {
            deSubscribe({
                variables: {
                    servicePlanId: subscribPlan._id
                }
            })
        })
    }

    return <div>
        <JDpageHeader title="예약페이지 생성하기" desc="원하는 형태의 예약페이지 생성하기" />
        <JDcontainer verticalPadding size={WindowSize.lg}>
            {items?.map(item => {
                const isSelected = item._id === subscribPlan?._servicePlanTemplateId
                const selectBadge: IJDbadge = {
                    label: "선택됨",
                    thema: "primary"
                };

                return <ServiceCard badges={isSelected ? [selectBadge] : undefined} selected={isSelected} foot={
                    <div>
                        <JDbutton hide={isSelected} onClick={handleSubScribe(item)} thema="primary" >구독하기</JDbutton>
                        <JDbutton hide={!isSelected} onClick={handleDeSubscribe} thema="error" >구독해제</JDbutton>
                    </div>
                } mb key={item._id} template={item} />
            })}
        </JDcontainer>
    </div>;
};

export default MemberShip;