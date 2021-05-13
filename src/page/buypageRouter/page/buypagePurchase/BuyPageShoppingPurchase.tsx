import { JDcard, arraySum, Mb } from "@janda-com/front";
import _ from "lodash";
import { isEmpty } from "lodash";
import React, { useContext } from "react";
import { DeliveryInfoForm } from "../../../../component/deliveryInfoForm/DeliveryInfoForm";
import { useCheckBoxTable } from "../../../../component/table/hook";
import { usePurchase } from "../../../../hook/usePay";
import { CapacityInput } from "../../../../type/api";
import { DEFAULT_DELIVERY } from "../../../../type/const";
import { BASKET, IBasketItem } from "../../../../utils/Basket";
import {
    calcuatePrice,
    deliveryPriceCalculate,
    extractDetails,
    extractKeys,
    getSelectProductsFromCapcities,
    getUniqCpacities,
} from "../../../../utils/productBookingUtils";
import { Validater } from "../../../../utils/Validater";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import { BuyPageShoppingTable } from "../buypageList/components/BuyPageShoppingTable";
import { DeliveryPriceInfoViewer } from "../buypageList/components/DeliveryInfoView";
import { BuypageContext } from "../buypageList/helper/context";
import { BuyPagePurchaseBase } from "./BuypagePurchaseBase";
import { CommonPriceViewer } from "./components/PriceViewer";

interface IProp extends IBuypagePurchaseCommon {
    handleBackStep: () => void;
}

export const BuyPageShoppingPurchase: React.FC<IProp> = ({
    buypageDetailHook,
    handleBackStep,
}) => {
    const usePurchaseHook = usePurchase({
        withDelivery: true,
        withBracekt: true,
        buypageDetailHook,
    });
    const { deliveryInfo, setDeliveryInfo, deliverValidate, fullItemList } =
        usePurchaseHook;

    const { bookingsInputHook, optionsPrice, options } = buypageDetailHook;
    const selectedOps = extractKeys(bookingsInputHook?.bookingInputs || []);

    const { store, updateBasket } = useContext(BuypageContext);

    const deliveryConfig = store.buypage.delivery || DEFAULT_DELIVERY;
    const { lowerPrice } = deliveryConfig;

    const fullListDetails = getUniqCpacities(extractDetails(fullItemList));

    const checkTableHook = useCheckBoxTable(
        [...selectedOps.filter((v) => v)],
        extractKeys(fullItemList)
    );

    const checkedIDs = checkTableHook.checkedIds;
    const selectedItems = fullListDetails.filter((liDetail) =>
        checkedIDs.includes(liDetail.key)
    );
    const checkPriceSum = arraySum(selectedItems.map((item) => item.price));
    const deliveryPrice = deliveryPriceCalculate(deliveryConfig, checkPriceSum);
    const totalPrice = deliveryPrice + checkPriceSum + optionsPrice;

    const { validate } = new Validater([
        {
            value: !isEmpty(selectedItems),
            failMsg: "하나이상의 상품을 선택 해주세요.",
        },
        {
            value: !lowerPrice || checkPriceSum > lowerPrice,
            failMsg: "선택 상품 금액이 최소 주문 금액보다 적습니다.",
        },
        ...deliverValidate.nodes,
    ]);

    const targetProducts = getSelectProductsFromCapcities(
        selectedItems,
        fullItemList
    );
    calcuatePrice(targetProducts);

    deliveryInfo.deliveryPrice = deliveryPrice;

    const handleDeleteCD = (usageInput: CapacityInput, prod: IBasketItem) => {
        if (!prod.productId) return;
        const isInBookingInput = bookingsInputHook?.findCpacity(
            prod.productId!,
            usageInput.key
        );

        const reWriteBasket = () => {
            const filtered = prod.countDetails?.filter(
                (cd) => cd.key !== usageInput.key
            );
            if (isEmpty(filtered)) {
                BASKET.removeItem(prod.productId);
            } else {
                prod.countDetails = filtered;
                BASKET.overrideItem(prod.productId, prod);
            }
        };

        if (isInBookingInput)
            bookingsInputHook?.removeCapacity(prod.productId!, usageInput.key);
        else reWriteBasket();
        updateBasket();
    };

    return (
        <BuyPagePurchaseBase
            options={options}
            handleBackStep={handleBackStep}
            {...usePurchaseHook}
            hanldePurchase={() => {
                if (validate()) usePurchaseHook.hanldePurchase();
            }}
            UnderAnonyMouseForm={
                <div>
                    <DeliveryInfoForm
                        input={deliveryInfo}
                        setInput={setDeliveryInfo}
                    />
                    <Mb />
                </div>
            }
            OverPlace={
                <JDcard mb head="선택 상품보기">
                    <BuyPageShoppingTable
                        handleDelete={handleDeleteCD}
                        {...checkTableHook}
                        products={fullItemList}
                    />
                </JDcard>
            }
            PriceViewer={
                <CommonPriceViewer
                    optionsPrice={optionsPrice}
                    productPrice={checkPriceSum}
                    DeliveryPriceView={
                        <DeliveryPriceInfoViewer
                            delivery={deliveryConfig as any}
                            mr
                        />
                    }
                    totalPrice={totalPrice}
                />
            }
        />
    );
};

export default BuyPageShoppingPurchase;
