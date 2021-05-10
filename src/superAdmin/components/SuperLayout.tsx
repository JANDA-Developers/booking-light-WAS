import {
    Flex,
    isEmpty,
    JDalign,
    JDiconSearchInput,
    JDsearchInput,
} from "@janda-com/front";
import React, { useState } from "react";
import Header from "../../component/header/Header";
import { IIcons } from "../../component/icons/declation";
import { IAppContext } from "../../context";
import { SuperAdminPaths } from "../SuperAdminApp";
import SuperHeader from "./SuperHeader";
import Sidebar from "../../component/sidebar/Sidebar";
import { TSidebarSub } from "../../component/sidebar/SidebarSubMenu";

interface IProp {}

export interface IMenu {
    icon: IIcons;
    title: string;
    sub: Pick<TSidebarSub, "icon" | "title" | "exact" | "path">[];
}

export const getMenuData = (context: IAppContext): IMenu[] => {
    const MainMenuData: IMenu[] = [
        {
            icon: "houseGear",
            title: "홈",
            sub: [
                {
                    icon: "home",
                    title: "홈",
                    exact: true,
                    path: SuperAdminPaths.main,
                },
                {
                    icon: "barGraph",
                    title: "서비스 사용현황",
                    path: SuperAdminPaths.usageGraph,
                },
            ],
        },
        {
            icon: "store",
            title: "상점",
            sub: [
                {
                    icon: "menu",
                    title: "스토어 리스트",
                    path: SuperAdminPaths.storeList,
                },
            ],
        },
        {
            icon: "box2",
            title: "구매목록",
            sub: [
                {
                    icon: "menu",
                    title: "전체 구매목록",
                    path: SuperAdminPaths.purchaseList,
                },
            ],
        },
        {
            icon: "addCircle",
            title: "유저",
            sub: [
                {
                    icon: "menu",
                    title: "유저리스트",
                    path: SuperAdminPaths.userList,
                },
            ],
        },
        {
            icon: "sms",
            title: "SMS",
            sub: [
                {
                    icon: "menu",
                    title: "발신자관리",
                    path: SuperAdminPaths.senderRequest,
                },
                {
                    icon: "menu",
                    title: "사용량관리",
                    path: SuperAdminPaths.smsManagers,
                },
            ],
        },
        {
            icon: "pay",
            title: "결제",
            sub: [
                {
                    icon: "menu",
                    title: "멤버쉽 서비스",
                    path: SuperAdminPaths.servicePlane,
                },
                {
                    icon: "menu",
                    title: "서브몰 & 지급",
                    path: SuperAdminPaths.settlement,
                },
            ],
        },
        {
            icon: "addCircle",
            title: "서비스",
            sub: [
                {
                    icon: "menu",
                    title: "QNA",
                    path: SuperAdminPaths.qna,
                },
                {
                    icon: "menu",
                    title: "공지사항",
                    path: SuperAdminPaths.notice,
                },
                {
                    icon: "menu",
                    title: "버그리포트",
                    path: SuperAdminPaths.bug,
                },
                {
                    icon: "menu",
                    title: "질문 리스트",
                    path: SuperAdminPaths.question,
                },
            ],
        },
        {
            icon: "board",
            title: "게시판",
            sub: [
                {
                    icon: "menu",
                    title: "게시판 설정",
                    path: SuperAdminPaths.boardConfig,
                },
            ],
        },
    ];

    return MainMenuData;
};

export const SuperLayout: React.FC<IProp> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(true);

    return (
        <div>
            <Flex className="layout" oneone>
                <Sidebar
                    setSide={setIsOpen}
                    _getMenuData={getMenuData as any}
                    isOpen={isOpen}
                />
                <div className="layout__contents">
                    <SuperHeader sideOpen={isOpen} setSide={setIsOpen} />
                    {children}
                </div>
            </Flex>
        </div>
    );
};
