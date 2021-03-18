import { toast } from "@janda-com/front";

export const promptConfirm = (validKey:string, openString:string,onSuccess:() => void) => {
    const submitName = prompt(openString);
    if (submitName === validKey)
        onSuccess();
    else {
        if(submitName !== null)
        toast.warn("입력값이 일치하지 않습니다.");
    }
}