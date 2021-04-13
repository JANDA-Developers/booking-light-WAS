import { JDcontainer, WindowSize } from '@janda-com/front';
import React from 'react';
import { BookingSummaryCard } from '../../page/dashboard/components/BookingSummaryCard';
import { StoreSummaryCard } from '../../page/dashboard/components/StoreSummaryCard';
import { SuperUserSummaryCard } from "../components/SuperUserSummaryCard"

interface IProp { }

export const SuperAdminDashBoard: React.FC<IProp> = () => {
    return <JDcontainer size={WindowSize.full} verticalPadding>
        <StoreSummaryCard />
        <BookingSummaryCard />
        <SuperUserSummaryCard />
    </JDcontainer>;
};

export default SuperAdminDashBoard;