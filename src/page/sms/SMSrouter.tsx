import React from 'react';
import JDSMS from "@janda-com/sms"
import { JDcontainer, JDpreloader, WindowSize } from '@janda-com/front';
import { Route, Switch } from 'react-router-dom';
import SenderPage from './page/Sender';
import HistoryPage from './page/History';
import InitPage from './page/Init';
import TemplatePage from './page/Template';

export enum SmsPaths {
  template = '/sms/template',
  history = '/sms/history',
  init = '/sms/init',
  sender = '/sms/sender',
}

interface IProp {
  smsKey?: string;
}

export const SMSRouter: React.FC<IProp> = ({ smsKey = "asd" }) => {

  const SMSCore = new JDSMS({
    autoSendCases: [
      { label: '고객이 카드 예약시 나에게', value: '111' },
      { label: '고객이 카드 예약시 고객에게', value: '1111' },
      { label: '고객이 예약을 취소시 나에게', value: '1111' },
      { label: '고객이 예약을 취소시 고객에게', value: '1111' },
      { label: '고객이 예약을 취소할시 나에게', value: '1112' },
      { label: '고객이 무통장입금 예약시 고객에게', value: '1113' },
      { label: '고객이 무통장입금 예약시 나에게', value: '1114' },
      { label: '내가 예약시 고객에게', value: '!23235' },
      { label: '내가 예약을 취소시 고객에게', value: '!2323' },
    ],
    templateCreateDefulatTriggerTag: [
      {
        key: 'storeKey',
        value: '스토어',
      },
    ],
    smsReplaceKeys: [
      {
        label: '이용 시작 시간 (년월일) 시간',
        value: '{TIME_FOR_USAGE}',
      },
    ],
    smsKey: "",
  });



  if (!smsKey) {
    return (
      <div>
        <JDcontainer size={WindowSize.lg}>
          <InitPage
            Core={SMSCore}
            mode="start"
          />
        </JDcontainer>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        <Route
          exact={true}
          path={SmsPaths.init}
          render={() => {
            return <InitPage Core={SMSCore} />;
          }}
        />
        <Route
          exact={true}
          path={SmsPaths.template}
          render={() => {
            return <TemplatePage Core={SMSCore} />;
          }}
        />
        <Route
          exact={true}
          path={SmsPaths.history}
          render={() => {
            return <HistoryPage
              Core={SMSCore}
            />;
          }}
        />
        <Route
          exact={true}
          path={SmsPaths.sender}
          render={() => {
            return <SenderPage Core={SMSCore} />;
          }}
        />
      </Switch>

      <JDpreloader floating loading={true} />
    </div>
  );
};

export default SMSRouter
