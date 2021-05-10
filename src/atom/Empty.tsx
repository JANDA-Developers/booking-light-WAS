import { JDatomClasses, JDbox, JDphotoFrame, JDtypho } from "@janda-com/front";
import {
    IDiv,
    JDatomExtentionSet,
} from "@janda-com/front/dist/types/interface";
import React from "react";
import classNames from "classnames";
import { isEmpty } from "lodash";

const emptyImg = {
    small: "/img/nodata--small.png",
    large: "/img/nodata--big.png",
};

interface IProp extends IDiv, JDatomExtentionSet {
    empty?: boolean | any;
    msg?: string;
    mode?: "plain";
    size?: keyof typeof emptyImg;
}

export const Empty: React.FC<IProp> = ({
    className,
    mode = "plain",
    msg = "데이터가 없습니다.",
    empty = true,
    mb,
    mr,
    hide,
    size = "small",
}) => {
    const classes = classNames("empty", className, {
        "empty--plain": mode === "plain",
        ...JDatomClasses({ hide, mb, mr }),
    });

    const isBig = size === "large";

    if (!isEmpty(empty)) return null;
    return (
        <JDbox className={classes} theme="grey1">
            <JDtypho
                color="grey3"
                flex={{ vCenter: true, center: true, column: isBig }}
            >
                <JDphotoFrame
                    style={isBig ? { width: "10rem" } : { width: "2.5rem" }}
                    mr
                    src={emptyImg[size]}
                />
                {msg}
            </JDtypho>
        </JDbox>
    );
};
