import React, { useEffect, useState } from 'react'
import { Link, useHistory, useLocation } from "react-router-dom";
import { Bold, JDicon, toast, JDtooltip, ReactTooltip } from '@janda-com/front';
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { Paths } from '../../MainRouter';
import { AuthPaths } from '../../AuthRouter';
import classNames from "classnames";

export type TSidebarSub = {
    icon: IIcons,
    title: string,
    path: string,
    disabled: boolean,
    redirect?: Paths | AuthPaths,
    disabledTooltip?: string
}

interface IProps {
    menu: TSidebarSub,
    onMenuClick: (path: string) => void;
}

const SidebarSubMenu: React.FC<IProps> = ({ menu, onMenuClick }) => {
    const history = useHistory()
    const { pathname } = useLocation()
    const { disabled, icon, path, redirect, title, disabledTooltip } = menu;

    let selected: boolean = pathname === path

    //url 서치로 들어온 경로 방지
    if (selected && disabled && redirect) {
        toast(disabledTooltip)
        history.push(redirect);
    }

    const classes = classNames('subMenu__list', undefined, {
        "subMenu__list--activate": selected,
        "subMenu__list--disabled": disabled,
    })

    const handleClick = () => {
        if (!disabled)
            onMenuClick(path);
    }

    useEffect(() => {
        ReactTooltip.rebuild();
    })

    return (
        <li data-effect="solid" data-place="top" data-for="mainTooltip" data-tip={disabled ? disabledTooltip : undefined} onClick={handleClick} className={classes} >
            <JDicon mr="small" icon={icon} />
            <Bold size="small">{title}</Bold>
        </li>
    )
}

export default SidebarSubMenu
