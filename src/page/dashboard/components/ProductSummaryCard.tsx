import { autoComma, Flex } from '@janda-com/front';
import { JDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CardHeadButton } from '../../../atom/CardHeadButtn';
import { Clip } from '../../../atom/clip/Clip';
import AppContext from '../../../context';
import { useItemList } from '../../../hook/useItem';
import { ListInitOptions } from '../../../hook/useListQuery';
import { useProductList } from '../../../hook/useProduct';
import { Paths } from '../../../MainRouter';
import { productList_ProductList_items, _ProductFilter } from '../../../type/api';
import { yyyymmdd, yyyymmddHHmm, yyyymmddHHmmLabel, yyyymmddHHmmRangeLabel } from '../../../utils/dateFormat';
import { SummaryCard } from './SummaryCard';

interface IProp extends JDcardProps {
    filter?: _ProductFilter
}

export const ProductSummaryCard: React.FC<IProp> = ({ filter, ...props }) => {
    const { me } = useContext(AppContext);
    const { items } = useProductList({
        initialFilter: {
            ...filter,
            _ownerId__eq: me?._id
        }
    })
    const history = useHistory();

    const handleViewMore = () => {
        history.push(Paths.itemList)
    }


    const Nodes = items.map(item => ([<span className="summaryCard__cell" >{yyyymmddHHmmRangeLabel(item.dateRangeForUse?.from, item.dateRangeForUse?.to)}</span>, <span className="summaryCard__cell">생성 {yyyymmdd(item.createdAt)}</span>, <span className="summaryCard__cell">{autoComma(item.price)}</span>]));

    return <SummaryCard mb className="summaryCard" head={<Flex between ><span>상품 현황</span> <CardHeadButton onClick={handleViewMore} label="자세히보기" /></Flex>} mr contents={Nodes} {...props} />;

};
