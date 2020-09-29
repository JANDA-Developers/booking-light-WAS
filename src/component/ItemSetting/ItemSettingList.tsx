import React from 'react';
import { JDicon } from "@janda-com/front";

interface IProps {
    index: number,
    image: string,
    info1: string,
    info2: string,
    info3: string,
    price: number,
    currency: string,
    sold: number,
    available: number,
    address: string,
    personNum: number,
    totalPrice: number,
    handlePersonNum: (state: boolean, index: number) => void,
    handleAddItem: (index: number) => void;
}

const ItemSettingList: React.FC<IProps> = ({ index, image, info1, info2, info3, price, currency, sold, available, address, personNum, totalPrice, handlePersonNum, handleAddItem }) => {

    const numberFormat = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    const handleTotalPrice = (price: number, num: number) => {
        return numberFormat(price * num);
    }


    return (
        <div className="itemSetting__list" key={`list-${info2}`}>
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
                            <strong className="infoPrice">{currency} {numberFormat(price)}</strong>
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
                        <input type="text" className="controller__number" value={personNum} readOnly />
                        <button onClick={() => { handlePersonNum(true, index) }}>
                            <JDicon icon="plus" size="tiny" className="controller__plus"></JDicon>
                        </button>
                    </div>
                </section>
                <section className="price">
                    <strong>
                        {currency} {handleTotalPrice(totalPrice, personNum)}
                    </strong>
                </section>
            </div>
            <button className="itemSetting__additem" onClick={() => { handleAddItem(index) }}>
                <JDicon icon="plus" className="controller__plus"></JDicon>
                <strong>부가상품 추가하기</strong>
            </button>
        </div>
    )
}

export default ItemSettingList
