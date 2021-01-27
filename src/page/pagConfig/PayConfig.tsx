import { JDalign, JDcard, JDcheckBox, JDcontainer, JDmodal, JDpageHeader, WindowSize, JDPrivacyPolicy, JDbutton, JDlabel, JDtypho, toast, JDlink, Split, JDhorizen } from '@janda-com/front';
import { useModal, JDpolicyViewer } from '@janda-com/front';
import { autoComma } from '@janda-com/front';
import { InputText } from '@janda-com/front';
import React, { useState } from 'react';
import { PolicyCard } from '../../component/policy/PolicyCard';

const Policies = {
    po1: JDPrivacyPolicy,
    po2: JDPrivacyPolicy,
    po3: JDPrivacyPolicy,
    po4: JDPrivacyPolicy
}


type TKeys = "po1" | "po2" | "po3" | "po4";
type TpolictType = {
    key: TKeys;
}

type TAgreePolices = {
    "po1": boolean,
    "po2": boolean,
    "po3": boolean,
    "po4": boolean;
}

type TCreditCardInfo = {
    cardNumber: string[];
    // MMYY
    limitDate: string;
    // ID num Or Busi Num
    busiOrIdNum: string;
    // First 2 digits
    password: string;
}

interface IProp {
    onPayClick: (cardInfo: TCreditCardInfo) => void;
    defaultCardInfo: TCreditCardInfo;
}


