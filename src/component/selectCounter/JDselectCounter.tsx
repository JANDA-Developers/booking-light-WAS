import { JDtypho, JDselect, IJDalignProp, IUseSelect, JDalign, JDbutton } from '@janda-com/front';
import { JDselectProps } from '@janda-com/front/dist/components/select/SelectBox';
import { IJDtyphoProp } from '@janda-com/front/dist/components/typho/Typho';
import React from 'react';
import { lastOf } from '../../utils/lastOf';

export interface ISelectCountProp extends IJDalignProp {
    selectHook: IUseSelect;
    label?: string;
    selectProps?: JDselectProps;
    labelProp?: IJDtyphoProp;
}

export const JDselectCounter: React.FC<ISelectCountProp> = ({
    labelProp,
    label,
    selectProps,
    selectHook,
    ...props
}) => {
    const { options = [], selectedOption, onChange } = selectHook;
    const count = selectedOption?.value || 0;
    const maxCount = lastOf(options)?.value || 0;

    const handleCount = (plus: boolean) => {
        console.log('count');
        console.log(count);
        onChange(options[count + (plus ? 1 : -1)]);
    };

    return (
        <JDalign
            className="counter"
            flex={{
                vCenter: true,
            }}
            {...props}
        >
            {label && (
                <JDtypho weight={600} mr="large" {...labelProp}>
                    {label}
                </JDtypho>
            )}
            <JDalign flex className="counter__inner">
                <JDbutton

                    disabled={count === 0}
                    thema="grey1"

                    mode="flat"
                    className="counter__btn"
                    onClick={() => {
                        handleCount(false);
                    }}
                >
                    -
                </JDbutton>
                <JDselect mr="no" mb="no" {...selectHook} {...selectProps} />
                <JDbutton
                    disabled={maxCount <= count}
                    thema="grey1"
                    mode="flat"
                    className="counter__btn"
                    onClick={() => {
                        handleCount(true);
                    }}
                >
                    +
                </JDbutton>
            </JDalign>
        </JDalign>
    );
};

