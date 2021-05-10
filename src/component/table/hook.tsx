import { Dispatch, SetStateAction, useState } from "react";

export interface IUseCheckBoxTable {
    onToogleRow: (key: string) => void;
    checkedIds: string[];
    setCheckedIds: Dispatch<SetStateAction<string[]>>;
    selectAll: any;
    onToogleAllRow: () => void;
    isSelected: (key: string) => any;
}

export const useCheckBoxTable = (
    defaultCheckedIds: string[] = [],
    allIds: string[] = []
): IUseCheckBoxTable => {
    const [checkedIds, setCheckedIds] = useState<string[]>(defaultCheckedIds);
    const selectAll = allIds.length === checkedIds.length;

    //    모든 라인들에대한 아이디를 투글함
    const onToogleAllRow = () => {
        if (selectAll) {
            setCheckedIds([]);
        } else {
            setCheckedIds(allIds);
        }
    };

    const onToogleRow = (key: string) => {
        if (checkedIds.includes(key)) {
            setCheckedIds([...checkedIds.filter((value) => value !== key)]);
        } else {
            setCheckedIds([...checkedIds, key]);
        }
    };

    const isSelected = (key: string) => checkedIds.includes(key);

    return {
        onToogleRow,
        onToogleAllRow,
        checkedIds,
        setCheckedIds,
        selectAll,
        isSelected,
    };
};
