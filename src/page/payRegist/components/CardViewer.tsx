import { JDcard } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { FbillingMethod } from '../../../type/api';
import CreaditCard from './CreditCard';

interface IProp extends IJDcardProps {
    billingMethod: FbillingMethod
}

export const CardViewer: React.FC<IProp> = ({ billingMethod, ...props }) => {
    return <JDcard {...props}>
        <CreaditCard payment={billingMethod} />
    </JDcard>;
};
