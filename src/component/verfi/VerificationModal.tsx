import { TimePerMs, InputText, IUseModal, JDbutton, JDmodal, JDmodalConfigProps, toast, JDtypho } from "@janda-com/front";
import React, { useEffect, useState } from "react";
import JDTimer from "../../atom/Timer";
import Timer from "react-compound-timer";
import { TuseVerification } from "../../hook/useVerification";
import { VerificationTarget } from "../../type/api";

let RE_SEND_COUNT = 10;

export interface IVerfiModalInfo {
  payload: string;
  target?: VerificationTarget;
}

interface IProps extends JDmodalConfigProps, TuseVerification {
  modalHook: IUseModal<IVerfiModalInfo>;
  payload?: string;
  target: VerificationTarget;
}

const VerificationModal: React.FC<IProps> = ({
  modalHook,
  payload = modalHook.info?.payload || "",
  totalLoading,
  verifiStart,
  verifiComplete,
  code,
  setCode,
  target
}) => {
  const _target = modalHook.info?.target || target;
  const isPhone = _target === VerificationTarget.PHONE;
  const [isTimeOver, setTimeOver] = useState(false);

  const handleResend = () => {
    if (totalLoading) return;
    if (!RE_SEND_COUNT) {
      toast.error(isPhone ? "더이상 인증 문자를 발송할 수 없습니다." : "더이상 이메일을 발송할 수 없습니다.")
      return;
    }
    if (RE_SEND_COUNT < 5) {
      alert(`재발송 가능 횟수 ${RE_SEND_COUNT}회 남았습니다.`)
    }
    verifiStart(payload)
    RE_SEND_COUNT = RE_SEND_COUNT - 1;
  }

  const handleComplete = async () => {
    if (totalLoading) return;
    if (isTimeOver)
      toast.warn("시간이 초과하였습니다. 다시 인증요청을 해주세요.");

    await verifiComplete().then((data) => {
      if (data?.ok) {
        modalHook.closeModal();
      }
    })
  }

  useEffect(() => {
    if (modalHook.isOpen)
      verifiStart(payload)
  }, [modalHook.isOpen])

  return (
    <JDmodal
      {...modalHook}
      head={{
        title: isPhone ? "핸드폰 인증하기" : "이메일 인증하기",
      }}
      foot={
        <div>
          <JDbutton
            id="verfiCompleteBtn"
            mode="flat"
            thema={"primary"}
            label={"인증완료"}
            onClick={handleComplete}
          />
          <JDbutton
            mode="flat"
            thema="grey2"
            disabled={RE_SEND_COUNT === 0}
            label={"인증번호 재발송"}
            onClick={handleResend}
          />
        </div>
      }
      loading={totalLoading}
      className="Modal"
      overlayClassName="Overlay"
      ariaHideApp={false}
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
        value={code}
        onChange={setCode as any}
        label={"인증하기"}
      />
      {/* <JDtypho onClick={()=>{
        const result = confirm("인증 문자가 오지 않을시 이메일 인증으로 대체 할 수 있습니다. 이메일 인증으로 진행 하시겠습니까?");
        if(result) {
          modalHook.closeModal();
        }
      }} hover color="grey2">인증 문자가 오지 않아요.</JDtypho> */}
    </JDmodal>
  );
};

export default VerificationModal;
