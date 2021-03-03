import { JDavatar, useDropDown, useFilesManager, JDalign, JDiconSearchInput, JDsearchInput, Bold, toast, JDpreloader, onCompletedMessage, LocalManager } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useContext, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { AuthPaths } from '../../AuthRouter';
import AppContext from '../../context';
import { useSignOut } from '../../hook/useUser';
import { Paths } from '../../MainRouter';
import Noti from '../notification/Noti';
import ProfileModal, { Tservice } from '../profile/ProfileModal';
import Header from './Header';
import { version } from "../../../package.json"

interface IProp {
    key?: string;
    sideOpen: boolean;
    setSide: ISet<boolean>;
}

export const HeaderWrap: React.FC<IProp> = ({ setSide, sideOpen }) => {
    const uploader = useFilesManager();
    const history = useHistory();
    const dropDownHook = useDropDown();
    const { me } = useContext(AppContext);
    const notiLength = me?.unReadSystemNoties.length;
    const [search, setSearch] = useState("");
    const [signOut] = useSignOut({
        onCompleted: ({ SignOut }) => {
            if (SignOut.ok) {
                history.push(AuthPaths.login)
            }
        }
    })

    const services: Tservice[] = [
        {
            icon: "menu",
            title: "환경설정",
            onClick: () => {
                toast("준비중입니다.")
            }
        },
        {
            icon: "menu",
            title: "고객센터",
            onClick: () => {
                toast("준비중입니다.")
            }
        },
        {
            icon: "menu",
            title: "마이페이지",
            onClick: () => {
                toast("준비중입니다.")
            }
        },
        {
            icon: "menu",
            title: "로그아웃",
            onClick: () => {
                signOut()
            }
        }
    ]


    return <Header onMenuClick={() => {
        setSide(!sideOpen)
    }}>
        <JDalign style={{
            position: "relative"
        }} flex={{
            vCenter: true
        }}>
            <JDsearchInput
                mr="large"
                className="header__searchInput"
                SearchComponent={(prop) => <div>
                    <JDiconSearchInput {...prop} />
                </div>}
                onSelectData={() => {
                    console.log("");
                }}
                onSearchChange={v => {
                    setSearch(v);
                }}
                enterBehavior="scroll"
                head={'DummyData'}
                dataList={[]}
                searchValue={search}
            />
            <JDalign mr="large">
                <Noti
                    iconProp={{
                        badge: notiLength ? `${notiLength}` : undefined,
                        size: "small",
                        color: "white",
                        tooltip: notiLength ? `새로운 알림이 ${notiLength}개 있습니다.` : undefined,
                    }}
                    notiIds={me?.unReadSystemNoties} />
            </JDalign>
            <JDavatar hover size="small" onClick={(e) => {
                e.stopPropagation();
                const cooldinate = {
                    top: '2.5rem',
                    right: 0
                }
                dropDownHook.open(undefined, cooldinate)
            }} uploader={uploader} />
            <ProfileModal dropBoxHook={dropDownHook} userInfo={{
                image: me?.profileImage?.uri || "",
                name: me?.name || "",
                version: version
            }} services={services} />
        </JDalign>
    </Header>;
};


export default HeaderWrap;