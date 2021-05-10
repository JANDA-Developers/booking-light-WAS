import {
    Flex,
    JDcontainer,
    JDpageHeader,
    Mb,
    SkipUpdate,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { useNotificationManagerList } from "../../hook/useNotification";
import { JDsearchBar } from "../../atom/SearchBar";
import SuperSmsManagerTable from "../components/SuperSmsManagerTable";
import Pagination from "../../component/pagination/Pagination";

interface IProp {}

export const SuperSmsManagers: React.FC<IProp> = () => {
    const notificationManagerListHook = useNotificationManagerList();
    const {
        paginatorHook,
        pageInfo,
        getLoading,
        items,
    } = notificationManagerListHook;
    return (
        <div>
            <JDpageHeader title="SMS 매니저 리스트" desc="SMS 매니저 리스트." />
            <JDcontainer verticalPadding size={WindowSize.full}>
                <JDsearchBar
                    searchOps={[
                        {
                            label: "이름",
                            value: "_id__not_in",
                        },
                    ]}
                    {...notificationManagerListHook}
                />
                <Mb />
                <SkipUpdate skip={getLoading}>
                    <SuperSmsManagerTable managers={items} />
                </SkipUpdate>
                <Mb />
                <Flex center>
                    <Pagination
                        {...paginatorHook}
                        totalPageCount={pageInfo.totalPageCount}
                    />
                </Flex>
            </JDcontainer>
        </div>
    );
};

export default SuperSmsManagers;
