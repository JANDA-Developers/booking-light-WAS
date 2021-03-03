import { cloneObject } from "@janda-com/front";
import { Dispatch, SetStateAction, useEffect, useState } from "react";

export const useCopy = <T>(defaultData:T): [T,Dispatch<SetStateAction<T>>] => {
    const [data, setData] = useState<T>(cloneObject(defaultData));

    useEffect(()=>{
        if(defaultData) {
            setData(cloneObject(defaultData));
        }
    },[defaultData])

    return [data, setData]
}