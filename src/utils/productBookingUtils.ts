import {
    CapacityInput,
    FproductBooking_dateRangeForSale,
    productFindById_ProductFindById_ProductBooking_usageDetails,
    productList_ProductList_items_ProductBooking,
    storeFindByCode_StoreFindByCode_buypage_delivery,
} from "../type/api";
import dayjs from "dayjs";
import { DATE, FOREVER_SALE_END_TIME } from "../type/const";
import { getDaysArray } from "./getDayArray";
import { arraySum, isEmpty } from "@janda-com/front";
import { IBookingInputData } from "../hook/useBookingInput";
import { IBasketItem } from "./Basket";

export const getPordByCapcityKey = (products: IBasketItem[], key: string) => {
    return products.find((p) => p.countDetails?.find((cd) => cd.key === key));
};

export const sortByDateRangeForSale = (
    dates: productList_ProductList_items_ProductBooking[]
) => {
    return dates.sort(
        (a, b) => a.dateRangeForUse?.from - b.dateRangeForUse?.from
    );
};

export const checkIsDisableDay =
    (
        salesDates: {
            from: number;
            to: number;
        },
        prods?: productList_ProductList_items_ProductBooking[]
    ) =>
    (day: Date) => {
        if (dayjs(day).isBefore(DATE.today, "day")) return true;
        if (
            dayjs(day).isBefore(dayjs().add(-1 * salesDates.from, "day"), "day")
        )
            return true;
        if (dayjs(day).isAfter(dayjs().add(salesDates.to, "day"), "day"))
            return true;

        const val = day.valueOf();
        const availableItem = prods?.find((item) => rangeCheck(item, val));

        if (prods === undefined) return false;
        return !availableItem;
    };

// Product 범위 체크
export const rangeCheck = (
    product: productList_ProductList_items_ProductBooking,
    val: number
): boolean => {
    const dateStart = dayjs(val).startOf("day").valueOf();
    const dateEnd = dayjs(val).endOf("day").valueOf();
    return (
        product.dateRangeForUse?.from >= dateStart &&
        product.dateRangeForUse?.to <= dateEnd
    );
};

// 범위내에 예약가능한 예약이 있는지 조회
export const haveDateRangeProduct = (
    products: productList_ProductList_items_ProductBooking[],
    filter: {
        from: Date | number;
        to: Date | number;
    }
): boolean => {
    let haveRangeDate = true;

    const datesOfProducts = products
        .filter(
            (pd) =>
                pd.usageDetails?.[0]?.usage <
                pd.usageDetails?.[0]?.capacityCount
        )
        .map((pd) => dayjs(pd.dateRangeForUse?.from).toDate());
    const from = dayjs(filter.from).toDate();
    const to = dayjs(filter.to).toDate();
    const dateArray = getDaysArray(from, to);

    dateArray.forEach((date) => {
        haveRangeDate = !!datesOfProducts.find((pdDay) =>
            dayjs(pdDay).isSame(date, "day")
        );
    });

    return haveRangeDate;
};

export const getAvailableCountFromProducts = (
    products: productList_ProductList_items_ProductBooking[]
) => {
    let minimum: number = 99999999;
    products.forEach((product) => {
        const count = product.capacityDetails[0].count;
        const usage = product.usageDetails[0].usage;
        const avail = count - usage;
        if (avail < minimum) {
            minimum = avail;
        }
        console.log({ avail });
        console.log({ usage });
    });
    if (isEmpty(products)) return 0;
    return minimum;
};

export const getSumPrice = (
    products: productList_ProductList_items_ProductBooking[]
) => {
    let sum: number = 0;
    products.forEach((product) => {
        sum += product.capacityDetails[0].price;
    });
    return sum;
};

export const getStartAndEndUse = (
    products: productList_ProductList_items_ProductBooking[]
) => {
    const sorted = sortByDateRangeForSale(products);
    const start = sorted[0].dateRangeForUse;
    const end = sorted[sorted.length - 1].dateRangeForUse;
    const startTme = start?.from;
    const endTime = end?.to;

    return { start, end, startTme, endTime };
};

export const isItemSoldOutRange = (
    products: productList_ProductList_items_ProductBooking[]
) => {
    const soldOutProduct = products.find((product) =>
        isProductSoudOut(product)
    );
    return !!soldOutProduct;
};

