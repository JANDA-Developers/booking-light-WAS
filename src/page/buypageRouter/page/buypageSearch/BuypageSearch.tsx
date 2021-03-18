import { JDbutton, useModal } from '@janda-com/front';
import { InputText } from '@janda-com/front/dist/components/InputText/InputText';
import React from 'react';
import VerificationModal from '../../../../component/verfi/VerificationModal';
import { usePurchaseCustomerBundleList } from '../../../../hook/usePurchase';
import { useVerification } from '../../../../hook/useVerification';
import { VerificationEvent, VerificationTarget } from '../../../../type/api';
import { PurchaseBundleTable } from '../../../purchase/components/PurchaseBundleTable';

interface IProp { }

export const BuypageSearch: React.FC<IProp> = () => {
    const { items } = usePurchaseCustomerBundleList()
    const modalHook = useModal();
    const verifiHook = useVerification(VerificationEvent.FindPurchaseBundle, VerificationTarget.PHONE);
    const handleSearch = () => {
    }

    return <div>
        <InputText label="전화번호 입력" />
        <InputText label="성함입력" />
        <JDbutton onClick={handleSearch}>조회하기</JDbutton>
        <VerificationModal target={VerificationTarget.PHONE} {...verifiHook} modalHook={modalHook} />
        {/* 결과테이블 */}
        <PurchaseBundleTable purchaseBundles={items} />
    </div>;
};
