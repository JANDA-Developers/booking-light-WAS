import { Excel, Flex, JDcard, JDcontainer, JDpageHeader, Mr, SkipUpdate, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { IconButton } from '../../atom/iconButton/IconButton';
import JDsearchBar from '../../atom/SearchBar';
import Pagination from '../../component/pagination/Pagination';
import AppContext from '../../context';
import { useSettlementTransferList } from '../../hook/useSettlement';
import { getExcelBySettlement } from '../../utils/getExcelData';
import { SettlementHistoryTable } from './components/SettlementHistoryTable';

interface IProp { }

export const SettlementHistory: React.FC<IProp> = () => {
    const history = useHistory()
    const settlementTrasferListHook = useSettlementTransferList()
    const { items: settlementHistories, paginatorHook, setFilter, filter, getLoading, pageInfo } = settlementTrasferListHook;
    const { selectedStore, me } = useContext(AppContext);

    return <div>
        <JDpageHeader title="구매리스트" desc="구매리스트 확인하기." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <Flex mb vCenter>
                <JDsearchBar searchOps={[{
                    label: "메세지",
                    value: "message__contains"
                }, {
                    label: "이름",
                    value: "name__contains"
                }, {
                    label: "설명",
                    value: "description__contains"
                }]}  {...settlementTrasferListHook} />
                <Mr />
                <Excel data={getExcelBySettlement(settlementHistories)} element={<IconButton icon="list" tooltip="엑셀출력" />} />
            </Flex  >

            <JDcard mb head="지급 히스토리 리스트" >
                <SkipUpdate skip={getLoading}>
                    <SettlementHistoryTable histories={settlementHistories} />
                </SkipUpdate>
            </JDcard>
            <Pagination {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
        </JDcontainer>
    </div>;
};

export default SettlementHistory