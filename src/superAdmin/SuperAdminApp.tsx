import React from "react";
import { Route, Switch } from "react-router";
import { SuperLayout } from "./components/SuperLayout";
import SuperAdminDashBoard from "./pages/SuperAdminDashboard";
import SuperUserList from "./pages/SuperUserList";
import SuperStoreList from "./pages/SuperStores";
import SuperServiceTemplate from "./pages/SuperServiceTemplate";
import SuperAdminLogin from "./pages/SuperAdminLogin";
import SuperNotiHistory from "./pages/SuperNotiHistory";
import PurchaseBundleList from "./pages/SuperPurchases";
import SuperSenderRequest from "./pages/SuperSenderRequest";
import SuperSmsManagers from "./pages/SuperSmsManagers";
import { SuperUsageGraph } from "./pages/SuperUsageGraph";
import { SuperSettlement } from "./pages/SuperSettlement";
import { HashRouter as Router } from "react-router-dom";
import { useSuperMe } from "../hook/useUser";
import { SuperAppContext } from "./helper/superContext";
import "../scss/SuperApp.scss";
import "../scss/App.scss";
import { ReactTooltip, Toast } from "@janda-com/front";
import { BoardDocList } from "../page/boardDoc/BoardDocList";
import { BoardDocView } from "../page/boardDoc/BoardDocView";
import { BoardDocWrite } from "../page/boardDoc/BoardDocWrite";
import SuperQna from "./pages/SuperQna";
import SuperBoardConfig from "./pages/SuperBoardConfig";
import SuperBoardConfigDetail from "./pages/SuperBoardConfigDetail";

interface IProp {}

export enum SuperAdminPaths {
    smsManagers = "/smsManagers",
    senderRequest = "/senderRequest",
    userList = "/userList",
    purchaseList = "/purchaseList",
    storeList = "/storeList",
    servicePlane = "/servicePlane",
    usageGraph = "/usageGraph",
    notiHistory = "/notiHistory",
    settlement = "/settlement",
    boardWrite = "/board/write",
    boardView = "/board/view",
    notice = "/board/list/notice",
    boardList = "/board/list",
    boardConfig = "/boardConfig",
    boardConfigDetail = "/boardConfigDetail",
    bug = "/board/list/bug",
    qna = "/qna",
    question = "/board/list/question",
    main = "/",
}

export const SuperAdminApp: React.FC<IProp> = () => {
    localStorage.setItem("serviceProvider", "JANDA");

    const { data, getLoading } = useSuperMe();

    if (getLoading) return null;
    return (
        <SuperAppContext.Provider
            value={{
                serviceProvider: "JANDA",
                superMe: data,
            }}
        >
            <Router>
                <SuperLayout>
                    {!data && <SuperAdminLogin />}
                    {data && (
                        <Switch>
                            <Route
                                exact
                                path={SuperAdminPaths.main}
                                render={() => <SuperAdminDashBoard />}
                            />
                            <Route
                                exact
                                path={SuperAdminPaths.purchaseList}
                                render={() => <PurchaseBundleList />}
                            />
                            <Route
                                exact
                                path={SuperAdminPaths.userList}
                                render={() => <SuperUserList />}
                            />
                            <Route
                                path={SuperAdminPaths.usageGraph}
                                render={() => <SuperUsageGraph />}
                            />
                            <Route
                                path={SuperAdminPaths.storeList}
                                render={() => <SuperStoreList />}
                            />
                            <Route
                                path={SuperAdminPaths.servicePlane}
                                render={() => <SuperServiceTemplate />}
                            />
                            <Route
                                path={SuperAdminPaths.notiHistory}
                                render={() => <SuperNotiHistory />}
                            />
                            <Route
                                path={SuperAdminPaths.settlement}
                                render={() => <SuperSettlement />}
                            />
                            <Route
                                path={SuperAdminPaths.senderRequest}
                                render={() => <SuperSenderRequest />}
                            />
                            <Route
                                path={SuperAdminPaths.qna}
                                render={() => <SuperQna />}
                            />
                            <Route
                                path={SuperAdminPaths.smsManagers}
                                render={() => <SuperSmsManagers />}
                            />
                            {/* 보드페이지 */}
                            <Route
                                path={SuperAdminPaths.boardList + "/:boardKey"}
                                render={() => <BoardDocList />}
                            />
                            <Route
                                path={
                                    SuperAdminPaths.boardView +
                                    "/:boardKey/:boardDocId"
                                }
                                render={() => <BoardDocView />}
                            />
                            <Route
                                path={
                                    SuperAdminPaths.boardWrite +
                                    "/:boardKey/:boardDocId?"
                                }
                                render={() => <BoardDocWrite />}
                            />
                            {/* 보드설정 */}
                            <Route
                                exact
                                path={SuperAdminPaths.boardConfig}
                                render={() => <SuperBoardConfig />}
                            />
                            <Route
                                path={
                                    SuperAdminPaths.boardConfigDetail +
                                    "/:itemId?"
                                }
                                render={() => <SuperBoardConfigDetail />}
                            />
                        </Switch>
                    )}
                </SuperLayout>
            </Router>
            <Toast />
            <ReactTooltip id="mainTooltip" />
        </SuperAppContext.Provider>
    );
};

export default SuperAdminApp;
