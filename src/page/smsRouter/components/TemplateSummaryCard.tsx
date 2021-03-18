import { Flex } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { useHistory } from 'react-router';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import DotButton from '../../../component/dotButton/DotButton';
import { useNotificationHistory, useNotificationTemplateList } from '../../../hook/useNotification';
import { MMDDhhmm, yyyymmddHHmm } from '../../../utils/dateFormat';
import { notificationMethodKr } from '../../../utils/enumConverter';
import { SummaryCard } from '../../dashboard/components/SummaryCard';
import { SmsPaths } from '../SmsRouter';

interface IProp extends IJDcardProps { }

export const TemplateSummaryCard: React.FC<IProp> = ({ ...props }) => {
    const { items } = useNotificationTemplateList({ initialViewCount: 4 })

    const history = useHistory();

    const handleViewMore = () => {
        history.push(SmsPaths.templates)
    }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" >{item.name}</span>, <span className="summaryCard__cell">{notificationMethodKr(item.notificationMethod)}</span>, <span className="summaryCard__cell">{yyyymmddHHmm(item.createdAt)}</span>]));

    return <SummaryCard {...props} Empty={<DotButton onClick={handleViewMore}>생성하기</DotButton>} mb className="summaryCard" head={<Flex between ><span>발신 템플리</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;
};

