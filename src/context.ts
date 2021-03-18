import { IselectedOption } from "@janda-com/front/dist/types/interface";
import React, { useEffect, useState } from "react";
import { invoiceFindOne_InvoiceFindOne, me_Me, me_Me as MyProfile, me_Me_stores } from "./type/api";
import { UsageTypeMap } from "./utils/invoiceMapper";
import { storage } from "./utils/storage";


export type TProductStoreMath = {
  prodId: string;
  storeId: string;
}

export interface IAppContext {
  updateContext: (props: Partial<IAppContext>) => void;
  stores: me_Me_stores[];
  selectedStore?: me_Me_stores | undefined;
  contextQueryLoading?: boolean | undefined;
  selectedStoreId?: string;
  storeOptions: IselectedOption[];
  me?: me_Me | undefined;
  isLogined?: boolean;
  thisMonthInvoice?: invoiceFindOne_InvoiceFindOne,
  usageMap?: UsageTypeMap
}

export const DEFAULT_APP_CONTEXT: IAppContext = {
  stores: [],
  updateContext: () =>{},
  storeOptions: [],
};

const AppContext = React.createContext<IAppContext>(
    DEFAULT_APP_CONTEXT
);

export const useAppContext = (me?: me_Me) => {
  const defaultContext = getDefaultContextFromMe(me);


  //기본 콘텍스트 셋팅
  const [context, setContext] = useState({
    ...DEFAULT_APP_CONTEXT,
    ...defaultContext,
  });

  //콘텍스트 업데이트 함수
  const updateContext = (props: Partial<IAppContext>) => {
    setContext({
      ...context,
      ...props,
    });
  };

  const selectedStoreId = context?.selectedStore?._id;

  //LocalStorageUpdate;
  useEffect(()=>{
    if(selectedStoreId) {
      storage.saveLocal("lastStore",selectedStoreId);
    }
  },[selectedStoreId])

  //로딩이 끝나면 콘텍스트를 업데이트
  useEffect(()=>{
    if(!defaultContext.contextQueryLoading) {
      console.log("{context}");
      console.log({context});
      setContext({...context});
    } 
  },[defaultContext.me])

  const isLogined =  !!me;

  return {
    ...context,
    isLogined,
    selectedStoreId,
    updateContext,
  };
};

export const APPcontextProvider = AppContext.Provider;
export default AppContext;


export const getDefaultContextFromMe = (me?:me_Me) => {
  const stores = me?.stores;
  const storeOptions = stores?.map((store):IselectedOption => ({
      label: store.name,
      value: store._id
    })) || []
  
  const lastStoreId = storage.getLocal("lastStore","");
  const selectedStore = stores?.find(store => store._id === lastStoreId) || stores?.[0] || undefined;

  const defaultContext: Partial<IAppContext> =  {
      contextQueryLoading: true,
      updateContext: () => {},
      selectedStore,
      storeOptions,
      me,
      stores,
  }

  return defaultContext
}