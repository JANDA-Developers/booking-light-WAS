import React from 'react'
import { JDicon } from "@janda-com/front";
import moment from 'moment';

type TstoreList = {
    image: string,
    name: string,
    address: string,
    goods: number,
    sold: number,
    generated: Date,
    member: number,
    desc: string
}

interface IProps {
    storeList: TstoreList[]
}

const StoreSettingList: React.FC<IProps> = ({ storeList }) => {
    return (
        <div>
            {
                storeList.map((storeItem) => {
                    return <div className="storeSetting__list storeList">
                        <div className="storeList__imageBlock">
                            <div className="storeList__image" style={{ backgroundImage: `url(${storeItem.image})` }}></div>
                        </div>
                        <div className="storeList__infoBlock">
                            <div className="infoBlock__name">
                                <strong>{storeItem.name}</strong>
                                <b><JDicon icon="location"></JDicon> {storeItem.address}</b>
                            </div>
                            <div className="infoBlock__sold">
                                <div className="infoBlock__soldList">
                                    <strong>상품</strong>
                                    <span>{storeItem.goods}</span>
                                </div>
                                <div className="infoBlock__soldDeco"></div>
                                <div className="infoBlock__soldList">
                                    <strong>판매</strong>
                                    <span>{storeItem.sold}</span>
                                </div>
                                <div className="infoBlock__soldDeco"></div>
                                <div className="infoBlock__soldList">
                                    <strong>생성일</strong>
                                    <span>{moment(storeItem.generated).format('YYYY-MM-DD')}</span>
                                </div>
                                <div className="infoBlock__soldDeco"></div>
                                <div className="infoBlock__soldList">
                                    <strong>회원</strong>
                                    <span>{storeItem.member}</span>
                                </div>
                            </div>
                            <div className="infoBlock__desc">
                                <p>
                                    {storeItem.desc}
                                </p>
                            </div>
                        </div>
                        <div className="storeList__controlBlock">
                            <button className="storeList__edit">수정하기</button>
                            <button className="storeList__delete">삭제하기</button>
                        </div>
                    </div>
                })
            }
        </div>


    )
}

export default StoreSettingList
