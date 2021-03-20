import { JDcard, JDcontainer, JDpageHeader, Mb, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router-dom';
import { useNotificationHistory } from '../../../hook/useNotification';
import { SmsHistoryTable } from '../components/SmsHistoryTable';
import { ISmsHistoryModalInfo, SmsHistoryDetailModal } from '../components/HistoryDetailModal';
import JDsearchBar from '../../../atom/SearchBar';
import { notificationHistory_NotificationHistory_items } from '../../../type/api';
import Pagination from '../../../component/pagination/Pagination';
import { F_PAGEINFO } from '../../../apollo/gql/fragment/shared';

interface IProps { }

type IDetailRouteProp = { itemId?: string }

export const SmsHistoryList: React.FC<IProps> = () => {
    const history = useHistory()
    const notificationHistoryHook = useNotificationHistory()
    const { items: notificationHistories, paginatorHook, setFilter, filter, pageInfo } = notificationHistoryHook;
    const modalHook = useModal<ISmsHistoryModalInfo>()

    return <div>
        <JDpageHeader title="구매리스트" desc="구매리스트 확인하기." />
        <JDcontainer size={WindowSize.full}>
            {/* <ItemRadio handleSelectItem={handleSelectItem} itemIdFilter={itemIdFilter} /> */}
            <JDsearchBar searchOps={[{
                label: "발신자 번호",
                value: "sender__eq"
            }, {
                label: "휴대폰번호",
                value: "OR"
            }]}  {...notificationHistoryHook} />
            <Mb />
            <JDcard mb head="발신리스트" >
                <SmsHistoryTable handleView={(history) => {
                    modalHook.openModal({
                        history: history as notificationHistory_NotificationHistory_items
                    })
                }} histories={notificationHistories} />
            </JDcard>
            <Pagination {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
        </JDcontainer>
        <SmsHistoryDetailModal modalHook={modalHook} />
    </div>;
};

export default SmsHistoryList;