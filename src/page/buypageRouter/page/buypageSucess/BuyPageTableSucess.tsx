import {
    JDicon,
    autoComma,
    Flex,
    JDhorizen,
    JDsocialHead,
    JDcard,
    Large,
    autoHypen,
} from "@janda-com/front";
import React, { useContext } from "react";
import { Paymethod } from "../../../../type/api";
import { BankHolderViewerWideMode } from "../../../../component/bankHolderViewer/BankHolderViewer";
import { useRouteMatch } from "react-router-dom";
import { BuypageContext } from "../buypageList/helper/context";
import { usePurchaseBundleFindById } from "../../../../hook/usePurchase";
import { Info } from "../../../../atom/Info";
import { payMethodKr } from "../../../../utils/enumConverter";
import { Clip } from "../../../../atom/clip/Clip";
import { ShareMaster } from "../../../../atom/ShareMaster";
import { CardBtn } from "../../../../component/btns/ModalBtn";
import { isEmpty } from "lodash";
import { OptionsViewer } from "../../../../component/optionsViewer/OptionsViewer";
type IDetailRouteProp = { bundleId: string };

interface IProp {}

export const BuypageTableSucess: React.FC<IProp> = () => {
    const routeMatch = useRouteMatch<IDetailRouteProp>();
    const {
        params: { bundleId },
    } = routeMatch;
    const {
        configure: { texts },
        noPayMethod,
    } = useContext(BuypageContext);
    const { item: prucahseBundle } = usePurchaseBundleFindById(bundleId);
    const { accountHolder, bankAccount, bankName } = texts;

    const isBankPay = prucahseBundle?.paymethod === Paymethod.BANK_TRANSFER;
    const itemnames = prucahseBundle?.itemNames.join(",") || "";
    const options = prucahseBundle?.options;

    return (
        <JDcard
            foot={
                <div>
                    <JDsocialHead
                        content=""
                        imgUrl=""
                        title={itemnames}
                        url={location.href}
                    />
                    <ShareMaster
                        shareProp={{
                            text: "",
                            title: itemnames,
                            url: location.href,
                        }}
                    />
                    {/* 
                    <CardBtn mr>상세내역</CardBtn>
                    <CardBtn>확인</CardBtn> */}
                </div>
            }
        >
            <Flex column vCenter center mb>
                <JDicon mb size="largest" color="primary" icon="addCircle" />
                <Large weight={600}>
                    {noPayMethod ? "예약완료" : "결제완료"}
                </Large>
            </Flex>
            <JDhorizen margin={3} />
            <Info
                mb
                between
                label="상품명"
                value={prucahseBundle?.itemNames.join(", ")}
            />
            <Info
                hide={isEmpty(options)}
                mb
                between
                label="옵션상품"
                value={<OptionsViewer options={options} />}
            />
            <Info
                mb
                between
                label={noPayMethod ? "예약번호" : "주문번호"}
                value={<Clip>{prucahseBundle?.code}</Clip>}
            />
            <Info
                mb
                between
                label={"구매자명"}
                value={prucahseBundle?.purchaserName}
            />
            <Info
                mb
                between
                label={"구매자 연락처"}
                value={autoHypen(prucahseBundle?.purchaserContact)}
            />
            <Info
                mb
                between
                label={"구매 메세지"}
                value={autoHypen(prucahseBundle?.message || "")}
            />

            <div>
                {!noPayMethod && (
                    <div>
                        <Info
                            between
                            label="결제금액"
                            value={autoComma(
                                prucahseBundle?.pricePaymentPending
                            )}
                        />
                        <JDhorizen margin={3} />
                        <Info
                            mb
                            between
                            label="결제일시"
                            value={autoComma(
                                prucahseBundle?.pricePaymentPending
                            )}
                        />
                        <Info
                            mb
                            between
                            label="결제수단"
                            value={payMethodKr(prucahseBundle?.paymethod)}
                        />

                        <JDhorizen margin={3} />
                    </div>
                )}
                <div>
                    {isBankPay && (
                        <BankHolderViewerWideMode
                            title={"아래 계좌로 입금 해주세요."}
                            bankHolder={accountHolder.kr}
                            bankName={bankName.kr}
                            bankAccount={bankAccount.kr}
                            mb
                        />
                    )}
                </div>
            </div>
        </JDcard>
    );
};

export default BuypageTableSucess;
