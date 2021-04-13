import { JDcard } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Info } from '../../../atom/Info';
import { me_Me_settlementMall } from '../../../type/api';
import { BankCodeKr } from '../../../type/const';
import { yyyymmdd } from '../../../utils/dateFormat';

interface IProp extends IJDcardProps {
    mall: me_Me_settlementMall;
}

export const MallCard: React.FC<IProp> = ({ mall, ...props }) => {
    return <JDcard {...props}>
        <Info label="예금주" mb value={mall.accountHolder} />
        <Info label="계좌" mb value={mall.accountNumber} />
        <Info label="은행" mb value={BankCodeKr[mall.bankCode]} />
        <Info label="등록일" mb value={yyyymmdd(mall.createdAt)} />
    </JDcard>;
};
