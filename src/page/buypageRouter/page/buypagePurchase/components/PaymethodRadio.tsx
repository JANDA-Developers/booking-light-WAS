import { IJDalignProp, IUseSelect, JDradio } from "@janda-com/front";
import React from "react";
import { Paymethod } from "../../../../../type/api";
import { payMethodKr } from "../../../../../utils/enumConverter";

interface IProp
    extends Omit<IUseSelect, "options">,
        Omit<IJDalignProp, "onChange"> {
    paymethods: Paymethod[];
}

export const PaymethodRadios: React.FC<IProp> = ({
    selectedOption,
    onChange,
    paymethods,
    ...props
}) => {
    return (
        <JDradio
            mb
            onChange={(method) => {
                onChange({
                    label: payMethodKr(method),
                    value: method,
                });
            }}
            selectedValue={selectedOption?.value}
            btns={paymethods.map((paymethod) => ({
                key: paymethod + "radio",
                label: payMethodKr(paymethod),
                value: paymethod,
            }))}
            {...props}
        />
    );
};
