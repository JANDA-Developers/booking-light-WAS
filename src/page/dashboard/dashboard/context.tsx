import { IUseDayPicker, IUseModal } from "@janda-com/front";
import React from "react";
import { IDashbaordWrapContext } from "./DashboardWrap";

export interface IDashbaordContext extends IDashbaordWrapContext {
    calModalHook: IUseModal<any>;
}

const DEFAULT: any = {}
export const DashboardContext = React.createContext<IDashbaordContext>(DEFAULT);
