import { BookingInput, purchaseBundleCreate_PurchaseBundleCreate, _ProductFilter } from "../../../../type/api";
import { updateURLParameters } from "../../../../utils/url";
import queryString from "query-string";
import { getAllFromUrl, getFromUrl } from "@janda-com/front";
import { IBookingInputData } from "../../../../hook/useBookingInput";

export const generateDetailURLQueryFilter = (location: string, f: _ProductFilter) => {
    const filter = encodeURIComponent(JSON.stringify(f));
    return updateURLParameters("", [{ label: "query", value: filter }])
}

const getDetailURLQUeryFilter = (search: string): _ProductFilter => {
    const result = queryString.parse(search);
    if (!result) return {}
    return JSON.parse(decodeURIComponent(result.query as string));
}


// URL에붙이기
export const generateProductPurchaseParam = (location: string, products: IBookingInputData[]) => {
    const productsData = encodeURIComponent(JSON.stringify(products));
    return updateURLParameters("", [{ label: "products", value: productsData }])
}

//URL에서 가져오기
export const getProductPurchaseParam = (search:string): IBookingInputData[] => {
    const result = queryString.parse(search);
    if(!result) return [];
    const productsData = JSON.parse(decodeURIComponent(result.products as string));
    return productsData
}


export const generatePurchasedResultParam = (location: string, data: purchaseBundleCreate_PurchaseBundleCreate[]) => {
    const productsData = encodeURIComponent(JSON.stringify(data));
    return updateURLParameters("", [{ label: "products", value: productsData }])
}
