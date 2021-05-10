import {
    InputText,
    Flex,
    JDbutton,
    JDlabel,
    JDselectCounter,
    JDswitch,
    opFind,
    useInput,
    useSelect,
    Mb,
    JDcard,
    toast,
    toNumber,
    useSwitch,
    JDalign,
    s4,
    useModal,
} from "@janda-com/front";
import { cloneDeep, isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { DateWithTimePicker } from "../../../component/dateWithTimePicker/DateWithTimePicker";
import AppContext from "../../../context";
import { useDateTimepicker } from "../../../hook/useDateTimePicker";
import { useProductCreate, useProductUpdate } from "../../../hook/useProduct";
import { Paths } from "../../../MainRouter";
import {
    Fproduct,
    Fbooking,
    FproductBooking_capacityDetails,
    itemFindById_ItemFindById,
    itemFindById_ItemFindById_ItemBooking,
    ProductBookingCreateInput,
    FproductBooking,
    StoreType,
} from "../../../type/api";
import {
    COUNT,
    DATE,
    FOREVER,
    FOREVER_SALE_END_TIME,
    today,
    tomorrow,
} from "../../../type/const";
import { CapacityDetailEditor, CpadityDetailId } from "./CapacityDetailEditor";
import dayjs from "dayjs";
import { omits } from "../../../utils/omits";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { Validater } from "../../../utils/Validater";
import { RelativeSalesRange } from "./RelativeSalesRange";
import { isForeverSale } from "../../../utils/productBookingUtils";
import {
    IProductCreateTimeCheckModalProp,
    ProductCreateTimeCheckModal,
} from "./ProductCreateTimeCheckModal";

interface IProp extends IJDcardProps {
    product?: FproductBooking;
    itemId: string;
    item?: itemFindById_ItemFindById_ItemBooking;
}

let lastStartDate: Date;

//프로덕트 크리에이터 1번::상품 판매
// 가장 원시적인 형태의 프로덕트 크리에이터
export const ProductCreater: React.FC<IProp> = ({
    item,
    product,
    itemId,
    ...props
}) => {
    const timeCheckModalHook = useModal<IProductCreateTimeCheckModalProp>();
    const { type, isTimeMall, isDateRangeMall } = useContext(AppContext);
    const isShopping = type === StoreType.SHOPPING;

    const isCreate = !product;
    const capacityHook = useSelect(opFind(product?.capacity, COUNT), COUNT);
    const priceHook = useInput(product?.price || 0);

    const { dateRangeForUse, dateRangeForSale } = product || {};
    const [createProd] = useProductCreate({
        awaitRefetchQueries: true,
        onCompleted: ({ ProductBookingCreate }) => {
            if (ProductBookingCreate.ok) {
                toast("상품이 생성 되었습니다.");
            }
        },
    });
    const [updateProd] = useProductUpdate({
        awaitRefetchQueries: true,
        onCompleted: ({ ProductBookingUpdate }) => {
            if (ProductBookingUpdate.ok) {
                toast("상품이 업데이트 되었습니다.");
            }
        },
    });
    const useEndDefault = isTimeMall ? today : tomorrow;
    const defaults = cloneDeep(product?.capacityDetails || []);
    const [capacityDetails, setCapacityDetails] = useState<
        FproductBooking_capacityDetails[]
    >(defaults);
    const salesTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForSale?.to || tomorrow).toDate(),
        defaultStart: dayjs(dateRangeForSale?.from || today).toDate(),
    });
    const useTimePicker = useDateTimepicker({
        defaultEnd: dayjs(dateRangeForUse?.to || useEndDefault).toDate(),
        defaultStart: dayjs(dateRangeForUse?.from || today).toDate(),
    });

    const isForever = isForeverSale({
        __typename: "DateRange",
        from: salesTimePicker.endDateHook.from,
        to: salesTimePicker.endDateHook.to,
    });

    let saleStart = salesTimePicker.startDate?.valueOf();
    let saleEnd = salesTimePicker.endDate?.valueOf();
    let useStart = useTimePicker.startDate?.valueOf();
    let useEnd = useTimePicker.endDate?.valueOf();

    const defaultLabel = item?.name || "";
    const capacity = isTimeMall ? capacityDetails[0]?.count : -1;
    const price = isTimeMall ? priceHook?.value : 0;

    const capacityDetailHackBlock: FproductBooking_capacityDetails = {
        __typename: "Capacity",
        count: capacity,
        key: s4(),
        label: defaultLabel || " ",
        price,
    };

    //empty 보조
    useEffect(() => {
        if (isEmpty(capacityDetails)) {
            setCapacityDetails([capacityDetailHackBlock]);
        }
    }, [capacityDetails.length]);

    if (isDateRangeMall) {
        useStart = dayjs(useTimePicker.startDate).startOf("day").valueOf();
        useEnd = dayjs(useTimePicker.startDate).endOf("day").valueOf();
    }

    const nextData: ProductBookingCreateInput = omits({
        capacityDetails,
        capacity, // 독립 캐파시티 실행
        price: price || 0, // 독립가격 실행
        dateRangeForSale: {
            from: saleStart,
            to: saleEnd,
        },
        dateRangeForUse: {
            from: useStart,
            to: useEnd,
        },
    });

    const noLabelindex = capacityDetails.findIndex((detail) => !detail.label);
    const noLabel = capacityDetails.find((detail) => !detail.label);
    const noPriceIndex = capacityDetails.findIndex(
        (detail) => !detail.price && detail.price !== 0
    );
    const noPrice = capacityDetails.find(
        (detail) => !detail.price && detail.price !== 0
    );
    const noCountIndex = capacityDetails.findIndex(
        (detail) => detail.count === 0
    );
    const noCount = capacityDetails.find((detail) => detail.count === 0);
    const noUseRange =
        !nextData.dateRangeForUse || !nextData.dateRangeForUse.from;
    const noSalesRange =
        !nextData.dateRangeForSale || !nextData.dateRangeForSale.from;

    //항목은 항목별 품명, 가격, 갯수가 설정되었는가.
    const { validate } = new Validater([
        {
            value: isTimeMall || !noLabel,
            id: CpadityDetailId("name", noLabelindex),
            failMsg: "항목에 라벨이 없습니다.",
        },
        {
            value: !noPrice,
            id: CpadityDetailId("price", noPriceIndex),
            failMsg: "항목에 가격이 없습니다.",
        },
        {
            value: !noCount,
            id: CpadityDetailId("selectCounter", noCountIndex),
            failMsg: "항목의 수량이 없습니다.",
        },
        {
            value:
                noUseRange ||
                nextData.dateRangeForUse!.from < nextData.dateRangeForUse!.to,
            id: CpadityDetailId("name", noLabelindex),
            failMsg: "사용기간 시작과 끝을 확인 바랍니다.",
        },
        {
            value:
                noSalesRange ||
                nextData.dateRangeForSale!.from < nextData.dateRangeForSale!.to,
            id: CpadityDetailId("name", noLabelindex),
            failMsg: "판매기한 시작과 끝을 확인 바랍니다.",
        },
    ]);

    const handleCreate = () => {
        if (!validate()) return;

        const handleContinue = () => {
            createProd({
                variables: {
                    input: nextData,
                    itemId,
                },
            });
            timeCheckModalHook.closeModal();
        };

        timeCheckModalHook.openModal({
            onFailToFind: handleContinue,
            onContinue: handleContinue,
            from: nextData.dateRangeForUse?.from || 0,
            to: nextData.dateRangeForUse?.to || 0,
            itemId,
        });
    };

    const handleEdit = () => {
        if (!validate()) return;

        const handleContinue = () => {
            updateProd({
                variables: {
                    input: nextData,
                    productBookingId: product?._id,
                },
            });
            timeCheckModalHook.closeModal();
        };

        timeCheckModalHook.openModal({
            onContinue: handleContinue,
            onFailToFind: handleContinue,
            from: nextData.dateRangeForUse?.from || 0,
            to: nextData.dateRangeForUse?.to || 0,
            itemId,
        });
    };

    return (
        <JDcard
            foot={
                <>
                    <CardBtn
                        size="long"
                        onClick={handleCreate}
                        hide={!isCreate}
                        thema="primary"
                    >
                        생성하기
                    </CardBtn>
                    <CardBtn
                        size="long"
                        onClick={handleEdit}
                        hide={isCreate}
                        thema="primary"
                    >
                        수정하기
                    </CardBtn>
                </>
            }
            head="판매 추가하기"
            mb
            {...props}
        >
            <div>
                {isShopping && (
                    <div>
                        <JDswitch
                            mb
                            checked={isForever}
                            onChange={() => {
                                if (!isForever) {
                                    const endDate = new Date(
                                        FOREVER_SALE_END_TIME || new Date()
                                    );
                                    const startDate = new Date();
                                    salesTimePicker.endDateHook.setDate(
                                        endDate
                                    );
                                    salesTimePicker.startDateHook.setDate(
                                        startDate
                                    );
                                } else {
                                    salesTimePicker.endDateHook.setDate(
                                        DATE.tomorrow
                                    );
                                    salesTimePicker.startDateHook.setDate(
                                        DATE.today
                                    );
                                }
                            }}
                            label="무기한 판매"
                        />
                    </div>
                )}
                {isShopping && (
                    <JDalign hide={isForever} mb>
                        <JDlabel>판매기한</JDlabel>
                        <DateWithTimePicker {...salesTimePicker} />
                    </JDalign>
                )}
                {!isShopping && (
                    <JDalign mb>
                        <JDlabel>
                            {isDateRangeMall ? "사용일" : "사용기간"}
                        </JDlabel>
                        <DateWithTimePicker
                            useRange={!isDateRangeMall}
                            useTime={!isDateRangeMall}
                            fixTimeRange
                            fixSameDate={isTimeMall}
                            {...useTimePicker}
                        />
                    </JDalign>
                )}
                <CapacityDetailEditor
                    mode={isTimeMall ? "single" : undefined}
                    key={item?._id + defaultLabel}
                    defaultPrice={item?.price}
                    defaultLabel={defaultLabel}
                    onChange={setCapacityDetails}
                    usageDetails={capacityDetails}
                />
            </div>
            <ProductCreateTimeCheckModal
                key={timeCheckModalHook.isOpen ? "opend" : "closes"}
                modalHook={timeCheckModalHook}
            />
        </JDcard>
    );
};

// 프로덕트 크리에이터 2번 타임 메이커
// 목적:: 시작시간 ~ 끝시간 정하고. 그것을 N단위로 나누어서 판매.
// 빠르고 간편한 생성이 목적임. ProductsCreate와 Delete Update를 한번에 하기에 어려울것.
