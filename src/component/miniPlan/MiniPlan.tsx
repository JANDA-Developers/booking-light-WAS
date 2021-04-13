import { autoComma, Bold, JDbutton, Small, Split } from '@janda-com/front';
import React, { useContext } from 'react';
import { useHistory } from 'react-router';
import { Empty } from '../../atom/Empty';
import AppContext from '../../context';
import { Paths } from '../../MainRouter';
import { invoiceFindOne_InvoiceFindOne, me_Me_subscribPlan } from '../../type/api';
import DotButton from '../dotButton/DotButton';

interface IProp {
    plan?: me_Me_subscribPlan | null | undefined,
    invoice?: invoiceFindOne_InvoiceFindOne
}

export const MiniPlan: React.FC<IProp> = ({ invoice: _invoice, plan: _plan }) => {
    const { me, thisMonthInvoice } = useContext(AppContext);
    const invoice = _invoice || thisMonthInvoice
    const plan = _plan || me?.subscribPlan;

    const history = useHistory();

    const handleChagnePlan = () => {
        history.push(Paths.memberShip);
    }


    if (invoice && !plan) return <div>
        <Small>이번달 사용량</Small>
        {autoComma(invoice?.summaryTotal.amount)}원
    </div>

    return <div >
        {!plan && <DotButton onClick={handleChagnePlan}>구동중인 플랜이 없습니다.</DotButton>}
        {plan &&
            <div>
                <Bold mb="tiny">
                    {plan?.name} 구독중
            </Bold>
                <Small mb>
                    ({autoComma(plan?.price)}
                    <Split>/</Split>
                    {`${plan?.billingFrequency}월`})
            </Small>
                <JDbutton size="small" thema="black" br="round" mode="border" onClick={handleChagnePlan} label="변경하기" />
            </div>
        }
    </div>;
};
