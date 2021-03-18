import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import { DisplayType, FoffsetPagingInfo, ItemType, NotificationMethod, NotificationTriggerEvent, OffsetPagingInput, Paymethod, StoreType, UserRole, VerificationEvent, VerificationTarget } from "./api";
import dayjs from "dayjs";
import { NotiType, selectOpCreater } from "@janda-com/front";
import { enumToOption } from "../utils/enumToOption";
import { BuyPageType } from "./enum";
import { storeTypeKr } from "../utils/enumConverter";

const { version } = require("../../package.json");
export const JDVERSION = version

export const BANK_LIST = {
    "001": "한국은행",
    "002": "산업은행",
    "003": "기업은행",
    "004": "국민은행",
    "005": "외환은행",
    "006": "국민은행",
    "007": "수협중앙회",
    "008": "수출입은행",
    "009": "수협중앙회",
    "010": "농협은행",
    "011": "농협중앙회",
    "020": "우리은행",
    "023": "제일은행",
    "027": "씨티은행",
    "031": "대구은행",
    "032": "부산은행",
    "034": "광주은행",
    "035": "제주은행",
    "037": "전북은행",
    "039": "경남은행",
    "045": "새마을금고중앙회",
    "048": "신협중앙회",
    "050": "상호저축은행",
    "052": "모간스탠리은행",
    "054": "HSBC은행",
    "055": "도이치은행",
    "056": "알비에스피엘씨은행",
    "057": "제이피모간체이스은행",
    "058": "미즈호은행",
    "059": "미쓰비시도쿄UFJ은행",
    "060": "BOA은행",
    "061": "비엔피파리은행",
    "062": "중국공상은행",
    "063": "중국은행",
    "064": "산림조합중앙회",
    "065": "대화은행",
    "071": "우체국",
    "076": "신용보증기금",
    "077": "기술보증기금",
    "081": "하나은행",
    "088": "신한은행",
    "092": "한국정책금융공사",
    "093": "한국주택금융공사",
    "094": "서울보증보험",
    "095": "경찰청",
    "096": "한국전자금융(주)",
    "099": "금융결제원"
}

export const DEFAULT_PAGE_SEARCH: OffsetPagingInput = {
    pageItemCount: 20,
    pageIndex: 0
}

export const DEFAULT_PAGE_INFO: FoffsetPagingInfo = {
    __typename: "OffsetPagingInfo",
    currentItemCount: 0,
    pageIndex: 0,
    pageItemCount: 0,
    totalPageCount: 0
}

export const DEFAULT_VEIFI_METHOD = {
    target: VerificationTarget.PHONE,
    event: VerificationEvent.UserVerifyPhone,
}


export const DEFAULT_ADDRESS = {
    address: "default",
    addressDetail: "default",
    lat: 0,
    lng: 0
}

export const BANK_SELECT_OP: IselectedOption[] = Object.entries(BANK_LIST).map(([key, value]) => {
    return {
        label: value,
        value: key
    }
})

export const GET_EVERY = {
    pagingInput: {
        pageIndex: 0,
        pageItemCount: 99
    }
}

// export const DEFAULT_ITEM_CREATE: ICreateSubmitInput = process.env.NODE_ENV === "development" ? {
//     amount: 1000,
//     count: 1,
//     email: "colton950901@mgmail.com",
//     fromTm: dayjs(new Date()).valueOf(),
//     toTm: dayjs(new Date()).add(1, "d").valueOf(),
//     message: "테스트",
//     name: "김민재",
//     phoneNumber: "01052374492",
//     productId: "",
// } : {
//         amount: 0,
//         count: 0,
//         email: "",
//         fromTm: "",
//         message: "",
//         name: "",
//         phoneNumber: "",
//         productId: "",
//         toTm: ""
//     }

export default ""






export const EVENT_OPS: IselectedOption<NotificationTriggerEvent>[] = [
    {
        label: "구매취소시",
        value: NotificationTriggerEvent.PURCHASE_BUNDLE_CANCEL,
    },
    {
        label: "구매 완료시",
        value: NotificationTriggerEvent.PURCHASE_BUNDLE_CREATE_COMPLETE,
    },
    {
        label: "환불시",
        value: NotificationTriggerEvent.PURCHASE_BUNDLE_REFUND,
    },
    {
        label: "구매 시작시",
        value: NotificationTriggerEvent.PURCHASE_BUNDLE_CREATE_PENDING,
    },
];




