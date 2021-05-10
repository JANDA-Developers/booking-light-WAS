import { JDbutton } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import React, { useContext } from "react";

interface IProps extends IButtonProps {
    hanldePurchase: () => void;
}
// 최종결제버튼
export const PurchaseBtn: React.FC<IProps> = ({ hanldePurchase, ...props }) => {
    return (
        <JDbutton
            mode="flat"
            onClick={hanldePurchase}
            thema="primary"
            br="square"
            size="longLarge"
            {...props}
        />
    );
};
