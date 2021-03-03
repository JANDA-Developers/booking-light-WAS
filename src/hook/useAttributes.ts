import { useState } from "react";
import { Fattribute } from "../type/api";

export const useAttributes = (defaultAttributes?:Fattribute[]) => {
    const [attributes, setAttributes] = useState<Fattribute[]>(defaultAttributes || []);
    return {attributes,setAttributes}
}