import { InputText, JDalign, JDswitch } from '@janda-com/front';
import React from 'react';
import { Fattribute } from '../../../type/api';
import { AttributeInput } from '../../formCreater/components/AttributeInput';

interface IProp {
    keys: string[]
    attrs: Fattribute[]
}

export const BoardInputs: React.FC<IProp> = ({ attrs, keys }) => {
    return <div>{
        keys.map(key => {
            const targetAttr = attrs.find(at => at.key === key);
            return <JDalign mb key={key}>
                {targetAttr &&
                    <AttributeInput attribute={targetAttr} />
                }
                {
                    key === "title" &&
                    <InputText label="제목" />
                }
                {
                    key === "isOpen" &&
                    <JDswitch mb label="공개하기" onChange={() => {
                    }} checked={true} />
                }
            </JDalign>
        })
    }</div>
};
