import { Dispatch, SetStateAction, useEffect, useState } from "react";
var cloneDeep = require('lodash.clonedeep');

export const useCopy = <T>(defaultData:T): [T,Dispatch<SetStateAction<T>>] => {
    const [data, setData] = useState<T>(
        cloneDeep(defaultData)
        );

    // useEffect(()=>{
    //     if(defaultData) {

    //         setData(cloneDeep(defaultData));
    //     }
    // },[defaultData])

    return [data, setData]
}
