import { deepCopy } from "@janda-com/front";
import { useState } from "react";
import { Fattribute } from "../type/api";

export const useAttributes = (defaultAttributes?: Fattribute[]) => {
    const [attributes, setAttributes] = useState<Fattribute[]>(
        (defaultAttributes || []).slice()
    );
    return { attributes, setAttributes };
};
