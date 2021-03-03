import { INVOCIE_lIST, INVOICE_FIND_ONE } from "../apollo/gql/invoice";
import { invoiceFindOne, invoiceFindOneVariables, invoiceFindOne_InvoiceFindOne, invoiceList, invoiceListVariables, invoiceList_InvoiceList, invoiceList_InvoiceList_items, _InvoiceFilter, _InvoiceSort } from "../type/api";
import { generateFindQuery, generateListQueryHook } from "../utils/query";

export const useInvoiceFind = generateFindQuery<invoiceFindOne,invoiceFindOneVariables,invoiceFindOne_InvoiceFindOne>("yyyymm",INVOICE_FIND_ONE);
export const useInvoiceList = generateListQueryHook<_InvoiceFilter,_InvoiceSort,invoiceList,invoiceListVariables,invoiceList_InvoiceList_items>(INVOCIE_lIST);
