import React from 'react';
import { SummaryCard } from '../../page/dashboard/components/SummaryCard';
import { useUserList } from "../../hook/useUser";
import { useHistory } from 'react-router';
import { SuperAdminPaths } from "../SuperAdminApp"
import { getDateDiffText } from '../../utils/getDateDiffText';
import { Flex } from '@janda-com/front';
import { CardHeadButton } from '../../atom/CardHeadButtn';

interface IProp { }

export const SuperUserSummaryCard: React.FC<IProp> = () => {
    const { items } = useUserList()

    const history = useHistory();

    const handleViewMore = () => {
        history.push(SuperAdminPaths.purchaseList)
    }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" >{getDateDiffText(item.createdAt)}</span>, <span className="summaryCard__cell">{item.name}({item.company})</span>, <span className="summaryCard__cell">{item.phoneNumber}</span>]));

    return <SummaryCard contentsId="BookingSummaryCard" mb className="summaryCard" head={<Flex between ><span>신규유저 리스트</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;
};
