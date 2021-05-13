import { arraySum } from "@janda-com/front";
import { IBookingInputData } from "../hook/useBookingInput";
import {
    BookingInput,
    PurchaseBundleCreateInput,
    SelectOptionInput,
} from "../type/api";
import { IBaseItem, LocalItemStorage } from "./storage";

export interface IBasketItem
    extends Partial<IBookingInputData>,
        Partial<IBaseItem> {}

export class BasketStorage extends LocalItemStorage<IBasketItem> {
    get price() {
        const items = this.getItems() || [];
        return arraySum(items.map((item) => item.priceOrigin || 0));
    }

    findByKey(key: string) {
        const items = this.getItems() || [];
        return items.find((item) =>
            item.countDetails?.find((cd) => cd.key === key)
        );
    }
}

export interface IOptionBasket
    extends Partial<SelectOptionInput>,
        Partial<IBaseItem> {}

export class BasketOptionStorage extends LocalItemStorage<IOptionBasket> {
    getPureItems() {
        const items = this.getItems();
        const pureItems = items.map(
            (item): SelectOptionInput => ({
                label: item.label!,
                priceOrigin: item.priceOrigin!,
                selectCount: item.selectCount!,
                targetOption: item.targetOption,
            })
        );
        return pureItems;
    }
}

export const BASKET = new BasketStorage("bracket");
export const BASKET__OPTION = new BasketOptionStorage("options" as any);
