import React from "react";
import moment from "moment";
import { TElements } from '@janda-com/front/dist/types/interface';

interface IDailyTableCaption {
  date: Date;
  ToolElement: () => TElements;
}


const DailyTableCaption: React.FC<IDailyTableCaption> = ({
  date,
  ToolElement
}) => {

  return (
    <div className="DayPicker-Caption">
      <div className="DayPicker-Caption__time">
        <span className="DayPicker-Caption__year">
          {moment(date).format("YYYY")}.
        </span>
        <span className="DayPicker-Caption__month">
          {moment(date).format("MM")}
        </span>
      </div>
      <div className="DayPicker-Caption__btnList">{ToolElement()}</div>
    </div>
  );
};

export default DailyTableCaption;
