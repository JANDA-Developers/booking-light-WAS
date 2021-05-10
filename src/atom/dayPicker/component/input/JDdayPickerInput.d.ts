import React from 'react';
import 'dayjs/locale/ko';
import { DayPickerProps } from 'react-day-picker';
interface IProps {
  from?: Date | null;
  to?: Date | null;
  isRange?: boolean;
  readOnly?: boolean;
  canSelectSameDate?: boolean;
  format?: string;
  label?: string;
  displayIcon: boolean;
  placeholder?: string;
  inputClassName?: string;
  displayYear?: boolean;
  dayPickerProps: DayPickerProps;
  InputComponent?: React.FC;
  disabled?: boolean;
}
declare const JDdayPickerInput: React.FC<IProps>;
export default JDdayPickerInput;
