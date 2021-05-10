import {
    Flex,
    JDcard,
    JDcontainer,
    JDlabel,
    WindowSize,
} from "@janda-com/front";
import React from "react";
import { BookingSummaryCard } from "./components/BookingSummaryCard";
import { ItemSummaryCard } from "./components/ItemSummaryCard";
import { ProductStatusSummaryCard } from "./components/ProductStateSummary";
import { ProductSummaryCard } from "./components/ProductSummaryCard";
import { SettlementSummaryCard } from "./components/SettlementSummaryCard";
import { NotificationSummaryCard } from "./components/NotificationSummaryCard";
import { StoreSummaryCard } from "./components/StoreSummaryCard";
import { HistorySummaryCard } from "../smsRouter/components/HistorySummaryCard";
import { AnnounceSummaryCard } from "./components/AnnounceSummaryCard";

interface IProp {}

export const Dashboard: React.FC<IProp> = () => {
    return (
        <JDcontainer size={WindowSize.full} verticalPadding>
            {/* 스토어현황 */}
            <JDlabel txt="공지사항" />
            <Flex mb oneone>
                <AnnounceSummaryCard />
            </Flex>
            <JDlabel txt="설정관리" />
            <Flex mb oneone>
                <StoreSummaryCard />
                <ItemSummaryCard />
                <ProductSummaryCard />
            </Flex>
            <JDlabel txt="상태관리" />
            <ProductStatusSummaryCard />
            <BookingSummaryCard />
            <SettlementSummaryCard />
            <HistorySummaryCard />
        </JDcontainer>
    );
};

export default Dashboard;
