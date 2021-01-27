import { storeList_StoreList_items } from "../../type/api";

export interface IStore extends storeList_StoreList_items {}

export type TCRUD_loading = {
    get:boolean;
    total: boolean;
    update: boolean;
    delete: boolean;
    create: boolean;
}