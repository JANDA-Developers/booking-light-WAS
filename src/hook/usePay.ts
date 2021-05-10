import {
    arraySum,
    isPhone,
    useInput,
    useModal,
    useSelect,
    Validater,
} from "@janda-com/front";
import { isEmpty } from "lodash";
import { useContext, useState } from "react";
import { useHistory } from "react-router";
import { IPrivacyModalInfo } from "../component/privacyModal/PrivacyModal";
import { BuyPagePaths } from "../page/buypageRouter/BuyPageRouter";
import { BuypageContext } from "../page/buypageRouter/page/buypageList/helper/context";
import { AnonyMouseVerifiData } from "../page/buypageRouter/page/components/AnonyPurchaseForm";
import { DefaultBuypageConfig } from "../page/buypageSet/config/configDefault";
import {
    DeliveryInput,
    Fattribute,
    FbuyPage,
    itemFindById_ItemFindById_ItemBooking_attrs,
    Paymethod,
    purchaseBundleCreate_PurchaseBundleCreate,
    purchaseBundleCreate_PurchaseBundleCreate_data,
    SelectOptionInput,
    StoreSignInAnonymousCompleteExtraInfoInput,
    VerificationTarget,
} from "../type/api";
import { PAY_METHOD_OPS } from "../type/const";
import { BASKET } from "../utils/Basket";
import { omits } from "../utils/omits";
import { completeMsg } from "../utils/onCompletedMessage";
import { useBasket } from "./useBasket";
import { IBookingInputData } from "./useBookingInput";
import { IUseBuypageDetail } from "./useBuypageDetail";
import { useCopy } from "./useCopy";
import { usePolicySelecter } from "./usePolicySelecter";
import {
    nicePayAuthData,
    purchaseCreatePaymentInfoReader,
    usePurchaseBundleCreate,
} from "./usePurchase";
import { useAnnonymouseVerifi } from "./useUser";

