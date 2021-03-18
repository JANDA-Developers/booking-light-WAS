import React from "react";
import { JDtypho } from "@janda-com/front";
import { IDiv } from "@janda-com/front/dist/types/interface";
import { getByteLength } from "../../../utils/getBiteLength";

interface Iprop extends IDiv {
    msg: string
}

enum SmsType {
    "LMS" = "LMS",
    "SMS" = "SMS",
    "MMS" = "MMS"
}

const MsgTypeViewer: React.FC<Iprop> = ({ msg, ...props }) => {

    let type: SmsType = SmsType.SMS;
    let isNotSMS = false;
    const size = getByteLength(msg);

    if (size > 90) {
        type = SmsType.MMS;
        isNotSMS = true;
    }

    return <JDtypho size="superTiny" flex={{
        vCenter: true
    }} {...props} color="grey1">
        <JDtypho mr="tiny" >
            {size}{` Byte `}
        </JDtypho>
        <JDtypho color={isNotSMS ? "error" : undefined} mr="tiny">
            {type}
        </JDtypho>
        <JDtypho mr="tiny"  >
            치환 메세지에 따라서 정확하지 않을 수 있습니다.
        </JDtypho>
    </JDtypho>
}

export default MsgTypeViewer;