import { Dispatch, SetStateAction, useState } from 'react';

export interface IUseCheckBoxTable {
  onToogleRow: (key: string) => void;
  checkedIds: string[];
  setCheckedIds: Dispatch<SetStateAction<string[]>>;
  selectAll: any;
  setSelectAll: any;
  onToogleAllRow: () => void;
  isSelected: (key: string) => any;
}

export const useCheckBoxTable = (
  defaultCheckedIds: string[] = [],
  allIds: string[] = []
): IUseCheckBoxTable => {
  const [checkedIds, setCheckedIds] = useState<string[]>(defaultCheckedIds);
  const [selectAll, setSelectAll]: any = useState(false);

  //    모든 라인들에대한 아이디를 투글함
  const onToogleAllRow = () => {
    const updateSelecetedes = allIds.map(id =>
      checkedIds.includes(id) ? '' : id
    );
    setCheckedIds(updateSelecetedes);
    setSelectAll(!selectAll);
  };

  const onToogleRow = (key: string) => {
    if (checkedIds.includes(key)) {
      setCheckedIds([...checkedIds.filter(value => value !== key)]);
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
    setSelectAll,
    isSelected,
  };
};
