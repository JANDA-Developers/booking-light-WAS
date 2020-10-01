import React, { useEffect, useState } from 'react'
import SidebarMainMenu, { TSidebarMain } from './SidebarMainMenu'
import SidebarSubMenu, { TSidebarSub } from './SidebarSubMenu'
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDicon, JDtypho } from '@janda-com/front';

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
                title: "상품설명",
                path: "/"
            },
            {
                icon: "menu",
                title: "판매목록",
                path: "/"
            },
            {
                icon: "menu",
                title: "판매목록",
                path: "/"
            }
        ]
    },
    {
        title: "sidebar_item",
        sub: [
            {
                icon: "menu",
                title: "상품목록 1",
                path: "/"
            },
            {
                icon: "menu",
                title: "상품목록 2",
                path: "/"
            },
            {
                icon: "menu",
                title: "상품목록 3",
                path: "/"
            }
        ]
    },
    {
        title: "sidebar_store",
        sub: [
            {
                icon: "menu",
                title: "상점설정 1",
                path: "/"
            },
            {
                icon: "menu",
                title: "상점설정 2",
                path: "/"
            },
            {
                icon: "menu",
                title: "상점설정 3",
                path: "/"
            }
        ]
    },
    {
        title: "sidebar_payment",
        sub: [
            {
                icon: "menu",
                title: "결제설정 1",
                path: "/"
            },
            {
                icon: "menu",
                title: "결제설정 2",
                path: "/"
            },
            {
                icon: "menu",
                title: "결제설정 3",
                path: "/"
            }
        ]
    },
    {
        title: "sidebar_sms",
        sub: [
            {
                icon: "menu",
                title: "SMS 설정1",
                path: "/"
            },
            {
                icon: "menu",
                title: "SMS 설정2",
                path: "/"
            },
            {
                icon: "menu",
                title: "SMS 설정3",
                path: "/"
            }
        ]
    },
    {
        title: "sidebar_service",
        sub: [
            {
                icon: "menu",
                title: "Service 설정 1",
                path: "/"
            },
            {
                icon: "menu",
                title: "Service 설정 2",
                path: "/"
            },
            {
                icon: "menu",
                title: "Service 설정 3",
                path: "/"
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

    const subMenuClick = (location: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => {
        console.log(location);
    }

    // 로그인 onclick, login, logout 추가 y
    return (
        <div className={`Sidebar ${isOpen || 'Sidebar--close'}`}>
            <div className="Sidebar__head">
                <JDtypho mb="small" size="h5" weight={600}>
                    {useInfo.name}<JDtypho component="span" size="small">님</JDtypho>
                </JDtypho>
                <JDtypho mb="small" size="tiny">
                    최근 접속일 2020 09 03 13:58:00
                </JDtypho>
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
                <SidebarSubMenu subMenu={subMenuList.sub} subMenuClick={(location) => {
                    subMenuClick(location);
                }} />
            </nav>
        </div>
    )
}

export default Sidebar
