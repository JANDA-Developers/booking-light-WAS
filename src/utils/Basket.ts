import { BookingInput, PurchaseBundleCreateInput } from "../type/api";
import { IBaseItem, LocalItemStorage } from "./storage";



export interface IBasketItem extends Partial<BookingInput>,Partial<IBaseItem> {
}

export class BasketStorage extends LocalItemStorage<IBasketItem> {
}

export const basket = new BasketStorage("bracket");