import { JDbadge, JDColor } from '@janda-com/front';
import { IJDbadge } from '@janda-com/front/dist/components/badge/Badge';
import React from 'react';
import { InvoiceStatus, Status } from '../../type/api';

interface IProp {
    disabled: boolean | null | undefined;
}

export const DisableBadge: React.FC<IProp> = ({ disabled }) => {
    return <JDbadge className="disabledBadge" thema={disabled ? "grey2" : "primary"} >{disabled ? "비활성" : "활성"}</JDbadge>;
};



interface IStatusBadgeProp<S = Status> extends IJDbadge {
    status?: S | null
}

export const StatusBadge: React.FC<IStatusBadgeProp> = ({ status, ...props }) => {
    if (!status) return null;

    const getStatusColor = (): JDColor => {
        if (status === Status.CANCELED) return "error"
        if (status === Status.COMPLETED) return "primary"
        if (status === Status.PENDING) return "grey2"
        return "grey2"
    }

    return <JDbadge thema={getStatusColor()} {...props} />
}

export const InvoiceStatusBadge: React.FC<IStatusBadgeProp<InvoiceStatus>> = ({ status, ...props }) => {
    if (!status) return null;

    const getStatusColor = (): JDColor => {
        if (status === InvoiceStatus.PAID) return "primary"
        if (status === InvoiceStatus.PENDING) return "grey2"
        if (status === InvoiceStatus.UNPAID) return "error"
        return "grey2"
    }

    return <JDbadge thema={getStatusColor()} {...props} />
}
