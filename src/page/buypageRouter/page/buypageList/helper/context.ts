import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { storeFindByCode_StoreFindByCode } from "../../../../../type/api";
import { IbuypageConfig } from "../../../../buypageSet/config/config";
import { DefaultBuypageConfig } from "../../../../buypageSet/config/configDefault";

export interface IBuyPageContext {
    store: storeFindByCode_StoreFindByCode;
    configure: IbuypageConfig;
    isLogined: boolean;
    noPayMethod: boolean;
    itemCats: IselectedOption[];
    updateBasket: () => void;
}

export const BuypageContext = React.createContext<IBuyPageContext>({
    isLogined: false,
    store: {} as any,
    noPayMethod: false,
    configure: DefaultBuypageConfig,
    itemCats: [],
    updateBasket: () => {},
});

export interface IBuyPageShoppingContext {}

export const BuypageShoppingContext = React.createContext<IBuyPageShoppingContext>(
    {}
);
