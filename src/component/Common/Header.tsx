import React from 'react'
import { JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

interface IProps {
    version:string
    icons: IIcons[]
}

const Header:React.FC<IProps> = ({version, icons}) => {
    console.log(icons.find);
    return (
        <header className="header">
            <div className="header__top">
                <div className="header__version">
                    {version}
                </div>
            </div>
            <div className="header__bottom">
                <div className="header__items">
                    {icons.map((list)=> {
                        return  <JDicon icon={list}/>
                    })}
                </div>
            </div>
        </header>
    )
}

export default Header
