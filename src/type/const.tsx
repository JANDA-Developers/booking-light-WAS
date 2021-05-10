import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import {
    BankCode,
    DayOfWeek,
    DisplayType,
    Ffile,
    FoffsetPagingInfo,
    ItemType,
    me_Me_stores_buypage_delivery,
    NotificationMethod,
    NotificationTriggerEvent,
    OffsetPagingInput,
    Paymethod,
    Status,
    StoreType,
    SystemNotiType,
    UserRole,
    VerificationEvent,
    VerificationTarget,
    _BoardDocSort,
    _ProductSort,
    _PurchaseBundleSort,
} from "./api";
import dayjs from "dayjs";
import { NotiType, selectOpCreater } from "@janda-com/front";
import { enumToOption } from "../utils/enumToOption";
import { BoardKeys, BuyPageType, CreateSalesTime } from "./enum";
import { storeTypeKr } from "../utils/enumConverter";

const { version } = require("../../package.json");
export const JDVERSION = version;

export const ALLOW_LOGINS = [
    UserRole.BUSINESS_USER,
    UserRole.STORE_USER,
    UserRole.SUPERADMIN,
];

export const nicePayJDlogo =
    "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/logo/jungleBooking.png";

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
    "099": "금융결제원",
};

export const DEFAULT_PAGE_SEARCH: OffsetPagingInput = {
    pageItemCount: 20,
    pageIndex: 0,
};

export const DEFAULT_PAGE_INFO: FoffsetPagingInfo = {
    __typename: "OffsetPagingInfo",
    currentItemCount: 0,
    pageIndex: 0,
    pageItemCount: 0,
    totalPageCount: 0,
};

export const DEFAULT_VEIFI_METHOD = {
    target: VerificationTarget.PHONE,
    event: VerificationEvent.UserVerifyPhone,
};

export const DEFAULT_ADDRESS = {
    address: "default",
    addressDetail: "default",
    lat: 0,
    lng: 0,
};

export const BANK_SELECT_OP: IselectedOption[] = Object.entries(BANK_LIST).map(
    ([key, value]) => {
        return {
            label: value,
            value: key,
        };
    }
);

export const GET_EVERY = {
    pagingInput: {
        pageIndex: 0,
        pageItemCount: 99,
    },
};

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

export default "";

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

export const CREATE_SALES_TIME_OP: IselectedOption<CreateSalesTime>[] = [
    {
        label: "지금부터 사용시간 종료 전까지",
        value: CreateSalesTime.BEFORE_USE_END,
    },
    {
        label: "지금부터 사용시간 시작 전까지",
        value: CreateSalesTime.BEFORE_USE_START,
    },
    {
        label: "지금부터 사용시간 시작 하루 전까지",
        value: CreateSalesTime.ONE_DAY_BEFORE,
    },
    {
        label: "지금부터 사용시간 시작 N시간 전까지",
        value: CreateSalesTime.N_HOURS_BEFORE,
    },
    {
        label: "커스텀 시간 설정",
        value: CreateSalesTime.CUSTOM_TIME,
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
        label: "파일",
        value: DisplayType.FILE,
    },
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
    },
    {
        label: "쇼핑몰예약",
        value: BuyPageType.SHOPPING_MALL,
    },
    {
        label: "회차예약",
        value: BuyPageType.TIME_MALL,
    },
    {
        label: "연일예약",
        value: BuyPageType.DAY_RANGE,
    },
];

