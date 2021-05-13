import {
    IJDalignProp,
    InputText,
    JDalign,
    JDmodalConfigProps,
    useModal,
} from "@janda-com/front";
import { IInputTextCutsomProp } from "@janda-com/front/dist/components/InputText/InputText";
import React from "react";
import { AddressModal } from "./AddressModal";

interface IProp extends IJDalignProp {
    inputProps?: IInputTextCutsomProp;
    address: string;
    modalProps?: JDmodalConfigProps;
    setAddress: (address: string) => void;
}

export const AddressInput: React.FC<IProp> = ({
    inputProps,
    address,
    setAddress,
    modalProps,
    ...props
}) => {
    const modalHook = useModal(false);

    const handleDaumPostalComplete = (data: any) => {
        let fullAddress = data.address;
        let extraAddress = "";

        if (data.addressType === "R") {
            if (data.bname !== "") {
                extraAddress += data.bname;
            }
            if (data.buildingName !== "") {
                extraAddress +=
                    extraAddress !== ""
                        ? `, ${data.buildingName}`
                        : data.buildingName;
            }
            fullAddress += extraAddress !== "" ? ` (${extraAddress})` : "";
        }
        setAddress(fullAddress);
        modalHook.closeModal();
    };

    return (
        <JDalign {...props}>
            <InputText
                value={address}
                readOnly
                {...inputProps}
                onFocus={modalHook.openModal}
            />
            <AddressModal
                modalHook={modalHook}
                focusContent
                modalProps={modalProps}
                onComplete={handleDaumPostalComplete}
                key={
                    modalHook.isOpen
                        ? "addressMOdal--open"
                        : "addressMOdal--close"
                }
                defaultQuery={address}
            />
        </JDalign>
    );
};
