import { JDtooltip, s4, ReactTooltip } from "@janda-com/front";
import React, { useEffect, useMemo } from "react";

interface IProp {
    Tag?: keyof JSX.IntrinsicElements;
    message: string;
}

export const Tip: React.FC<IProp> = ({ Tag = "div", children, message }) => {
    const newId = useMemo(() => s4(), []);

    const tooltipObj = {
        "data-tip": "tooltip",
        "data-for": `Tip${newId}`,
    };

    return (
        <Tag style={{ width: "max-content" }} {...tooltipObj}>
            {children}
            <JDtooltip type="dark" effect="solid" id={`Tip${newId}`}>
                <span>{message}</span>
            </JDtooltip>
        </Tag>
    );
};
