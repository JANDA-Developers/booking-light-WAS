import { JDcontainer, useModal } from '@janda-com/front';
import React from 'react';
import JDSMS from "@janda-com/sms";
interface IProp {
    Core: JDSMS
}

export const History: React.FC<IProp> = ({ Core }) => {
    const { ChargeModalWrap, History } = Core;
    const chargeModalHook = useModal();
    const handleClickCharge = (amt: number) => {
        //   TODO charge Mu
        // chargeMu({
        //   variables: {
        //     amount: toNumber(amt),
        //   },
        // });
    }

    return <JDcontainer>
        <ChargeModalWrap
            onClickCharge={handleClickCharge}
            modalHook={chargeModalHook}
        />
        <History />
    </JDcontainer>;
};

export default History;
