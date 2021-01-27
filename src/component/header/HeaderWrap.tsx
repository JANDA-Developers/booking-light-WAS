import { useMutation } from '@apollo/client';
import { getOperationName } from '@apollo/client/utilities';
import { JDnoti, JDavatar, useDropDown, useFilesManager, JDalign, JDiconSearchInput, JDsearchInput, Bold, toast, JDpreloader, onCompletedMessage } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { SIGNOUT } from '../../apollo/mutations';
import { ME } from '../../apollo/queries';
import { AuthPaths } from '../../AuthRouter';
import { Paths } from '../../MainRouter';
import { signOut } from '../../type/api';
import { completeMsg } from '../../utils/utils';
import ProfileModal, { Tservice } from '../profile/ProfileModal';
import Header from './Header';

const DataMypageInfo = {
    userInfo: {
        image: "",
        name: "이서진",
        version: "JANDA Booking Light Version 이용 중"
    },
}

interface IProp {
    key?: string;
    sideOpen: boolean;
    setSide: ISet<boolean>;
}

export const HeaderWrap: React.FC<IProp> = ({ setSide, sideOpen }) => {
    const uploader = useFilesManager();
    const dropDownHook = useDropDown();
    const [search, setSearch] = useState("");

    const [signOutMu, { loading }] = useMutation<signOut>(SIGNOUT, {
        onCompleted: ({ SignOut }) => {
            completeMsg(SignOut, "로그아웃", "로그아웃 실패")
            window.location.reload()
        }
    });

    const service: Tservice[] = [
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
                signOutMu()
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
                <JDnoti iconProp={{
                    badge: "1",
                    size: "small",
                    color: "white",
                    tooltip: "새로운 알림이 N개 있습니다.",
                }} notiLines={[{
                    date: new Date(),
                    title: "샘플노티1",
                    desc: "샘플노트DESC",
                    key: "sample1"
                }]} />
            </JDalign>
            <JDavatar hover size="small" onClick={(e) => {
                e.stopPropagation();
                const cooldinate = {
                    top: '2.5rem',
                    right: 0
                }
                dropDownHook.open(undefined, cooldinate)
            }} uploader={uploader} />
            <ProfileModal dropBoxHook={dropDownHook} userInfo={DataMypageInfo.userInfo} services={service} />
            <JDpreloader loading={loading} />
        </JDalign>
    </Header>;
};


export default HeaderWrap;