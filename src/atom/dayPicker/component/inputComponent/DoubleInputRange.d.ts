import React from 'react';
import { IUseDayPicker } from '../../../../hooks/hook';
import { IDiv } from '../../../../types/interface';
interface Iprops extends IDiv {
  dayPickerHook: IUseDayPicker;
  fromLabel?: string;
  toLabel?: string;
}
declare const DoubleInputRange: React.FC<Iprops>;
export default DoubleInputRange;
