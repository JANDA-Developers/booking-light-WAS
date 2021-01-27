import { Flex, JDicon, JDcard, JDColor, JDtypho, Thin } from '@janda-com/front';
import { CardProps } from '@janda-com/front/dist/components/cards/Card';
import { JDatomExtentionSet } from '@janda-com/front/dist/types/interface';
import React, { useContext } from 'react';
import { TransactionStatus } from 'src/type/api';
import { DashboardContext } from '../../../context';

interface IProp extends CardProps, JDatomExtentionSet {
    type: "total" | "complete" | "unPaied" | "cancel";
}

export const CountCard: React.FC<IProp> = ({ type, ...props }) => {
    const { itemsHook } = useContext(DashboardContext);
    const { items } = itemsHook;

    let iconColor: JDColor = "grey4";

    let count = 0;
    let title: string = ""

    if (type === "total") {
        title = "총 예약수"
        iconColor = "grey4"
        count = items.length
    }

    if (type === "complete") {
        title = "완료 예약수"
        iconColor = "positive"
        count = items.filter(i => i.transaction?.paymentStatus === TransactionStatus.DONE).length
    }

    if (type === "cancel") {
        title = "취소 예약수"
        iconColor = "error"
        count = items.filter(i => i.transaction?.paymentStatus === TransactionStatus.CANCELED).length
    }

    if (type === "unPaied") {
        title = "미결제 예약수"
        iconColor = "new"
        count = items.filter(i => i.transaction?.paymentStatus === TransactionStatus.PENDING).length
    }

    return <JDcard mode="border" {...props} >
        <Flex between>
            <div>
                <Thin size="small">{title}</Thin>
                <JDtypho>{count}</JDtypho>
            </div> <JDicon color={iconColor} icon="addCircle" />
        </Flex>
    </JDcard>;
};

export default CountCard;