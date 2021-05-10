import React, { Fragment, useRef, useEffect } from "react";
import DayPicker, {
    CaptionElementProps,
    DayModifiers,
    DayPickerProps,
} from "react-day-picker";
import classNames from "classnames";
import Navbar from "./component/Navbar";
import JDdayPickerInput from "./component/input/JDdayPickerInput";
import HorizenDay from "./component/horizen/HorizenDays";
import HorizenCaption from "./component/horizen/HorizenCaption";
import { getDateCharLang } from "./helper";
import dayjs from "dayjs";
import DayPickerDay from "./component/DayPickerDay";
import {
    IDiv,
    JDatomExtentionSet,
    TElements,
} from "@janda-com/front/dist/types/interface";
import { IUseDayPicker, JDatomClasses, JDColor } from "@janda-com/front";
import { DATE } from "../../type/const";

// !!! 주의
// DayPicker-input이 다른 경로로서 참조되면 어려움.

export interface TDayPickerDot extends IDiv {
    tooltip?: string;
    color: JDColor;
    date: Date;
}

// react-day-Picker 에서 명시한 public Method는 ref 가 없으면 사용할 수가 없습니다.
export interface IJDdayPickerProps
    extends IUseDayPicker,
        JDatomExtentionSet,
        DayPickerProps {
    canSelectBeforeDay?: boolean;
    placeholder?: string;
    mode?: "horizen" | "input" | "checkInOutStyle";
    label?: string;
    readOnly?: boolean;
    isRange?: boolean;
    displayYear?: boolean;
    canSelectSameDate?: boolean;
    format?: string;
    lang?: string;
    dots?: TDayPickerDot[];
    displayIcon?: boolean;
    inputDisabled?: boolean;
    maxLimit?: boolean;
    showWeekEndColor?: boolean;
    inputComponent?: (inputProp: any) => any;
    onChangeDate?(
        foo?: string | Date | null,
        foo2?: string | Date | null
    ): void;
    className?: string;
    inputClassName?: string;
    calenaderPosition?: "left" | "right" | "center";
    displayCaption?: boolean;
    displayNavHeader?: boolean;
    currentLang?: "kr" | "en";
    foceFromSelect?: boolean;
    Information?: TElements;
    maxRange?: number;
    callBackMaxRangeOut?: () => void;
}

