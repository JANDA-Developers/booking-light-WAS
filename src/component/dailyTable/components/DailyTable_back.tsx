import React, { useState } from "react";
import DayPicker, {
  NavbarElementProps
} from "react-day-picker";
import { InputText } from "@janda-com/front";
import "./DailyTable.scss";
import moment from "moment";
import "moment/locale/ko";
import { ISet } from '@janda-com/front/dist/types/interface';

type TPriceCell = {
  data: string;
  pirce: number;
};

const DEFULAT_CLASSES = {
  body: "JDDailyTable__body",
  caption: "JDDailyTable__caption",
  container: "JDDailyTable",
  disabled: "JDDailyTable__day--disalbed",
  day: "JDDailyTable__day",
  footer: "JDDailyTable__footer",
  interactionDisabled: "JDDailyTable--disabled",
  months: "",
  navBar: "JDDailyTable__nav",
  month: "",
  navButtonInteractionDisabled: "",
  navButtonNext: "",
  navButtonPrev: "",
  outside: "",
  selected: "",
  today: "",
  todayButton: "",
  week: "JDDailyTable__week",
  weekNumber: "",
  weekday: "JDDailyTable__headList",
  weekdays: "JDDailyTable__head",
  weekdaysRow: "JDDailyTable__headWrap",
  wrapper: ""
};

interface IProps {
  data: TPriceCell[];
  setData: ISet<TPriceCell[]>;
  handleSave: () => void;
  isSaved: boolean;
}

const DailyTable: React.FC<IProps> = ({
  handleSave,
  isSaved
}) => {
  // 구현에 필요한것 같은것들을 미리 작성해 두었습니다.
  const [selectedDaysList, setSelectedDays] = useState<string[]>([]);
  const [dragMode, setDragMode] = useState<boolean>(false);
  const [isShift, setIsShift] = useState<boolean>(false);

  const weekdaysKor = {
    ko: ["일", "월", "화", "수", "목", "금", "토"]
  };

  const modifiers = {
    sunday: { daysOfWeek: [0] },
    saturday: { daysOfWeek: [6] },
    selected: isFirstOfMonth
  };

  function dateFomulate(day: Date) {
    return day.getFullYear() + "" + day.getMonth() + "" + day.getDate();
  }

  function isFirstOfMonth(day: Date) {
    return selectedDaysList.includes(dateFomulate(day));
  }

  function cancelAll() {
    let cancelResult = confirm("선택한 날짜를 모두 취소하시겠습니까?");
    if (cancelResult) {
      setSelectedDays([]);
    }
  }

  function Navbar({
    onPreviousClick,
    onNextClick,
    className,
  }: NavbarElementProps) {
    // const prev = months[previousMonth.getMonth()];
    // const next = months[nextMonth.getMonth()];
    // const styleLeft = {
    //   float: "left"
    // };
    // const styleRight = {
    //   float: "right"
    // };
    return (
      <div className={className}>
        <button
          onClick={() => {
            if (selectedDaysList.length > 0 && !isSaved) {
              alert("변경한 정보를 우선 저장해 주십시요");
              return false;
            }
            onPreviousClick();
            return true;
          }}
        >
          ←
        </button>
        <button
          onClick={() => {
            if (selectedDaysList.length > 0 && !isSaved) {
              alert("변경한 정보를 우선 저장해 주십시요");
              return false;
            }
            onNextClick();
            return true;
          }}
        >
          →
        </button>
      </div>
    );
  }

  return (
    <div>
      {/* DayPicker 모듈은 가장 유명한 React 모듈중 하나입니다. */}
      {/* 아래 링크에서 개발에 필요한 내용들을 찾을 수 있을 겁니다. */}
      {/* http://react-day-picker.js.org/docs/basic-concepts  */}
      {/* 구현에 필요할것 같은 프로퍼티들을 미리 찾아 놓았습니다... */}
      {/* 화이팅 😁😁😁 */}

      <DayPicker
        classNames={DEFULAT_CLASSES}
        locale={"ko"}
        selectedDays={isFirstOfMonth}
        onDayClick={async (day) => {
          if (isShift) {
            setSelectedDays([
              ...selectedDaysList.filter(list => list !== dateFomulate(day))
            ]);
          }
        }}
        onKeyDown={e => {
          if (e.key === "Shift") {
            setIsShift(true);
            window.addEventListener("keyup", function () {
              setIsShift(false);
            });
          }
        }}
        onDayMouseUp={() => {
          setDragMode(false);
        }}
        onDayMouseDown={(day) => {
          setDragMode(true);
          if (!selectedDaysList.includes(dateFomulate(day))) {
            setSelectedDays([...selectedDaysList, dateFomulate(day)]);
          }
        }}
        onDayMouseEnter={(day) => {
          if (dragMode) {
            if (!selectedDaysList.includes(dateFomulate(day))) {
              setSelectedDays([...selectedDaysList, dateFomulate(day)]);
            }
          }
        }}
        captionElement={({ date }) => {
          // caption tsx 파일 참고 하세요 ~
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

              <div className="DayPicker-Caption__btnList">
                <button
                  className="DayPicker-Caption__save"
                  onClick={handleSave}
                >
                  저장하기
                </button>

                <button
                  className="DayPicker-Caption__cancel"
                  onClick={() => {
                    cancelAll();
                  }}
                >
                  선택전체취소
                </button>
              </div>
            </div>
          );
        }}
        navbarElement={prop => {
          return <Navbar {...prop} />;
        }}
        renderDay={(date) => {
          const day = moment(date).format("DD");
          return (
            <div>
              {day}
              {/* value를 'data' 에서 찾아서 삽입해주세요.  */}
              <InputText comma />
            </div>
          );
        }}
        modifiers={modifiers}
        firstDayOfWeek={1}
        weekdaysShort={weekdaysKor["ko"]}
        canChangeMonth={true}
      />

      {/*  예시. */}
      <h1>이건 제가한 스타일링 예시 입니다. 이런식으로 정렬 하시면 되어요</h1>
      {/*  다만 찬규님 코드로 새로 스타일링 해주세요. */}
      <DayPicker />
    </div>
  );
};

// 아래쪽은 사용 예시입니다.
const DailyTableUsage = () => {
  // * 데이터는 항상 부모 컴포넌트에 있어야합니다.
  // 그렇지 않으면 데이터를 송신해야 하는 상황에서 자식컴포넌트에 있는 데아터를 끌어 올릴
  // 좋은 방법은 없습니다. React 공식문서에서는 Best Practice 부분에서 확인 할 수 있습니다.
  // 예를 들면 이쪽컴포넌트에서 이 데이터를 가지고 백엔드와 어떤 통신을 할지 결정합니다.
  // useQuery(UPDATE_PRICE)

  const [data, setData] = useState<TPriceCell[]>([]);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  //자식 컴포넌트는 데이터를 입력받는 역할만 하게 됩니다.
  // 그렇게 되었을떄 이 컴포넌트를 좀더 '범용적' 으로 사용할 수 있는 거지요.

  function saveAll() {
    let saveResult = confirm("기입하신 내용을 저장하시겠습니까?");
    if (saveResult) {
      setIsSaved(true);
    }
  }

  return (
    <DailyTable
      handleSave={saveAll}
      isSaved={isSaved}
      setData={setData}
      data={data}
    />
  );
};

export default DailyTableUsage;
