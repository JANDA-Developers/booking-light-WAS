import { autoComma } from '@janda-com/front';
import React, { useContext } from 'react';
import { Empty } from '../../atom/Empty';
import { Info } from '../../atom/Info';
import AppContext from '../../context';
import { yyyymmddHHmm } from '../../utils/dateFormat';
import { InvoiceStatusBadge } from '../statusBadges/StatusBadges';

interface IProp { }

export const ThisMonthInvocie: React.FC<IProp> = () => {
    const { thisMonthInvoice } = useContext(AppContext);
    if (!thisMonthInvoice) return <Empty msg="이번달 청구액이 없습니다." />;
    const { status, yyyymm, billingAt, summaryTotal, unpaidReason, expectedBillingDayOfMonth } = thisMonthInvoice;
    const { amount } = summaryTotal;
    return <div>
        <Info label="결제금" value={autoComma(amount)} />
        <Info label="결제일" value={yyyymmddHHmm(billingAt)} />
        <Info label="청구기간" value={yyyymm.toString()} />
        <Info label="예상청구일" value={expectedBillingDayOfMonth?.toString()} />
        <InvoiceStatusBadge tooltip={unpaidReason || undefined} status={status} />
    </div>
};
