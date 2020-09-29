import React from 'react'
import { JDicon, IUseModal } from "@janda-com/front";

interface IProps {
    index: number,
    key: string,
    image: string,
    info1: string,
    info2: string,
    info3: string,
    currency: string,
    price: string,
    sold: number,
    available: number,
    address: string,
    handlePersonNum: (state: boolean, index: number) => void,
    personNum: number[],
    totalPrice: number[]
    handleTotalPrice: (price: number, num: number) => void
}

const ItemSettingItem: React.FC<IProps> = ({ index, key, image, info1, info2, info3, currency, price, sold, available, address, handlePersonNum, personNum, totalPrice, handleTotalPrice }) => {
    return (
        <div className="itemSetting__list" key={`list-${key}`}>
            <div className="itemSetting__item">
                <div>
                    <div className="settingListImage" style={{ backgroundImage: `url(${image})` }}>

                    </div>
                </div>
                <div className="settingListInfo">
                    <section className="settingListInfo__top">
                        <div className="topblock">
                            <div className="infoTag">{info1}</div>
                            <strong>{info2}</strong>
                            <b>{info3}</b>
                        </div>
                        <div className="topblock">
                            <button className="infoEdit">수정하기</button>
                            <strong className="infoPrice">{currency} {price}</strong>
                        </div>
                    </section>
                    <section className="settingListInfo__bottom">
                        <div className="bottomblock flex">
                            <div className="bottomblock__list">
                                <b>판매</b>
                                <span>{sold}</span>
                            </div>
                            <div className="bottomblock__deco"></div>
                            <div className="bottomblock__list">
                                <b>잔여</b>
                                <span>{available}</span>
                            </div>
                        </div>
                        <div className="bottomblock">
                            {address}
                        </div>
                    </section>
                </div>
            </div>
            <div className="itemSetting__addperson">
                <section className="volume">
                    <div className="volume__title">
                        <span className="volume__deco"></span>
                        <b>인원추가</b>
                    </div>
                    <div className="controller">
                        <button onClick={() => { handlePersonNum(false, index) }}>
                            <JDicon icon="plus" size="tiny" className="controller__minus"></JDicon>
                        </button>
                        <input type="text" className="controller__number" value={personNum[index]} readOnly />
                        <button onClick={() => { handlePersonNum(true, index) }}>
                            <JDicon icon="plus" size="tiny" className="controller__plus"></JDicon>
                        </button>
                    </div>
                </section>
                <section className="price">
                    <strong>
                        {currency} {handleTotalPrice(totalPrice[index], personNum[index])}
                    </strong>
                </section>
            </div>
        </div>

    )
}

export default ItemSettingItem
