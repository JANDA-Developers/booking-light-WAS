// import { useEffect, useState } from "react";
// import { Fproduct } from "../type/api";
// import { IBasketItem } from "../utils/Basket";
// import { useUpdate } from "./useUpdate";


// export interface IUseBasket {
//     updateComponent: () => void;
//     totalPrice: number;
//     items: (IBasketItem & Fproduct)[];
//     getLoading: boolean
// }
// export const useBasket = () => {
//     const { updateComponent } = useUpdate();

//     const _items = getBracket() || [];
//     const ids = _items.map(i => i._id);

//     const { items: products, getLoading } = useProductList({
//         initialFilter: {
//             _id_in: ids
//         }
//     })

//     const mappingItemWithProduct = (): any => {
//         return _items.map((item, i) => {
//             const product = products?.find(p => p._id === item._id);
//             if (!product)
//                 return null;
//             return Object.assign(item, product);
//         }).filter((item) => item);
//     }

//     const items: (IBasketItem & Fproduct)[] = getLoading ? [] : mappingItemWithProduct();
//     const totalPrice = arraySum(items.map((item, i) => item.price));

//     useEffect(() => {
//         deleteExpireBracket();
//         bracketVergionChange();
//     }, [])

//     return { updateComponent, totalPrice, items, getLoading }
// }

export default ""