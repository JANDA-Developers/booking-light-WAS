import classNames from "classnames";
import { JDicon, JDatomClasses } from "@janda-com/front";
import {
    IDiv,
    JDatomExtentionSet,
} from "@janda-com/front/dist/types/interface";
import React, { HTMLAttributes } from "react";

interface IProp extends JDatomExtentionSet, HTMLAttributes<HTMLButtonElement> {
    withIcon?: boolean;
}

export const DotButton: React.FC<IProp> = ({
    className,
    children,
    withIcon = true,
    ...props
}) => {
    const classes = classNames("JDDotButton", className, {
        ...JDatomClasses(props),
    });

    return (
        <button className={classes} {...props}>
            {withIcon && <JDicon color="grey2" mr="large" icon="plus" />}
            {children}
        </button>
    );
};

export default DotButton;
