import { JDbutton } from "@janda-com/front";
import { IButtonProps } from "@janda-com/front/dist/components/button/Button";
import { IIcons } from "@janda-com/front/dist/components/icons/declation";
import React from "react";

interface IProp extends IButtonProps {
    icon: IIcons;
    tooltip?: string;
}

export const IconButton: React.FC<IProp> = ({ icon, tooltip, ...props }) => {
    return (
        <JDbutton
            tooltip={tooltip}
            padding={"small"}
            mode="iconButton"
            br="square"
            iconProp={{ icon }}
            {...props}
        />
    );
};
