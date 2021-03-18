import { InputText, Flex, JDbutton, JDlabel, JDselectCounter, JDswitch, opFind, useInput, useSelect, Mb, JDcard, toast, toNumber } from '@janda-com/front';
import { cloneDeep } from 'lodash';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardBtn } from '../../../component/btns/ModalBtn';
import { DateWithTimePicker } from '../../../component/dateWithTimePicker/DateWithTimePicker';
import AppContext from '../../../context';
import { useDateTimepicker } from '../../../hook/useDateTimePicker';
import { useProductCreate, useProductUpdate } from '../../../hook/useProduct';
import { Paths } from '../../../MainRouter';
import { Fproduct, Fproduct_capacityDetails, itemFindById_ItemFindById, ProductBookingCreateInput } from '../../../type/api';
import { COUNT, today, tomorrow } from '../../../type/const';
import { CapacityDetailEditor, CpadityDetailId } from './CapacityDetailEditor';
import dayjs from "dayjs";
import { omits } from '../../../utils/omits';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { Validater } from '../../../utils/Validater';

interface IProp extends IJDcardProps {
    product?: Fproduct
    itemId: string;
    item?: itemFindById_ItemFindById;
}


//프로덕트 크리에이터 1번::상품 판매
// 가장 원시적인 형태의 프로덕트 크리에이터
export const ProductCreater: React.FC<IProp> = ({ item, product, itemId, ...props }) => {
    const isCreate = !product;
    const { dateRangeForUse, dateRangeForSale } = product || {};
    const [createProd] = useProductCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ ProductBookingCreate }) => {
            if (ProductBookingCreate.ok) {
                toast("상품이 생성 되었습니다.")
            }
        }
    });
    const [updateProd] = useProductUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ ProductBookingUpdate }) => {
            if (ProductBookingUpdate.ok) {
                toast("상품이 업데이트 되었습니다.")
            }
        }
    });
    const defaults = cloneDeep(product?.capacityDetails || []);
    console.log({ defaults });
    const [capacityDetails, setCapacityDetails] = useState<Fproduct_capacityDetails[]>(defaults)
    const salesTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForSale?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForSale?.from || today).toDate()
    })
    const useTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForUse?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForUse?.from || today).toDate()
    })

    const nextData: ProductBookingCreateInput = omits({
        capacityDetails,
        capacity: -1, // 독립 캐파시티 실행
        price: 0, // 독립가격 실행
        dateRangeForSale: {
            from: salesTimePicker.startDate?.valueOf(),
            to: salesTimePicker.endDate?.valueOf()
        },
        dateRangeForUse: {
            from: useTimePicker?.startDate?.valueOf(),
            to: useTimePicker?.endDate?.valueOf()
        },
    })


    const noLabelindex = capacityDetails.findIndex(detail => !detail.label);
    const noLabel = capacityDetails.find(detail => !detail.label);
    const noPriceIndex = capacityDetails.findIndex(detail => !detail.price && detail.price !== 0);
    const noPrice = capacityDetails.find(detail => !detail.price && detail.price !== 0);
    const noCountIndex = capacityDetails.findIndex(detail => detail.count === 0);
    const noCount = capacityDetails.find(detail => detail.count === 0);

    //항목은 항목별 품명, 가격, 갯수가 설정되었는가.
    const { validate } = new Validater([{
        value: !noLabel,
        id: CpadityDetailId("name", noLabelindex),
        failMsg: "항목에 라벨이 없습니다."
    }, {
        value: !noPrice,
        id: CpadityDetailId("price", noPriceIndex),
        failMsg: "항목에 가격이 없습니다."
    }, {
        value: !noCount,
        id: CpadityDetailId("selectCounter", noCountIndex),
        failMsg: "항목의 수량이 없습니다."
    }])

    const handleCreate = () => {
        if (validate())
            createProd({
                variables: {
                    input: nextData,
                    itemId
                }
            })
    }

    const handleEdit = () => {
        if (validate())
            updateProd({
                variables: {
                    input: nextData,
                    productBookingId: product?._id
                }
            })
    }

    console.log({ item });

    return <JDcard foot={
        <>
            <CardBtn size="long" onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</CardBtn>
            <CardBtn size="long" onClick={handleEdit} hide={isCreate} thema="primary">수정하기</CardBtn>
        </>
    } head="판매 추가하기" mb {...props}>
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
        <CapacityDetailEditor key={item?._id} defaultPrice={item?.price} defaultLabel={item?.name} onChange={setCapacityDetails} usageDetails={capacityDetails} />
    </JDcard>
};

// 프로덕트 크리에이터 2번 타임 메이커
// 목적:: 시작시간 ~ 끝시간 정하고. 그것을 N단위로 나누어서 판매.
// 빠르고 간편한 생성이 목적임. ProductsCreate와 Delete Update를 한번에 하기에 어려울것.
