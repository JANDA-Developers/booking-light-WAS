import React from 'react';
import { TDayPickerDot } from '../DayPicker';
import { IDiv } from '../../../types/interface';
interface IProps extends IDiv {
  dot: TDayPickerDot;
}
export declare const DayPickerDot: React.FC<IProps>;
export declare const DayPickerDay: (
  dots: TDayPickerDot[],
  date: Date,
  props: any
) => JSX.Element;
export default DayPickerDay;
