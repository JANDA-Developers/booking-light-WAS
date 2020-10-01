import React from 'react'
import { JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { TElements } from '@janda-com/front/dist/types/interface';

interface IProps {
    version: string;
    items: TElements
}

const Header: React.FC<IProps> = ({ version, items }) => {

    return (
        <header className="header">
            <div className="header__top">
                <div className="header__version">
                    {version}
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__items">
                    {items}
                </div>
            </div>
        </header>
    )
}

export default Header
