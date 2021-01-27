import React, { useState } from "react";
import DayPicker, { CaptionElementProps, DayPickerProps } from "react-day-picker";
import { InputText, JDtypho, ReactTooltip } from "@janda-com/front";
import dayjs from "dayjs";
import { DEFULAT_CLASSES, weekdaysKor } from "./helper";
import DailyTableNav from "./components/DailyTableNav";
import { ISet, TElements } from '@janda-com/front/dist/types/interface';
import { IInputTextCutsomProp } from '@janda-com/front/dist/components/InputText/InputText';
import $ from "jquery"
const getDay = (day: Date) => dayjs(day).get("date");

export interface IDailyTableProps {
  data: number[];
  setData: (data: number[]) => void;
  date: Date;
  setDate: ISet<Date>;
  ToolElement?: TElements;
  onNavChange: () => boolean;
  selectedDays: number[];
  setSelectedDays: ISet<number[]>;
  inputProps?: IInputTextCutsomProp;
  dayPickerProps?: DayPickerProps
}

const DailyTable: React.FC<IDailyTableProps> = ({
  data,
  setData,
  onNavChange,
  date,
  setDate,
  ToolElement,
  selectedDays,
  setSelectedDays,
  inputProps,
  dayPickerProps,
  ...props
}) => {
  const [dragMode, setDragMode] = useState<boolean>(false);

  const checkIsSelectedDay = (day: Date) => {
    return selectedDays.includes(getDay(day));
  }



  const cellMouseDown = (day: Date) => {
    const isSelected = !checkIsSelectedDay(day);
    isSelected ? setSelectedDays([...selectedDays, getDay(day)]) :
      setSelectedDays([...selectedDays.filter(list => list !== getDay(day))]);
  };

  const cellMouseEnter = (day: Date) => {
    if (dragMode) {
      if (!checkIsSelectedDay(day)) {
        setSelectedDays([...selectedDays, getDay(day)]);
      }
    }
  };

  const modifiers = {
    sunday: { daysOfWeek: [0] },
    saturday: { daysOfWeek: [6] },
    // selected: checkIsSelectedDay
  };

  return (
    <div data-for="cellTolltip" data-tip="변경할 셀들을 선택(드래그)하세요" className="JDDailyTable__wrap">
      <DayPicker
        month={date}
        onMonthChange={d => {
          setDate(d);
        }}
        classNames={DEFULAT_CLASSES}
        locale={"ko"}
        selectedDays={checkIsSelectedDay}
        onDayMouseUp={() => {
          setDragMode(false);
        }}
        onDayMouseDown={(day) => {
          setDragMode(true);
          cellMouseDown(day);
        }}
        onDayMouseEnter={(day) => {
          cellMouseEnter(day);
        }}
        navbarElement={prop => {
          return <DailyTableNav {...prop} onNavChange={onNavChange} />;
        }}
        renderDay={(date) => {
          const dayIndex = getDay(date);
          console.log(dayIndex);
          return (
            <div >
              <JDtypho size="small" mb="tiny" flex>
                {dayjs(date).format("DD")}
              </JDtypho>
              <div
                onMouseDown={e => {
                  e.stopPropagation();
                }}
                className={`JDDailyTable__InputWRapper`}
              >
                <InputText
                  mb="tiny"
                  Size="small"
                  comma
                  value={data[dayIndex]}
                  onChange={(v: any) => {
                    selectedDays.forEach(day => {
                      data[day] = v;
                    });
                    setData([...data]);
                  }}
                  {...inputProps}
                />
              </div>
            </div>
          );
        }}
        modifiers={modifiers}
        firstDayOfWeek={1}
        weekdaysShort={weekdaysKor["ko"]}
        canChangeMonth={true}
        {...dayPickerProps}
      />
      <ReactTooltip effect="solid" id="cellTolltip" />
    </div>
  );
};

export default DailyTable;
