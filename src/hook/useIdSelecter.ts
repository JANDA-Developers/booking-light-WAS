import { useState } from "react";

export const useIdSelecter = (list:string[], defaultIds:string[] = []) => {
    const [selectedIds, setSelectedIds] = useState(defaultIds);

    const selectAll = () => {
        setSelectedIds([...list]);
    }

    const unCheck = (_id:string) => {
        setSelectedIds([...selectedIds.filter(id => id !== _id)]);
    }
    
    const check =(id:string) => {
        const filtered = selectedIds.filter(_id => _id !== id)
        setSelectedIds([...filtered, id]);
    }
    
    const handleCheck = (id:string) => () => check(id);
    
    const isChecked = (id:string) => selectedIds.includes(id);
    
    const unSelectAll = () => {
        setSelectedIds([]);
    }
    
    const reverseAll = () => {
        const unchecked = list.filter((id)=> !isChecked(id));
        setSelectedIds(unchecked);
    }
    
    const toggle = (id:string) => {
        if(isChecked(id)) unCheck(id);
        else check(id);
    }

    const isAllSelected =  list.length === selectedIds.length;
    const toggleAll = () => {
        if(isAllSelected) {
            unSelectAll();
        } else {
            selectAll()
        }
    }

    const selectLength = selectedIds.length;

    return {
        selectedIds,
        setSelectedIds, 
        handleCheck, 
        toggle, 
        selectAll, 
        unCheck,
        check,
        isChecked,
        unSelectAll,
        reverseAll,
        isAllSelected,
        toggleAll,
        selectLength
    };
}
