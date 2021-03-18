import { JDhorizen, Bold, Flex, JDbox, JDcard, autoComma, JDtypho, isLast } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { isEmpty } from 'lodash';
import React, { useContext } from 'react';
import PhotoFrame from '../../../../component/photoFrame/PhotoFram';
import { IBookingInputData } from '../../../../hook/useBookingInput';
import { BookingInput, storeFindByCode_StoreFindByCode_items, UsageInput } from '../../../../type/api';
import { Ratio } from '../../../../type/const';
import { IBasketItem } from '../../../../utils/Basket';
import { hhmmRange, yyyymmddHHmmRange } from '../../../../utils/dateFormat';
import { BuypageContext } from '../buypageList/helper/context';


//맴핑데이터를 깔끔하게 해결할 수 있는 방법은 무엇일까?

interface IProp extends IJDcardProps {
    bookingInputs: IBookingInputData[];
}

interface IViewData extends storeFindByCode_StoreFindByCode_items {
    bookingInputs: IBookingInputData[];
}

export const ProductSelectViewer: React.FC<IProp> = ({ bookingInputs, ...props }) => {
    const { store: { items } } = useContext(BuypageContext)

    const bookingInputWithItem: IViewData[] = items?.map(item => ({
        ...item,
        bookingInputs: bookingInputs.filter(bi => bi.itemId === item._id)
    })) || []

    const filteredItems = bookingInputWithItem.filter(view => !isEmpty(view.bookingInputs))

    return <JDcard head={"선택확인"} {...props} >
        {filteredItems.map((itemView, index) =>
            <div key={itemView._id}>
                <ItemViewBox isLast={isLast(index, filteredItems)} {...itemView} key={itemView._id} />
                {!isLast(index, filteredItems) && <JDhorizen margin={2} />}
            </div>
        )}
    </JDcard>;
};

interface ItemViewBoxProp extends IViewData {
    isLast: boolean;
}

const ItemViewBox: React.FC<ItemViewBoxProp> = ({ _id, thumbNail, name, bookingInputs, isLast }) => {
    return <div >
        <Flex mb={!isLast ? "normal" : "no"} vCenter>
            <PhotoFrame mr style={{ width: "100px" }} ratio={Ratio['16:9']} isBgImg src={thumbNail || ""} />
            <Bold mr>{name}</Bold>
            {bookingInputs?.map(bi => <ProductView {...bi} />)}
        </Flex>
    </div>
}

const ProductView = (bi: IBookingInputData) => {
    const { productOrigin } = bi;
    const { dateRangeForUse } = productOrigin;
    return <JDbox mr>
        <JDtypho mb="tiny">{(hhmmRange(dateRangeForUse?.from, dateRangeForUse?.to))}</JDtypho>
        {bi.countDetails?.map(cd => <JDbox mr key={cd.key}>{autoComma(cd.count)} {cd.label} {autoComma(cd.price)} </JDbox>)}
    </JDbox>
}