const JDdayPicker: React.FC<IJDdayPickerProps> = React.memo(
    ({
        mode,
        calenaderPosition = "right",
        isRange = true,
        label,
        inputDisabled,
        onChangeDate,
        canSelectSameDate = true,
        displayIcon = true,
        displayCaption = true,
        displayNavHeader: displayHeader = true,
        format,
        placeholder,
        lang = "ko",
        from,
        setFrom,
        to,
        setTo,
        currentLang,
        entered,
        Information,
        displayYear = true,
        canSelectBeforeDay,
        inputClassName,
        inputComponent,
        setEntered,
        foceFromSelect,
        maxLimit,
        readOnly,
        showWeekEndColor = true,
        className,
        maxRange,
        callBackMaxRangeOut,
        dots = [
            {
                date: DATE.today,
                color: "primary" as JDColor,
            },
        ],
        ...prop
    }) => {
        const dayPickerFullWrap = useRef<HTMLDivElement>(null);
        const isInitialMount = useRef(true);

        const isHorizen = mode === "horizen";
        // 리셋버튼 클릭 이벤트
        const handleResetClick = () => {
            setFrom(null);
            setTo(null);
            setEntered(null);
        };

        // From을 SET 할지 TO를 SET 할지 물어봄
        const isFromSelect = (inFrom: any, inTo: any, day: any) => {
            // From 이전의 날자를 선택했다면
            const isBeforeFirstDay =
                inFrom && dayjs(day).isBefore(inFrom, "day");
            // From과 To 가 ⭐️이미️️️⭐️ 존재하는가?
            const isRangeSelected = inFrom && inTo;
            return !inFrom || isBeforeFirstDay || isRangeSelected;
        };

        // handle --day : Enter
        const handleDayMouseEnter = (day: Date) => {
            if (foceFromSelect) {
                setEntered(day);
            }
            if (!isFromSelect(from, to, day)) setEntered(day);
        };

        // handle --day : Click
        const handleDayClick = (rawDate: Date, modifiers: DayModifiers) => {
            const day = rawDate;
            if (readOnly) return;
            // 불가능한 날자를 눌럿을경우에
            if (modifiers.disabled) return;

            if (foceFromSelect) {
                setFrom(rawDate);
                return;
            }

            const isFristSelect = isFromSelect(from, to, day);

            // 범위선택이 아닌 경우에
            if (!isRange) {
                setFrom(day);
                setEntered(day);
                setTo(day);
                return;
            }

            // 같은날을 선택할수 없는경우에
            if (from && !canSelectSameDate && dayjs(from).isSame(day, "d"))
                return;

            // 선택한 날자 뒤를 누른경우에
            if (from && day <= from) {
                handleResetClick();
                return;
            }

            // 이미 선택된 날을 눌렀을경우에
            if (from && to && day >= from && day <= to) {
                handleResetClick();
                return;
            }

            //최대기간 이상을 선정한 경우에
            if (from && maxRange && day && !to) {
                if (dayjs(day).diff(from, "d") >= maxRange) {
                    callBackMaxRangeOut && callBackMaxRangeOut();
                    return;
                }
            }

            // From 선택일때
            if (isFristSelect) {
                // 첫날을 셋팅하고 나머지날자는 널 기입
                setFrom(day);
                setEntered(null);
                setTo(null);
            } else {
                setTo(day);
                setEntered(day);
            }
        };

        // 가로 모드일때 스크롤 잡아줌
        const Months = dayPickerFullWrap.current?.querySelector(
            ".DayPicker-Months"
        );
        useEffect(() => {
            if (isHorizen) {
                setTimeout(() => {
                    const today = Months?.querySelector(
                        ".DayPicker-Day--today"
                    );
                    if (!today || !Months) return;
                    // @ts-ignore
                    const todayOffestX = today.offsetLeft;
                    Months.scrollLeft =
                        // @ts-ignore
                        todayOffestX - Months.offsetWidth / 2 + 40;
                }, 300);
            }
        }, [Months === undefined]);

        useEffect(() => {
            if (isInitialMount.current) {
                isInitialMount.current = false;
                return;
            }
            onChangeDate && onChangeDate(from, to);
        }, [from, to]);

        // 여기다가 클래스 적립
        const wrapClasses = classNames("DayPicker-box", className, {
            "DayPicker-box--inputComponent": inputComponent,
            "DayPicker--readOnly": readOnly,
            "DayPicker--reservation": mode === "checkInOutStyle",
            "DayPicker--showWeekEndColor": showWeekEndColor,
            "DayPicker--unDisplayCaption": displayCaption === false,
            "DayPicker--unDisplayNavbar": displayHeader === false,
            "DayPicker--unDisplayInfo": !Information,
            ...JDatomClasses(prop),
        });

        // 이건 순수하게 달력부분
        const classes = classNames({
            "DayPicker--horizen": isHorizen,
            "DayPicker--input": mode === "input",
            "DayPicker--maxLimit": maxLimit,
            "DayPicker--unYear": !displayYear,
            "DayPicker--unRange": !isRange,
            "DayPicker--right": calenaderPosition === "right",
            "DayPicker--left": calenaderPosition === "left",
            "DayPicker--center": calenaderPosition === "left",
        });

        const { MONTHS, WEEKDAYS_EN, WEEKDAYS_KR } = getDateCharLang();

        const modifiers = {
            start: from || undefined,
            end: entered || undefined,
        };
        const selectedDays: any = [from, { from, to: entered }];

        // 이부분 함수 또는 이넘으로 변경
        const RenderDots = HorizenDay.bind(HorizenDay, dots);

        const horizenProps =
            mode === "horizen"
                ? {
                      renderDay: RenderDots,
                      numberOfMonths: 3,
                      showWeekDays: false,
                      captionElement: ({ date }: CaptionElementProps) => (
                          <HorizenCaption date={date} onChange={() => {}} />
                      ),
                  }
                : {};

        const DayPickerRender = DayPickerDay.bind(DayPickerDay, dots);
        // @ts-ignore
        const dayPickerProps: DayPickerProps = {
            tabIndex: 1,
            renderDay: DayPickerRender,
            numberOfMonths: 1,
            initialMonth: dayjs(from || new Date()).toDate(),
            showWeekDays: true,
            navbarElement: (props) => <Navbar {...props} />,
            className: `Range ${classes}`,
            selectedDays,
            modifiers,
            onDayClick: handleDayClick,
            onDayMouseEnter: handleDayMouseEnter,
            pagedNavigation: true,
            months: MONTHS,
            weekdaysLong: currentLang ? WEEKDAYS_EN : WEEKDAYS_KR,
            weekdaysShort: currentLang ? WEEKDAYS_EN : WEEKDAYS_KR,
            locale: lang,
            showOutsideDays: false,
            disabledDays: canSelectBeforeDay
                ? undefined
                : [{ before: new Date() }],
            ...horizenProps,
            ...prop,
            captionElement: <div />,
        };

        return (
            <div className={`${wrapClasses}`} ref={dayPickerFullWrap}>
                {mode === "input" ? (
                    <JDdayPickerInput
                        displayIcon={displayIcon}
                        InputComponent={inputComponent}
                        placeholder={placeholder}
                        format={format}
                        disabled={inputDisabled}
                        from={from}
                        to={to}
                        label={label}
                        readOnly={readOnly}
                        isRange={isRange}
                        dayPickerProps={dayPickerProps}
                        inputClassName={inputClassName}
                        displayYear={displayYear}
                    />
                ) : (
                    <Fragment>
                        {Information}
                        <DayPicker {...dayPickerProps} />
                    </Fragment>
                )}
            </div>
        );
    }
);

export default JDdayPicker;
