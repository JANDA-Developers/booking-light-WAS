import { Bold, JDcontainer, WindowSize } from "@janda-com/front";
import React from "react";
import { CardBtn } from "../../component/btns/ModalBtn";
import { ScrollBox } from "../../component/scrollBox/ScrollBox";
import {
    useNotificationManagerList,
    useNotificationSenderRegistConfirm,
    useNotificationSenderRequestList,
} from "../../hook/useNotification";
import { SenderViwer } from "../../page/smsRouter/components/SenederViewer";
import {
    notificationManagerList_NotificationManagerList_items,
    notificationManagerList_NotificationManagerList_items_senders,
    notificationSenderRequestList_NotificationSenderRequestList_data,
} from "../../type/api";
interface IProp {}

interface ISnederWithManager
    extends notificationManagerList_NotificationManagerList_items_senders {
    manager: notificationManagerList_NotificationManagerList_items;
}

export const SuperSenderRequest: React.FC<IProp> = () => {
    const { items } = useNotificationManagerList();
    const { data } = useNotificationSenderRequestList();
    const [regist] = useNotificationSenderRegistConfirm();

    const mapSender = items
        .map((data) =>
            data.senders.map(
                (sender): ISnederWithManager => ({ manager: data, ...sender })
            )
        )
        .flat();

    const handleRegistComplete = (data: ISnederWithManager) => () => {
        regist({
            variables: {
                managerId: data.manager._id,
                sender: data.sender,
            },
        });
    };

    return (
        <JDcontainer size={WindowSize.full} verticalPadding>
            <Bold>등록안된 발신자들</Bold>
            <ScrollBox mb>
                {data?.data.map((d) => d.sender).join(", ")}
            </ScrollBox>
            {mapSender.map((data, index) => (
                <SenderViwer
                    mb
                    foot={
                        <CardBtn
                            hide={
                                !!data.isRegisteredToAligo ||
                                !!data.isRegisteredToSES
                            }
                            onClick={handleRegistComplete(data)}
                        >
                            등록완료
                        </CardBtn>
                    }
                    key={index + "sender"}
                    sender={data}
                />
            ))}
            {}
        </JDcontainer>
    );
};

export default SuperSenderRequest;
