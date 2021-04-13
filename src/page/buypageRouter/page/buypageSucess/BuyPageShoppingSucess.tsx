import { JDicon, autoComma, Flex, JDbutton, JDhorizen, JDsocialHead, JDtypho, JDcard, Large } from '@janda-com/front';
import React, { useContext } from 'react';
import { Paymethod, purchaseBundleFindById_PurchaseBundleFindById_purchases } from '../../../../type/api';
import { BankHolderViewer2 } from '../../../../component/bankHolderViewer/BankHolderViewer';
import { useRouteMatch } from 'react-router-dom';
import { BuypageContext } from '../buypageList/helper/context';
import { usePurchaseBundleFindById } from '../../../../hook/usePurchase';
import { Info } from '../../../../atom/Info';
import { payMethodKr } from '../../../../utils/enumConverter';
import { Clip } from '../../../../atom/clip/Clip';
import { ShareMaster } from '../../../../atom/ShareMaster';
import { CardBtn } from '../../../../component/btns/ModalBtn';
type IDetailRouteProp = { bundleId: string }

interface IProp {
}

export const BuypageShoppingSucess: React.FC<IProp> = () => {
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const { params: { bundleId } } = routeMatch;
    const { configure: { RESERVATION_NORMAL: { texts } } } = useContext(BuypageContext)
    const { item } = usePurchaseBundleFindById(bundleId);
    const { accountHolder, bankAccount, bankName } = texts;

    const isBankPay = item?.paymethod === Paymethod.BANK_TRANSFER;

    const itemNames = item?.purchases.map(purchase => purchase.itemName);


    return <JDcard foot={
        <div>
            <JDsocialHead content="" imgUrl="" title="" url="" />
            <ShareMaster shareProp={{ text: "", title: "", url: "" }} />

            <CardBtn mr>상세내역</CardBtn>
            <CardBtn>확인</CardBtn>
        </div>
    } >
        <Flex column vCenter center mb>
            <JDicon mb size="largest" color="primary" icon="addCircle" />
            <Large weight={600}>결제완료</Large>
        </Flex>
        <JDhorizen margin={3} />
        <Info mb between label="상품명" value={""} />
        <Info between label="결제금액" value={autoComma(item?.pricePaymentPending)} />
        <JDhorizen margin={3} />
        <Info mb between label="결제일시" value={autoComma(item?.pricePaymentPending)} />
        <Info mb between label="결제수단" value={payMethodKr(item?.paymethod)} />
        <Info between label="주문번호" value={<Clip>{item?.code}</Clip>} />
        <JDhorizen margin={3} />
        <BankHolderViewer2
            bankHolder={accountHolder.kr}
            bankName={bankName.kr}
            bankAccount={bankAccount.kr}
            expireAt={item?.paymentExpiresAt}
            mb
        />
    </JDcard>;
};

export default BuypageShoppingSucess