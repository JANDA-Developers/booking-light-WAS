import { InputText, JDselectCounter, IUseModal, JDmodal, opFind, useInput, useSelect } from '@janda-com/front';
import React from 'react';
import { useServiceTemplateCreate, useServiceTemplateDelete, useServiceTemplateUpdate } from '../../hook/useService';
import { ServicePlanTemplateCreateInput, servicePlanTemplateList_ServicePlanTemplateList, ServicePlanTemplateUpdateInput } from '../../type/api';
import { ModalBtn } from '../../component/btns/ModalBtn';
import { omits } from "../../utils/omits"
import { COUNT_GEN } from '../../type/const';
import { promptConfirm } from '../../utils/prompt';
import { completeMsg } from '../../utils/onCompletedMessage';

const COUNT_MONTH = COUNT_GEN("월");

export interface IServiceModalInfo {
    serviceTemplate?: servicePlanTemplateList_ServicePlanTemplateList
}

interface IProp {
    modalHook: IUseModal<IServiceModalInfo>
}

export const ServiceModal: React.FC<IProp> = ({ modalHook }) => {
    const isCreate = !modalHook.info?.serviceTemplate
    const serviceTemplate = modalHook.info?.serviceTemplate
    const [serviceTemplateUpdate] = useServiceTemplateUpdate({
        onCompleted: ({ ServicePlanTemplateUpdate }) => {
            if (completeMsg(ServicePlanTemplateUpdate, "템플릿 업데이트")) {
                modalHook.closeModal();
            }
        }
    });
    const [serviceTemplateCreate] = useServiceTemplateCreate({
        onCompleted: ({ ServicePlanTemplateCreate }) => {
            if (completeMsg(ServicePlanTemplateCreate, "템플릿 생성완료")) {
                modalHook.closeModal();
            }
        }
    });
    const [serviceTemplateDelete] = useServiceTemplateDelete({
        onCompleted: ({ ServicePlanTemplateDelete }) => {
            if (completeMsg(ServicePlanTemplateDelete, "템플릿 삭제완료")) {
                modalHook.closeModal();
            }
        }
    });

    const priceHook = useInput(serviceTemplate?.price || 0);
    const nameHook = useInput(serviceTemplate?.name || "");
    const describeHook = useInput(serviceTemplate?.description || "");
    const billingFrequencyHook = useSelect(opFind(serviceTemplate?.billingFrequency as any, COUNT_MONTH), COUNT_MONTH)


    const handleDelete = () => {
        const templateName = serviceTemplate?.name || "";
        promptConfirm(templateName, `템플릿을 삭제하실려면 ${templateName}을 정확하게 입력 해주세요.`, () => {
            serviceTemplateDelete({
                variables: {
                    servicePlanTemplateId: serviceTemplate!._id
                }
            })
        })
    }

    const nextData: ServicePlanTemplateUpdateInput | ServicePlanTemplateCreateInput = {
        billingFrequency: billingFrequencyHook.selectedOption?.value,
        description: describeHook.value,
        name: nameHook.value,
        price: priceHook.value,
    }

    const handleUpdate = () => {
        serviceTemplateUpdate({
            variables: {
                params: {
                    ...omits(nextData)
                },
                servicePlanTemplateId: serviceTemplate!._id
            }
        })
    }

    const handleCreate = () => {
        serviceTemplateCreate({
            variables: {
                input: {
                    ...omits(nextData, ["offerResources" as any]) as any
                }
            }
        })
    }


    return <JDmodal
        head={{
            title: "서비스 템플릿 생성하기"
        }}
        foot={
            <div>
                <ModalBtn mr hide={!isCreate} onClick={handleCreate} thema="primary">생성하기</ModalBtn>
                <ModalBtn mr hide={isCreate} onClick={handleUpdate} thema="primary">수정하기</ModalBtn>
                <ModalBtn hide={isCreate} onClick={handleDelete} thema="error">삭제하기</ModalBtn>
            </div>
        } {...modalHook} >
        <InputText mb {...nameHook} label="이름" />
        <InputText comma mb {...priceHook} label="가격" />
        <InputText mb textarea {...describeHook} label="설명" />
        <JDselectCounter selectHook={billingFrequencyHook} label="결제주기(달)" />
    </JDmodal>;
};
