import { JDbadge, JDColor } from '@janda-com/front';
import { IJDbadge } from '@janda-com/front/dist/components/badge/Badge';
import React from 'react';
import { Status } from '../../type/api';

interface IProp {
    disabled: boolean | null | undefined;
}

export const DisableBadge: React.FC<IProp> = ({ disabled }) => {
    return <JDbadge className="disabledBadge" thema={disabled ? "grey2" : "primary"} >{disabled ? "비활성" : "활성"}</JDbadge>;
};


interface IStatusBadgeProp extends IJDbadge {
    status: Status
}

export const StatusBadge: React.FC<IStatusBadgeProp> = ({ status, ...props }) => {

    const getStatusColor = (): JDColor => {
        if (status === Status.CANCELED) return "error"
        if (status === Status.COMPLETED) return "primary"
        if (status === Status.PENDING) return "grey2"
        return "grey2"
    }

    return <JDbadge thema={getStatusColor()} {...props} />
}