import React, { useEffect, useState } from 'react'
import SidebarMainMenu, { TSidebarMain } from './SidebarMainMenu'
import SidebarSubMenu, { TSidebarSub } from './SidebarSubMenu'
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDicon } from '@janda-com/front';

interface IMainMenu {
    key: string,
    icon: IIcons,
    title: string,
}
interface ISubMenu {
    title: string;
    sub: TSidebarSub[];
}

const Data_SideMain: IMainMenu[] = [
    {
        key: "home",
        icon: "houseGear",
        title: "홈"
    },
    {
        key: "item",
        icon: "gearBox",
        title: "상품"
    },
    {
        key: "store",
        icon: "location",
        title: "상점"
    },
    {
        key: "payment",
        icon: "file",
        title: "결제"
    },
    {
        key: "sms",
        icon: "camera",
        title: "SMS"
    },
    {
        key: "service",
        icon: "speechBubble2",
        title: "고객센터"
    }
]


const Data_SubMain: ISubMenu[] = [
    {
        title: "sidebar_home",
        sub: [
            {
                icon: "menu",
                title: "home - 상품설명"
            },
            {
                icon: "menu",
                title: "home - 판매목록"
            },
            {
                icon: "menu",
                title: "home - 판매목록"
            }
        ]
    },
    {
        title: "sidebar_item",
        sub: [
            {
                icon: "menu",
                title: "item - 상품설명"
            },
            {
                icon: "menu",
                title: "item - 판매목록"
            },
            {
                icon: "menu",
                title: "item - 판매목록"
            }
        ]
    },
    {
        title: "sidebar_store",
        sub: [
            {
                icon: "menu",
                title: "store - 상품설명"
            },
            {
                icon: "menu",
                title: "store - 판매목록"
            },
            {
                icon: "menu",
                title: "store - 판매목록"
            }
        ]
    },
    {
        title: "sidebar_payment",
        sub: [
            {
                icon: "menu",
                title: "pay - 상품설명"
            },
            {
                icon: "menu",
                title: "pay - 판매목록"
            },
            {
                icon: "menu",
                title: "pay - 판매목록"
            }
        ]
    },
    {
        title: "sidebar_sms",
        sub: [
            {
                icon: "menu",
                title: "sms - 상품설명"
            },
            {
                icon: "menu",
                title: "sms - 판매목록"
            },
            {
                icon: "menu",
                title: "sms - 판매목록"
            }
        ]
    },
    {
        title: "sidebar_service",
        sub: [
            {
                icon: "menu",
                title: "service - 상품설명"
            },
            {
                icon: "menu",
                title: "service - 판매목록"
            },
            {
                icon: "menu",
                title: "service - 판매목록"
            }
        ]
    }
]


type TUserInfo = {
    name: string;
    [key: string]: any
}
export interface IProps {
    onClose: () => void,
    onMypage: () => void,
    onLogin: (isLogout: boolean) => void
    useInfo: TUserInfo;
    isOpen: boolean;
}

const Sidebar: React.FC<IProps> = ({ onLogin, onMypage, onClose, useInfo, isOpen }) => {
    const [menuKey, setMenuKey] = useState<string>('sidebar_home');
    const menuKeyUpdate = (key: string) => {
        setMenuKey(key)
    }

    let subMenuList = Data_SubMain.find(list => list.title === menuKey) || Data_SubMain[0];

    useEffect(() => {
        if (isOpen)
            document.getElementById("root")?.classList.add("sideOpen")
        else
            document.getElementById("root")?.classList.remove("sideOpen")

    }, [isOpen])

    // 로그인 onclick, login, logout 추가 
    return (
        <div className={`Sidebar ${isOpen || 'Sidebar--close'}`}>
            <div className="Sidebar__head">
                <strong className="Sidebar__name">
                    {useInfo.name}<small>님</small>
                </strong>
                <p className="Sidebar__latest">
                    최근 접속일 2020 09 03 13:58:00
                </p>
                <div className="Sidebar__memberNav">
                    <a href="#" className="Sidebar__login off" onClick={() => { onLogin(false) }}>로그인</a>
                    <a href="#" className="SideBar__logout" onClick={() => { onLogin(true) }}>로그아웃</a>
                    <a href="#" className="SideBar__mypage" onClick={() => { onMypage() }}>마이페이지</a>
                </div>
                <div className="Sidebar__close" onClick={() => {
                    onClose()
                }}>
                    <JDicon icon="close" />
                </div>
            </div>
            <nav className="Sidebar__menu">
                <SidebarMainMenu mainMenu={Data_SideMain} menuKey={menuKey} menuKeyUpdate={menuKeyUpdate} />
                <SidebarSubMenu subMenu={subMenuList.sub} />
            </nav>
        </div>
    )
}

export default Sidebar
