import { JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
import React from 'react';
import { useHistory, useRouteMatch } from 'react-router';
import { BoardDocEditor } from "../../component/boardDoc/BoardDocEditor"
import { useBoardFindByKey } from '../../hook/useBoard';
import { useBoardDocFindById } from '../../hook/useBoardDoc';

interface IProp { }

type IDetailRouteProp = { boardKey: string, boardDocId?: string }

export const BoardDocWrite: React.FC<IProp> = () => {
    const history = useHistory();
    const { params: { boardDocId, boardKey } } = useRouteMatch<IDetailRouteProp>();
    const { item: board } = useBoardFindByKey(boardKey);
    const { item: doc } = useBoardDocFindById(boardDocId);

    if (!board) return null;
    return <div>
        <JDpageHeader title="보드쓰기" />
        <JDcontainer size={WindowSize.lg}>
            <BoardDocEditor
                board={board}
                key={doc?._id}
                boardDoc={doc}
                onCreated={() => {
                    history.go(-1);
                }}
                onDelete={() => {
                    history.go(-1);
                }}
                onUpdate={() => {
                    history.go(-1);
                }}
            />
        </JDcontainer>
    </div>;
};

export default BoardDocWrite;