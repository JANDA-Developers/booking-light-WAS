import { JDcard } from '@janda-com/front';
import React from 'react';
import { useHistory } from 'react-router';
import { useBoardList } from '../../hook/useBoard';
import { boardList_BoardList_items } from '../../type/api';
import { SuperAdminPaths } from '../SuperAdminApp';
import { BoardCard } from "../components/BoardCard"
import DotButton from '../../component/dotButton/DotButton';

interface IProp { }

export const SuperBoardConfig: React.FC<IProp> = () => {
    const { items: boards } = useBoardList();
    const history = useHistory();

    const handleToDetail = (board: boardList_BoardList_items) => () => {
        history.push(SuperAdminPaths.boardConfigDetail + "/" + board._id)
    }

    const handleWrite = () => {
        history.push(SuperAdminPaths.boardConfigDetail)
    }

    return <div >
        {boards.map(board => <BoardCard
            mb
            hover
            board={board}
            key={board._id}
            onClick={handleToDetail(board)}
        />)}
        <DotButton onClick={handleWrite}>작성하기</DotButton>
    </div>;
};

export default SuperBoardConfig;