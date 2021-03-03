import { gql } from "@apollo/client";
import { F_COLLECTION_DATA_INTERFACE } from "./shared";

export const F_PAYMENTOPTION = gql`
    fragment Fpaymentoption on PaymentOption {
        authDate
        isAuthorized
        commission {
            forCard
            forBankTransfer
        }
        enabledPaymethods
    }
`

export const F_BASE_TRANSACTION  = gql`
    fragment FbaseTransaction  on BaseTransaction  {
        ...FcollectionDataInterface
        status
        type
        paymethod
        price
        currency
        message
    }
${F_COLLECTION_DATA_INTERFACE}
`

export const F_NICE_PAY_BILLPAY_RESULT  = gql`
    fragment FnicepayBillpayResult  on NicepayBillpayResult  {
        resultCode
        resultMsg
        cardName
        goodsVat
        supplyAmt
        amt
    }
`