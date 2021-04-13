import { Mb } from '@janda-com/front';
import { ISet } from '@janda-com/front/dist/types/interface';
import React from 'react';
import { Fattribute } from '../../type/api';
import { AttributeInput } from '../formCreater/components/AttributeInput';

interface IProp {
    attrs: Fattribute[],
    setAttrs: ISet<Fattribute[]>
}

export const AttributeInputs: React.FC<IProp> = ({ attrs, setAttrs }) => {
    return <div >
        {attrs.map(attr => <div key={attr.key}>
            <AttributeInput onChange={(val) => {
                attr.value = val;
                setAttrs([
                    ...attrs
                ])
            }} attribute={attr} />
            <Mb />
        </div>
        )}
    </div>;
};
