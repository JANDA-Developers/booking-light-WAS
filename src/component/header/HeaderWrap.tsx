import { JDnoti, JDavatar, useDropDown, useFilesManager, JDalign, JDiconSearchInput, JDsearchInput, Bold } from '@janda-com/front';
import React, { useState } from 'react';
import ProfileModal, { Tservice } from '../profile/ProfileModal';
import Header from './Header';

const DataMypageInfo = {
    userInfo: {
        image: "",
        name: "이서진",
        version: "JANDA Booking Light Version 이용 중"
    },
}

const service: Tservice[] = [
    {
        icon: "menu",
        title: "환경설정"
    },
    {
        icon: "menu",
        title: "고객센터"
    },
    {
        icon: "menu",
        title: "마이페이지"
    },
    {
        icon: "menu",
        title: "로그아웃"
    }
]

interface IProp {
    key?: string;
}

export const HeaderWrap: React.FC<IProp> = () => {
    const uploader = useFilesManager();
    const dropDownHook = useDropDown();
    const [search, setSearch] = useState("");

    return <Header version={"1.0.0"} products={<div>
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
            <Bold mr="large">
                <JDnoti iconProp={{
                    badge: "1",
                    size: "normal",
                    color: "white",
                    tooltip: "새로운 알림이 N개 있습니다.",
                }} />
            </Bold>
            <JDavatar hover size="normal" onClick={(e) => {
                e.stopPropagation();
                const cooldinate = {
                    top: '2.5rem',
                    right: 0
                }
                dropDownHook.open(undefined, cooldinate)
            }} uploader={uploader} />
            <ProfileModal dropBoxHook={dropDownHook} userInfo={DataMypageInfo.userInfo} services={service} />
        </JDalign>
    </div>} />;
};


export default HeaderWrap;