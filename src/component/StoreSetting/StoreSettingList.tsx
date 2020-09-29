import React from 'react';
import { JDicon, JDcard } from "@janda-com/front";
import moment from 'moment';

interface IProps {
    index: string,
    image: string,
    name: string,
    address: string,
    goods: number,
    sold: number,
    generated: Date,
    member: number,
    desc: string,
    handleEdit: (index: string) => void,
    handleDelete: (index: string) => void
}

const StoreSettingList: React.FC<IProps> = ({ index, image, name, address, goods, sold, generated, member, desc, handleEdit, handleDelete }) => {

    const onEdit = (index: string) => {
        handleEdit(index);
    }

    const onDelete = (index: string) => {
        handleDelete(index);
    }

    return (
        <JDcard className="storeSetting__list storeList">

            <div className="storeList__imageBlock">
                <div className="storeList__image" style={{ backgroundImage: `url(${image})` }}></div>
            </div>
            <div className="storeList__infoBlock">
                <div className="infoBlock__name">
                    <strong>{name}</strong>
                    <b><JDicon icon="location"></JDicon> {address}</b>
                </div>
                <div className="infoBlock__sold">
                    <div className="infoBlock__soldList">
                        <strong>상품</strong>
                        <span>{goods}</span>
                    </div>
                    <div className="infoBlock__soldDeco"></div>
                    <div className="infoBlock__soldList">
                        <strong>판매</strong>
                        <span>{sold}</span>
                    </div>
                    <div className="infoBlock__soldDeco"></div>
                    <div className="infoBlock__soldList">
                        <strong>생성일</strong>
                        <span>{moment(generated).format('YYYY-MM-DD')}</span>
                    </div>
                    <div className="infoBlock__soldDeco"></div>
                    <div className="infoBlock__soldList">
                        <strong>회원</strong>
                        <span>{member}</span>
                    </div>
                </div>
                <div className="infoBlock__desc">
                    <p>
                        {desc}
                    </p>
                </div>
            </div>
            <div className="storeList__controlBlock">
                <button className="storeList__edit" onClick={() => { onEdit(index) }}>수정하기</button>
                <button className="storeList__delete" onClick={() => { onDelete(index) }}>삭제하기</button>
            </div>

        </JDcard>
    )
}

export default StoreSettingList
