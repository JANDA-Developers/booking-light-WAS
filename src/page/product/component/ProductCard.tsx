import { autoComma, Bold, Flex, JDbutton, JDcard, JDlist } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { productList_ProductList_items, productList_ProductList_items_ProductBooking } from '../../../type/api';
import { yyyymmddHHmm, yyyymmddHHmmLabel } from '../../../utils/dateFormat';

interface IProp extends IJDcardProps {
    item: productList_ProductList_items_ProductBooking;
    onDelete: () => void;
    onEdit: () => void;
}

export const ProductCard: React.FC<IProp> = ({
    item,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {

    return <JDcard foot={<div>
        <JDbutton br="no" mr onClick={handleEdit} thema="primary">수정하기</JDbutton>
        <JDbutton br="no" mr onClick={handleDelete} thema="error">삭제하기</JDbutton>
    </div>
    }
        title={yyyymmddHHmmLabel(item.createdAt)}
        className="webpageCard"
        {...props}>
        <Flex vCenter>
            <Bold mr="small">가격</Bold>
            {autoComma(item.price)}
        </Flex>
        <Flex vCenter>
            <Bold mr="small">캐파시티</Bold>
            {item.capacity}
        </Flex>
    </JDcard>;
};
