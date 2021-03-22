import React, { useContext } from 'react';
import { Route, Switch } from 'react-router-dom';
import AppContext from '../../context';
import { useMyNotificationManager } from '../../hook/useUser';
import { NotificationContext } from './context';
import { SmsInvoice } from './page/SmsInvoice';
import { SenderRegist } from './page/SenderRegist';
import { SmsInfo } from './page/SmsInfo';
import { SmsIndex } from './page/SmsIndex';
import { SmsTemplates } from './page/SmsTEmplates';
import { IselectedOption } from '@janda-com/front/dist/types/interface';
import SmsHistory from './page/SmsHistory';
import { DefaultSenderOP } from '../../type/const';
import { autoHypen } from '@janda-com/front';


// 바이페이지 라우터 (에디팅용)
// 쿼리 스트링에 id가 이 포함되어 있다면 
// 바이페이지 라우터 (실전 iframe)

export enum SmsPaths {
    index = '/sms',
    info = '/sms/info',
    templates = '/sms/templates',
    history = '/sms/history',
    senederRegist = '/sms/senederRegist',
    invoce = '/sms/invoce',
}

interface IProp {
}

export const SmsRouter: React.FC<IProp> = ({ }) => {
    const { me } = useContext(AppContext);
    const { data } = useMyNotificationManager()

    if (!data) return null;
    const manager = data;

    const sendersOps: IselectedOption[] = manager?.senders.map(sender => ({
        label: autoHypen(sender.sender),
        value: sender.sender
    }));
    sendersOps.push(DefaultSenderOP)

    return <div>
        <NotificationContext.Provider value={{
            manager,
            sendersOps
        }}>
            <Switch>
                <Route exact path={SmsPaths.index} render={() => <SmsIndex />} />
                <Route path={SmsPaths.templates} render={() => <SmsTemplates />} />
                {/* <Route path={SmsPaths.purchase} render={() => <SmsPurchase />} /> */}
                <Route path={SmsPaths.history} render={() => <SmsHistory />} />
                <Route path={SmsPaths.invoce} render={() => <SmsInvoice />} />
                <Route path={SmsPaths.senederRegist} render={() => <SenderRegist />} />
                <Route path={SmsPaths.info} render={() => <SmsInfo />} />
            </Switch>
        </NotificationContext.Provider>
    </div>
};

export default SmsRouter;