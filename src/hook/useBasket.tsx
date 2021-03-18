import { useEffect } from "react";
import { BASKET } from "../utils/Basket";
import { useUpdate } from "./useUpdate";

export type IUseBasket = ReturnType<typeof useBasket>;

export const useBasket = () => {
    const { updateComponent } = useUpdate();
    useEffect(() => {
        BASKET.deleteExpireItem();
        BASKET.bracketVergionChange();
    }, [])
    return { updateComponent }
}

