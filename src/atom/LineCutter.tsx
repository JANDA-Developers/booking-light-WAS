import { JDtypho } from "@janda-com/front";
import { IJDtyphoProp } from "@janda-com/front/dist/components/typho/Typho";
import React from "react";

interface IProp extends IJDtyphoProp {
    line?: number;
}

export const LineCutter: React.FC<IProp> = ({ line, ...props }) => {
    return (
        <JDtypho
            style={{ lineClamp: line, WebkitLineClamp: line }}
            className="lineCutter"
            {...props}
        />
    );
};
