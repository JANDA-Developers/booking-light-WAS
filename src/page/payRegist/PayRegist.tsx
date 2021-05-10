import { JDcontainer, JDpageHeader, WindowSize } from "@janda-com/front";
import React, { useContext } from "react";
import { CardBtn } from "../../component/btns/ModalBtn";
import { CardInfoRegister } from "../../component/cardInfoRegister/CardInfoRegister";
import Payment from "../../component/payment/Payment";
import AppContext from "../../context";
import { useBillingMethodDelete } from "../../hook/useBilling";
import { completeMsg } from "../../utils/onCompletedMessage";
import { CardViewer } from "./components/CardViewer";

interface IProp {}

export const PayRegist: React.FC<IProp> = () => {
    const { me } = useContext(AppContext);
    const [billingMethodDelete] = useBillingMethodDelete({
        onCompleted: ({ BillingMethodDelete }) => {
            completeMsg(
                BillingMethodDelete,
                "카드등록이 해제되었습니다. \n 카드정보는 30일후 삭제됩니다."
            );
        },
    });

    const handleBillingMethodDelete = (billingId: string) => () => {
        billingMethodDelete({
            variables: {
                billingId,
            },
        });
    };

    const paymethods = me?.billingMethod;

    return (
        <div>
            <JDpageHeader
                title="결제수단 등록하기"
                desc="잔다 요금제를 지불할 결제수단을 등록 해주세요."
            />
            <JDcontainer verticalPadding size={WindowSize.lg}>
                <CardInfoRegister mb />
                {paymethods?.map((paymethod, index) => (
                    <CardViewer
                        head="등록된 카드들"
                        foot={
                            <CardBtn
                                thema="error"
                                onClick={handleBillingMethodDelete(
                                    paymethod._id
                                )}
                            >
                                등록해제
                            </CardBtn>
                        }
                        billingMethod={paymethod}
                        key={"PayMethod" + index}
                    />
                ))}
            </JDcontainer>
        </div>
    );
};

export default PayRegist;