export const isItemSoldOut = (
    products: productList_ProductList_items_ProductBooking[]
) => {
    const unSoldOutProduct = products.find(
        (product) => !isProductSoudOut(product)
    );
    return !unSoldOutProduct;
};

export const isProductSoudOut = (
    product: productList_ProductList_items_ProductBooking
) => {
    const unSoldOut = product.usageDetails.find((ud) => !isUsageFull(ud));
    return !unSoldOut;
};
const isUsageFull = (
    usage: productFindById_ProductFindById_ProductBooking_usageDetails
) => {
    return usage.capacityCount === usage.usage;
};

export const isForeverSale = (
    sales?: FproductBooking_dateRangeForSale | null
) => {
    return !!(
        sales &&
        dayjs(sales.to).isSame(FOREVER_SALE_END_TIME || new Date(), "year")
    );
};

export const extractKeys = (inputs: (IBookingInputData | IBasketItem)[]) => {
    return inputs.flatMap((bi) =>
        bi.countDetails?.flatMap((cd) => cd.key)
    ) as string[];
};

export const extractDetails = (inputs: (IBookingInputData | IBasketItem)[]) => {
    return inputs
        .flatMap((bi) => bi.countDetails?.flatMap((cd) => cd))
        .filter((cd) => cd) as CapacityInput[];
};

export const calcuatePrice = (targetProducts: IBookingInputData[]) => {
    targetProducts.forEach((tp) => {
        tp.priceOrigin = arraySum(
            tp.countDetails?.map((cd) => cd.price) || [0]
        );
    });
};

export const getSelectProductsFromCapcities = (
    selectedCapacity: CapacityInput[],
    fullItemList: IBasketItem[]
) => {
    const targetProducts: IBookingInputData[] = [];
    selectedCapacity.forEach((item) => {
        const targetProduct = getPordByCapcityKey(fullItemList, item.key);
        if (!targetProduct) return;

        const containedTargetProd = targetProducts.find(
            (tp) => tp.productId === targetProduct._id
        );

        if (containedTargetProd) {
            containedTargetProd.countDetails?.push({ ...item });
        } else {
            const newProd = {
                ...targetProduct,
                countDetails: [{ ...item }],
            } as any;

            targetProducts.push(newProd);
        }
    });
    return targetProducts;
};

export const deliveryPriceCalculate = (
    deliveryInfo: storeFindByCode_StoreFindByCode_buypage_delivery | null,
    elsePriceSum: number
) => {
    const { fee, overFreePrice } = deliveryInfo || {};
    if (!fee) return 0;
    if (overFreePrice) {
        const isOver = elsePriceSum >= overFreePrice;
        if (isOver) return 0;
    }
    return fee;
};

export const getUniqCpacities = (details: CapacityInput[]) => {
    let keys: string[] = [];
    let result: CapacityInput[] = [];
    details?.forEach((li) => {
        if (!keys.includes(li.key)) {
            keys.push(li.key);
            result.push(li);
        }
    });
    return result;
};

export const ProductBookingUtils = {
    //판매일 순으로 Product 정열
    sortByDateRangeForSale,
    //해당날짜에 예약가능한 상품이 있는지 체크
    checkIsDisableDay,
    //날자를 받아 상품범위내에 있는지 체크
    rangeCheck,
    //(products, 날짜범위) => 예약가능여부
    haveDateRangeProduct,
    //날자 범위내에 예약가능한 카운팅을 구함
    getAvailableCountFromProducts,
    //상품들 첫번쨰 countDetail 합계를 구함
    getSumPrice,
    //상품들 첫번쨰 날짜와 끝날짜 구하기
    getStartAndEndUse,
    // 상품중 하나라도 판매가 마감되면 SoldOut
    isItemSoldOutRange,
    // 상품중 판매중인게 하나라도 있으면 OK
    isItemSoldOut,
    // 상품하나가 마감되었는가
    isProductSoudOut,
    // 판매기한 무한인지
    isForeverSale,
    //상품들 countDetail 들의 key들을 추출함
    extractKeys,
    //상품들 countDetail들 falt
    extractDetails,
    //상품들 가격 재계산 (오브젝트에 반영)
    calcuatePrice,
    //캐파시티 키를 가지고있는 프로덕트 가져오기
    getPordByCapcityKey,
    //BookingInput을 필터
    getSelectProductsFromCapcities,
    // 배송가격 꼐산하기
    deliveryPriceCalculate,
    // 유니크한 cApc
    getUniqCpacities,
};
