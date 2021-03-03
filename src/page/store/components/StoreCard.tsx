import { JDbutton, JDcard, JDicon, Tiny } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React, { useContext } from 'react';
import { useHistory } from 'react-router-dom';
import { CardBtn } from '../../../component/btns/ModalBtn';
import AppContext from '../../../context';
import { Paths } from '../../../MainRouter';
import { storeList_StoreList_items } from '../../../type/api';
import { yyyymmdd } from '../../../utils/dateFormat';

interface IProp extends IJDcardProps {
    store: storeList_StoreList_items;
    onDelete: () => void;
    onEdit: () => void;
}

export const StoreCard: React.FC<IProp> = ({
    store,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {
    const { selectedStore } = useContext(AppContext)
    const { push } = useHistory();

    const handleList = () => () => {
        push(Paths.itemList)
    }

    const handleItemCreate = () => {
        push(Paths.itemDetail)
    }

    const isCurrentStore = store.itemCount === 0;

    return <JDcard badges={[{ label: "현재선택", mode: "folded", thema: "point" }]} selected={selectedStore?._id === store._id} foot={<div>
        <Tiny color={isCurrentStore ? "warn" : undefined} mb> <JDicon mr="tiny" icon="info" />{store.itemCount === 0 ? "생성된 상품이 없습니다. 상품을 생성해주세요." : `누적 상품수 ${store.itemCount}`}</Tiny>
        <CardBtn mr onClick={handleEdit} thema="primary">수정하기</CardBtn>
        <CardBtn mr onClick={handleDelete} thema="error">삭제하기</CardBtn>
        {isCurrentStore && <CardBtn hide={!store.itemCount} onClick={handleList} label={"상품보기"} />}
        {isCurrentStore && <CardBtn blink={store.itemCount === 0} onClick={handleItemCreate} label={"상품생성"} />}
    </div>
    }
        head={store.name}
        className="webpageCard"
        {...props}>
        {store.description}
        {yyyymmdd(store.createdAt)}
    </JDcard>;
};
