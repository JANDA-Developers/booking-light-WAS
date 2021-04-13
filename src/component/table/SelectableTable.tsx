import React, { useLayoutEffect } from 'react';
import selectTableHOC, {
  SelectAllInputComponentProps,
  SelectInputComponentProps,
  SelectTableAdditionalProps,
  // @ts-ignore
} from 'react-table-6/lib/hoc/selectTable';
import { IUseCheckBoxTable } from './hook';
import JDtable, { IJDTableProps } from './Table';
import { JDcheckBox } from '@janda-com/front';

interface ISCProp {
  onToogleRow: (key: string) => void;
}

const SelectInputCompoent: React.FC<ISCProp & SelectInputComponentProps> = ({
  checked,
  id,
  onToogleRow,
}) => {
  const inId = id.replace('select-', '');
  const onChange = () => {
    onToogleRow(inId);
  };

  return (
    <JDcheckBox
      className="JDtable__select"
      mb="no"
      size="tiny"
      onChange={onChange}
      checked={checked}
    />
  );
};

interface ISACProp {
  onToogleAllRow: () => void;
  selectAll: boolean;
}

const SelectAllInputComponent: React.FC<ISACProp &
  SelectAllInputComponentProps> = ({ selectAll, onToogleAllRow }) => (
    <JDcheckBox
      id="TablecheckBoxALL"
      className="JDtable__selectAll"
      mr="no"
      mb="no"
      size="tiny"
      onChange={onToogleAllRow}
      checked={selectAll}
    />
  );

const s4 = () => {
  return (((1 + Math.random()) * 0x10000) | 0).toString(16).substring(1);
};

const JDSelectable: React.FC<IJDTableProps &
  SelectTableAdditionalProps &
  IUseCheckBoxTable> = prop => {
    const { selectAll, onToogleAllRow, onToogleRow } = prop;
    const SelectableJDtable = selectTableHOC(JDtable);

    const tableId = prop.id || s4();
    useLayoutEffect(() => {
      document.getElementById(tableId);
    });

    return (
      <SelectableJDtable
        {...prop}
        isCheckable
        id={tableId}
        SelectAllInputComponent={(prop: any) => (
          <SelectAllInputComponent
            onToogleAllRow={onToogleAllRow}
            selectAll={selectAll}
            {...prop}
          />
        )}
        SelectInputComponent={(prop: any) => (
          <SelectInputCompoent onToogleRow={onToogleRow} {...prop} />
        )}
      />
    );
  };


export { JDSelectable };
export default JDSelectable;
