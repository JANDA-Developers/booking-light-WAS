import React from "react";
import { storeFindByCode_StoreFindByCode } from "../../../../../type/api";
import { DefaultBuypageConfig, IbuypageConfig } from "../../../../buypageSet/compoents/BuypageConfiger";

export interface IBuyPageContext {
    store: storeFindByCode_StoreFindByCode;
    configure: IbuypageConfig
    isLogined: boolean;
}

export const BuypageContext = React.createContext<IBuyPageContext>({ isLogined: false, store: {} as any, configure: DefaultBuypageConfig});

