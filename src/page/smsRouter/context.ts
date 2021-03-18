import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React from "react";
import { myNotificationManager_MyNotificationManager } from "../../type/api";

export interface INotificationContext {
    manager: myNotificationManager_MyNotificationManager;
    sendersOps: IselectedOption[]
}

export const NotificationContext = React.createContext<INotificationContext>({ manager: undefined as any,sendersOps: [] });

