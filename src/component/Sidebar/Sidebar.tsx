import React, { useEffect, useState } from 'react'
import SidebarMainMenu, { TSidebarMain } from './SidebarMainMenu'
import SidebarSubMenu, { TSidebarSub } from './SidebarSubMenu'
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { JDicon, JDtypho } from '@janda-com/front';
import { Paths } from '../../MainRouter';
import { useHistory } from 'react-router-dom';

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
        key: "product",
        icon: "box2",
        title: "상품"
    },
    {
        key: "store",
        // @ts-ignore
        icon: "store",
        title: "상점"
    },
    {
        key: "payment",
        icon: "book",
        title: "결제"
    },
    {
        key: "sms",
        // @ts-ignore
        icon: "sms",
        title: "SMS"
    },
    {
        key: "service",
        icon: "info",
        title: "고객센터"
    }
]


const Data_SubMain: ISubMenu[] = [
    {
        title: "home",
        sub: [
            {
                icon: "home",
                title: "홈",
                path: Paths.main
            },
        ]
    },
    {
        title: "product",
        sub: [
            {
                icon: "menu",
                title: "상품목록 1",
                path: Paths.productset
            },
        ]
    },
    {
        title: "store",
        sub: [
            {
                icon: "menu",
                title: "상점설정 1",
                path: Paths.storeset
            },
        ]
    },
    {
        title: "payment",
        sub: [
            {
                icon: "menu",
                title: "정산관리",
                path: Paths.payFromJanda
            },
            {
                icon: "menu",
                title: "멤버쉽",
                path: Paths.payToJanda
            },
        ]
    },
    {
        title: "sms",
        sub: [
            {
                icon: "menu",
                title: "SMS 설정1",
                path: Paths.sms
            },
        ]
    },
    {
        title: "service",
        sub: [
            {
                icon: "menu",
                title: "Service 설정 1",
                path: "/"
            },
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
    const history = useHistory();

    const subMenuList = Data_SubMain.find(list => list.title === menuKey) || Data_SubMain[0];

    const subMenuClick = (path: string) => {
        history.push(path);
    }

    useEffect(() => {
        if (isOpen)
            document.getElementById("root")?.classList.add("sideOpen")
        else
            document.getElementById("root")?.classList.remove("sideOpen")
    }, [isOpen])

    useEffect(() => {
        const { path } = subMenuList.sub[0]
        history.push(path)
    }, [menuKey])

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
                <SidebarSubMenu subMenu={subMenuList.sub} subMenuClick={(path) => {
                    subMenuClick(path);
                }} />
            </nav>
        </div>
    )
}

export default Sidebar
