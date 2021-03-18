import { IselectedOption } from "@janda-com/front/dist/types/interface";

export const PurchaseChangeAble:IselectedOption[] = [{
    label: "예약자",
    value: "[%%BOOKER%%]"
}, {
    label: "연락처",
    value: "[%%CONTACT%%]"
},
{
    label: "상품명",
    value: "[%%ITEMNAME%%]"
},
{
    label: "이용시간",
    value: "[%%USETIME%%]"
}]

export const SMS_TEMPLATE:IselectedOption[] =  [{
    label: "예약문자",
    value: "[%%BOOKER%%]님 어서오세요"
}]


export const EMAIL_TEMPLATE:IselectedOption[] =  [{
    label: "예약문자",
    value: "<h1>[%%BOOKER%%]님 어서오세요</h1>"
}]
