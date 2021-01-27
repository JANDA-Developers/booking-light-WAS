import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React, { useState } from "react";
import { me_Me as MyProfile } from "./type/api";


export type TProductStoreMath = {
  prodId: string;
  storeId: string;
}

export interface IAppContext {
  updateContext: (prop: Partial<IAppContext>) => void;
  prodStoreMatcher: TProductStoreMath[]
  storeptions: IselectedOption[]
  prodOptions: IselectedOption[]
  user?: MyProfile;
}

export const DEFAULT_APP_CONTEXT: IAppContext = {
  updateContext: () => undefined,
  prodOptions: [],
  storeptions: [],
  prodStoreMatcher: []
};

const AppContext = React.createContext<IAppContext>(
    DEFAULT_APP_CONTEXT
);

export const useAppContext = (defaultContext: Partial<IAppContext> = DEFAULT_APP_CONTEXT) => {
  const [context, setContext] = useState({
    ...DEFAULT_APP_CONTEXT,
    ...defaultContext,
  });

  const updateContext = (props: Partial<IAppContext>) => {
    setContext({
      ...context,
      ...props,
    });
  };

  return {
    ...context,
    updateContext,
  };
};

export const APPcontextProvider = AppContext.Provider;
export default AppContext;