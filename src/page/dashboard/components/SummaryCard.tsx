import { Flex, JDalign, JDcard, JDlist, s4 } from '@janda-com/front';
import { JDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { TElements } from '@janda-com/front/dist/types/interface';
import React from 'react';

export interface ISummaryCardProps extends JDcardProps {
    contents: TElements[]
}

export const SummaryCard: React.FC<ISummaryCardProps> = ({ contents, ...props }) => {
    const Contents = contents.map(c => <Flex className="summaryCard__li" vCenter between  >{c}</Flex>)
    return <JDcard className="summaryCard" head="요약카드" {...props}>
        <JDlist className="summaryCard__list" stripe contents={Contents} />
    </JDcard>;
};
