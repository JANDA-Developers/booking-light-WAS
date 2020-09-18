import React, { useState } from 'react'
import { JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

export type TSidebarSub = {
    icon: IIcons,
    title: string
}

interface IProps {
    subMenu: TSidebarSub[],
    subMenuClick: (location: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
}

const SidebarSubMenu: React.FC<IProps> = ({ subMenu, subMenuClick }) => {

    return (
        <ul className="Sidebar__subMenu">
            {
                subMenu.map((list, index) => {
                    return <li className="subMenu__list" key={`submenuList-${index}`}>
                        <a href="" className="subMenu__link" onClick={(e) => {
                            e.preventDefault();
                            subMenuClick(e)
                        }}>
                            <JDicon icon={list.icon} />
                            <b>{list.title}</b>
                        </a>
                    </li>
                })
            }
        </ul>
    )

}

export default SidebarSubMenu
