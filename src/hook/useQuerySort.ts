import { ISet } from "@janda-com/front/dist/types/interface";
import { useState } from "react";

export interface IUseQuerySort<S> {
    sort: S[];
    setSort: ISet<S[]>;
    isActive: (check: S) => boolean
    removeSort: (st: S) => void
    addSort: (st: S) => void
    switchSort: (change: S) => void
}

export const useQuerySort = <S>(defaultSort:S[]):IUseQuerySort<S> => {
    const [sort,setSort] = useState(defaultSort);

    const isActive = (check:S):boolean => sort.includes(check);
    
    //같은 이름을 가진 sort를 제거하고 자신이 들어감
    const switchSort = (change:S) => {
        const _change = (change as any).split("_")[0];
        const removed = sort.filter(s => (s as any).includes(_change));
        setSort([...removed, change]);
   }

   const removeSort = (st:S) => {
       const filtered = sort.filter(_st => _st !== st);
       setSort([...filtered]);
   }

   const addSort = (st:S) => {
        const filtered = sort.filter(_st => _st !== st);
        setSort([...filtered,st]);
   }

   //솔트를 
    return { sort, setSort, isActive, addSort, removeSort, switchSort}
}

