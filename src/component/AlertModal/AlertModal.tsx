import { IUseModal, JDmodal } from "@janda-com/front";
import React from "react";

export interface IAlertModalInfo {
    title: JSX.Element;
    content: string;
}

interface IProp extends IUseModal<IAlertModalInfo> {}

export const AlertModal: React.FC<IProp> = ({ info, ...props }) => {
    return (
        <JDmodal {...props} head={{ element: info?.title || "" }}>
            <div dangerouslySetInnerHTML={{ __html: info?.content || "" }} />
        </JDmodal>
    );
};
