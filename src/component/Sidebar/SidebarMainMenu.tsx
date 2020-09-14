import React from 'react';
import { JDicon } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';

export type TSidebarMain = {
    key:string,
    icon : IIcons,
    title : string,
}
interface IProps {
    mainMenu:TSidebarMain[],
    menuKey:string,
    menuKeyUpdate(key:string):void
}
const SidebarMainMenu:React.FC<IProps> = ({menuKey, mainMenu, menuKeyUpdate}) => {
    return (
        <ul className="Sidebar__mainMenu">
             {
                mainMenu.map((list)=>{
                    let listClicked = menuKey == `sidebar_${list.key}` ? "on" : "";
                    return  <li className={`mainMenu__list ${listClicked}`} key={`sidebar_${list.key}`}>
                        <a href="" 
                           id={`sidebar_${list.key}`} 
                           className="mainMenu__link"
                           onClick={
                               (e)=>{
                                    e.preventDefault();
                                    let target = e.currentTarget.getAttribute('id');
                                    if(target)
                                        menuKeyUpdate(target);
                               }
                           }
                        >
                            <JDicon icon={list.icon}/>
                            <b>{list.title}</b>
                        </a>
                    </li>
                })
            }
        </ul>
    )
}

export default SidebarMainMenu
