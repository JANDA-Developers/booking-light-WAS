import { autoComma, Flex } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import { Clip } from '../../../atom/clip/Clip';
import { useItemList } from '../../../hook/useItem';
import { useNotificationHistory } from '../../../hook/useNotification';
import { useProductList } from '../../../hook/useProduct';
import { Paths } from '../../../MainRouter';
import { yyyymmdd } from '../../../utils/dateFormat';
import { SummaryCard } from './SummaryCard';

interface IProp { }

export const NotificationSummaryCard: React.FC<IProp> = () => {
    const { items } = useNotificationHistory()
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList)
    }

    // const handleTitelClick = (itemId: string) => () => {
    //     history.push(Paths.productDetail + "/" + itemId)

    // }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" >{item.title}</span>, <span className="summaryCard__cell">{yyyymmdd(item.createdAt)}</span>, <span className="summaryCard__cell">{autoComma(item.method)}</span>]));

    return <SummaryCard mb className="summaryCard" head={<Flex between ><span>상품 현황</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;

};
