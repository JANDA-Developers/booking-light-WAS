import { JDcontainer, JDpageHeader, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import { useServicePlanTemplateList } from "../../hook/useService"
import { DotButton } from "../../component/dotButton/DotButton"
import { IServiceModalInfo, ServiceModal } from '../components/ServiceModal';
import { ServiceCard } from "../../component/serviceCard/ServiceCard"
import { CardBtn } from '../../component/btns/ModalBtn';
interface IProp { }

export const SuperServiceTemplate: React.FC<IProp> = () => {
    const modalHook = useModal<IServiceModalInfo>();

    const { data: items } = useServicePlanTemplateList({
        variables: {
            serviceProviderName: "JANDA"
        }
    })

    const handleOpenModal = (info?: IServiceModalInfo) => () => {
        modalHook.openModal(info)
    }

    return <div>
        <JDpageHeader title="서비스 템플릿" desc="서비스 템플릿" />
        <JDcontainer verticalPadding size={WindowSize.full}>
            {items?.map(item =>
                <ServiceCard mb foot={
                    <CardBtn onClick={handleOpenModal({ serviceTemplate: item })}>수정하기</CardBtn>
                } key={item._id} template={item} />
            )}
            <DotButton onClick={handleOpenModal()} >추가하기</DotButton>
        </JDcontainer>
        <ServiceModal key={modalHook.info?.serviceTemplate?._id} modalHook={modalHook} />
    </div>;
};

export default SuperServiceTemplate;