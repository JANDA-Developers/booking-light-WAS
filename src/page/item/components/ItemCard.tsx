import { JDphotoFrame, Split, autoComma, Bold, Flex, JDbutton, JDcard, JDlist } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Info } from '../../../atom/Info';
import { Vertical } from '../../../atom/Vertical';
import { Fitem, itemFindById_ItemFindById, itemList_ItemList_items_ItemBooking } from '../../../type/api';
import { yyyymmddHHmm, yyyymmddHHmmLabel } from '../../../utils/dateFormat';

interface IProp extends IJDcardProps {
    item: Fitem | itemList_ItemList_items_ItemBooking | itemFindById_ItemFindById;
    onDelete?: () => void;
    onEdit?: () => void;
}

export const ItemCard: React.FC<IProp> = ({
    item,
    onDelete: handleDelete,
    onEdit: handleEdit,
    ...props
}) => {

    console.log({ item });
    return <JDcard
        foot={(handleDelete || handleEdit) && <div>
            <JDbutton br="no" mr onClick={handleEdit} thema="primary">수정하기</JDbutton>
            <JDbutton br="no" mr onClick={handleDelete} thema="error">삭제하기</JDbutton>
        </div>
        }
        head={item.name}
        className="itemCard"
        {...props}>
        <div>
            <Flex>
                <div>
                    {item.thumbNail && <JDphotoFrame className="itemCard__thumb" src={item.thumbNail} />}
                </div>
                <Vertical margin={3} />
                <div>
                    <Info mb label="기본가격" value={autoComma(item.price)} />
                    <Info mb label="타입" value={item.type} />
                    <Info mb label="생성일" value={yyyymmddHHmm(item.createdAt)} />
                </div>
            </Flex>
        </div>
    </JDcard>;
};
