import React from 'react';
import { useRouteMatch } from 'react-router';
import { useBoardFindById } from '../../hook/useBoard';
import { BoardConfiger } from '../components/BoardConfiger.tsx/BoardConfiger';

type IDetailRouteProp = { itemId: string }

export interface ISuperBoardConfig {
    productId: string;
}


interface IProp { }

export const SuperBoardConfigDetail: React.FC<IProp> = () => {
    const { params: { itemId } } = useRouteMatch<IDetailRouteProp>()
    const { item: board } = useBoardFindById(itemId)
    return <BoardConfiger key={board?._id} board={board} />;
};
export default SuperBoardConfigDetail;
