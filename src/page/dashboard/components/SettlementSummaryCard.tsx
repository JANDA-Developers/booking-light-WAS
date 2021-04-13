import { Flex } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import { Clip } from '../../../atom/clip/Clip';
import { useItemList } from '../../../hook/useItem';
import { useSettlementTransferList } from '../../../hook/useSettlement';
import { Paths } from '../../../MainRouter';
import { yyyymmdd } from '../../../utils/dateFormat';
import { SummaryCard } from './SummaryCard';

interface IProp { }

export const SettlementSummaryCard: React.FC<IProp> = () => {
    const { items } = useSettlementTransferList()
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList)
    }

    const handleTitelClick = (itemId: string) => () => {
        history.push(Paths.itemDetail + "/" + itemId)

    }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" onClick={handleTitelClick(item._id)}>{item.message}</span>, <span className="summaryCard__cell">{yyyymmdd(item.createdAt)}</span>, <Clip className="summaryCard__cell">{item.sequence}</Clip>]));

    return <SummaryCard contentsId="SettlementSummaryCard" mb className="summaryCard" head={<Flex between ><span>아이템 현황</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;

};