export const INPUT_OPS: IselectedOption<DisplayType>[] = [
    {
        label: "텍스트인풋",
        value: DisplayType.TEXT_INPUT,
    },
    {
        label: "드랍다운박스",
        value: DisplayType.DROPDOWN,
    },
    {
        label: "체크박스",
        value: DisplayType.CHECK_BOX,
    },
    {
        label: "숫자박스",
        value: DisplayType.NUMBER_SELECTOR,
    },
    // {
    //     label: "날짜범위선택",
    //     value: DisplayType.DATE_RANGE_PICKER,
    // },
    {
        label: "타임픽커",
        value: DisplayType.TIME_PICKER,
    },
    {
        label: "데이트픽커",
        value: DisplayType.DATE_PICKER,
    },
];


export const BUYPAGE_TYPE_OPS: IselectedOption<BuyPageType>[] = [
    {
        label: "일반예약",
        value: BuyPageType.RESERVATION_NORMAL,
    }
];

export const ITEM_TYPE_OPS: IselectedOption<ItemType>[] = [
    {
        label: "배달서비스",
        value: ItemType.DELIVERY,
    },
    {
        label: "예약",
        value: ItemType.BOOKING,
    },
    {
        label: "이벤트",
        value: ItemType.EVENT,
    },
    {
        label: "공간대여",
        value: ItemType.PLACE,
    },
    {
        label: "서비스",
        value: ItemType.SERVICE,
    },
];

export const NOTI_METHOD_OPS: IselectedOption<NotificationMethod>[] = [
    {
        label: "문자",
        value: NotificationMethod.SMS,
    },
    {
        label: "이메일",
        value: NotificationMethod.EMAIL,
    },
];

export const PAY_METHOD_OPS: IselectedOption<Paymethod>[] = [
    {
        label: "무통장입금",
        value: Paymethod.BANK_TRANSFER,
    },
    {
        label: "카드결제",
        value: Paymethod.CARD,
    },
    {
        label: "현장결제",
        value: Paymethod.CASH,
    },
];

const enumToOps = (enumm: any, fn: (foo: any) => string) => {
    return Object.keys(enumm)
        .map(key => ({
            label: fn(enumm[key]),
            value: enumm[key]
        }));
}

export const STORE_TYPE_OPS: IselectedOption<StoreType>[] = enumToOps(StoreType, storeTypeKr);

export const COUNT = selectOpCreater({
    count: 99,
    start: 0,
    labelAdd: "개"
});



export const HOURS_SELECT_OP: IselectedOption<number>[] = [
    {
        label: "00시",
        value: 0,
    },
    {
        label: "01시",
        value: 1,
    },
    {
        label: "02시",
        value: 2,
    },
    {
        label: "03시",
        value: 3,
    },
    {
        label: "04시",
        value: 4,
    },
    {
        label: "05시",
        value: 6,
    },
    {
        label: "07시",
        value: 7,
    },
    {
        label: "08시",
        value: 8,
    },
    {
        label: "09시",
        value: 9,
    },
    {
        label: "10시",
        value: 10,
    },
    {
        label: "11시",
        value: 11,
    },
    {
        label: "12시",
        value: 12,
    },
    {
        label: "13시",
        value: 13,
    },
    {
        label: "14시",
        value: 14,
    },
    {
        label: "15시",
        value: 15,
    },
    {
        label: "16시",
        value: 16,
    },
    {
        label: "17시",
        value: 17,
    },
    {
        label: "18시",
        value: 18,
    },
    {
        label: "19시",
        value: 19,
    },
    {
        label: "20시",
        value: 20,
    },
    {
        label: "21시",
        value: 21,
    },
    {
        label: "22시",
        value: 22,
    },
    {
        label: "23시",
        value: 23,
    },
    {
        label: "24시",
        value: 24,
    },
];

export let MINUTES_SELECT_OP: IselectedOption<number>[] = Array(60)
    .fill(null)
    .map((_, i) => ({
        label: `${i}분`,
        value: i,
    }));


export const tommorrowDate = dayjs().add(1, "day").startOf("day").toDate();
export const todayDate = dayjs().startOf("day").toDate();
export const today = dayjs().startOf("day").valueOf();
export const tomorrow = dayjs().add(1, "day").startOf("day").valueOf();
export const lastMonthFirstDate = dayjs().add(-1, "month").set("day", 1).toDate();
export const lastMonthLastDate = dayjs().add(-1, "month").endOf("month").toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().startOf("month").toDate();
export const oneYearBefore = dayjs().add(-1, "y").toDate();
export const sixMonthBefore = dayjs().add(-6, "month").toDate();
export const todayyyyymmNumber = parseInt(dayjs().format("yyyymm"));


export enum Ratio {
    "16:9" = 1.77777,
    "4:3" = 0.75
}


export const DEFAULT_SENDER = "08015212"

export const DefaultSenderOP: IselectedOption = {
    label: "기본발신자",
    value: DEFAULT_SENDER
}