export const ITEM_TYPE_OPS: IselectedOption<ItemType>[] = [
    {
        label: "물품판매",
        value: ItemType.GOODS,
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

export const enumToOps = (enumm: any, fn: (foo: any) => string) => {
    return Object.keys(enumm).map((key) => ({
        label: fn(enumm[key]),
        value: enumm[key],
    }));
};

export const enumToOp = (enumm: any, record: any) => {
    return Object.keys(enumm).map((key) => ({
        label: record[key],
        value: enumm[key],
    }));
};
export const STORE_TYPE_OPS: IselectedOption<StoreType>[] = enumToOp(
    StoreType,
    storeTypeKr
);

export const COUNT = selectOpCreater({
    count: 1000,
    start: 0,
    labelAdd: "개",
});

export const COUNT_GEN = (label: string) =>
    selectOpCreater({
        count: 9990,
        start: 0,
        labelAdd: label,
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
export const lastMonthFirstDate = dayjs()
    .add(-1, "month")
    .set("day", 1)
    .toDate();
export const lastMonthLastDate = dayjs()
    .add(-1, "month")
    .endOf("month")
    .toDate();
export const thisMonthLastDate = dayjs().endOf("month").toDate();
export const thisMonthFirstDate = dayjs().startOf("month").toDate();
export const oneYearBefore = dayjs().add(-1, "y").toDate();
export const sixMonthBefore = dayjs().add(-6, "month").toDate();
export const todayyyyymmNumber = parseInt(dayjs().format("YYYYMM"));

export const DATE = {
    today: dayjs().startOf("day").toDate(),
    tomorrow: dayjs().add(1, "day").startOf("day").toDate(),
    lastMonthFirstDate,
    lastMonthLastDate,
    thisMonthFirstDate,
    oneYearBefore,
    sixMonthBefore,
};

export const TIME_VALUE = {
    today,
    tomorrow,
};

export enum Ratio {
    "16:9" = 1.77777,
    "4:3" = 0.75,
}

export const DEFAULT_SENDER = "18334157";
export const DEFAULT_EMAIL_SENDER = "no-reply@stayjanda.com";
// 통신가입 증명원 링크
export const ONLINE_TELL_INFO_LINK =
    "https://m.blog.naver.com/PostView.nhn?blogId=popbill&logNo=221030696103&proxyReferer=https:%2F%2Fwww.google.com%2F";

export const DefaultSenderOP: IselectedOption = {
    label: "기본발신자[S]",
    value: DEFAULT_SENDER,
};

export const DefaultEmailSenderOP: IselectedOption = {
    label: "기본발신자[E]",
    value: DEFAULT_EMAIL_SENDER,
};

export const BankCodeKr: Record<BankCode, string> = {
    CITY: "시티은행",
    HANA: "하나은행",
    SHINHAN: "신한은행",
    KDB: "산업은행",
    NONGHYUP: "농협은행",
    WOORI: "우리은행",
    BOK: "한국은행",
    BUSAN: "부산은행",
    DAEGU: "대우은행",
    GUANGJU: "광주은행",
    IBK: "IBK은행",
    JEJU: "제주은행",
    KAKAO: "카카오은행",
    KB: "국민은행",
    KN_BANK: "경남은행",
    POST: "우체국은행",
    STANDARD_CHARTERED: "sc은행",
    SUHYUP: "수협은행",
};

export const BANK_OPS = enumToOps(
    BankCode,
    (key) => BankCodeKr[key as BankCode]
);

export const SystemNotiKr: Record<SystemNotiType, string> = {
    janda: "공지알림",
    booking: "예약",
    cancel: "취소",
    payment: "결제",
    system: "시스템",
    user: "유저",
};

export const SYSTEM_NOTI_OPS = enumToOps(
    SystemNotiType,
    (key) => SystemNotiKr[key as SystemNotiType]
);

export const SortKr: Partial<Record<any, string>> = {
    createdAt__asc: "생성일↓",
    createdAt__desc: "생성일↑",
    updatedAt__asc: "업데이트↓",
    updatedAt__desc: "업데이트↑",
    paymentAt__asc: "결제일↓",
    paymentAt__desc: "결제일↑",
    disabled__asc: "활성화X",
    disabled__desc: "활성화O",
};

export const WeekKr: Record<DayOfWeek, string> = {
    FRI: "금",
    MON: "월",
    SAT: "토",
    SUN: "일",
    THU: "목",
    TUE: "화",
    WED: "수",
};

export const SatusKr: Record<Status, string> = {
    CANCELED: "취소",
    COMPLETED: "완료",
    PENDING: "대기",
};

export const BoardKeyKr: Record<BoardKeys, string> = {
    bug: "버그",
    notice: "공지",
    qna: "자주하는질문",
    question: "질문",
};

export const WeekOption = enumToOps(
    DayOfWeek,
    (key) => WeekKr[key as keyof typeof WeekKr]
);

export const StatusOption = enumToOps(
    Status,
    (key) => SatusKr[key as keyof typeof SatusKr]
);

export const FOREVER = new Date("2099-01-01").valueOf();

export const DEFAULT_DELIVERY: me_Me_stores_buypage_delivery = {
    __typename: "Delivery",
    fee: 0,
    lowerPrice: 0,
    overFreePrice: 0,
};

export const FOREVER_SALE_END_TIME = new Date("2099-01-01");

export const DEFAULT_FILE: Ffile = {
    __typename: "File",
    _id: "",
    tags: [],
    createdAt: new Date(),
    description: "",
    extension: "",
    fileType: "",
    name: "",
    updatedAt: new Date(),
    uri: "",
};

export const NO_IMG =
    "https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/infographic/noimg.png";

export const LOADING_SVG =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/03ac7912-1eb4-494d-88d0-c3b831c98607/Infinity-1.6s-200px.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T050156Z&X-Amz-Expires=86400&X-Amz-Signature=a937227e274041595e7cade19362db049430a76d5aee85898927ba68eec01c06&X-Amz-SignedHeaders=host";
export const LOADING_CIRCLE =
    "https://s3.us-west-2.amazonaws.com/secure.notion-static.com/e9c8292d-d3f4-49bd-b05c-fe11e753a119/Double_Ring-3.4s-227px_%281%29.svg?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIAT73L2G45O3KS52Y5%2F20210430%2Fus-west-2%2Fs3%2Faws4_request&X-Amz-Date=20210430T050156Z&X-Amz-Expires=86400&X-Amz-Signature=c0c3cfbdaf3cc514d0897261129a2d9453c0b115f59e262f45cc977884d5480c&X-Amz-SignedHeaders=host";
