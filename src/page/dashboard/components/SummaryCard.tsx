import { Flex, JDalign, JDcard, JDlist, s4 } from '@janda-com/front';
import { JDcardProps } from '@janda-com/front/dist/components/cards/Card';
import { TElements } from '@janda-com/front/dist/types/interface';
import { isEmpty } from 'lodash';
import React from 'react';
import { Empty } from '../../../atom/Empty';

export interface ISummaryCardProps extends JDcardProps {
    contentsId: string;
    contents: TElements[]
    Empty?: TElements;
}

export const SummaryCard: React.FC<ISummaryCardProps> = ({ contentsId, contents, Empty: EmptyComponent, ...props }) => {
    const Contents = contents.map((c, index) => <Flex key={contentsId + index} className="summaryCard__li" vCenter between  >{c}</Flex>)
    const empty = isEmpty(contents);
    return <JDcard className="summaryCard" head="요약카드" {...props}>
        <div>
            <JDlist mb={empty ? "normal" : "no"} className="summaryCard__list" stripe contents={Contents} />
            {empty ? (EmptyComponent ? EmptyComponent : <Empty />) : null}
        </div>
    </JDcard>;
};
