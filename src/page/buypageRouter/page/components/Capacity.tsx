import { autoComma, Bold, Flex, isLast, JDalign, JDbox, JDbutton, JDselectCounter, Mr, Tiny } from '@janda-com/front';
import { IButtonProps } from '@janda-com/front/dist/components/button/Button';
import { IDiv } from '@janda-com/front/dist/types/interface';
import React from 'react';
import dayjs from "dayjs";
import { CapacityInput, productList_ProductList_items, productList_ProductList_items_usageDetails } from '../../../../type/api';
import { RemainViewer } from './RemainViewer';
import { ProductSelecter } from './ProductSelecter';
import { IUseBookingsInput } from '../../../../hook/useBookingInput';
import { hhmmRange, MMDDhhmm, yyyymmddHHmm, yyyymmddHHmmRange } from '../../../../utils/dateFormat';

interface IProp extends IDiv {
    bookingsInputHook: IUseBookingsInput;
    product: productList_ProductList_items
}

//하나의 상품의 캐파시티를 보여줌
export const Capacity: React.FC<IProp> = ({ product, bookingsInputHook, ...props }) => {
    const { usageDetails, dateRangeForUse } = product;
    const { setBookingInputs, bookingInputs, addCpacity, addProduct, findBookingInput, findCpacity, capacityChange } = bookingsInputHook;
    const isIncluded = findBookingInput(product._id);


    const handleCapacityChange = (cd: productList_ProductList_items_usageDetails) => (num: number) => {
        const update: CapacityInput = { count: num, key: cd.key, label: cd.label, price: (cd.price * num) };
        if (isIncluded) {
            capacityChange(product._id, update);
        } else {
            addProduct({ productOrigin: product, itemId: product._itemId, productId: product._id, countDetails: [update] })
        }
    }


    return <JDbox mr mb className="capacity" {...props} >
        <Bold >{MMDDhhmm(dateRangeForUse?.from)}부터</Bold>
        <Bold mb={"small"}>{MMDDhhmm(dateRangeForUse?.to)}까지</Bold>
        <Flex between>
            {usageDetails.map((cd, index) => <CapacityDetail
                isLast={isLast(index, usageDetails)}
                onChange={handleCapacityChange(cd)} count={findCpacity(product._id, cd.key)?.count || 0} key={cd.key} cpacity={cd} />)}
        </Flex>
    </JDbox>;
};


interface IDetailProps {
    cpacity: productList_ProductList_items_usageDetails;
    count: number;
    onChange: (val: number) => void;
    isLast: boolean
}


//하나의 상품의 캐파시티중 하나의 디테일 상품을 보여줌 
export const CapacityDetail: React.FC<IDetailProps> = ({ isLast, cpacity, count, onChange, ...props }) => {
    const { label, price, usage, capacityCount } = cpacity;
    const isFull = usage > capacityCount;

    return <JDalign mr={isLast ? "no" : "normal"} className="capacity__cell" key={cpacity.key}>
        <Tiny style={{ alignSelf: "flex-end" }}>{cpacity.label}</Tiny>
        <Flex mb vCenter vEnd>{autoComma(cpacity.price)} <Mr mr="superTiny" /><Tiny>개당</Tiny></Flex>
        <RemainViewer size="small" capacityDetail={cpacity} />
        <ProductSelecter maxCount={capacityCount - usage} count={count} onChange={onChange} />
    </JDalign>
}
function mmddHHmm(to: any): string | number | boolean | {} | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactNodeArray | React.ReactPortal | null | undefined {
    throw new Error('Function not implemented.');
}

