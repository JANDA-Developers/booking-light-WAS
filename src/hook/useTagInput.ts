
import { useState } from "react";

export const useTagInput = (defaultTags:string[] = []) => {
    const [tags, setTags] = useState<string[]>(defaultTags); 
    return {tags,setTags}
}