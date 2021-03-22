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
import { ExpireTimer } from '../expireTImer/ExpireTimer';
import { usePurchaseBundleCancel, usePurchaseBundleRefund } from '../../hook/usePurchase';
import { PormptModal } from '../promptModal/PromptModal';

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
            {isBankPay &&
                <div>
                    <div>
                        <JDlabel txt="입금 만료까지" />
                    </div>
                    <ExpireTimer timeInit={diff} />
                </div>
            }
            <Flex mb>
                <Flex mb="small" mr column style={{ alignItems: "baseline" }}>
                    <Info mb="tiny" mr="large" label="입금만료">{yyyymmddHHmm(bundle.paymentExpiresAt)}</Info>
                    <Info mb="tiny" label="예약일">{yyyymmddHHmmLabel(bundle.createdAt)}</Info>
                    <Info mb="tiny" mr="large" label="예약자명">{bundle.purchaserName}</Info>
                    <Info label="예약번호">{bundle.code}</Info>
                </Flex>
                <Flex mb="small" column vCenter style={{ alignItems: "baseline" }}>
                    <Info mb="tiny" mr="large" label="연락처">{bundle.purchaserContact}</Info>
                    <Info mb="tiny" label="결제금액">{autoComma(bundle.pricePaymentPending)}</Info>
                    <Info mb="tiny" mr="large" label="결제수단">{payMethodKr(bundle.paymethod)}</Info>
                    <Info label="결제상태">{payStatusKr(bundle.paymentStatus)}</Info>
                </Flex>
            </Flex>
            {/* <Flex mb="small" vCenter>
            </Flex>
            <Flex mb vCenter>
            </Flex> */}

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

