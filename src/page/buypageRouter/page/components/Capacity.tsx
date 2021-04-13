import { autoComma, Bold, Flex, IJDalignProp, isLast, JDalign, JDbox, JDbutton, JDselectCounter, Mr, Tiny } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React, { useContext } from 'react';
import dayjs from "dayjs";
import { CapacityInput, productList_ProductList_items_ProductBooking, productList_ProductList_items_ProductBooking_usageDetails } from '../../../../type/api';
import { RemainViewer } from './RemainViewer';
import { ProductSelecter } from './ProductSelecter';
import { IUseBookingsInput } from '../../../../hook/useBookingInput';
import { hhmmRange, MMDDhhmm, yyyymmddHHmm, yyyymmddHHmmRange } from '../../../../utils/dateFormat';
import { BuypageContext } from '../buypageList/helper/context';
import { CapacityDetail, CapacityShoppingDetail } from './CapacityDetail';

interface ICpacityProp extends IDiv {
    bookingsInputHook: IUseBookingsInput;
    product: productList_ProductList_items_ProductBooking
}

//하나의 상품의 캐파시티를 보여줌
export const Capacity: React.FC<ICpacityProp> = ({ product, bookingsInputHook, ...props }) => {
    const { usageDetails, dateRangeForUse } = product;
    const { capacityChangeMaster, findCpacity } = bookingsInputHook;


    const handleCapacityChange = (cd: productList_ProductList_items_ProductBooking_usageDetails) => (num: number) => {
        capacityChangeMaster(product, cd, num);
    }


    return <JDbox mr mb className="capacity" {...props} >
        <Bold >{MMDDhhmm(dateRangeForUse?.from)}부터</Bold>
        <Bold mb={"small"}>{MMDDhhmm(dateRangeForUse?.to)}까지</Bold>
        <Flex between>
            {usageDetails.map((cd, index) =>
                <CapacityDetail
                    isLast={isLast(index, usageDetails)}
                    onChange={handleCapacityChange(cd)}
                    count={findCpacity(product._id, cd.key)?.count || 0}
                    key={cd.key}
                    cpacity={cd}
                />)}
        </Flex>
    </JDbox>;
};


interface IShoppingGoodsProps extends IJDalignProp {
    bookingsInputHook: IUseBookingsInput;
    product: productList_ProductList_items_ProductBooking
}


export const ShoppingGoodsSelecters: React.FC<IShoppingGoodsProps> = ({ product, bookingsInputHook, ...props }) => {
    const { capacityChangeMaster, bookingInputs, findCpacity } = bookingsInputHook;
    const { usageDetails } = product;

    const handleCapacityChange = (cd: productList_ProductList_items_ProductBooking_usageDetails) => (num: number) => {
        capacityChangeMaster(product, cd, num);
    }

    const countDetails = bookingInputs.flatMap(bookingInput => bookingInput.countDetails);

    const selectedUsages = usageDetails.filter(ud => countDetails.find(cd => cd?.key === ud.key));


    return <JDalign {...props}>
        {selectedUsages.map((cd, index) =>
            <CapacityShoppingDetail
                isLast={isLast(index, usageDetails)}
                onChange={handleCapacityChange(cd)}
                count={findCpacity(product._id, cd.key)?.count || 0}
                key={cd.key}
                cpacity={cd}
            />
        )}
    </JDalign>
}