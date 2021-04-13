import { Paymethod, StoreType } from "../../../type/api"
import { BuyPageType } from "../../../type/enum"
import { BuyPageTypeMatcher } from "../../../utils/enumConverter"
import { IbuypageConfig } from "./config"

export const buypageNormalTexts = {
    refundPolicy: {
        kr: "취소는 예약일 3일전까지 가능하십니다. 당일취소, 환불 불가. 이점 유의하셔서 예약 부탁드립니다.",
        description: "환불규정"
    },
    bankName: {
        kr: "OO은행",
        description: "입금은행"
    },
    bankAccount: {
        kr: "000-000-000000",
        description: "입금계좌"
    },
    accountHolder: {
        kr: "홍길동",
        description: "계좌주"
    },
    countUnit: {
        kr: "개",
        description: "구매단위 라벨"
    },
    purchase: {
        kr: "구매하기",
        description: "구매버튼 라벨"
    },
    addtionalInput: {
        kr: "추가사항",
        description: "커스텀인풋 라벨"
    },
    productSelectLabel: {
        kr: "선택",
        description: "상품선택 라벨"
    }
}

export const buypageShoppingTexts = {
}
export const buypageTimeTexts = {
}

export const DefaultBuypageConfig = {
    type: BuyPageType.RESERVATION_NORMAL,
    payMethods: [Paymethod.CASH,Paymethod.CARD,Paymethod.BANK_TRANSFER],
    RESERVATION_NORMAL: {
        maxSelectableCount: 99,
        useImgSlide: false,
        useRangeFilter: false,
        useSearchFilter: false,
        useTimeFilter: false,
        texts: buypageNormalTexts
    },
    SHOPPING_PAGE: {
        texts: buypageShoppingTexts,
        useBasket: true,
        useImgSlide: false,
        useSearchFilter: false,
    },
    TIME_MALL: {
        texts: buypageTimeTexts,
        useSearchFilter: false,
    },
    buypageTypeMatchByStore(storeType: StoreType) {
        return BuyPageTypeMatcher[storeType]
    }
}
