import React from "react";
import { toast } from "@janda-com/front";

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

const ErrorMsg = "이런 문제가 발생 했습니다."
  
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
        console.error(message);
        console.error(code);
        console.error(details);

        toast.warn(resultFale || ErrorMsg, {
            toastId: `${queryName}-error`
        });
    }
    
    return result.ok
  };
  