import React, { useState } from 'react'
import moment from 'moment'
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect, JDmodal, JDdayPickerModal, useDayPicker } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import DayPicker, { CaptionElementProps, NavbarElementProps } from "react-day-picker";
import ItemSettingList from './ItemSettingList';
import { InputText } from '@janda-com/front';
import { useModal } from '@janda-com/front';

const ItemSetting = () => {

    const dateToday = new Date();
    const modalHook_add = useModal(false);
    const modalHook_cal = useModal();
    const DayPickerHook = useDayPicker(new Date(), null);

    const [extraModal, setExtraModel] = useState<boolean>(false);

    const changeDay = (state: string) => {
        if (state == 'next') {
            let newDate = moment(DayPickerHook.from).add(1, 'day').toDate();
            DayPickerHook.setDate(newDate);
        } else if (state == 'prev') {
            let selectedDay = moment(DayPickerHook.from).format('YYYY-MM-DD');
            let today = moment(dateToday).format('YYYY-MM-DD');
            if (selectedDay == today) {
                alert('오늘 이전으로 설정할 수 없습니다');
            } else {
                let newDate = moment(DayPickerHook.from).subtract(1, 'day').toDate();
                DayPickerHook.setDate(newDate);
            }
        } else if (state == 'today') {
            DayPickerHook.setDate(dateToday);
        }
    }

    const itemSort = [
        {
            label: 'Strawberry',
            value: 'strawberry'
        },
        {
            label: 'Apple',
            value: 'apple'
        },
        {
            label: 'Graph',
            value: 'graph'
        }
    ]

    const handleSelect = (selected: IselectedOption<any>) => {
        console.info(selected);
    }


    const itemInfo = [
        {
            image: "/img/itemset/1.jpg",
            info1: "부산",
            info2: "잔다 특별관",
            info3: "1인 2매",
            price: "25,000",
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        },
        {
            image: "/img/itemset/1.jpg",
            info1: "부산 2",
            info2: "잔다 특별관 2",
            info3: "1인 2매",
            price: "25,000",
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        },
        {
            image: "/img/itemset/1.jpg",
            info1: "부산 3",
            info2: "잔다 특별관 3",
            info3: "1인 2매",
            price: "25,000",
            currency: "KRW",
            sold: 200,
            available: 100,
            address: "부산남구대로 193-12",
        }
    ]


    const handleExtra = (state: boolean) => {
        setExtraModel(state)
    }


    return (
        <JDcontainer size={WindowSize.full}>
            <JDdayPickerModal
                {...DayPickerHook}
                autoClose
                isRange={false}
                modalHook={modalHook_cal}
            />
            <div className="itemSetting">
                <JDpageHeader displayIcon={false} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} title={"상품설정"} />
                <div>
                    <div className="itemSetting__control">
                        <section>
                            <JDbutton mb="no" thema="positive" label={'날짜선택'} className="itemSetting__calendar itemSetting__btn1"
                                onClick={() => {
                                    modalHook_cal.openModal();
                                }}
                            />
                            <JDbutton mb="no" thema="white" label={'오늘'} className="itemSetting__today itemSetting__btn1"
                                onClick={() => { changeDay('today') }}
                            />
                        </section>
                        <section className="controlDate">
                            <JDicon icon="shortLeft" size="large" onClick={() => { changeDay('prev') }}></JDicon>
                            <div className="controlDate__selected">
                                {moment(DayPickerHook.from).format('YYYY - MM - DD')}
                            </div>
                            <JDicon icon="shortRight" size="large" onClick={() => { changeDay('next') }}></JDicon>
                        </section>
                        <section>
                            <JDselect
                                autoSize
                                onChange={(e) => {
                                    handleSelect(e)
                                }}
                                options={itemSort}
                            />
                        </section>
                    </div>

                    <JDmodal {...modalHook_add}
                        head={{
                            title: "부가상품 추가하기"
                        }}
                        foot={
                            <div>
                                <JDbutton className="extrablock__submit">
                                    확인
                                </JDbutton>
                            </div>}
                        className="itemSetting__extra"
                    >
                        <section className="extrablock">
                            <h3>상품명</h3>
                            <InputText className="extrablock__input" />
                        </section>
                        <section className="extrablock">
                            <h3>금액</h3>
                            <InputText className="extrablock__input" />
                        </section>
                    </JDmodal>
                    <ItemSettingList itemInfo={itemInfo} modalHook_add={modalHook_add} />
                </div>

            </div>
        </JDcontainer>
    )
}

export default ItemSetting
