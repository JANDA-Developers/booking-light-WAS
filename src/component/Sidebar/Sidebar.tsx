import React, { useContext, useEffect, useState } from 'react'
import SidebarMainMenu from './SidebarMainMenu'
import SidebarSubMenu, { TSidebarSub } from './SidebarSubMenu'
import { IIcons } from '@janda-com/front/dist/components/icons/declation';
import { Bold, Flex, isEmpty, JDalign, JDtypho, Tiny } from '@janda-com/front';
import { Paths } from '../../MainRouter';
import { RouteComponentProps, useHistory, useLocation, withRouter } from 'react-router-dom';
import { getUrlIndex } from "./helper";
import AppContext, { IAppContext } from '../../context';
import dayjs from "dayjs";
import { AuthPaths } from '../../AuthRouter';
import { SmsPaths } from '../../page/smsRouter/SmsRouter';
import { Logo } from '../logo/Logo';

export interface IMenu {
    icon: IIcons,
    title: string,
    sub: TSidebarSub[];
}

export const getMenuData = (context: IAppContext): IMenu[] => {
    const { storeOptions, me, isLogined, selectedStore } = context;

    const haveStore: boolean = !isEmpty(storeOptions);

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
                    exact: true,
                    path: Paths.main,
                    keywards: ["메인페이지", "홈"],
                    description: "메인페이지는 최근에 일어난일을 요약해서 보여줍니다.",
                    disabled: !isLogined || !haveStore,
                    ...loginAndStore
                },
                {
                    icon: "barGraph",
                    title: "서비스 사용현황",
                    path: Paths.graph,
                    disabled: !isLogined || !haveStore,
                    keywards: ["서비스 사용량", "이용량"],
                    description: "서비스를 얼마나 사용했는지 확인합니다.",
                    ...loginAndStore
                },
                {
                    icon: "historyWatch",
                    title: "스케쥴",
                    path: Paths.calendar,
                    disabled: !isLogined || !haveStore,
                    keywards: ["시간표", "달력", "스케쥴"],
                    description: "상품들의 현황을 한눈에 파악할 수 있는 스케쥴표를 제공합니다.",
                    ...loginAndStore
                },
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
                    keywards: ["초기설정", "상점설정"],
                    description: "초기상점에 대한 설정을 할 수 있는 페이지 입니다.",
                    ...unLogined
                }
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
                    keywards: ["품목", "상품", "아이템"],
                    description: "상품을 등록할 수 있는 페이지",
                    ...loginAndStore
                },
                {
                    icon: "menu",
                    title: "판매 설정",
                    path: Paths.productList,
                    disabled: !isLogined || !haveStore || !haveItem,
                    keywards: ["판매설정", "수량설정", "가격설정"],
                    description: "판매/수량/가격 등을 설정할 수 있는페이지",
                    ...loginAndStoreAndItem
                }
            ]
        },
        {
            icon: "book",
            title: "예약",
            sub: [
                {
                    icon: "menu",
                    title: "판매페이지 관리",
                    path: Paths.buypageSet,
                    disabled: !isLogined,
                    keywards: ["고객페이지", "예약페이지", "구매페이지"],
                    description: "고객들이 실제 구매를 할 수 있는 페이지",
                    ...unLogined
                },
                {
                    icon: "menu",
                    title: "구매목록",
                    path: Paths.purchaseList,
                    disabled: !isLogined,
                    keywards: ["구매목록", "구매취소", "구매확인"],
                    description: "구매내역을 확인할 수 있는 페이지 입니다.",
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
                    keywards: ["정산", "입금받기"],
                    description: "고객님들의 매출을 지급해 드립니다.",
                    ...unLogined
                },
                {
                    icon: "menu",
                    title: "멤버쉽",
                    path: Paths.payToJanda,
                    disabled: !isLogined,
                    keywards: ["멤버쉽", "이용요금"],
                    description: "서비스 이용요금 멤버쉽 사용",
                    ...unLogined
                },
            ]
        },
        {
            icon: "sms",
            title: "SMS",
            sub: [
                {
                    icon: "info",
                    title: "시작하기",
                    path: SmsPaths.index,
                    disabled: !isLogined,
                    exact: true,
                    keywards: ["SMS", "템플릿", "대쉬보드"],
                    description: "SMS 및 템플릿 대쉬보드",
                    ...unLogined
                },
                {
                    icon: "addCircle",
                    title: "템플릿 설정",
                    path: SmsPaths.templates,
                    disabled: !isLogined,
                    exact: true,
                    keywards: ["SMS", "템플릿"],
                    description: "발신템플릿 정의 SMS 편리하게 이용하기",
                    ...sharedSMS
                },
                {
                    icon: "email",
                    title: "발신자 관리",
                    path: SmsPaths.senederRegist,
                    disabled: !isLogined,
                    exact: true,
                    keywards: ["SMS", "발신자"],
                    description: "SMS 발신자관리",
                    ...sharedSMS
                },
                {
                    icon: "historyWatch",
                    title: "발신 히스토리",
                    path: SmsPaths.history,
                    disabled: !isLogined,
                    keywards: ["SMS", "히스토리"],
                    description: "알림 서비스 발신 내역",
                    exact: true,
                    ...sharedSMS
                },
                {
                    icon: "info",
                    title: "SMS 서비스",
                    path: SmsPaths.info,
                    disabled: !isLogined,
                    exact: true,
                    keywards: ["SMS", "이메일", "자동발신"],
                    description: "고객에게 발신하는 알림서비스 자동 서비스",
                    ...sharedSMS
                },
            ]
        },
        {
            icon: "info",
            title: "고객센터",
            sub: [
                {
                    icon: "menu",
                    title: "Service 설정 1",
                    path: "/",
                    disabled: !isLogined,
                    keywards: ["문의글", "사용법", "메뉴얼"],
                    description: "문의글 남기기",
                    ...unLogined
                },
            ]
        },
    ]

    return MainMenuData;
}


export interface IProps extends RouteComponentProps {
    isOpen: boolean;
}

const Sidebar: React.FC<IProps> = ({ isOpen, location }) => {
    const context = useContext(AppContext);
    const { me, contextQueryLoading } = context;
    const { pathname, key } = useLocation();
    const menuData = getMenuData(context)
    const defaultIndex = getUrlIndex(pathname, menuData);
    const [menuIndex, setMenuIndex] = useState(defaultIndex)

    let history = useHistory();

    const handleMainMenuClick = (index: number) => {
        setMenuIndex(index);
    }

    const handleSubMenuClick = (path: string) => {
        history.push(path);
    }

    const { name, createdAt } = me || {};


    const { isLogined } = useContext(AppContext);

    useEffect(() => {
        setMenuIndex(defaultIndex)
    }, [location])


    // 로그인 onclick, login, logout 추가 y
    return (
        <div className={`sidebar ${isOpen || 'sidebar--close'} ${me || 'sidebar--unLogined'}`}>
            <Flex oneone className="sidebar__head">
                <div className="sidebar__logo">
                    <Logo />
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
                {contextQueryLoading ? undefined : <ul className="subMenu">
                    {menuData[menuIndex]?.sub.map((menu, index) =>
                        <SidebarSubMenu onMenuClick={handleSubMenuClick} key={`submenuList-${index}`} menu={menu} />
                    )}
                </ul>}
            </nav>
        </div>
    )
}

export default withRouter(Sidebar)
