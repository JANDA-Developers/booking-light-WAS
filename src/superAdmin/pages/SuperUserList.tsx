import { Flex, JDbutton, JDcontainer, JDlabel, JDpageHeader, Mb, Mr, SkipUpdate, useModal, WindowSize } from '@janda-com/front';
import { useUserList } from '../../hook/useUser';
import JDsearchBar from "../../atom/SearchBar"
import { _IUserFilter, _IUserSort } from '../../type/api';
import { SuperUserTable } from "../components/SuperUserTable";
import Pagination from "../../component/pagination/Pagination";
import React from 'react';
import { IPromptInfo, PormptModal } from '../../component/promptModal/PromptModal';
import { useSystemNotiCreate } from '../../hook/useSystemNoti';

interface IProp { }

export const SuperUserList: React.FC<IProp> = () => {
    const userListHook = useUserList();
    const { items, getLoading, paginatorHook, pageInfo } = userListHook;
    const promptModalHook = useModal<IPromptInfo>();
    const [createNoti] = useSystemNotiCreate({
        
    });

    const notiCreate = (message: string) => {
        createNoti({
            variables: {
                message
            }
        })
    }

    const handleSendNoti = () => {
        promptModalHook.openModal({
            callBack: notiCreate,
            title: "모두에게 알림 보내기",
            messageLabel: "메세지"
        })

    }

    return <div><JDpageHeader title="유저 리스트" desc="유저리스트." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <Flex mb vCenter>
                <JDsearchBar<_IUserFilter, _IUserSort> searchOps={[{
                    label: "이름",
                    value: "name__eq"
                }, {
                    label: "회사명",
                    value: "company__eq"
                }]}  {...userListHook} />
                <Mr />
                <JDbutton thema="primary" onClick={handleSendNoti} iconProp={{ icon: "bell2" }}>알림보내기</JDbutton>
            </Flex>
            <SkipUpdate skip={getLoading}>
                <SuperUserTable products={items} />
            </SkipUpdate>
            <Mb />
            <Flex center>
                <Pagination   {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
            </Flex>
        </JDcontainer>
        <PormptModal modalHook={promptModalHook} />
    </div>
};

export default SuperUserList;