import { Flex, JDcontainer, JDpageHeader } from '@janda-com/front';
import React, { useContext } from 'react';
import { CountCard } from '../../../component/countCard/CountCard';
import AppContext from '../../../context';
import { useInvoiceFind } from '../../../hook/useInvoice';
import { Action, FserviceUsageDetails, invoiceFindOne_InvoiceFindOne, ServiceUsageType } from '../../../type/api';
import { todayyyyymmNumber } from '../../../type/const';
import { HistorySummaryCard } from '../components/HistorySummaryCard';
import { SenderSummaryCard } from '../components/SenderSummaryCard';
import { TemplateSummaryCard } from '../components/TemplateSummaryCard';
import { NotificationContext } from '../context';

interface IProp {
}

export const SmsIndex: React.FC<IProp> = () => {
    const { usageMap } = useContext(AppContext);
    const { manager } = useContext(NotificationContext);
    const { emailPricing, currency, } = manager;

    const thisMonthSms = usageMap?.CREATE.NOTIFICATION_SMS;
    const thisMonthLms = usageMap?.CREATE.NOTIFICATION_LMS;
    const thisMonthMms = usageMap?.CREATE.NOTIFICATION_MMS;

    return <div >
        <JDpageHeader title="SMS 설정" desc="SMS와 이메일의 자동발신 및 양식 설정" />
        <JDcontainer verticalPadding>
            <Flex mb>
                <CountCard mr label={"이번달 SMS"} count={thisMonthSms?.count || 0} />
                <CountCard mr label={"이번달 LMS"} count={thisMonthLms?.count || 0} />
                <CountCard label={"이번달 MMS"} count={thisMonthMms?.count || 0} />
            </Flex>
            <TemplateSummaryCard />
            <HistorySummaryCard />
            <SenderSummaryCard />
            {/* 서머리카드 */}
            {/* 서머리카드 */}
            {/* 서머리카드 */}
            {/* 서머리카드 */}
        </JDcontainer>
    </div>;
};

