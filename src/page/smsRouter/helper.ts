import { IselectedOption } from "@janda-com/front/dist/types/interface";

export const PurchaseChangeAble: IselectedOption[] = [
    {
        label: "예약자",
        value: "[%%PB_BOOKER%%]",
    },
    {
        label: "연락처",
        value: "[%%PB_CONTACT%%]",
    },
    {
        label: "상품명",
        value: "[%%PB_ITEMNAME%%]",
    },
    {
        label: "이용시간",
        value: "[%%PB_USETIME%%]",
    },
];

export const SMS_TEMPLATE: IselectedOption[] = [
    {
        label: "예약문자",
        value: "[%%PB_BOOKER%%]님 어서오세요",
    },
];

export const EMAIL_TEMPLATE: IselectedOption[] = [
    {
        label: "예약문자",
        value: "<h1>[%%PB_BOOKER%%]님 어서오세요</h1>",
    },
];
