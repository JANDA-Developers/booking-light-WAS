import {
    InputText,
    JDalign,
    JDsearchInput,
    Bold,
    ISearchViewData,
    autoComma,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext, useState } from "react";
import AppContext from "../../context";
import { useUserList } from "../../hook/useUser";
import { yyyymmddHHmm } from "../../utils/dateFormat";
import Header from "../../component/header/Header";
import Noti from "../../component/notification/Noti";
import { SuperAppContext } from "../helper/superContext";
import { useUnReadNotifiFind } from "../../hook/useNotification";
const { superAdminVersion } = require("../../../package.json");

interface IProp {
    key?: string;
    sideOpen: boolean;
    setSide: ISet<boolean>;
}

export const SuperHeader: React.FC<IProp> = ({ setSide, sideOpen }) => {
    const superContext = useContext(SuperAppContext);
    const { superMe } = superContext;
    const notiLength = superMe?.unReadSystemNoties.length;
    const [search, setSearch] = useState("");

    const { data } = useUnReadNotifiFind({
        fetchPolicy: "network-only",
        skip: !superMe,
    });

    const { items: menuData } = useUserList({}, { skip: !superMe });
    const dataList: ISearchViewData[] = menuData.map(
        (menu): ISearchViewData => ({
            id: menu._id,
            title: menu.name,
            describe: menu.email + " " + autoComma(menu?.phoneNumber),
            tag: yyyymmddHHmm(menu.createdAt),
        })
    );

    const unReadNotiLegn = data?.length || 0;

    return (
        <Header
            onMenuClick={() => {
                setSide(!sideOpen);
            }}
        >
            <JDalign
                style={{
                    position: "relative",
                }}
                flex={{
                    vCenter: true,
                }}
            >
                <JDsearchInput
                    mr="large"
                    className="header__searchInput"
                    SearchComponent={(prop) => (
                        <div>
                            <InputText
                                className="header__inputComponent"
                                {...prop}
                            />
                        </div>
                    )}
                    onSelectData={() => {
                        console.log("");
                    }}
                    onSearchChange={(v) => {
                        setSearch(v);
                    }}
                    enterBehavior="scroll"
                    head={"유저검색"}
                    dataList={dataList}
                    searchValue={search}
                />
                <JDalign mr="large">
                    <Noti
                        iconProp={{
                            badge: unReadNotiLegn
                                ? `${unReadNotiLegn}`
                                : undefined,
                            size: "small",
                            color: "white",
                            tooltip: unReadNotiLegn
                                ? `새로운 알림이 ${unReadNotiLegn}개 있습니다.`
                                : undefined,
                        }}
                        notiIds={superMe?.unReadSystemNoties}
                    />
                </JDalign>
                <Bold>{superAdminVersion}</Bold>
            </JDalign>
        </Header>
    );
};

export default SuperHeader;
