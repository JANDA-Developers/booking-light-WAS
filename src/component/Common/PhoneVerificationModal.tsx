import { IUseModal, JDbutton, JDmodal, JDmodalConfigProps } from "@janda-com/front";
import { InputText } from "@janda-com/front/dist/components/InputText/InputText";
import { useInput } from "@janda-com/front/dist/hooks/hook";
import { TimePerMs } from "@janda-com/front/dist/types/enum";
import React, { useState } from "react";
import Timer from "react-compound-timer/build";
import { toast } from 'react-toastify';
import JDTimer from "../../atom/Timer";

export interface IChainProp extends JDmodalConfigProps {
  modalHook: IUseModal<any>;
}

let RE_SEND_COUNT = 10;

interface IProps extends IChainProp {
  onReSendClick?: () => void;
  onCompleteClick: (key: string) => void;
  muLoading: boolean;
}

// 1. 상위에서 먼저 인증을 시작시키세요.
const PhoneVerificationModal: React.FC<IProps> = ({
  modalHook,
  muLoading,
  onReSendClick,
  onCompleteClick,
  ...props
}) => {
  const keyHook = useInput("");
  const [isTimeOver, setTimeOver] = useState(false);

  return (
    <JDmodal
      head={{
        title: "핸드폰 인증하기",
      }}
      foot={
        <div>
          <JDbutton
            id="verfiCompleteBtn"
            mode="flat"
            thema={"primary"}
            label={"인증하기"}
            onClick={() => {
              if (muLoading) return;
              if (isTimeOver) {
                toast.warn("시간이 초과하였습니다. 다시 인증요청을 해주세요.");
              }
              handleCompleteBtnClick(keyHook.value);
            }}
          />
          {handleReSend && (
            <JDbutton
              mode="flat"
              thema="grey2"
              disabled={RE_SEND_COUNT === 0}
              label={"인증번호 재발송"}
              onClick={() => {
                if (muLoading) return;
                handleReSend();
                RE_SEND_COUNT = RE_SEND_COUNT - 1;
              }}
            />
          )}
        </div>
      }
      loading={muLoading}
      {...modalHook}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
      {...props}
    >
      <JDTimer initialTime={TimePerMs.M * 3} direction="backward">
        {({ timerState }: any) => {
          if (timerState === "STOPPED") {
            setTimeOver(true);
          }
          return (
            <span className="JDtimer">
              <span className="JDtimer__minute">
                <Timer.Minutes />
                분
              </span>
              <span className="JDtimer__second">
                <Timer.Seconds />
                초
              </span>
            </span>
          );
        }}
      </JDTimer>
      <InputText
        placeholder={"******"}
        id="verifiKeyInput"
        {...keyHook}
        label={"인증하기"}
      />
    </JDmodal>
  );
};

export default PhoneVerificationModal;
