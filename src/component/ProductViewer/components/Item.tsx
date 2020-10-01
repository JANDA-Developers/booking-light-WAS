import { JDalign } from '@janda-com/front';
import React from 'react';
import { TItem } from "../ProductViewer"
interface IProp {
    info: TItem
}

export const Item: React.FC<IProp> = ({ info }) => {
    const { count, name, total } = info;
    return <JDalign flex className="item">
        <div className="item__deco"></div>
        <div className="item__info">
            <div className="item__name">
                {name}
            </div>
            <div className="item__count">
                <span className="item__booked">
                    {count}
                </span>
                <span> / </span>
                <span className="item__total">
                    {total}
                </span>
            </div>
        </div>
    </JDalign>;
};

export default Item;
