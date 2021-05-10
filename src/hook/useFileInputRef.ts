import { useRef } from "react"
import { useSingleUpload } from "./useUpload"

//흐음 차라리 공통 프로퍼티를 Const값으로 저장해두는게 낳을지도.
export const useFileInputRef = () => {
    const inputRef = useRef<HTMLInputElement>() 

    const handleClick = () =>{
        if(inputRef.current) {
            inputRef.current.value = ""
            inputRef.current.click();
        }
    }

    return {inputRef, handleClick}
}

export const HiddenInputCommonProperty = { 
    accept : "image/*"

}
