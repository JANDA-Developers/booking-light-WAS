import {  s4 } from "@janda-com/front";
import { Fitem, PurchaseBundleCreateInput } from "../type/api";
import dayjs from "dayjs";
import LocalManager from "./localManager";

export const storage = new LocalManager<"lastStore">({
    storage: "localStorage"
});


export default storage


export type TStoreKeys = "storeId" | "itemTempBoard" | "lastLoginType" | "qnaWrite" | "announceWrite" | "lastProd" | "signUpRole" | "questionWrite" | "newsWrite" | "write" | "bracket" | "saveid" | "saveSession?" | "saveId?" | "portfolioWrite" | "jwt" | "lastLogin";

export let Storage: LocalManager<TStoreKeys> | null = null;



export interface IBaseItem {
    _id: string
    version: number;
    pickupAt: Date
}

export class LocalItemStorage<Item extends Partial<IBaseItem>> {

    public key: TStoreKeys;
    public version =12;

    constructor(key:TStoreKeys) {
        this.key = key;
    }
    
    getItems() {
        return storage?.getLocalObj<Item[]>(this.key as any, []) || [];
    }

    deleteExpireItem() {
        const bracket = this.getItems();
        this.saveItems(bracket || []);
    }

    removeBasket() {
        return localStorage.removeItem(this.key);
    }

    haveItem(_id: string) {
        const items = this.getItems() || []
        return !!items.find(prod => prod._id === _id)
    }


    overrideItem(_id: string, item: Partial<Item>) {
        const items = this.getItems() || []
        const targetIndex = items.findIndex(prod => prod._id === _id);
        if (targetIndex === -1) throw Error(`these is no item ${_id} in bracket`);
        items[targetIndex] = {
            ...items[targetIndex],
            ...item
        }

        this.saveItems(items);
    }

    removeItems(_ids: string[]) {
        _ids.forEach(_id => { 
            this.removeItem(_id)
        })
    }

    removeItem(_id: string) {
        const items = this.getItems() || []
        const targetIndex = items.findIndex(prod => prod._id === _id);
        items.splice(targetIndex, 1);
        this.saveItems(items);
    }

    addItems(items: Item[]) {
        items.forEach((item) => {
            this.addItem({...item})
        })
    }

    addItem(_item: Item) {
        const item = _item as Item
        if(!item._id) item._id = s4();
        item.version = this.version
        item.pickupAt = new Date();

        const items = this.getItems() || []
        const duplicated = items.findIndex(p => p._id === item._id);
        let updateitems: Item[] = [];

        if (duplicated !== -1) {
            updateitems.splice(duplicated, 1, item);
        } else 
            updateitems = [item, ...items];

        this.saveItems(updateitems);
    }

    getItem(_id: string)  {
        const items = this.getItems() || []
        if (!this.haveItem(_id)) throw Error(`these is no item ${_id} in bracket`);
        return items.find((prod) => prod._id === _id)!;
    }

    saveItems(items: Item[]) {
        items.forEach(p => { p.version = this.version });
        storage.saveLocal(this.key as any, items)
    }


    bracketVergionChange = () => {
        const items = this.getItems();
        if (items && items.find(prod => prod.version !== this.version)) {
            this.removeBasket();
        }
    }

    getItemCount(): number  {
        const brakcet = this.getItems();
        return brakcet?.length || 0
    }
}


    // humanCountToCount(count: IHumanCount) {
    //     return [{ key: "kid", label: "성인", value: count.adult },
    //     { key: "kid", label: "소아", value: count.kids },
    //     { key: "baby", label: "유아", value: count.baby }]
    // }


    // countToHumanCount(count: TCount[]): IHumanCount {
    //     return {
    //         adult: count[0].value,
    //         kids: count[1].value,
    //         baby: count[2].value,
    //     }
    // }
