import React from 'react';
import { Info } from '../../atom/Info';
import { Fattribute } from '../../type/api';

interface IProp {
    attrs: Fattribute[]
}

export const AttributeViewer: React.FC<IProp> = ({ attrs }) => {
    return <div >
        {attrs.map(attr => <Info mr mb key={attr.key} value={attr.value || ""} label={attr.label || ""} />)}
    </div>;
};
