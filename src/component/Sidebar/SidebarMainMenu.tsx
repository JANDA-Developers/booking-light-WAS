import React from 'react';
import { JDicon, JDtypho } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

export type TSidebarMain = {
    key: string,
    icon: IIcons,
    title: string,
}
interface IProps {
    mainMenu: TSidebarMain[],
    menuKey: string,
    menuKeyUpdate(key: string): void
}
const SidebarMainMenu: React.FC<IProps> = ({ menuKey, mainMenu, menuKeyUpdate }) => {
    return (
        <ul className="Sidebar__mainMenu">
            {
                mainMenu.map((menu) => {
                    const listClicked = menuKey == menu.key ? "on" : "";
                    return <li className={`mainMenu__list ${listClicked}`} key={`sidebar_${menu.key}`}>
                        <a href=""
                            id={`sidebar_${menu.key}`}
                            className="mainMenu__link"
                            onClick={
                                (e) => {
                                    e.preventDefault();
                                    menuKeyUpdate(menu.key);
                                }
                            }
                        >
                            <JDicon icon={menu.icon} />
                            <JDtypho>{menu.title}</JDtypho>
                        </a>
                    </li>
                })
            }
        </ul>
    )
}

export default SidebarMainMenu
