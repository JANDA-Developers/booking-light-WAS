import React from 'react'
import { JDalign, JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { TElements } from '@janda-com/front/dist/types/interface';

interface IProps {
    onMenuClick: () => void;
}

const Header: React.FC<IProps> = ({ children, onMenuClick }) => {

    return (
        <header className="header">
            <JDalign flex={{
                vCenter: true,
                between: true
            }} className="header__items">
                <div>
                    <JDicon size="small" hover onClick={onMenuClick} color="white" icon="menu" />
                </div>
                <div>
                    {children}
                </div>
            </JDalign>
        </header>
    )
}

export default Header
