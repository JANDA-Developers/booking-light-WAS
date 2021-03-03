import { Flex, IJDalignProp, IUseDayPicker, IUseModal, IUseSelect, JDbutton, JDselect, toast } from '@janda-com/front';
import React from 'react';
import ArrowDate from '../../atom/ArrowDate';
import dayjs from "dayjs";
import { TElements } from '@janda-com/front/dist/types/interface';

interface IDateChangeUIProp extends IJDalignProp {
    RightSide?: TElements;
    LeftSide?: TElements;
    dayPickerHook: IUseDayPicker;
    onArrow: (dir: boolean) => void;
}
export const DateChangeUI: React.FC<IDateChangeUIProp> = ({ dayPickerHook, onArrow, LeftSide, RightSide, ...props }) => {

    const centerLize: React.CSSProperties = { position: "absolute", left: 0, right: 0 };
    const wrap: React.CSSProperties = { position: "relative" }
    const upper: React.CSSProperties = { zIndex: 1 }

    return <Flex between style={wrap} vCenter {...props}>
        <div style={upper}>
            {LeftSide}
        </div>
        <Flex center style={centerLize}>
            <ArrowDate onChangeDate={(plus) => {
                onArrow(plus);
            }} date={dayPickerHook.from || new Date()} />
        </Flex>
        <div style={upper}>
            {RightSide}
        </div>
    </Flex>;
};


interface IDateChangeHeaderProp extends Partial<IDateChangeUIProp> {
    calModalHook: IUseModal;
    dayPickerHook: IUseDayPicker;
}

const today = new Date();
export const DateChangeHeader: React.FC<IDateChangeHeaderProp> = ({ calModalHook, onArrow, dayPickerHook, ...props }) => {

    const toToday = () => {
        dayPickerHook.setDate(today);
    }

    const handleDateArraw = (dir: boolean) => {
        const defaultDay = dayjs(dayPickerHook.from || new Date());
        const next = dir ? defaultDay.add(1, "d") : defaultDay.subtract(1, "d");
        const date = next.toDate();
        dayPickerHook.setFrom(date)

    }

    return <DateChangeUI
        onArrow={handleDateArraw}
        LeftSide={
            <section>
                <JDbutton mr thema="positive" label={'날짜선택'} className="productListting__calendar productListting__btn1"
                    onClick={() => {
                        calModalHook.openModal();
                    }}
                />
                <JDbutton mode="border" thema="primary" label={'오늘'} className="productListting__today productListting__btn1"
                    onClick={toToday}
                />
            </section>
        }
        dayPickerHook={dayPickerHook}
        {...props}
    />
}


