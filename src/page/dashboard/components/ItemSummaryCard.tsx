import { Flex } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import { Clip } from '../../../atom/clip/Clip';
import DotButton from '../../../component/dotButton/DotButton';
import AppContext from '../../../context';
import { useOwnerFilter } from '../../../hook/useAuthValid';
import { useItemList } from '../../../hook/useItem';
import { Paths } from '../../../MainRouter';
import { SuperAppContext } from '../../../superAdmin/helper/superContext';
import { yyyymmdd } from '../../../utils/dateFormat';
import { SummaryCard } from './SummaryCard';

interface IProp { }

export const ItemSummaryCard: React.FC<IProp> = () => {
    const { selectedStoreId } = useContext(AppContext)
    const onwerFilter = useOwnerFilter({
        _storeId__eq: selectedStoreId
    })
    const { items } = useItemList({
        fixingFilter: onwerFilter
    })
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList)
    }

    const handleTitelClick = (itemId: string) => () => {
        history.push(Paths.itemDetail + "/" + itemId)

    }

    const Nodes = items.map(item => ([<span className="summaryCard__cell" onClick={handleTitelClick(item._id)}>{item.name}</span>, <span className="summaryCard__cell">{yyyymmdd(item.createdAt)}</span>, <Clip className="summaryCard__cell">{item.price}</Clip>]));

    return <SummaryCard Empty={<DotButton onClick={handleViewMore}>생성하기</DotButton>} contentsId="ItemSummaryCard" mb className="summaryCard" head={<Flex between ><span>아이템 현황</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} />;

};
