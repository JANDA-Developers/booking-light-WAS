import React, { useState } from "react";

export interface ISalesModalContext {
  updateContext: (prop: Partial<ISalesModalContext>) => void;
}

export const DEFAULT_SALES_CONTEXT: ISalesModalContext = {
  updateContext: () => undefined,
};

const SalesModalContext = React.createContext<ISalesModalContext>(
  DEFAULT_SALES_CONTEXT
);

export const useSalesModalContext = (defaultContext: Partial<ISalesModalContext>) => {
  const [context, setContext] = useState({
    ...DEFAULT_SALES_CONTEXT,
    ...defaultContext,
  });

  const updateContext = (props: Partial<ISalesModalContext>) => {
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

export const SalesContextProvider = SalesModalContext.Provider;
export default SalesModalContext;