import React, { useState } from 'react';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect } from "@janda-com/front";


type TitemSettingList = {
    image: string,
    info1: string,
    info2: string,
    info3: string,
    price: string,
    currency: string,
    sold: number,
    available: number,
    address: string
}

interface IProps {
    itemInfo: TitemSettingList[]
}


const ItemSettingList: React.FC<IProps> = ({ itemInfo }) => {

    const [personNum, setPersonNum] = useState<number>(1);
    const [totalPrice, setTotalPrice] = useState("15,000");

    const handlePersonNum = (state: boolean) => {
        if (state) {
            setPersonNum(personNum + 1)
        } else {
            personNum > 1 ? setPersonNum(personNum - 1) : setPersonNum(1)
        }
    }

    /* when to allow input typing */
    // const handlePersonOnchange = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     e.target.value != "" ? setPersonNum(parseInt(e.target.value)) : setPersonNum(1)
    // }

    const handleAddItem = () => {
        console.log('item added');
    }

    return (

        <div>
            {
                itemInfo.map((itemList) => {
                    return <div className="itemSetting__list">
                        <div className="itemSetting__item">
                            <div className="settingListImage" style={{ backgroundImage: `url(${itemList.image})` }}></div>
                            <div className="settingListInfo">
                                <section className="settingListInfo__top">
                                    <div className="topblock">
                                        <div className="infoTag">{itemList.info1}</div>
                                        <strong>{itemList.info2}</strong>
                                        <b>{itemList.info3}</b>
                                    </div>
                                    <div className="topblock">
                                        <button className="infoEdit">수정하기</button>
                                        <strong className="infoPrice">{itemList.currency} {itemList.price}</strong>
                                    </div>
                                </section>
                                <section className="settingListInfo__bottom">
                                    <div className="bottomblock flex">
                                        <div className="bottomblock__list">
                                            <b>판매</b>
                                            <span>{itemList.sold}</span>
                                        </div>
                                        <div className="bottomblock__deco"></div>
                                        <div className="bottomblock__list">
                                            <b>잔여</b>
                                            <span>{itemList.available}</span>
                                        </div>
                                    </div>
                                    <div className="bottomblock">
                                        {itemList.address}
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
                                    <button onClick={() => { handlePersonNum(false) }}>
                                        <JDicon icon="plus" size="tiny" className="controller__minus"></JDicon>
                                    </button>
                                    <input type="text" className="controller__number" value={personNum} readOnly />
                                    <button onClick={() => { handlePersonNum(true) }}>
                                        <JDicon icon="plus" size="tiny" className="controller__plus"></JDicon>
                                    </button>
                                </div>
                            </section>
                            <section className="price">
                                <strong>
                                    {itemList.currency}
                                    {totalPrice}
                                </strong>
                            </section>
                        </div>
                        <button className="itemSetting__additem" onClick={() => { handleAddItem() }}>
                            <JDicon icon="plus" className="controller__plus"></JDicon>
                            <strong>부가상품 추가하기</strong>
                        </button>
                    </div>
                })
            }

        </div>
    )
}

export default ItemSettingList
