import { autoComma, Flex, InputText, JDcard, JDlabel, JDtypho, Mb, Mr, Tiny } from '@janda-com/front';
import React from 'react';
import Timer from 'react-compound-timer/build';
import { Info } from '../../atom/Info';
import JDTimer from '../../atom/Timer';
import { Paymethod, purchaseBundleFindById_PurchaseBundleFindById, purchaseFindById_PurchaseFindById } from '../../type/api';
import { yyyymmddHHmm, yyyymmddHHmmLabel } from '../../utils/dateFormat';
import { payMethodKr, payStatusKr } from '../../utils/enumConverter';
import { PurchaseViewer } from "./PurchaseViewer";
import dayjs from "dayjs";
import { IJDcardProps } from '@janda-com/front/dist/components/cards/Card';

interface IProp extends IJDcardProps {
    isAdmin?: boolean;
    bundle: purchaseBundleFindById_PurchaseBundleFindById
}

export const PurchaseBundleViewer: React.FC<IProp> = ({ bundle, isAdmin, ...props }) => {
    const isBankPay = bundle.paymethod === Paymethod.BANK_TRANSFER;
    const expireTime = bundle.paymentExpiresAt;

    const diff = dayjs(expireTime).diff(new Date(), "milliseconds");

    return <JDcard  {...props} >
        <div>
            <div>
                <div>
                    <JDlabel txt="입금 만료까지" />
                </div>
                <JDTimer initialTime={diff} direction="backward">
                    {({ timerState }: any) => {
                        return (
                            <span className="JDtimer">
                                <span className="JDtimer__minute">
                                    <Timer.Days />
                                일
                                </span>
                                <span className="JDtimer__second">
                                    <Timer.Minutes />
                                    분
                                </span>
                                <Tiny component="span" className="JDtimer__second">
                                    <Timer.Seconds />
                                        초
                                    </Tiny>
                            </span>
                        );
                    }}
                </JDTimer>
            </div>
            <Flex mb="small" vCenter>
                <Info mr="large" label="입금만료">{yyyymmddHHmm(bundle.paymentExpiresAt)}</Info>
                <Info label="예약일">{yyyymmddHHmmLabel(bundle.createdAt)}</Info>
            </Flex>
            <Flex mb="small" vCenter>
                <Info mr="large" label="예약자명">{bundle.purchaserName}</Info>
                <Info label="예약번호">{bundle.code}</Info>
            </Flex>
            <Flex mb="small" vCenter>
                <Info mr="large" label="연락처">{bundle.purchaserContact}</Info>
                <Info label="입금액">{autoComma(bundle.pricePaymentPending)}</Info>
            </Flex>
            <Flex mb vCenter>
                <Info mr="large" label="결제수단">{payMethodKr(bundle.paymethod)}</Info>
                <Info label="결제상태">{payStatusKr(bundle.paymentStatus)}</Info>
            </Flex>

            <JDlabel>상품확인</JDlabel>
            {bundle.purchases.map(purchase => <PurchaseViewer purchase={purchase} />)}
            <Mb />
        </div>
        <div>
            <InputText mb label="예약자메모" readOnly textarea value={bundle.purchaserMessage || ""} />
            {isAdmin && <InputText label="관리자메모(히든)" textarea value={bundle.sellerMemo || ""} />}
        </div>
    </JDcard >;
};

