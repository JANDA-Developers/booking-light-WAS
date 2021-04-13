import { InputText, Flex, JDbutton, JDlabel, JDselectCounter, JDswitch, opFind, useInput, useSelect, Mb, JDcard, toast, toNumber, useSwitch, JDalign, s4 } from '@janda-com/front';
import { cloneDeep } from 'lodash';
import React, { useContext, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { CardBtn } from '../../../component/btns/ModalBtn';
import { DateWithTimePicker } from '../../../component/dateWithTimePicker/DateWithTimePicker';
import AppContext from '../../../context';
import { useDateTimepicker } from '../../../hook/useDateTimePicker';
import { useProductCreate, useProductUpdate } from '../../../hook/useProduct';
import { Paths } from '../../../MainRouter';
import { Fproduct, Fbooking, FproductBooking_capacityDetails, itemFindById_ItemFindById, itemFindById_ItemFindById_ItemBooking, ProductBookingCreateInput, FproductBooking, StoreType } from '../../../type/api';
import { COUNT, FOREVER, today, tomorrow } from '../../../type/const';
import { CapacityDetailEditor, CpadityDetailId } from './CapacityDetailEditor';
import dayjs from "dayjs";
import { omits } from '../../../utils/omits';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { Validater } from '../../../utils/Validater';
import { RelativeSalesRange } from './RelativeSalesRange';

interface IProp extends IJDcardProps {
    product?: FproductBooking
    itemId: string;
    item?: itemFindById_ItemFindById_ItemBooking;
}


let lastStartDate: Date

//프로덕트 크리에이터 1번::상품 판매
// 가장 원시적인 형태의 프로덕트 크리에이터
export const ProductCreater: React.FC<IProp> = ({ item, product, itemId, ...props }) => {
    const { type, isTimeMall } = useContext(AppContext);
    const isShopping = type === StoreType.SHOPPING;

    const isCreate = !product;
    const isForever = !product?.dateRangeForSale;
    const capacityHook = useSelect(opFind(product?.capacity, COUNT), COUNT);
    const priceHook = useInput(product?.price || 0);
    const swtichHook = useSwitch(isForever);
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
    const useEndDefault = isTimeMall ? today : tomorrow;
    const defaults = cloneDeep(product?.capacityDetails || []);
    const [capacityDetails, setCapacityDetails] = useState<FproductBooking_capacityDetails[]>(defaults)
    const salesTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForSale?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForSale?.from || today).toDate()
    })
    const useTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForUse?.to || useEndDefault).toDate(),
        defaultStart: dayjs(dateRangeForUse?.from || today).toDate()
    })

    const saleStart = salesTimePicker.startDate?.valueOf();
    const saleEnd = salesTimePicker.endDate?.valueOf();
    const useStart = useTimePicker.startDate?.valueOf();
    const useEnd = useTimePicker.endDate?.valueOf();

    const capacity = isTimeMall ? capacityHook.selectedOption?.value : -1;
    const price = isTimeMall ? priceHook?.value : 0;

    const capacityDetailHackBlock: FproductBooking_capacityDetails = {
        __typename: "Capacity",
        count: capacity,
        key: s4(),
        label: "",
        price
    }

    // 아래는 hack. 원래는 디테일 없이 서버에서 진행 가능해야함.
    const nextCapacityDetails: FproductBooking_capacityDetails[] = isTimeMall ? [capacityDetailHackBlock] : capacityDetails

    const nextData: ProductBookingCreateInput = omits({
        capacityDetails: nextCapacityDetails,
        capacity, // 독립 캐파시티 실행
        price: price || 0, // 독립가격 실행
        dateRangeForSale: {
            from: saleStart,
            to: saleEnd
        },
        dateRangeForUse: {
            from: useStart,
            to: useEnd
        },
    })


    const noLabelindex = capacityDetails.findIndex(detail => !detail.label);
    const noLabel = capacityDetails.find(detail => !detail.label);
    const noPriceIndex = capacityDetails.findIndex(detail => !detail.price && detail.price !== 0);
    const noPrice = capacityDetails.find(detail => !detail.price && detail.price !== 0);
    const noCountIndex = capacityDetails.findIndex(detail => detail.count === 0);
    const noCount = capacityDetails.find(detail => detail.count === 0);
    const noUseRange = !nextData.dateRangeForUse || !nextData.dateRangeForUse.from;
    const noSalesRange = !nextData.dateRangeForSale || !nextData.dateRangeForSale.from;

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
    }, {
        value: noUseRange || nextData.dateRangeForUse!.from < nextData.dateRangeForUse!.to,
        id: CpadityDetailId("name", noLabelindex),
        failMsg: "사용기간 시작과 끝을 확인 바랍니다."
    }, {
        value: noSalesRange || nextData.dateRangeForSale!.from < nextData.dateRangeForSale!.to,
        id: CpadityDetailId("name", noLabelindex),
        failMsg: "판매기한 시작과 끝을 확인 바랍니다."
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


    return <JDcard foot={
        <>
            <CardBtn size="long" onClick={handleCreate} hide={!isCreate} thema="primary">생성하기</CardBtn>
            <CardBtn size="long" onClick={handleEdit} hide={isCreate} thema="primary">수정하기</CardBtn>
        </>
    } head="판매 추가하기" mb {...props}>
        <div>
            {isShopping &&
                <div>
                    <JDswitch mb {...swtichHook} label="무기한 판매" />
                </div>
            }
            {isShopping &&
                <JDalign hide={swtichHook.checked} mb>
                    <JDlabel>판매기한</JDlabel>
                    <DateWithTimePicker {...salesTimePicker} />
                </JDalign>
            }
            {isTimeMall &&
                <JDalign mb>
                    {/* TODO!! CREATE_SALES_TIME_OP */}
                    <JDlabel>사용기간</JDlabel>
                    <RelativeSalesRange
                        onChangeDate={(newDate) => {
                            salesTimePicker.endDateHook.setDate(newDate);
                        }}
                        salesEndDate={salesTimePicker.endDate.toDate()}
                        useStartDate={useTimePicker.startDate.toDate()}
                    />
                </JDalign>
            }
            {!isShopping &&
                <JDalign mb>
                    <JDlabel>사용기간</JDlabel>
                    <DateWithTimePicker fixTimeRange fixSameDate {...useTimePicker} />
                </JDalign>
            }
            {isTimeMall &&
                <div>
                    <JDlabel>판매수량</JDlabel>
                    {/* <JDswitch mb ltxt="제한없음" rtxt="제한있음" /> */}
                    <JDselectCounter mb selectHook={capacityHook} />
                    <InputText comma label="판매가" {...priceHook} />
                </div>
            }
            {/* <Mb /> */}
            {isTimeMall ||
                <CapacityDetailEditor key={item?._id} defaultPrice={item?.price} defaultLabel={item?.name} onChange={setCapacityDetails} usageDetails={capacityDetails} />
            }
        </div>
    </JDcard>
};

// 프로덕트 크리에이터 2번 타임 메이커
// 목적:: 시작시간 ~ 끝시간 정하고. 그것을 N단위로 나누어서 판매.
// 빠르고 간편한 생성이 목적임. ProductsCreate와 Delete Update를 한번에 하기에 어려울것.
