import { autoComma, InputText, JDalign, JDbutton, JDcard, JDsplinter, JDtypho, useModal } from "@janda-com/front";
import React from "react";
import AccountRegistModal from "./AccountRegistModal";

const Section: React.FC = ({ children }) => {
    return <div className="JDselection">
        {children}
    </div>
}


interface Iprops {
    registered: boolean;
}

const Account: React.FC<Iprops> = ({ registered }) => {

    const accountModalHook = useModal(true);

    return <div className="account">
        <Section>
            <JDtypho flex={{
                between: true,
                vCenter: true,
            }} weight={600}>
                출금 가능 금액
                <JDtypho color="point" flex weight={600} size="h6">
                    {autoComma(2240000)}
                    <JDtypho weight={300} color="black" size="tiny">
                        원
                    </JDtypho>
                </JDtypho>
                <JDsplinter />
                <JDtypho>출금 신청 금액</JDtypho>
                <InputText style={{
                    width: "100%"
                }} />
                <JDtypho weight={300} color="grey1" size="tiny">
                    원
                </JDtypho>
            </JDtypho>
        </Section>
        <Section>
            <JDalign flex={{
                between: true
            }}>
                <JDalign flex>
                    <JDtypho mr="large" weight={600}>
                        <JDalign mb="normal">
                            예금주명
                        </JDalign>
                        <JDalign mb="normal">
                            은행
                        </JDalign>
                        <JDalign mb="normal">
                            계좌번호
                        </JDalign>
                    </JDtypho>
                    <JDalign>
                        <JDalign mb="normal">
                            이서진
                        </JDalign>
                        <JDalign mb="normal">
                            국민은행
                        </JDalign>
                        <JDalign mb="normal">
                            555927834702
                        </JDalign>
                    </JDalign>
                </JDalign>
                <div>
                    <div>
                        <JDbutton br="square" mb="normal" mode="border" padding="huge">
                            계좌정보 수정
                        </JDbutton>
                    </div>
                    <div>
                        <JDbutton style={{
                            width: "100%"
                        }} br="square" mode="flat" padding="huge" thema="point">
                            출금 신청
                        </JDbutton>
                    </div>
                </div>
            </JDalign>

            {registered || <JDalign flex={{
                center: true,
                vCenter: true
            }} className="Account__cover">
                <JDtypho color="white">
                    등록된 계좌번호가 없습니다.
                </JDtypho>
                <JDbutton onClick={accountModalHook.openModal} mode="flat">
                    등록하기
                </JDbutton>
            </JDalign>}
        </Section>
        <Section>
            <JDcard foot={{
            }} className="account__infoCard">
                <div>
                    <JDtypho size="small" color="grey4" grid>
                        <JDalign col={{
                            full: 6,
                            md: 12
                        }}>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                        </JDalign>
                        <JDalign col={{
                            full: 6,
                            md: 12
                        }}>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                            <JDtypho mb="normal" color="grey4">
                                - 매주 목요일 오후 4시 이전에 지급 됩니다.
                    </JDtypho>
                        </JDalign>
                    </JDtypho>
                </div>
            </JDcard>
        </Section>
        <AccountRegistModal onSubmit={() => { }} modalHook={accountModalHook} />
    </div>
}

export default Account;