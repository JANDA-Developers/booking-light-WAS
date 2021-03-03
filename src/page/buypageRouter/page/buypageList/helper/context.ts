import React from "react";
import { storeFindByCode_StoreFindByCode } from "../../../../../type/api";

export interface IBuyPageContext {
    store: storeFindByCode_StoreFindByCode;
}

export const BuypageContext = React.createContext<IBuyPageContext>({ store: {} as any});