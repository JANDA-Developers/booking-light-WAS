import { Bold, JDcard, JDcontainer } from '@janda-com/front';
import React, { useContext } from 'react';
import { useRouteMatch } from 'react-router';
import { AttributeViewer } from '../../../../component/attributeViewer/AttributeViewer';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { BankHolderViewer } from '../../../../component/bankHolderViewer/BankHolderViewer';
import { PurchaseBundleViewer } from '../../../../component/purchaseBunldeViewer/PurhcaseBundleViewer';
import { usePurchaseBundleFindById } from '../../../../hook/usePurchase';
import { Paymethod } from '../../../../type/api';
import { BuyPagePaths } from '../../BuyPageRouter';
import { BuypageContext } from '../buypageList/helper/context';

type IDetailRouteProp = { bundleId: string }

interface IProp { }

export const BuyPageSucess: React.FC<IProp> = () => {
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const { params: { bundleId } } = routeMatch;
    const { configure: { RESERVATION_NORMAL: { texts } } } = useContext(BuypageContext)
    const { item } = usePurchaseBundleFindById(bundleId);
    const { accountHolder, bankAccount, bankName } = texts;

    const isBankPay = item?.paymethod === Paymethod.BANK_TRANSFER;

    if (!item) return null;
    return <JDcontainer verticalPadding className="buyPageSetDetail__container">
        <BackStepBar mb label={"예약페이지로"} go={BuyPagePaths.index} />
        <Bold size="h6">구매가 완료 되었습니다.</Bold>
        {isBankPay && <BankHolderViewer title={"아래 계좌로 입금 해주세요."} bankHolder={accountHolder.kr} bankName={bankName.kr} bankAccount={bankAccount.kr} mb />}
        <PurchaseBundleViewer mb bundle={item} />
        <JDcard mb >
            <AttributeViewer attrs={item.attrs || []} />
        </JDcard>
    </JDcontainer>
};
