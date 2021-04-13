import { arraySum, isPhone, useInput, useSelect, Validater } from "@janda-com/front";
import { useState } from "react";
import { AnonyMouseVerifiData } from "../page/buypageRouter/page/components/AnonyPurchaseForm";
import { DefaultBuypageConfig } from "../page/buypageSet/config/configDefault";
import { Fattribute, FbuyPage, itemFindById_ItemFindById_ItemBooking_attrs, Paymethod, purchaseBundleCreate_PurchaseBundleCreate, purchaseBundleCreate_PurchaseBundleCreate_data, VerificationTarget } from "../type/api";
import { PAY_METHOD_OPS } from "../type/const";
import { BASKET } from "../utils/Basket";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import { useBasket } from "./useBasket";
import { IBookingInputData } from "./useBookingInput";
import { useCopy } from "./useCopy";
import { nicePayAuthData, purchaseCreatePaymentInfoReader, usePurchaseBundleCreate } from "./usePurchase";
import { useAnnonymouseVerifi } from "./useUser";


interface IUsePurchase {
    buypage: FbuyPage
    configure: typeof DefaultBuypageConfig;
    purchaseProduct: IBookingInputData[]
    attributes: any[] | null
    onSucess: (data:purchaseBundleCreate_PurchaseBundleCreate_data) => void;
}
export const usePurchase = ({ buypage, configure, purchaseProduct, onSucess, attributes}:IUsePurchase) => {
    const availablePayMethods = PAY_METHOD_OPS.filter(op => configure.payMethods?.includes(op.value));
    const paymethodHook = useSelect(availablePayMethods[0], availablePayMethods)
    const isCardPay = paymethodHook.selectedOption?.value === Paymethod.CARD
    const [attrs, setAttrs] = useCopy(buypage.attrs || []);


    const { updateComponent } = useBasket();
    const verificationHook = useAnnonymouseVerifi(VerificationTarget.PHONE);
    const [purchaseBundleCreate] = usePurchaseBundleCreate({
        onCompleted: ({ PurchaseBundleCreate }) => {
            completeMsg(PurchaseBundleCreate, isCardPay ? "결제를 진행 해주세요" : "구매가 완료되었습니다.");
        }
    });

    const messageHook = useInput("");
    const userInfoHook = useState<AnonyMouseVerifiData>({
        name: "",
        phoneNumber: "",
        email: ""
    })
    const [niceAuthData, setNiceAuthData] = useState<nicePayAuthData>()
    const [anonyUserInfo] = userInfoHook;

    // const purchaseProduct = getProductPurchaseParam(search);
    // console.log({ purchaseProduct });

    // TODO
    // 번들 후 키를 빼내서
    // 결제창을 호출한다.

    const basketItems = BASKET.getItems();

    const [info, setInfo] = userInfoHook;


    const { validate } = new Validater([{
        value: info.name,
        failMsg: "예약자 성함을 입력 해주세요",
        id: "NameInput"
    }, {
        value: isPhone(info.phoneNumber),
        failMsg: "연락처가 올바르지 않습니다.",
        id: "PhoneNumberInput"
    }, {
        value: verificationHook.verifiData?.isVerified,
        failMsg: "본인인증을 진행 해주세요",
    },
    {
        value: paymethodHook.selectedOption?.value,
        failMsg: "결제수단을 선택 해주세요",
    }])


    const fullList = basketItems.concat(purchaseProduct || []);
    const totalPrice = arraySum(fullList.map(list => list.priceOrigin || 0));

    const openNicePayModal = (data: Required<purchaseBundleCreate_PurchaseBundleCreate>) => {
        const result = purchaseCreatePaymentInfoReader(data.paymentInfo!, data.data!._id);
        setNiceAuthData(result);
        setTimeout(() => {
            window.nicePay();
        }, 100)
    }

    const hanldePurchase = () => {
        if (validate()) {

            purchaseBundleCreate({
                variables: {
                    input: {
                        purchaseContact: info.phoneNumber,
                        purchaserName: info.name,
                        bookingInputs: fullList.map(item => ({
                            itemId: item.itemId,
                            productId: item.productId,
                            countDetails: item.countDetails,
                            priceOrigin: item.priceOrigin,
                            attrs: omits(attributes)
                        })),
                        purchaserMessage: messageHook.value,
                        paymethod: paymethodHook.selectedOption!.value,
                        priceOrigin: totalPrice,
                    }
                }
            }).then(({ data }) => {
                if (data?.PurchaseBundleCreate.ok) {
                    if (isCardPay) {
                        openNicePayModal(data.PurchaseBundleCreate);
                    } else {
                        onSucess(data.PurchaseBundleCreate.data!);
                    }
                }
            })
        }
    }

    return { attrs, setAttrs,verificationHook,userInfoHook, messageHook, niceAuthData, anonyUserInfo, updateComponent, hanldePurchase, openNicePayModal, info, setInfo, paymethodHook  }
}