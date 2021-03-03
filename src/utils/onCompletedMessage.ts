import React from "react";
import { toast } from "@janda-com/front";
import { FuserError } from "../type/api";

type TError = {
    [key:string]:any;
    code: string | null;
    message: string;
    details: string[] | null;
}

type TResult = {
    [key:string]:any;
    ok: boolean;
    error: TError | null;
}

// const ErrorMsg = "이런 문제가 발생 했습니다."
  
export const completeMsg = (
    result: TResult,
    resultOK?: string,
    resultFale?: string | undefined,
    queryName?: string
  ):boolean => {
    if (!result) return false;
    
    if (result.ok && resultOK) {
      toast.success(resultOK, {
        className: `${queryName}-ok`
      });
      // 한글이 있다면 에러 메세지는 백엔드에서 온것
    }
    
    if (result.error) {
        const {code, details, message} = result.error;
        console.error("On Completed Error Msg From BackEnd");
        console.error({code});
        console.error({message});
        console.error({details});

        if(resultFale)
        if(typeof resultFale === "string")
          toast.warn(resultFale, {
              toastId: `${queryName}-error`
          });
    }
    
    return result.ok
  };
  


  type TerrorMsgOption = {
    output?:{key:string,msg:string}[]
    defaultMsg?: string;
  }
  export const errorMessage = (error:FuserError | null,{defaultMsg,output = []}:TerrorMsgOption = {}) => {
    if(!error) return;
    const {code,details,message} = error;
    console.log({error});
    const target = output.find(op => op.key === code);
    if(!target) toast.warn(message);
    toast.warn(defaultMsg || target?.msg);
  }