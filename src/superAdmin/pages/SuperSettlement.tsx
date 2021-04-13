import { Bold, Flex, JDcard, JDcontainer, JDicon, JDpageHeader, Mb, SkipUpdate, useModal, WindowSize } from '@janda-com/front';
import React from 'react';
import Pagination from "../../component/pagination/Pagination";
import { useSettlementTransferCancel, useSettlementTransfer, useSettlementTransferPlainCancel, useSettlementTransferList, useSettlementMallList } from "../../hook/useSettlement"
import { SuperMallTable } from '../components/SettlementMallTable';
import { JDsearchBar } from "../../atom/SearchBar"
import { ISettlementModalInfo, SettlementModal } from '../components/SettlementModal';

interface IProp { }

export const SuperSettlement: React.FC<IProp> = () => {
    const settlementMallHook = useSettlementMallList()
    const settlementModalHook = useModal<ISettlementModalInfo>()
    const { items, getLoading, paginatorHook, pageInfo } = settlementMallHook;

    return <div><JDpageHeader title="스토어 리스트" desc="스토어 리스트." />
        <JDcontainer verticalPadding size={WindowSize.full}>
            <JDsearchBar searchOps={[{
                label: "계좌주",
                value: "accountHolder__eq"
            }, {
                label: "서브몰 아이디",
                value: "submallId__eq"
            }, {
                label: "서브몰 이름",
                value: "submallName__eq"
            }]}  {...settlementMallHook} />
            <Mb />
            <SkipUpdate skip={getLoading}>
                <SuperMallTable handleView={(subMall) => {
                    settlementModalHook.openModal({
                        submall: subMall
                    })
                }} malls={items} />
            </SkipUpdate>
            <Mb />
            <Flex center>
                <Pagination  {...paginatorHook} totalPageCount={pageInfo.totalPageCount} />
            </Flex>
        </JDcontainer>
        <SettlementModal key={settlementModalHook.info?.submall._id} modalHook={settlementModalHook} />
    </div>
};
