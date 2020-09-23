import React from 'react';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect } from "@janda-com/front";


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
                    <section className="settingListInfo__top">
                        <div className="topblock">
                            <div className="infoTag">부산</div>
                            <strong>잔다 특별관</strong>
                            <b>1인 2매</b>
                        </div>
                        <div className="topblock">
                            <button className="infoEdit">수정하기</button>
                            <strong className="infoPrice">KRW 25,000</strong>
                        </div>
                    </section>
                    <section className="settingListInfo__bottom">
                        <div className="bottomblock">
                            <div className="bottomblock__list">
                                <b>판매</b>
                                <span>123</span>
                            </div>
                            <div className="bottomblock__deco"></div>
                            <div className="bottomblock__list">
                                <b>잔여</b>
                                <span>123</span>
                            </div>
                        </div>
                        <div className="bottomblock">
                            부산남구대로 193-12
                        </div>
                    </section>
                </div>
            </div>
            <div className="itemSetting__addperson">
                <div className="volume">
                    <span className="volume__title">인원추가</span>
                    <span className="controller">
                        <button>
                            <JDicon icon="plus" className="controller__minus"></JDicon>
                        </button>
                        <input type="text" className="controller__number" />
                        <button>
                            <JDicon icon="plus" className="controller__plus"></JDicon>
                        </button>
                    </span>
                </div>
                <div className="price">
                    <strong>KRW 12,000</strong>
                </div>
            </div>
            <div className="itemSetting__additem">
                <JDicon icon="plus" className="controller__plus"></JDicon>
                <strong>부가상품 추가하기</strong>
            </div>
        </section>
    )
}

export default ItemSettingList
