import React from "react";
import { superMe_SuperMe } from "../../type/api";

export type TProductStoreMath = {
}

export interface ISuperAdminContext {
    serviceProvider: string;
    superMe: superMe_SuperMe | undefined; 
}

export const DEFAULT_APP_CONTEXT: ISuperAdminContext = {
    serviceProvider: "JANDA",
    superMe: undefined
};

export const SuperAppContext = React.createContext<ISuperAdminContext>(
    DEFAULT_APP_CONTEXT
);
