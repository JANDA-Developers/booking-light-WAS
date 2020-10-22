import { JDalign } from '@janda-com/front';
import React from 'react';
import { TProduct } from "../ProductViewer"
interface IProp {
    info: TProduct
}

export const Product: React.FC<IProp> = ({ info }) => {

    const { count, name, total } = info;
    return <JDalign mb flex className="product">
        <div className="product__deco"></div>
        <div className="product__info">
            <div className="product__name">
                {name}
            </div>
            <div className="product__count">
                <span className="product__booked">
                    {count}
                </span>
                <span> / </span>
                <span className="product__total">
                    {total}
                </span>
            </div>
        </div>
    </JDalign>;
};

export default Product;
