import React from 'react'
import { JDalign, JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { TElements } from '@janda-com/front/dist/types/interface';

interface IProps {
    version: string;
    products: TElements
}

const Header: React.FC<IProps> = ({ version, products }) => {

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__version">
                    {version}
                </div>
            </div>
            <div className="header__bottom">
                <JDalign flex={{
                    vCenter: true,
                    between: true
                }} className="header__items">
                    <div>
                        <JDicon icon="menu" />
                    </div>
                    <div>
                        {products}
                    </div>
                </JDalign>
            </div>
        </header>
    )
}

export default Header
