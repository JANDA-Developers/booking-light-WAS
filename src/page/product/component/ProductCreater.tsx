import { InputText, Flex, JDbutton, JDlabel, JDselectCounter, JDswitch, opFind, useInput, useSelect, Mb, JDcard } from '@janda-com/front';
import { cloneDeep } from 'lodash';
import React, { useContext, useState } from 'react';
import { CardBtn } from '../../../component/btns/ModalBtn';
import { DateWithTimePicker } from '../../../component/dateWithTimePicker/DateWithTimePicker';
import AppContext from '../../../context';
import { useDateTimepicker } from '../../../hook/useDateTimePicker';
import { useProductCreate, useProductUpdate } from '../../../hook/useProduct';
import { Fproduct, Fproduct_capacityDetails, ProductBookingCreateInput } from '../../../type/api';
import { COUNT } from '../../../type/const';
import { CapacityDetailEditor } from './CapacityDetailEditor';

interface IProp {
    product?: Fproduct
    itemId?: string;
}


//프로덕트 크리에이터 1번::상품 판매
// 가장 원시적인 형태의 프로덕트 크리에이터
export const ProductCreater: React.FC<IProp> = ({ product, itemId }) => {
    const { me } = useContext(AppContext);
    const isCreate = !product;
    const defaultCapacity = opFind(product?.capacity || 0 as any, COUNT)
    const selectHook = useSelect(defaultCapacity, COUNT);
    const { dateRangeForUse, dateRangeForSale } = product || {};
    const [createProd] = useProductCreate();
    const [updateProd] = useProductUpdate();
    const priceHook = useInput(0);
    const [capacityDetails, setCapacityDetails] = useState<Fproduct_capacityDetails[]>(cloneDeep(product?.capacityDetails || []))
    const salesTimePicker = useDateTimepicker({
        defaultEnd: dateRangeForUse?.to,
        defaultStart: dateRangeForUse?.from
    })
    const useTimePicker = useDateTimepicker({
        defaultEnd: dateRangeForUse?.to,
        defaultStart: dateRangeForUse?.from
    })

    const nextData: ProductBookingCreateInput = {
        capacityDetails,
        capacity: selectHook.selectedOption?.value,
        price: priceHook.value,
        dateRangeForSale: {
            from: salesTimePicker.startDate,
            to: salesTimePicker.endDate
        },
        dateRangeForUse: {
            from: dateRangeForSale?.from,
            to: dateRangeForSale?.to
        },
    }

    const handleCreate = () => {
        createProd({
            variables: {
                input: nextData,
                itemId
            }
        })
    }

    const handleEdit = () => {
        updateProd({
            variables: {
                input: nextData,
                productBookingId: product?._id
            }
        })
    }

    return <JDcard foot={
        <>
            <CardBtn onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</CardBtn>
            <CardBtn onClick={handleEdit} hide={isCreate} thema="primary">수정하기</CardBtn>
        </>
    } head="상품 추가하기" mb>
        <JDlabel>판매기한</JDlabel>
        <DateWithTimePicker {...salesTimePicker} />
        <Mb />
        <JDlabel>사용기간</JDlabel>
        <DateWithTimePicker {...useTimePicker} />
        <Mb />
        {/* <JDlabel>판매수량</JDlabel> */}
        {/* <JDswitch mb ltxt="제한없음" rtxt="제한있음" /> */}
        {/* <JDselectCounter selectHook={selectHook} /> */}
        {/* <Mb /> */}
        <InputText mb {...priceHook} comma label="가격" />
        <CapacityDetailEditor onChange={setCapacityDetails} usageDetails={capacityDetails} />
    </JDcard>
};

// 프로덕트 크리에이터 2번 타임 메이커
// 목적:: 시작시간 ~ 끝시간 정하고. 그것을 N단위로 나누어서 판매.
// 빠르고 간편한 생성이 목적임. ProductsCreate와 Delete Update를 한번에 하기에 어려울것.
