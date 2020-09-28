import React, { useState, useEffect } from 'react';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDcontainer, JDpageHeader, WindowSize, JDbutton, JDicon, JDselect, IUseModal } from "@janda-com/front";

type TitemSettingList = {
    image: string,
    info1: string,
    info2: string,
    info3: string,
    price: number,
    currency: string,
    sold: number,
    available: number,
    address: string
}

interface IProps {
    itemInfo: TitemSettingList[]
    modalHook_add: IUseModal
}


const ItemSettingList: React.FC<IProps> = ({ itemInfo, modalHook_add }) => {

    const [personNum, setPersonNum] = useState<number[]>([
        ...itemInfo.map((list) => {
            return 1;
        })
    ]);
    const [totalPrice, setTotalPrice] = useState<number[]>([
        ...itemInfo.map((list) => {
            return list.price;
        })
    ]);


    const handlePersonNum = (state: boolean, index: number) => {
        if (state) {
            setPersonNum(
                personNum.map((number, listIndex) => {
                    return listIndex === index ? number + 1 : number;
                })
            )
        } else {

            if (personNum[index] > 1) {
                setPersonNum(
                    personNum.map((number, listIndex) => {
                        return listIndex === index ? number - 1 : number;
                    })
                )
            }
        }
    }

    const handleAddItem = () => {
        modalHook_add.openModal();
    }

    const handleTotalPrice = (price: number, num: number) => {
        return numberFormat(price * num);
    }

    const numberFormat = (price: number) => {
        return price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
    }

    return (

        <div>
            {
                itemInfo.map((itemList, index) => {
                    return <div className="itemSetting__list" key={`list-${itemList.info2}`}>
                        <div className="itemSetting__item">
                            <div>
                                <div className="settingListImage" style={{ backgroundImage: `url(${itemList.image})` }}>

                                </div>
                            </div>
                            <div className="settingListInfo">
                                <section className="settingListInfo__top">
                                    <div className="topblock">
                                        <div className="infoTag">{itemList.info1}</div>
                                        <strong>{itemList.info2}</strong>
                                        <b>{itemList.info3}</b>
                                    </div>
                                    <div className="topblock">
                                        <button className="infoEdit">수정하기</button>
                                        <strong className="infoPrice">{itemList.currency} {numberFormat(itemList.price)}</strong>
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
                                    {itemList.currency} {handleTotalPrice(totalPrice[index], personNum[index])}
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