interface IUsePurchaseProp {
    deliveryInfo?: DeliveryInput;
    withBracekt?: boolean;
    buypageDetailHook: IUseBuypageDetail;
    onSucess?: (data: purchaseBundleCreate_PurchaseBundleCreate_data) => void;
}
export type TUsePurchase = ReturnType<typeof usePurchase>;
export const usePurchase = ({
    withBracekt,
    buypageDetailHook,
    deliveryInfo,
    onSucess,
}: IUsePurchaseProp) => {
    const { options, bookingsInputHook, itemAttrs } = buypageDetailHook;
    const { bookingInputs: purchaseProducts = [] } = bookingsInputHook;
    const history = useHistory();
    const policyModalHook = useModal<IPrivacyModalInfo>();
    const { store, configure, noPayMethod } = useContext(BuypageContext);
    const buypage = store.buypage;
    const availablePayMethods = PAY_METHOD_OPS.filter((op) =>
        configure.payMethods?.includes(op.value)
    );

    function toSucessPage(
        data: purchaseBundleCreate_PurchaseBundleCreate_data
    ) {
        onSucess?.(data);
        history.push(BuyPagePaths.sucess + "/" + data._id);
    }

    const notForProfitPayMethod = noPayMethod
        ? PAY_METHOD_OPS.find((paymethod) => paymethod.value === Paymethod.CASH)
        : undefined;
    const paymethodHook = useSelect(
        notForProfitPayMethod || availablePayMethods[0],
        availablePayMethods
    );
    const isCardPay = paymethodHook.selectedOption?.value === Paymethod.CARD;
    const [bundleAttrs, setBundleAttrs] = useCopy(buypage.attrs || []);
    const policyIdHooks = usePolicySelecter(buypage.policies);

    const { updateComponent } = useBasket();
    const [purchaseBundleCreate] = usePurchaseBundleCreate({
        onCompleted: ({ PurchaseBundleCreate }) => {
            completeMsg(
                PurchaseBundleCreate,
                isCardPay ? "결제를 진행 해주세요" : "구매가 완료되었습니다."
            );
        },
    });

    const messageHook = useInput("");
    const userInfoHook = useState<AnonyMouseVerifiData>({
        name: "",
        phoneNumber: "",
        email: "",
    });
    const extraInfo: StoreSignInAnonymousCompleteExtraInfoInput = {
        email: userInfoHook[0].email,
    };
    const verificationHook = useAnnonymouseVerifi(
        VerificationTarget.PHONE,
        extraInfo
    );
    const [niceAuthData, setNiceAuthData] = useState<nicePayAuthData>();
    const [anonyUserInfo] = userInfoHook;

    const basketItems = withBracekt ? BASKET.getItems() : [];

    const [userinfo, setUserInfo] = userInfoHook;

    const { validate } = new Validater([
        {
            value: userinfo.name,
            failMsg: "예약자 성함을 입력 해주세요",
            id: "NameInput",
        },
        {
            value: isPhone(userinfo.phoneNumber),
            failMsg: "연락처가 올바르지 않습니다.",
            id: "PhoneNumberInput",
        },
        {
            value: verificationHook.verifiData?.isVerified,
            failMsg: "본인인증을 진행 해주세요",
        },
        {
            value: paymethodHook.selectedOption?.value,
            failMsg: "결제수단을 선택 해주세요",
        },
        {
            value: policyIdHooks.checkRequireSelected(),
            failMsg: "필수약관에 동의 해주세요",
            id: "PoliciesAgreeBox",
        },
    ]);

    const fullList = basketItems.concat(purchaseProducts || []);
    const totalProductPrice = arraySum(
        fullList.map((list) => list.priceOrigin || 0)
    );
    const totalOptionPrice = arraySum(options.map((op) => op.priceOrigin));
    const optionsAndProductsPrice = totalProductPrice + totalOptionPrice;

    const openNicePayModal = (
        data: Required<purchaseBundleCreate_PurchaseBundleCreate>
    ) => {
        const result = purchaseCreatePaymentInfoReader(
            data.paymentInfo!,
            data.data!._id
        );
        setNiceAuthData(result);
        setTimeout(() => {
            window.nicePay();
        }, 100);
    };

    const hanldePurchase = () => {
        if (validate()) {
            let attrs: null | undefined | any[] = omits(itemAttrs);
            attrs = isEmpty(attrs) ? undefined : attrs;
            const bookingInputs = fullList
                .filter((list) => list.itemId)
                .map((item) => ({
                    itemId: item.itemId,
                    productId: item.productId,
                    countDetails: item.countDetails,
                    priceOrigin: item.priceOrigin,
                    attrs,
                }));

            purchaseBundleCreate({
                variables: {
                    input: {
                        purchaserEmail: anonyUserInfo.email,
                        purchaseContact: userinfo.phoneNumber,
                        purchaserName: userinfo.name,
                        bookingInputs: omits(bookingInputs),
                        purchaserMessage: messageHook.value,
                        paymethod: paymethodHook.selectedOption!.value,
                        priceOrigin: totalProductPrice,
                        deliveryInput: deliveryInfo,
                        attrs: bundleAttrs,
                        options: isEmpty(options) ? undefined : options,
                    },
                },
            }).then(({ data }) => {
                if (data?.PurchaseBundleCreate.ok) {
                    if (isCardPay) {
                        openNicePayModal(data.PurchaseBundleCreate);
                    } else {
                        toSucessPage(data.PurchaseBundleCreate.data!);
                    }
                }
            });
        }
    };

    const attrs = bundleAttrs;
    const setAttrs = setBundleAttrs;

    return {
        policyIdHooks,
        attrs,
        setAttrs,
        policyModalHook,
        verificationHook,
        userInfoHook,
        messageHook,
        niceAuthData,
        anonyUserInfo,
        updateComponent,
        hanldePurchase,
        totalOptionPrice,
        optionsAndProductsPrice,
        openNicePayModal,
        userinfo,
        setUserInfo,
        paymethodHook,
    };
};
