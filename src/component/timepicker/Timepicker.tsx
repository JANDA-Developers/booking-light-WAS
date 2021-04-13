// TODO
// 셀렉트박스 Width 값을 오토로 해주기
import { IUseTimePicker, JDalign, JDselect } from '@janda-com/front';
import { JDselectProps } from '@janda-com/front/dist/components/select/SelectBox';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import React, { useMemo } from 'react';
import { HOURS_SELECT_OP, MINUTES_SELECT_OP } from '../../type/const';

export interface IProps extends IUseTimePicker {
  /**  시 선택 */
  hourSelecterProps?: JDselectProps;
  /**  분 선택 */
  minSelecterProps?: JDselectProps;
  /**  선택 불가능한 시 0~24 */
  disabledHours?: number[];
  /**  선택 불가능한 분들 0~60 */
  disabledMins?: number[];
  /**  시 선택 옵션 */
  hourOps?: IselectedOption<number>[];
  /**  분 선택 옵션 */
  minOps?: IselectedOption<number>[];
  /**  뷰 단위 */
  unit?: 5 | 10 | 15 | 30;
  /**  Disabled된것 제거하기 */
  removeDisabled?: boolean;
  /** 제거함수 */
  removeFn?: (num: number, type: 'h' | 'm') => boolean;
  /** 제거함수 */
  disableFn?: (num: number, type: 'h' | 'm') => boolean;
  /** 업데이터 */
}

const TimePicker: React.FC<IProps> = ({
  hour,
  min,
  setTime,
  disabledHours,
  disabledMins,
  hourOps = HOURS_SELECT_OP,
  minOps = MINUTES_SELECT_OP,
  unit = 1,
  hourSelecterProps,
  minSelecterProps,
  removeDisabled,
  removeFn,
  disableFn,
}) => {
  let filtedMinOps = useMemo(() => {
    let temp = minOps
      .filter(op => op.value % unit === 0)
      .filter(o => (removeFn ? removeFn(o.value, 'm') : true));
    if (!removeDisabled) return temp;

    const filterDisable = (op: IselectedOption) =>
      !Boolean(disabledMins?.find(disableM => disableM === op.value));

    return temp.filter(filterDisable);
  }, [disabledMins?.join(''), unit, removeDisabled]);

  let filterdHourOps = useMemo(() => {
    let temp = hourOps.filter(o => (removeFn ? removeFn(o.value, 'h') : true));

    if (!removeDisabled) return temp;
    const checkIsDisable = (op: IselectedOption) =>
      !disabledHours?.find(disableH => disableH === op.value);

    return temp?.filter(checkIsDisable);
  }, [disabledHours?.join(''), removeDisabled]);

  const selectedOpHour = filterdHourOps.find(op => op.value === hour);
  const selectedOpMin = filtedMinOps.find(op => op.value === min);

  return (
    <JDalign
      flex={{
        grow: true,
      }}
      className="timepicker"
    >
      <JDselect
        {...hourSelecterProps}
        className="timepicker__input"
        onChange={selected => {
          setTime({
            hour: selected.value,
            min: min,
          });
        }}
        isOptionDisabled={(option: IselectedOption) => {
          if (disabledHours?.includes(option.value)) {
            return true;
          } else {
            return disableFn ? disableFn(option.value, 'h') : false;
          }
        }}
        selectedOption={selectedOpHour}
        options={filterdHourOps}
      />
      <JDselect
        {...minSelecterProps}
        className="timepicker__input"
        onChange={selected => {
          setTime({
            hour: hour,
            min: selected.value,
          });
        }}
        isOptionDisabled={(option?: any) => {
          if (disabledMins?.includes(option.value)) {
            return true;
          } else {
            return disableFn ? disableFn(option.value, 'm') : false;
          }
        }}
        selectedOption={selectedOpMin}
        options={filtedMinOps}
      />
    </JDalign>
  );
};

export default TimePicker;
