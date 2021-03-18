import { Flex, JDcard, Split } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Info } from '../../../atom/Info';
import { VerifiedBadge } from '../../../component/statusBadges/VerifiedBadge';
import { FnotificationSender } from '../../../type/api';
import { notificationMethodKr } from '../../../utils/enumConverter';
import { RegisteredAligoBadge } from './RegisteredAligoBadge';

interface IProp extends IJDcardProps {
    sender: FnotificationSender
}

export const SenderViwer: React.FC<IProp> = ({ sender, ...props }) => {
    const { isRegisteredToAligo, isVerified, files, sender: payload, type, label } = sender;
    return <JDcard head={label || payload}  {...props}>
        <Flex mb="tiny" vCenter>
            <Info mr="huge" label="발신번호" value={payload} />
            <Info label="발신타입" value={notificationMethodKr(type)} />
        </Flex>
        <Flex vCenter>
            <Info mr="huge" label="인증여부" value={<VerifiedBadge isVerified={isVerified} />} />
            <Info label="등록완료" value={<RegisteredAligoBadge isRegisteredToAligo={isRegisteredToAligo} />} />
        </Flex>
    </JDcard>;
};
