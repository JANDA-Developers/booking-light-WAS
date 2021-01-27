
import { useState } from "react";

export const useTagInput = () => {
    const [tags, setTags] = useState<string[]>([]); 
    return {tags,setTags}
}