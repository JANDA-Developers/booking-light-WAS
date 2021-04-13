import { JDmodal, PCshareBtns, useModal, share, } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import { Tshare } from "@janda-com/front/dist/utils/share";
import React from "react";
import isMobile from 'is-mobile';

interface IShareMasterProp extends IDiv {
    shareProp: Tshare
    noPc?: boolean;
}

export const ShareMaster: React.FC<IShareMasterProp> = ({ shareProp, children, noPc, ...props }) => {
    const modalHook = useModal();

    if (noPc && !isMobile()) return null
    if (typeof navigator.share === 'undefined') {
        return <div {...props} onClick={modalHook.openModal}>
            {children}
            <JDmodal head={{ title: "공유하기" }} {...modalHook}>
                <PCshareBtns />
            </JDmodal>
        </div>;
    }

    return (
        <div
            onClick={() => {
                share(shareProp);
            }}
        >
            {children}
        </div>
    )
}
