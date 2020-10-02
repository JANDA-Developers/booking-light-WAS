import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

export type TSidebarSub = {
    icon: IIcons,
    title: string,
    path: string
}

interface IProps {
    subMenu: TSidebarSub[],
    subMenuClick: (path: string) => void;
}

const SidebarSubMenu: React.FC<IProps> = ({ subMenu, subMenuClick }) => {

    return (
        <ul className="Sidebar__subMenu">
            {
                subMenu.map((menu, index) => {
                    return <li className="subMenu__list" key={`submenuList-${index}`}>
                        <Link to={menu.path} className="subMenu__link" onClick={(e) => {
                            subMenuClick(menu.path);
                        }}>
                            <JDicon mr="small" icon={menu.icon} />
                            <b>{menu.title}</b>
                        </Link>
                    </li>
                })
            }
        </ul>
    )
}

export default SidebarSubMenu
