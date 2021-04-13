import { Flex } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import AppContext from '../../../context';
import { useNotificationHistory, useNotificationTemplateList } from '../../../hook/useNotification';
import { MMDDhhmm, yyyymmddHHmm } from '../../../utils/dateFormat';
import { isRegisteredToAligoKr, notificationMethodKr } from '../../../utils/enumConverter';
import { SummaryCard } from '../../dashboard/components/SummaryCard';
import { NotificationContext } from '../context';
import { SmsPaths } from '../SmsRouter';

interface IProp { }

export const SenderSummaryCard: React.FC<IProp> = () => {
    const { manager } = useContext(NotificationContext);



    const history = useHistory();

    const handleViewMore = () => {
        history.push(SmsPaths.templates)
    }

    const Nodes = manager.senders.map(item => ([<span className="summaryCard__cell" >{item.sender}</span>, <span className="summaryCard__cell">{notificationMethodKr(item.type)}</span>, <span className="summaryCard__cell">{isRegisteredToAligoKr(item.isRegisteredToAligo)}</span>]));

    return <SummaryCard contentsId="SenderSummaryCard" mb className="summaryCard" head={<Flex between ><span>등록 발신자</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;
};
