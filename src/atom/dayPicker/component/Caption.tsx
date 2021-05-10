import React from 'react';
import { JDMonthTextChanger } from './Navbar';
interface IProps {
  date: Date;
  displayYear: boolean;
}

const JDdateCaption: React.SFC<IProps> = ({ date, displayYear }) => {
  const month = JDMonthTextChanger(date.getMonth());
  const year = date.getFullYear();
  return (
    <div className="DayPicker-Caption">
      <span className="DayPicker-Caption__month">{month}</span>
    </div>
  );
};

JDdateCaption.defaultProps = {
  date: new Date(),
};

export default JDdateCaption;
