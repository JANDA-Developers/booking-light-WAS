import React from "react";
import { NavbarElementProps } from "react-day-picker";

interface IDailyTableNav extends NavbarElementProps {
  onNavChange: () => boolean;
}

const DailyTableNav = ({
  onNavChange,
  onPreviousClick,
  onNextClick,
  className,
}: IDailyTableNav) => {
  // const prev = months[previousMonth.getMonth()];
  // const next = months[nextMonth.getMonth()];

  const handleNavChange = (callBack: () => void) => {
    if (!onNavChange()) {
      alert("변경한 정보를 우선 저장해 주십시요");
      return false;
    }
    callBack();
    return true;
  };

  return (
    <div className={className}>
      <button
        onClick={() => {
          handleNavChange(onPreviousClick);
        }}
      >
        ←
      </button>
      <button
        onClick={() => {
          handleNavChange(onNextClick);
        }}
      >
        →
      </button>
    </div>
  );
};

export default DailyTableNav;
