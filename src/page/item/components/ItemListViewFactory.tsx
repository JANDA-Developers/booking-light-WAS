import React, { useContext } from "react";
import AppContext from "../../../context";
import { itemList_ItemList_items_ItemBooking } from "../../../type/api";
import { ItemGalleryView } from "./ItemGalleryView";
import { ItemLinearView } from "./ItemLinearView";

export interface IItemListviewProps {
    items: itemList_ItemList_items_ItemBooking[];
    handleEdit: (
        item?: itemList_ItemList_items_ItemBooking | undefined
    ) => () => void;
    handleDelete: (item: itemList_ItemList_items_ItemBooking) => () => void;
    toProductCreate: (itemId?: string) => void;
}

export type TItemListViewType = "gallery" | "list";

// @Factory Pattern
export const itemListViewFactory = (
    view: TItemListViewType
): React.FC<IItemListviewProps> => {
    if (view === "gallery") {
        return ItemGalleryView;
    } else {
        return ItemLinearView;
    }
};
