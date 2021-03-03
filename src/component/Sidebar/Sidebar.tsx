import React, { useContext, useEffect, useState } from 'react'
import SidebarMainMenu from './SidebarMainMenu'
import SidebarSubMenu, { TSidebarSub } from './SidebarSubMenu'
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { Bold, Flex, isEmpty, JDalign, JDtypho, Tiny } from '@janda-com/front';
import { Paths } from '../../MainRouter';
import { useHistory, useLocation } from 'react-router-dom';
import { getUrlIndex } from "./helper";
import AppContext, { IAppContext } from '../../context';
import dayjs from "dayjs";
import { AuthPaths } from '../../AuthRouter';

export interface IMenu {
    icon: IIcons,
    title: string,
    sub: TSidebarSub[];
}

export const getMenuData = (context: IAppContext): IMenu[] => {
    const { storeOptions, me, isLogined, selectedStore } = context;

    const haveStore: boolean = !isEmpty(storeOptions);
    // const payConfiged: boolean;
    // const isExpired: boolean;
    // const haveProduct: boolean;
    // const smsInited: boolean = !!me?.smsKey;

    const haveItem = (selectedStore?.items?.length || 0) > 0;

    const unLogined = {
        redirect: AuthPaths.login,
        disabledTooltip: "로그인후 이용 해주세요."
    }

    const noStore = {
        redirect: Paths.storeSet,
        disabledTooltip: "상점을 하나이상 생성 해주세요."
    }

    const noItem = {
        redirect: Paths.itemList,
        disabledTooltip: "상품군을 하나이상 생성 해주세요."
    }

    const noSmsKey = {
        redirect: Paths.sms,
        disabledTooltip: "SMS를 먼저 시작해주세요."
    }

    const loginAndStore = isLogined ? noStore : unLogined;
    const loginAndStoreAndItem = haveStore ? noItem : loginAndStore

    const sharedSMS = isLogined ? noSmsKey : unLogined;


    const MainMenuData: IMenu[] = [
        {
            icon: "houseGear",
            title: "홈",
            sub: [
                {
                    icon: "home",
                    title: "홈",
                    path: Paths.main,
                    disabled: !isLogined || !haveStore,
                    ...loginAndStore
                },
                {
                    icon: "home",
                    title: "상품현황",
                    path: Paths.productBoard,
                    disabled: !isLogined || !haveStore,
                    ...loginAndStore
                },
            ]
        },
        {
            icon: "box2",
            title: "상품",
            sub: [
                {
                    icon: "menu",
                    title: "품목 설정",
                    path: Paths.itemList,
                    disabled: !isLogined || !haveStore,
                    ...loginAndStore
                },
                {
                    icon: "menu",
                    title: "상품 설정",
                    path: Paths.productList,
                    disabled: !isLogined || !haveStore || !haveItem,
                    ...loginAndStoreAndItem
                }
            ]
        },
        {
            icon: "store",
            title: "상점",
            sub: [
                {
                    icon: "menu",
                    title: "상점설정",
                    path: Paths.storeSet,
                    disabled: !isLogined,
                    ...unLogined
                },
                {
                    icon: "menu",
                    title: "판매목록",
                    path: Paths.saleList,
                    disabled: !isLogined || !haveStore,
                    ...loginAndStore
                },
            ]
        },
        {
            icon: "book",
            title: "예약",
            sub: [
                {
                    icon: "menu",
                    title: "구매페이지 관리",
                    path: Paths.buypageSet,
                    disabled: !isLogined,
                    ...unLogined
                },
                {
                    icon: "menu",
                    title: "구매목록",
                    path: Paths.payToJanda,
                    disabled: !isLogined,
                    ...unLogined
                },
            ]
        },
        {
            icon: "book",
            title: "결제",
            sub: [
                {
                    icon: "menu",
                    title: "정산관리",
                    path: Paths.payFromJanda,
                    disabled: !isLogined,
                    ...unLogined
                },
                {
                    icon: "menu",
                    title: "멤버쉽",
                    path: Paths.payToJanda,
                    disabled: !isLogined,
                    ...unLogined
                },
            ]
        },
        // {
        //     icon: "sms",
        //     title: "SMS",
        //     sub: [
        //         {
        //             icon: "info",
        //             title: "시작하기",
        //             path: SmsPaths.init,
        //             disabled: !logined,
        //             ...unLogined
        //         },
        //         {
        //             icon: "addCircle",
        //             title: "템플릿 설정",
        //             path: SmsPaths.template,
        //             disabled: !logined || !smsInited,
        //             ...sharedSMS
        //         },
        //         {
        //             icon: "email",
        //             title: "발신자 관리",
        //             path: SmsPaths.sender,
        //             disabled: !logined || !smsInited,
        //             ...sharedSMS
        //         },
        //         {
        //             icon: "historyWatch",
        //             title: "발신 히스토리",
        //             path: SmsPaths.history,
        //             disabled: !logined || !smsInited,
        //             ...sharedSMS
        //         },
        //     ]
        // },
        {
            icon: "info",
            title: "고객센터",
            sub: [
                {
                    icon: "menu",
                    title: "Service 설정 1",
                    path: "/",
                    disabled: !isLogined,
                    ...unLogined
                },
            ]
        },
    ]

    return MainMenuData;
}


export interface IProps {
    isOpen: boolean;
}

const Sidebar: React.FC<IProps> = ({ isOpen }) => {
    const context = useContext(AppContext);
    const { me } = context;
    const { pathname, key } = useLocation();
    console.log({ pathname });
    console.log({ key });
    const menuData = getMenuData(context)
    const [menuIndex, setMenuIndex] = useState((getUrlIndex(pathname, menuData)))

    let history = useHistory();

    const handleMainMenuClick = (index: number) => {
        setMenuIndex(index);
    }

    const handleSubMenuClick = (path: string) => {
        history.push(path);
    }

    const { name, createdAt } = me || {};

    // 로그인 onclick, login, logout 추가 y
    return (
        <div className={`sidebar ${isOpen || 'sidebar--close'} ${me || 'sidebar--unLogined'}`}>
            <Flex oneone className="sidebar__head">
                <div className="sidebar__logo">
                    A
                </div>
                <JDalign className="sidebar__infozone" text={"center"}>
                    <Bold flex={{ vEnd: true, center: true }} mb="superTiny">{name} <Tiny>님</Tiny></Bold>
                    <JDtypho size="tiny">
                        시작일 {dayjs(createdAt).format("YYYY MM DD hh:mm:ss")}
                    </JDtypho>
                </JDalign>
            </Flex>
            <nav className="sidebar__menu">
                <ul className="mainMenu">
                    {
                        menuData.map((menu, i) =>
                            <SidebarMainMenu selected={menuIndex === i} onMenuClick={handleMainMenuClick} key={`sidebarMain_${i}`} menu={menu} index={i} />)
                    }
                </ul>
                <ul className="subMenu">
                    {menuData[menuIndex]?.sub.map((menu, index) =>
                        <SidebarSubMenu onMenuClick={handleSubMenuClick} key={`submenuList-${index}`} menu={menu} />
                    )}
                </ul>
            </nav>
        </div>
    )
}

export default Sidebar
