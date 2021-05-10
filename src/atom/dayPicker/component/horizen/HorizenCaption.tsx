import React from 'react';
import PropTypes from 'prop-types';

interface IProps {
  date?: any;
  [foo: string]: any;
}

const HorizeCaption: React.SFC<IProps> = ({ date }) => {
  const firstDate = date;
  const lastMonth = new Date(date.getFullYear(), date.getMonth() + 1, 1);
  lastMonth.setDate(0);
  const lastDay = lastMonth.getDate();
  const firstWeek = date.getDay();
  const month = firstDate.getMonth();
  const year = firstDate.getFullYear();
  const weeks = [];

  for (let i = 0; i < lastDay; i += 1) {
    const dayWeek = firstWeek + i;
    weeks.push(dayWeek);
  }

  return (
    <div className="DayPicker-Caption">
      <div className="DayPicker-Caption__year">
        {year}
        <span className="DayPicker-Caption__month">{month}</span>
      </div>
      {weeks.map((value, index) => (
        <div
          className={`DayPicker-Caption__week DayPicker-Caption__week--${value}`}
          key={`week${value + index}`}
        >
          {value}
        </div>
      ))}
    </div>
  );
};

HorizeCaption.propTypes = {
  date: PropTypes.instanceOf(Date),
};

HorizeCaption.defaultProps = {
  date: new Date(),
};

export default HorizeCaption;
