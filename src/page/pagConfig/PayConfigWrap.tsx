import React from 'react';
import PayConfig from './PayConfig';

interface IProp { }

const PayConfigWrap: React.FC<IProp> = () => {
    return <div>
        <PayConfig onPayClick={() => { }} defaultCardInfo={{
            busiOrIdNum: "23252342364234124",
            cardNumber: ["1234", "1234", "1234", "12345"],
            limitDate: "0332",
            password: "12"
        }} />
    </div>;
};

export default PayConfigWrap;