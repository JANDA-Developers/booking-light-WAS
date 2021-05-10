import { Paymethod, StoreType } from "../../../type/api";
import { BuyPageType } from "../../../type/enum";
import { BuyPageTypeMatcher } from "../../../utils/enumConverter";
import { IbuypageConfig } from "./config";

const sharedTexts = {
    bankName: {
        kr: "OO은행",
        description: "입금은행",
    },
    bankAccount: {
        kr: "000-000-000000",
        description: "입금계좌",
    },
    accountHolder: {
        kr: "홍길동",
        description: "계좌주",
    },
    purchase: {
        kr: "구매하기",
        description: "구매버튼 라벨",
    },
};

export const buypageNormalTexts = {
    ...sharedTexts,
    countUnit: {
        kr: "개",
        description: "구매단위 라벨",
    },
    addtionalInput: {
        kr: "추가사항",
        description: "커스텀인풋 라벨",
    },
    productSelectLabel: {
        kr: "선택",
        description: "상품선택 라벨",
    },
};

export const buypageShoppingTexts = {
    ...sharedTexts,
};
export const buypageTimeTexts = {
    ...sharedTexts,
};
export const buypageDayRangeTexts = {
    ...sharedTexts,
};

const defaults = {
    RESERVATION_NORMAL: {
        maxSelectableCount: 99,
        useImgSlide: false,
        useRangeFilter: false,
        useSearchFilter: false,
        useTimeFilter: false,
        texts: buypageNormalTexts,
    },
    SHOPPING_MALL: {
        texts: buypageShoppingTexts,
        useBasket: true,
        useImgSlide: false,
        useSearchFilter: false,
    },
    TIME_MALL: {
        texts: buypageTimeTexts,
        useSearchFilter: false,
    },
    DAY_RANGE: {
        texts: buypageDayRangeTexts,
        useSearchFilter: false,
    },
};
export const DefaultBuypageConfig = {
    type: BuyPageType.RESERVATION_NORMAL,
    payMethods: [Paymethod.CASH, Paymethod.CARD, Paymethod.BANK_TRANSFER],
    salesDates: {
        from: 0, //days ago
        to: 180, //till days after
    },
    RESERVATION_NORMAL: defaults.RESERVATION_NORMAL,
    SHOPPING_MALL: defaults.SHOPPING_MALL,
    TIME_MALL: defaults.TIME_MALL,
    DAY_RANGE: defaults.DAY_RANGE,
    buypageTypeMatchByStore(storeType: StoreType) {
        return BuyPageTypeMatcher[storeType];
    },
    // @Build
    typeBuild(storeType: StoreType) {
        this.type = BuyPageTypeMatcher[storeType];
    },
    nonProfitBuild(nonProfit: boolean) {
        if (nonProfit) this.payMethods = [];
    },
    // @ts-ignore
    get texts(): typeof sharedTexts {
        console.log(this.type);
        // @ts-ignore
        console.log(this[this.type]);
        // @ts-ignore
        return this[this.type]?.texts || defaults[this.type]?.texts;
    },
    set texts(texts) {
        // @ts-ignore
        return (this[this.type]["texts"] = texts);
    },
};
