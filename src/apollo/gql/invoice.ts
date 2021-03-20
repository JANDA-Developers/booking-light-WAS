import { gql } from "@apollo/client";
import { F_PAGEINFO, F_USERERROR } from "./fragment/fragments";
import { F_INVOCIE } from "./fragment/invoice";

export const INVOICE_FIND_ONE = gql`
query invoiceFindOne(
        $yyyymm: Int!
    ) {
    InvoiceFindOne(
        yyyymm: $yyyymm
    ) {
        ...Finvoice
    }
}
${F_INVOCIE}
`

export const INVOCIE_lIST = gql`
    query invoiceList(
        $sort: [_InvoiceSort!]
        $filter: _InvoiceFilter
        $pagingInput: OffsetPagingInput!
    ) {
    InvoiceList(
        sort: $sort
        pagingInput: $pagingInput
        filter: $filter
    ) {
        pageInfo {
            ...FoffsetPagingInfo
        }
        items {
            ...Finvoice
        }
    }
}
${F_PAGEINFO}
${F_INVOCIE}
`

export const BILLING_METHOD_REGIST = gql`
    mutation billingMethodRegist(
        $input: BillingMethodRegistInput!
    ) {
    BillingMethodRegist(
        input: $input 
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
${F_INVOCIE}
`

export const BILLING_METHOD_DELETE = gql`
    mutation billingMethodDelete(
        $billingId: ObjectId!
    ) {
    BillingMethodDelete(
        billingId: $billingId
    ) {
        ok
        error {
            ...FuserError
        }
    }
}
${F_USERERROR}
${F_INVOCIE}
`



