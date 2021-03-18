import { Flex } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import { useNotificationHistory } from '../../../hook/useNotification';
import { Paths } from '../../../MainRouter';
import { MMDDhhmm } from '../../../utils/dateFormat';
import { ISummaryCardProps, SummaryCard } from '../../dashboard/components/SummaryCard';

interface IProp extends Omit<ISummaryCardProps, "contents"> { }

export const BookingSummaryCard: React.FC<IProp> = ({ ...props }) => {
    const { items } = useNotificationHistory()

    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.purchaseList)
    }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" >{item.receivers.join("|")}</span>, <span className="summaryCard__cell">{MMDDhhmm(item.createdAt)}</span>, <span className="summaryCard__cell">{item.pointConsumed}</span>]));

    return <SummaryCard mb className="summaryCard" head={<Flex between ><span>구매 현황</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} {...props} />;
};
