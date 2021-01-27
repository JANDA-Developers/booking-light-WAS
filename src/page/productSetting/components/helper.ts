import { PeriodInput } from "src/type/api";
import { IProduct } from "../interface";


export const getDefaults = (products?:Partial<IProduct>) => {
    

    const defaultPeriods = products?.salesPeriods?.map((sales):PeriodInput => {
        return {
            fromTm: sales.fromTm,
            toTm: sales.toTm
        }
    }) || []

    const defaultProducts = products;

    return {defaultProducts, defaultPeriods}

}
