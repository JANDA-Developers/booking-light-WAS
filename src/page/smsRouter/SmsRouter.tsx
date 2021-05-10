import React, { useContext } from "react";
import { Route, Switch } from "react-router-dom";
import AppContext from "../../context";
import { useMyNotificationManager } from "../../hook/useUser";
import { NotificationContext } from "./context";
import { SmsInvoice } from "./page/SmsInvoice";
import { SenderRegist } from "./page/SenderRegist";
import { SmsInfo } from "./page/SmsInfo";
import { SmsIndex } from "./page/SmsIndex";
import { NotificationTemplates } from "./page/SmsTEmplates";
import { IselectedOption } from "@janda-com/front/dist/types/interface";
import SmsHistory from "./page/SmsHistory";
import { DefaultEmailSenderOP, DefaultSenderOP } from "../../type/const";
import { autoHypen } from "@janda-com/front";
import { NotificationMethod } from "../../type/api";

// 바이페이지 라우터 (에디팅용)
// 쿼리 스트링에 id가 이 포함되어 있다면
// 바이페이지 라우터 (실전 iframe)

export enum SmsPaths {
    index = "/sms",
    info = "/sms/info",
    templates = "/sms/templates",
    history = "/sms/history",
    senederRegist = "/sms/senederRegist",
    invoce = "/sms/invoce",
}

interface IProp {}

export const SmsRouter: React.FC<IProp> = ({}) => {
    const { me } = useContext(AppContext);
    const { data } = useMyNotificationManager();

    if (!data) return null;
    const manager = data;

    const getOpsByType = (type: NotificationMethod) => {
        const typeSenders = manager?.senders.filter(
            (sender) => sender.type === type
        );
        const ops = typeSenders
            .filter(
                (sender) =>
                    sender.isRegisteredToSES || sender.isRegisteredToAligo
            )
            .map((sender) => ({
                label: autoHypen(sender.sender),
                value: sender.sender,
            }));

        console.log({ typeSenders });
        console.log({ ops });

        const isSms = type === NotificationMethod.SMS;
        const defaultOp = isSms ? DefaultSenderOP : DefaultEmailSenderOP;
        ops.push(defaultOp);
        return ops;
    };

    return (
        <div>
            <NotificationContext.Provider
                value={{
                    manager,
                    smsSendersOps: getOpsByType(NotificationMethod.SMS),
                    emailSendersOps: getOpsByType(NotificationMethod.EMAIL),
                }}
            >
                <Switch>
                    <Route
                        exact
                        path={SmsPaths.index}
                        render={() => <SmsIndex />}
                    />
                    <Route
                        path={SmsPaths.templates}
                        render={() => <NotificationTemplates />}
                    />
                    {/* <Route path={SmsPaths.purchase} render={() => <SmsPurchase />} /> */}
                    <Route
                        path={SmsPaths.history}
                        render={() => <SmsHistory />}
                    />
                    <Route
                        path={SmsPaths.invoce}
                        render={() => <SmsInvoice />}
                    />
                    <Route
                        path={SmsPaths.senederRegist}
                        render={() => <SenderRegist />}
                    />
                    <Route path={SmsPaths.info} render={() => <SmsInfo />} />
                </Switch>
            </NotificationContext.Provider>
        </div>
    );
};

export default SmsRouter;
