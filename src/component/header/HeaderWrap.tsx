import {
    JDavatar,
    useDropDown,
    useFilesManager,
    JDalign,
    JDiconSearchInput,
    JDsearchInput,
    Bold,
    toast,
    JDpreloader,
    onCompletedMessage,
    LocalManager,
    ISearchViewData,
    useModal,
    JDtypho,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { AuthPaths } from "../../AuthRouter";
import AppContext from "../../context";
import { useSignOut } from "../../hook/useUser";
import { Paths } from "../../MainRouter";
import Noti from "../notification/Noti";
import ProfileModal, { Tservice } from "../profile/ProfileModal";
import Header from "./Header";
import { version } from "../../../package.json";
import { getMenuData } from "../sidebar/Sidebar";
import { useUnReadNotifiFind } from "../../hook/useNotification";
import { useStoreList } from "../../hook/useStore";
import { AlertModal, IAlertModalInfo } from "../AlertModal/AlertModal";
import { SystemNotiSeverity } from "../../type/api";
import { useSystemNotiRead } from "../../hook/useSystemNoti";

interface IProp {
    key?: string;
    sideOpen: boolean;
    setSide: ISet<boolean>;
}

export const HeaderWrap: React.FC<IProp> = ({ setSide, sideOpen }) => {
    const history = useHistory();
    const dropDownHook = useDropDown();
    const modalHook = useModal<IAlertModalInfo>();
    const context = useContext(AppContext);
    const { me, isLogined } = context;
    const [search, setSearch] = useState("");
    const [signOut] = useSignOut({
        onCompleted: ({ SignOut }) => {
            if (SignOut.ok) {
                history.push(AuthPaths.login);
            }
        },
    });

    const [read] = useSystemNotiRead();
    const { data: unReadNoties } = useUnReadNotifiFind({
        skip: !isLogined,
    });
    const unReadLength = unReadNoties?.length;

    const seriousNoti = unReadLength
        ? (unReadNoties || []).find(
              (d) => d.severity === SystemNotiSeverity.Serious
          )
        : undefined;

    useEffect(() => {
        if (seriousNoti) {
            modalHook.openModal({
                content: seriousNoti.content,
                title: <JDtypho>관리자로부터 온 메세지 입니다.</JDtypho>,
            });
            read({
                variables: {
                    ids: [seriousNoti._id],
                },
            });
        }
    }, []);

    const menuData = getMenuData(context);
    const dataList: ISearchViewData[] = menuData
        .map((menu) =>
            menu.sub.map(
                (sub): ISearchViewData => ({
                    id: sub.path,
                    title: sub.title,
                    describe:
                        sub.description +
                        " " +
                        sub?.keywards.map((keyward) => "#" + keyward).join(" "),
                    tag: "Menu",
                })
            )
        )
        .flat();

    const services: Tservice[] = [
        {
            icon: "menu",
            title: "환경설정",
            onClick: () => {
                toast("준비중입니다.");
            },
        },
        {
            icon: "menu",
            title: "고객센터",
            onClick: () => {
                toast("준비중입니다.");
            },
        },
        {
            icon: "menu",
            title: "마이페이지",
            onClick: () => {
                history.push(Paths.profile);
            },
        },
        {
            icon: "menu",
            title: "로그아웃",
            onClick: () => {
                signOut();
                dropDownHook.close();
            },
        },
    ];

    return (
        <Header
            sideOpen={sideOpen}
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
                            <JDiconSearchInput {...prop} />
                        </div>
                    )}
                    onSelectData={(data) => {
                        if (data.tag === "Menu") {
                            history.push(data.id);
                        }
                    }}
                    onSearchChange={(v) => {
                        setSearch(v);
                    }}
                    enterBehavior="scroll"
                    head={"통합검색"}
                    dataList={dataList}
                    searchValue={search}
                />
                <JDalign mr="large">
                    <Noti
                        iconProp={{
                            badge: unReadLength ? `${unReadLength}` : undefined,
                            size: "small",
                            color: "white",
                            tooltip: unReadLength
                                ? `새로운 알림이 ${unReadLength}개 있습니다.`
                                : undefined,
                        }}
                        notiIds={me?.unReadSystemNoties}
                    />
                </JDalign>
                <JDavatar
                    className="header__avatar"
                    img={me?.profileImage?.uri}
                    hover
                    size="normal"
                    onClick={(e) => {
                        e.stopPropagation();
                        const cooldinate = {
                            top: "2.5rem",
                            right: 0,
                        };
                        dropDownHook.open(undefined, cooldinate);
                    }}
                />
                <ProfileModal
                    dropBoxHook={dropDownHook}
                    userInfo={{
                        image: me?.profileImage?.uri || "",
                        name: me?.name || "",
                        version: version,
                    }}
                    services={services}
                />
            </JDalign>
            <AlertModal {...modalHook} />
        </Header>
    );
};

export default HeaderWrap;
