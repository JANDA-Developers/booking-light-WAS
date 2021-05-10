import { DayPickerProps } from "react-day-picker";
import React, { useRef, useEffect } from "react";
import dayjs from "dayjs";
import "dayjs/locale/ko";
import DayPickerInput from "react-day-picker/DayPickerInput";
import { DateFormat, InputText } from "@janda-com/front";
// 데이픽커 인풋은 어레인이지를 지원하지 않을려는것만 같다.
// 무리하게 바꾸었는데 잘 동작할지 모르겠다.

interface IProps {
    from?: Date | null;
    to?: Date | null;
    isRange?: boolean;
    readOnly?: boolean;
    canSelectSameDate?: boolean;
    format?: string;
    label?: string;
    displayIcon: boolean;
    placeholder?: string;
    inputClassName?: string;
    displayYear?: boolean;
    dayPickerProps: DayPickerProps;
    InputComponent?: React.FC;
    disabled?: boolean;
}

const JDdayPickerInput: React.FC<IProps> = ({
    from,
    to,
    isRange,
    label,
    readOnly,
    displayIcon,
    dayPickerProps,
    displayYear,
    inputClassName,
    placeholder = "",
    format = displayYear ? DateFormat.YYMMDD : DateFormat.MMDD,
    InputComponent,
    disabled,
    ...props
}) => {
    let DayPickerInputRef = useRef<any | null>(null);
    const isInitialMount = useRef(true);

    const dateForMatter = (
        date: Date | null | undefined,
        inFormat: string,
        locale: string
    ): string => {
        dayjs.locale(locale);
        if (date) {
            return dayjs(date).format(inFormat);
        }
        return "";
    };

    useEffect(() => {
        // 상황에따라 DatePicker 투글
        // 마운트 전인지 검사
        if (isInitialMount.current) {
            isInitialMount.current = false;
            return;
        }

        const dayPickerRef = DayPickerInputRef.current;
        // 화면을 클릭하면 나갈수 달력을 닫도록 해줌
        if (dayPickerRef) {
            if (from && to) {
                dayPickerRef.hideDayPicker();
            } else {
                dayPickerRef.showDayPicker();
            }
        }
    }, [from, to]);

    const valueFormatter = (
        inFrom: Date | null | undefined,
        inTo: Date | null | undefined,
        informat: string,
        locale: string
    ): string => {
        if (isRange) {
            const formatFrom = dateForMatter(inFrom, informat, locale);
            const formatTo = dateForMatter(inTo, informat, locale);

            // 이상하게 return ''는 오류를 일으킨다.
            if (formatFrom === "") return " ";
            if (formatTo === "") return formatFrom;
            return `${formatFrom} ~ ${formatTo}`;
        }
        const formatFrom = dateForMatter(inFrom, informat, locale);
        return `${formatFrom}`;
    };

    const MyComponent = InputComponent ? InputComponent : () => <div />;

    const Default = (prop: any) => (
        <InputText
            tabIndex={readOnly ? "-1" : undefined}
            wrapClassName={"DayPicker__inputWrap"}
            className={`DayPicker__input ${inputClassName}`}
            readOnly={readOnly}
            disabled={disabled}
            label={label}
            icon={label && displayIcon ? "calendar" : undefined}
            {...props}
            {...prop}
        />
    );

    return (
        <div>
            {/* 😶 REF는 잘 작동하지만 브라우저상 오류를 낸다 이유는... ref가
      그냥 맨껍데기에 적용되서 그렇다는데 아무래도 해결방법은 깃허브에 문의해봐야겠다. */}
            <DayPickerInput
                inputProps={{
                    mr: "no",
                }}
                ref={(el: any) => {
                    DayPickerInputRef.current = el;
                }}
                placeholder={placeholder}
                dayPickerProps={{ ...dayPickerProps }}
                format={format}
                component={InputComponent ? MyComponent : Default}
                hideOnDayClick={!isRange}
                value={valueFormatter(from, to, format, "kr")}
            />
        </div>
    );
};

export default JDdayPickerInput;
