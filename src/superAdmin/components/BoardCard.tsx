import { JDcard } from '@janda-com/front';
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';
import React from 'react';
import { Info } from '../../atom/Info';
import { Fboard } from '../../type/api';
import { yyyymmdd } from '../../utils/dateFormat';

interface IProp extends IJDcardProps {
    board: Fboard
}

export const BoardCard: React.FC<IProp> = ({ board, ...props }) => {
    return <JDcard head={board.name} {...props}>
        <Info value={board.key} label={"보드키"} />
        <Info value={yyyymmdd(board.createdAt)} label={"생성일"} />
    </JDcard>;
};
