import { useState } from "react";

export const useUpdate = () => {
    const [upKey, setUpKey] = useState(0);

    const updateComponent = () => {
        setUpKey(upKey + 1);
    }

    return { upKey, updateComponent }
}