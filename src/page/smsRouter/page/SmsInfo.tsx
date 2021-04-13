import { IMG_REPO, JDbutton, JDcard, JDcontainer, JDdoc, JDdocHeader, JDdocSection, JDlist, JDpageHeader } from "@janda-com/front";
import React, { useState } from "react";
import { useHistory } from "react-router";
import PhotoFrame from "../../../component/photoFrame/PhotoFram";
import { Paths } from "../../../MainRouter";

interface Iprops {
}

export const SmsInfo: React.FC<Iprops> = ({ }) => {
    const history = useHistory();

    return (
        <div>
            <JDpageHeader desc={"SMS 이용에대한 안내 드립니다"} title={'SMS 안내'} />
            <JDcontainer verticalPadding>
                <JDcard>
                    <PhotoFrame
                        unStyle
                        lang="kr"
                        type=".png"
                        src={IMG_REPO + `booking_app/describe/smsinfo_img_02`}
                    />
                    <JDdoc>
                        <JDdocSection>
                            <JDdocHeader>{'SMS양식 저장하는 방법'}</JDdocHeader>
                            <div>
                                1. <b>SMS양식</b> 메뉴에서 <b>[양식생성]</b>을 클릭합니다.
        </div>,
                                <div>
                                2. 양식생성 화면에서 타이틀과, 메시지를 입력하시고 메시지화면에서 중간
                                중간에 생성할
          <b>
                                    일자/정보/예약자명/가격/결제방법/결제상태/AI 무인
                                    솔루션URL
          </b>
          문구를 아래에 <b>양식메시지</b>에서 클릭하시면 메시지 발송시에
          자동으로 정보가 입력됩니다.
        </div>,
                                <div>
                                <PhotoFrame
                                    src={`https://s3.ap-northeast-2.amazonaws.com/booking.stayjanda.files/booking_app/describe/smsinfo_img_01.png`}
                                />
                            </div>,
                                <div>
                                3. 자동발신 상태를{" "}
                                <b>예약취소시/예약생성시/예약생성시(미결제)/예약업데이트시</b> 별로
          선택하여 설정하고
        </div>,
                                <div>
                                별로 지정을 해주시고 우측에 <b>자동발신 활설화</b> 여부를 on / oFF
          설정해주시면 언제든지 고객에게 알림 문자가 발송되게 설정됩니다
        </div>
                        </JDdocSection>
                        <JDdocSection>
                            <JDdocHeader>{'단체SMS 보내는 방법'}</JDdocHeader>
                            <span>
                                1. 단체SMS는 솔루션 메인화면과 예약목록 화면에서 가능합니다.
                                    <b>메인화면</b>에서는 오늘의 예약리스트 상단에 <b>‘단체메시지’</b>{" "}
                                    버튼을 클릭하셔야 보낼 수 있고, <b>예약목록</b> 화면에서는 내가 원하는
                                    예약자를 선택하여 리스트 상단에 <b>‘문자전송’</b>버튼을 클릭해서
                                    여러명에게 단체문자를 보낼 수 있습니다.
                                    </span>,
                                <div>
                                2. 그러나 단체SMS를 보내기 위해서는 <b>SMS양식</b>화면에서 미리 만들어
                                    둔 SMS양식이 있어야 합니다. 개성있고 재밌는 SMS양식을 만들어주세요.
                                    예시 : 조식알림문자, 저녁 파티이벤트 안내 문자, 공사안내, 분실물안내,
                                    긴급대피안내문자
                                    </div>
                        </JDdocSection>
                        <div className="JDflex--center">
                            <JDbutton
                                mr="no"
                                onClick={() => {
                                    history.push(Paths.sms);
                                }}
                                thema="primary"
                                iconProp={{
                                    icon: "arrowBack"
                                }}
                                label={"SMS설정 바로가기"}
                            />
                        </div>
                    </JDdoc>
                </JDcard>
            </JDcontainer>
        </div>
    );
};

export default SmsInfo;
