import React, { useState } from 'react'
import moment from 'moment'
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect } from "@janda-com/front";
import { IselectedOption } from "@janda-com/front/dist/components/select/SelectBox";
import ItemSettingList from './ItemSettingList';

const ItemSetting = () => {

    const [itemDay, setItemDay] = useState<Date>(new Date());

    const changeDay = (state: boolean) => {
        if (state) {
            setItemDay(
                moment(itemDay).add('1', 'day').toDate()
            )
        } else {
            setItemDay(
                moment(itemDay).subtract('1', 'day').toDate()
            )
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

    const noRefCheck = (selected: IselectedOption<any>) => {
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

    return (
        <JDcontainer size={WindowSize.full}>
            <div className="itemSetting">
                <JDpageHeader displayIcon={false} desc={"판매 중인 상품의 상세 내용을 변경할 수 있습니다"} title={"상품설정"} />
                <div>
                    <div className="itemSetting__control">
                        <section>
                            <JDbutton mb="no" thema="positive" label={'날짜선택'} className="itemSetting__calendar itemSetting__btn1" />
                            <JDbutton mb="no" thema="white" label={'오늘'} className="itemSetting__today itemSetting__btn1" />
                        </section>
                        <section className="controlDate">
                            <JDicon icon="shortLeft" size="large" onClick={() => { changeDay(false) }}></JDicon>
                            <div className="controlDate__selected">
                                {moment(itemDay).format('YYYY - MM - DD')}
                            </div>
                            <JDicon icon="shortRight" size="large" onClick={() => { changeDay(true) }}></JDicon>
                        </section>
                        <section>
                            <JDselect
                                autoSize
                                onChange={(e) => {
                                    noRefCheck(e)
                                }}
                                options={itemSort}
                            />
                        </section>
                    </div>
                    <ItemSettingList itemInfo={itemInfo} />
                </div>

            </div>
        </JDcontainer>
    )
}

export default ItemSetting
