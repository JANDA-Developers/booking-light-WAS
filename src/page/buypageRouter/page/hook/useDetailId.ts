import { getFromUrl } from "@janda-com/front";
import { useState } from "react";

export const useDetailId = (defaultId?: string) => {
    const urlItemId = getFromUrl("itemId");
    const [detailItemId, setDetailItemId] = useState(urlItemId || defaultId);
    return { detailItemId, setDetailItemId };
};
