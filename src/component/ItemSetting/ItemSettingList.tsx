import { IIcons } from '@janda-com/front/dist/components/icons/declation'
import React from 'react'

type TitemSettingList = {
    image: string,
    text1: string,
    text2: string,
    text3: string,
    price: string,
    sold: number,
    available: number,
    address: string
}

interface IProps {
    itemInfo: TitemSettingList[]
}


const ItemSettingList: React.FC<IProps> = ({ itemInfo }) => {
    return (
        <section>
            <div className="itemSetting__item">
                <div className="settingListImage" style={{ backgroundImage: "url(/img/itemset/1.jpg)" }}></div>
                <div className="settingListInfo">
                    <div className="settingListInfo__top">
                        <section>
                            <div className="infoTag">부산</div>
                            <strong>잔다 특별관</strong>
                            <b>1인 2매</b>
                        </section>
                        <section>
                            <button className="infoEdit">수정하기</button>
                            <strong className="infoPrice">KRW 25,000</strong>
                        </section>
                    </div>
                    <div className="settingListInfo__bottom">

                    </div>
                </div>
            </div>
            <div className="itemSetting__add">

            </div>
        </section>
    )
}

export default ItemSettingList
