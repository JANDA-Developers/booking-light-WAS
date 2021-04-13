import { Flex, JDcard, JDswitch, Small } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React, { useState } from 'react';
import { DetailBtn } from '../../../atom/detailBtn/DetailBtn';
import { Info } from '../../../atom/Info';
import { DisableBadge } from '../../../component/statusBadges/StatusBadges';
import { FproductAutomator } from '../../../type/api';
import { WeekKr } from '../../../type/const';
import { yyyymmdd } from '../../../utils/dateFormat';
import { ProductTemplateTable } from '../../product/component/ProductTemplateTable';

interface IProp extends IJDcardProps {
    autoCreater: FproductAutomator
    onToggleDisable: () => void;
}

export const AutoCreateCard: React.FC<IProp> = ({ autoCreater, onToggleDisable, ...props }) => {
    const { name, latestGenerate, latestDestroy, exceptedDayOfWeeks, templates, isDisabled, countDate, createdAt, description, targetItemName } = autoCreater;
    const [isOpen, setOpen] = useState(false);
    return <JDcard head={<Flex between>{name} <JDswitch onChange={onToggleDisable} tooltip="활성화" checked={!isDisabled} /></Flex>} {...props} >
        <div>
            <Flex mb="small">
                <Info mr label="대상" value={targetItemName} />
                <Info label="생성일" value={yyyymmdd(createdAt)} />
            </Flex>
            <Flex mb="small">
                <Info mr label="~일 앞까지 생성" value={countDate + "일"} />
                <Info label="마지막 생성일" value={latestGenerate || "생성없음"} />
            </Flex>
            <Flex mb="small">
                <Info mr label="마지막 취소일" value={latestDestroy || "취소없음"} />
                <Info label="제외요일" value={exceptedDayOfWeeks.map(week => WeekKr[week]).join(", ")} />
            </Flex>
            <Small mb>
                {description}
            </Small>
            <DetailBtn mb open={isOpen} onClick={() => {
                setOpen(!isOpen)
            }} />
            {isOpen &&
                <ProductTemplateTable products={templates} />
            }
        </div>
    </JDcard>;
};