export const PayConfig: React.FC<IProp> = ({ defaultCardInfo, onPayClick }) => {
    const [cardInfo, setCardInfo] = useState<TCreditCardInfo>(defaultCardInfo)
    const [allToogle, setAllToggle] = useState(false);
    const [policyAgrees, setPolicyAgrees] = useState<TAgreePolices>({
        po1: false,
        po2: false,
        po3: false,
        po4: false
    })

    const { busiOrIdNum, cardNumber } = cardInfo;
    const modalHook = useModal<TpolictType>(false);
    const key = modalHook.info?.key || "po1";
    const policy = Policies[key];

    const handleDetailOpen = (key: TKeys) => {
        modalHook.openModal({ key });
    }

    const changeAll = () => {
        setAllToggle(!allToogle)

        policyAgrees.po1 = !allToogle
        policyAgrees.po2 = !allToogle
        policyAgrees.po3 = !allToogle
        policyAgrees.po4 = !allToogle

        setPolicyAgrees({
            ...policyAgrees
        })

    }

    const handleCardNumChange = (value: string, i: number) => {
        cardInfo.cardNumber[i] = value;
        setCardInfo({
            ...cardInfo,
        })
    }

    const allSelected = policyAgrees.po1 || policyAgrees.po2 || policyAgrees.po3 || policyAgrees.po4;

    return <div>
        <JDpageHeader title="결제설정" desc="결제 방식을 설정 할수 있습니다." />
        <JDcontainer size={WindowSize.full}>
            <JDcard>
                <JDalign mb="huge" grid>
                    <JDalign col={{
                        full: 3
                    }}>
                        <JDalign text="center">
                            <JDtypho>결제금액</JDtypho>
                            <JDtypho mb="normal" size="h3" color="point" >{autoComma(55000)}</JDtypho>
                            <JDtypho>BookingLight - 잔다 55 플랜</JDtypho>
                            <JDtypho>잔다솔루션</JDtypho>
                        </JDalign>
                    </JDalign>
                    <JDalign col={{
                        full: 6
                    }}>
                        <JDlabel txt="카드번호" />
                        <JDalign mb="normal" flex={{

                        }}>
                            <InputText value={cardNumber.slice(0, 4)} onChange={(v: any) => { handleCardNumChange(v, 0) }} maxLength={4} /><Split>-</Split>
                            <InputText value={cardNumber.slice(4, 8)} onChange={(v: any) => { handleCardNumChange(v, 1) }} maxLength={4} /><Split>-</Split>
                            <InputText value={cardNumber.slice(8, 12)} onChange={(v: any) => { handleCardNumChange(v, 2) }} maxLength={4} /><Split>-</Split>
                            <InputText value={cardNumber.slice(12, cardNumber.length)} onChange={(v: any) => { handleCardNumChange(v, 3) }} />
                        </JDalign>
                        <JDlabel txt="생년월일 6자리 또는 사업자번호 13자리(법인)" />
                        <InputText placeholder="881231 또는 5925500270" />
                    </JDalign>
                    <JDalign col={{
                        full: 3
                    }}>
                        <JDlabel txt="유효기간" />
                        <JDalign mb flex >
                            <InputText max={2} style={{
                                width: "60px"
                            }} /><Split>/</Split><InputText style={{
                                width: "60px"
                            }} />
                        </JDalign>
                        <div>
                            <div>
                                <JDlabel txt="비밀번호 앞 2자리" />
                                <JDalign flex={{
                                    vCenter: true
                                }}>
                                    <InputText mr max={2} style={{
                                        width: "60px"
                                    }} maxLength={2} />
                                    <JDtypho size="large">●●</JDtypho>
                                </JDalign>
                            </div>
                        </div>
                    </JDalign>
                </JDalign>
                <JDhorizen margin={4} />
                <JDalign mb flex={{
                    vCenter: true,
                }}>
                    <JDcheckBox mr="tiny" size="tiny" checked={allToogle} onChange={() => {
                        changeAll()
                    }} />
                    <span>모든 필수약관에 동의합니다.</span>
                </JDalign>
                <PolicyCard contents={[<JDalign key="policyLine1" flex={{
                    between: true,
                    vCenter: true
                }}>
                    <span>
                        <JDcheckBox onChange={() => {
                            policyAgrees["po1"] = !policyAgrees.po1
                            setPolicyAgrees({
                                ...policyAgrees
                            })
                        }} checked={policyAgrees.po1} size="tiny" />
                    전자금융거래 이용약관1
                </span>
                    <JDlink onClick={() => {
                        handleDetailOpen("po1")
                    }}>상세보기</JDlink>
                </JDalign>, <JDalign key="policyLine2" flex={{
                    between: true,
                    vCenter: true
                }}>
                    <span>
                        <JDcheckBox onChange={() => {
                            policyAgrees["po2"] = !policyAgrees.po2
                            setPolicyAgrees({
                                ...policyAgrees
                            })
                        }} checked={policyAgrees.po2}
                            size="tiny" />
                    전자금융거래 이용약관2
                </span>
                    <JDlink onClick={() => {
                        handleDetailOpen("po2")
                    }}>상세보기</JDlink>
                </JDalign>, <JDalign key="policyLine3" flex={{
                    between: true,
                    vCenter: true
                }}>
                    <span>
                        <JDcheckBox onChange={() => {
                            policyAgrees["po3"] = !policyAgrees.po3;
                            setPolicyAgrees({
                                ...policyAgrees
                            })
                        }} checked={policyAgrees.po3}
                            size="tiny" />
                    전자금융거래 이용약관3
                </span>
                    <JDlink onClick={() => {
                        handleDetailOpen("po3")
                    }}>상세보기</JDlink>
                </JDalign>, <JDalign key="Plicy4" flex={{
                    between: true,
                    vCenter: true
                }}>
                    <span>
                        <JDcheckBox size="tiny" />
                    전자금융거래 이용약관4
                </span>
                    <JDlink onClick={() => {
                        handleDetailOpen("po3")
                    }}>상세보기</JDlink>
                </JDalign>]} head={{
                    title: "서비스 이용약관"
                }} mb="small" ></PolicyCard>
                <JDalign flex={{
                    end: true
                }}>
                    <JDbutton width="huge" padding="huge" mr="small" onClick={() => {
                        if (!allSelected) {
                            toast.warn("필수 약관에 모두 동의 해주세요.")
                            return
                        }

                        onPayClick(cardInfo)
                    }

                    } thema="grey5" >
                        결제하기
                    </JDbutton>
                </JDalign>
            </JDcard>

        </JDcontainer>
        <JDmodal foot={<div>
            <JDbutton mode="flat" thema="positive" >동의</JDbutton> <JDbutton mode="flat" thema="grey5">동의안함</JDbutton>  </div>} head={{
                title: "이용약관"
            }} {...modalHook} info={undefined} >
            <JDpolicyViewer >
                {policy}
            </JDpolicyViewer>
        </JDmodal>
    </div>
};

export default PayConfig;
