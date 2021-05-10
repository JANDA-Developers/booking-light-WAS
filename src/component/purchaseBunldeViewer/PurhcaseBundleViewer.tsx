import {
    autoComma,
    autoHypen,
    Flex,
    InputText,
    JDbutton,
    JDcard,
    JDlabel,
    JDtypho,
    Mb,
    Mr,
    Tiny,
    useInput,
} from "@janda-com/front";
import React, { useContext, useState } from "react";
import { Info } from "../../atom/Info";
import {
    FdeliveryInfo,
    Paymethod,
    purchaseBundleFindById_PurchaseBundleFindById,
    Status,
} from "../../type/api";
import { yyyymmddHHmm, yyyymmddHHmmLabel } from "../../utils/dateFormat";
import {
    payMethodKr,
    payStatusKr,
    refundStatusKr,
    statusKr,
} from "../../utils/enumConverter";
import { PurchaseBookingViewer } from "./PurchaseBookingViewer";
import dayjs from "dayjs";
import { IJDcardProps } from "@janda-com/front/dist/components/cards/Card";
import { ExpireTimer } from "../expireTImer/ExpireTimer";
import { AttributeViewer } from "../attributeViewer/AttributeViewer";
import { Clip } from "../../atom/clip/Clip";
import { usePurchaseBundleUpdate } from "../../hook/usePurchase";
import { completeMsg } from "../../utils/onCompletedMessage";
import AppContext from "../../context";
import { DeliveryInfoViewer } from "../../page/buypageRouter/page/buypageList/components/DeliveryInfoView";
import { useCopy } from "../../hook/useCopy";
import { omits } from "../../utils/omits";

interface IProp extends IJDcardProps {
    isAdmin?: boolean;
    bundle: purchaseBundleFindById_PurchaseBundleFindById;
}

export const PurchaseBundleViewer: React.FC<IProp> = ({
    bundle,
    isAdmin,
    ...props
}) => {
    const { isDateRangeMall, isShoppingType, isNonProfit } = useContext(
        AppContext
    );
    const [update] = usePurchaseBundleUpdate({
        onCompleted: ({ PurchaseBundleUpdate }) => {
            completeMsg(PurchaseBundleUpdate, "업데이트 완료");
        },
    });
    const PaymentPending = bundle.paymentStatus === Status.PENDING;
    const isBankPay = bundle.paymethod === Paymethod.BANK_TRANSFER;
    const expireTime = bundle.paymentExpiresAt;
    const sellerMemoHook = useInput(bundle.sellerMemo || "");
    const [deliveryInfo, setDeliveryInfo] = useCopy(bundle.deliveryInfo);

    const isComplete = bundle.paymentStatus === Status.COMPLETED;
    const diff = dayjs(expireTime).diff(new Date(), "milliseconds");

    const handleUpdateMemo = () => {
        update({
            variables: {
                purchaseBundleId: bundle._id,
                input: {
                    sellerMemo: sellerMemoHook.value,
                },
            },
        });
    };

    const handleUpdateDeliveryInfo = () => {
        update({
            variables: {
                purchaseBundleId: bundle._id,
                input: {
                    deliveryInfo: omits(deliveryInfo),
                },
            },
        });
    };

    return (
        <>
            <JDcard mb {...props}>
                <div>
                    {isBankPay && PaymentPending && (
                        <div>
                            <div>
                                <JDlabel txt="입금 만료까지" />
                            </div>
                            <ExpireTimer timeInit={diff} />
                        </div>
                    )}
                    <Flex mb>
                        <Flex
                            mb="small"
                            mr
                            column
                            style={{ alignItems: "baseline" }}
                        >
                            <Info
                                hide={!isComplete}
                                mb="tiny"
                                mr="large"
                                label="결제일"
                            >
                                {yyyymmddHHmm(bundle.paymentAt)}
                            </Info>
                            <Info
                                hide={isComplete}
                                mb="tiny"
                                mr="large"
                                label="입금만료"
                            >
                                {yyyymmddHHmm(bundle.paymentExpiresAt)}
                            </Info>
                            <Info mb="tiny" label="예약일">
                                {yyyymmddHHmmLabel(bundle.createdAt)}
                            </Info>
                            <Info mb="tiny" mr="large" label="예약자명">
                                {bundle.purchaserName}
                            </Info>
                            <Info mb="tiny" label="예약번호">
                                <Clip>{bundle.code}</Clip>
                            </Info>
                            <Info hide={isNonProfit} label="환불금액">
                                {autoComma(bundle.priceRefundCompleted) || 0}
                            </Info>
                        </Flex>
                        <Flex
                            mb="small"
                            column
                            vCenter
                            style={{ alignItems: "baseline" }}
                        >
                            <Info mb="tiny" mr="large" label="연락처">
                                {autoHypen(bundle.purchaserContact)}
                            </Info>
                            {!isNonProfit && (
                                <Info mb="tiny" label="결제금액">
                                    {autoComma(bundle.pricePaymentPending)}
                                </Info>
                            )}
                            <Info mb="tiny" mr="large" label="결제수단">
                                {payMethodKr(bundle.paymethod)}
                            </Info>
                            <Info
                                mb="tiny"
                                label={isNonProfit ? "승인상태" : "결제상태"}
                            >
                                {isNonProfit
                                    ? statusKr(bundle.paymentStatus)
                                    : payStatusKr(bundle.paymentStatus)}
                            </Info>
                            <Info hide={isNonProfit} label="환불상태">
                                {refundStatusKr(bundle.refundStatus)}
                            </Info>
                        </Flex>
                    </Flex>

                    <JDlabel>상품확인</JDlabel>
                    {bundle.purchases.map((purchase) => (
                        <PurchaseBookingViewer
                            key={purchase._id + "purchaseBookignViewer"}
                            mb="small"
                            purchase={purchase}
                        />
                    ))}
                    <AttributeViewer attrs={bundle.attrs || []} />
                </div>
                <div>
                    <InputText
                        mb
                        label="예약자메모"
                        readOnly
                        textarea
                        value={bundle.purchaserMessage || ""}
                    />
                    {isAdmin && (
                        <div>
                            <InputText
                                label="관리자메모(히든)"
                                textarea
                                {...sellerMemoHook}
                            />
                            <JDbutton
                                mode="border"
                                onClick={handleUpdateMemo}
                                label="메모저장"
                                size="tiny"
                            />
                        </div>
                    )}
                </div>
            </JDcard>
            {bundle.deliveryInfo && (
                <JDcard mode="border">
                    <DeliveryInfoViewer
                        editable
                        onChange={(data) => {
                            setDeliveryInfo({ ...(data as FdeliveryInfo) });
                        }}
                        delivery={deliveryInfo as FdeliveryInfo}
                    />
                    <JDbutton
                        mode="border"
                        onClick={handleUpdateDeliveryInfo}
                        label="배송정보업데이트"
                        size="tiny"
                    />
                </JDcard>
            )}
        </>
    );
};
