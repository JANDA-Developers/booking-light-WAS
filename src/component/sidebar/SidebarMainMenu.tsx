import React from 'react';
import { JDicon, JDtypho } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { IMenu } from "./Sidebar";

export type IProps = {
    menu: IMenu
    index: number;
    onMenuClick: (index: number) => void;
    selected: boolean;
}

const SidebarMainMenu: React.FC<IProps> = ({ menu, index, onMenuClick, selected }) => {
    return (
        <li onClick={() => { onMenuClick(index) }} className={`mainMenu__list ${selected && "mainMenu__list--active"}`} key={`sidebar_${index}`}>
            <JDicon size="small" icon={menu.icon} />
            <JDtypho size="tiny">{menu.title}</JDtypho>
        </li>
    )
}

export default SidebarMainMenu
