import {
    Flex,
    JDbutton,
    JDcheckBox,
    JDcontainer,
    JDlabel,
    JDpageHeader,
    Mb,
    Mr,
    SkipUpdate,
    useModal,
    WindowSize,
} from "@janda-com/front";
import { useUserList } from "../../hook/useUser";
import JDsearchBar from "../../atom/SearchBar";
import {
    userList_UserList_items,
    _IUserFilter,
    _IUserSort,
} from "../../type/api";
import { SuperUserTable } from "../components/SuperUserTable";
import Pagination from "../../component/pagination/Pagination";
import React, { useState } from "react";
import {
    IPromptInfo,
    PormptModal,
} from "../../component/promptModal/PromptModal";
import {
    SuperUserModal,
    ISuperUserModalInfo,
} from "../components/SuperUserModal";
import { useSystemNotiCreate } from "../../hook/useSystemNoti";
import { completeMsg } from "../../utils/onCompletedMessage";
import {
    ISystemNotiModalInfo,
    SystemNotiSendModal,
} from "../../component/systemNotiSendModal/SystemNotiSendModal";

interface IProp {}

export const SuperUserList: React.FC<IProp> = () => {
    const userListHook = useUserList();
    const { items, getLoading, paginatorHook, pageInfo } = userListHook;
    const systemNotiModalHook = useModal<ISystemNotiModalInfo>();
    const userModalHook = useModal<ISuperUserModalInfo>();

    const handleNoti = (targetId?: string) => {
        systemNotiModalHook.openModal({
            targetId,
        });
    };

    return (
        <div>
            <JDpageHeader title="유저 리스트" desc="유저리스트." />
            <JDcontainer verticalPadding size={WindowSize.full}>
                <Flex mb vCenter>
                    <JDsearchBar<_IUserFilter, _IUserSort>
                        searchOps={[
                            {
                                label: "이름",
                                value: "name__eq",
                            },
                            {
                                label: "회사명",
                                value: "company__eq",
                            },
                        ]}
                        {...userListHook}
                    />
                    <Mr />
                    <JDbutton
                        thema="primary"
                        onClick={() => {
                            handleNoti;
                        }}
                        iconProp={{ icon: "bell2" }}
                    >
                        알림보내기
                    </JDbutton>
                </Flex>
                <SkipUpdate skip={getLoading}>
                    <SuperUserTable
                        handleNoti={(user) => {
                            handleNoti(user._id);
                        }}
                        handleEdit={(user) => {
                            userModalHook.openModal({
                                userId: user._id,
                            });
                        }}
                        users={items}
                    />
                </SkipUpdate>
                <Mb />
                <Flex center>
                    <Pagination
                        {...paginatorHook}
                        totalPageCount={pageInfo.totalPageCount}
                    />
                </Flex>
                <SuperUserModal
                    key={userModalHook.info?.userId}
                    modalHook={userModalHook}
                />
            </JDcontainer>
            <SystemNotiSendModal modalHook={systemNotiModalHook} />
        </div>
    );
};

export default SuperUserList;
