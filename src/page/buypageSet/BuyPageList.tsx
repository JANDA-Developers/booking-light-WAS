import { JDcontainer, JDpageHeader, WindowSize } from '@janda-com/front';
import React, { useContext } from 'react';
import AppContext from '../../context';

interface IProp { }

export const BuyPageList: React.FC<IProp> = () => {
    const { selectedStore } = useContext(AppContext);
    return <div>
        <JDpageHeader title="예약페이지 생성하기" desc="원하는 형태의 예약페이지 생성하기" />
        <JDcontainer verticalPadding size={WindowSize.full}>
        </JDcontainer>
    </div>;
};

export default BuyPageList;