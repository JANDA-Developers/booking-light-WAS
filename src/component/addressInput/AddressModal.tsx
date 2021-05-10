import { IUseModal, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import React from "react";
import DaumPostcode, { DaumPostcodeProps } from "react-daum-postcode";

interface IProp extends DaumPostcodeProps {
    modalProps?: JDmodalConfigProps;
    modalHook: IUseModal;
}

export const AddressModal: React.FC<IProp> = ({
    modalProps,
    modalHook,
    ...props
}) => {
    return (
        <JDmodal
            {...modalHook}
            {...modalProps}
        >
            <DaumPostcode {...props} />
        </JDmodal>
    );
};
