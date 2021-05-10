import { IJDalignProp, JDalign } from "@janda-com/front";
import React from "react";

interface IProp extends IJDalignProp {}

export const IconRadioBtn: React.FC<IProp> = ({ className, ...props }) => {
    return <JDalign className={"JDiconRadioBtn " + className} {...props} />;
};
