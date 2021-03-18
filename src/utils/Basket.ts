import { arraySum } from "@janda-com/front";
import { IBookingInputData } from "../hook/useBookingInput";
import { BookingInput, PurchaseBundleCreateInput } from "../type/api";
import { IBaseItem, LocalItemStorage } from "./storage";



export interface IBasketItem extends Partial<IBookingInputData>,Partial<IBaseItem> {
}

export class BasketStorage extends LocalItemStorage<IBasketItem> {
    get price() {
        const items = this.getItems() || [];
        return arraySum(items.map(item => item.priceOrigin || 0));
    }
}

export const BASKET = new BasketStorage("bracket");