import { IUseTimePicker } from '@janda-com/front';
import React from 'react';
import TimePicker, { IProps as ITimePikcerProps } from './Timepicker';

type TDisableFn = (num: number, type: 'h' | 'm', dir: 'from' | 'to') => boolean;

export interface IProps {
  timePickerFromHook: IUseTimePicker;
  timePickerToHook: IUseTimePicker;
  fromTimePikcerProp?: Partial<ITimePikcerProps>;
  toTimePickerProp?: Partial<ITimePikcerProps>;
  customIsDisable?: TDisableFn;
}

export const TimePickerRanger: React.FC<IProps> = ({
  fromTimePikcerProp,
  timePickerFromHook,
  timePickerToHook,
  toTimePickerProp,
  customIsDisable,
}) => {
  const handleDisable: TDisableFn = (num, type, dir) => {
    const isFrom = dir === 'from';

    if (isFrom) {
      console.log(num);
    }
    if (type === 'h')
      return isFrom
        ? num > timePickerToHook.hour
        : num < timePickerFromHook.hour;

    if (type === 'm')
      if (timePickerFromHook.hour === timePickerToHook.hour)
        return isFrom
          ? num >= timePickerToHook.min
          : num <= timePickerFromHook.min;

    return false;
  };

  return (
    <>
      <TimePicker
        {...timePickerFromHook}
        hourSelecterProps={{
          label: '시작 시간',
        }}
        minSelecterProps={{
          label: '시작 분',
        }}
        disableFn={(num, type) =>
          handleDisable(num, type, 'from') ||
          !!customIsDisable?.(num, type, 'from')
        }
        disabledMins={[]}
        unit={30}
        key={timePickerToHook.hour + timePickerToHook.min + 'from'}
        {...fromTimePikcerProp}
      />
      <TimePicker
        {...timePickerToHook}
        hourSelecterProps={{
          label: '종료 시간',
        }}
        minSelecterProps={{
          label: '종료 분',
        }}
        removeDisabled
        disabledMins={[]}
        disableFn={(num, type) =>
          handleDisable(num, type, 'to') || !!customIsDisable?.(num, type, 'to')
        }
        unit={30}
        key={timePickerFromHook.hour + timePickerFromHook.min + 'to'}
        {...toTimePickerProp}
      />
    </>
  );
};

export default TimePickerRanger;
