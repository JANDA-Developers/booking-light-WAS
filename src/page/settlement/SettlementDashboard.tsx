import { Flex, JDcontainer, JDpageHeader, Mb } from '@janda-com/front';
import React, { useContext } from 'react';
import { CountCard } from '../../component/countCard/CountCard';
import AppContext from '../../context';
import { MallCard } from './components/MallCard';
import { MallRegister } from './components/MallRegister';

interface IProp { }

export const SettlementDashbaord: React.FC<IProp> = () => {
    const { me } = useContext(AppContext);
    const mall = me?.settlementMall;

    return <div >
        <JDpageHeader title="수급받기" desc="고객님의 소중한 돈을 돌려드립니다." />
        <JDcontainer verticalPadding>
            <MallRegister />
            <Mb />
            {mall && <MallCard head={"등록된 계좌"} mall={mall} />}
        </JDcontainer>
    </div>
};

export default SettlementDashbaord