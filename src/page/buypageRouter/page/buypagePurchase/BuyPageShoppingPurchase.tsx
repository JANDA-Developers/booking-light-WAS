import { Flex, JDcard, autoComma, JDtypho, arraySum } from "@janda-com/front";
import _ from "lodash";
import { isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router";
import { DeliveryInfoForm } from "../../../../component/deliveryInfoForm/DeliveryInfoForm";
import { useCheckBoxTable } from "../../../../component/table/hook";
import {
    IBookingInputData,
    IUseBookingsInput,
} from "../../../../hook/useBookingInput";
import { useDeliveryForm } from "../../../../hook/useDelivery";
import { usePurchase } from "../../../../hook/usePay";
import {
    itemFindById_ItemFindById_ItemBooking_attrs,
    storeFindByCode_StoreFindByCode_buypage_delivery,
    CapacityInput,
} from "../../../../type/api";
import { DEFAULT_DELIVERY } from "../../../../type/const";
import { BASKET, IBasketItem } from "../../../../utils/Basket";
import {
    calcuatePrice,
    extractDetails,
    extractKeys,
} from "../../../../utils/productBookingUtils";
import { Validater } from "../../../../utils/Validater";
import { BuyPagePaths } from "../../BuyPageRouter";
import { IBuypagePurchaseCommon } from "../buypageDetail/BuyPageDetailBase";
import {
    BuyPageShoppingTable,
    getPordByCapcityKey,
} from "../buypageList/components/BuyPageShoppingTable";
import { DeliveryPriceInfoViewer } from "../buypageList/components/DeliveryInfoView";
import { BuypageContext } from "../buypageList/helper/context";
import { BuyPagePurchaseBase } from "./BuyPagePurchaseBase";
import { CommonPriceViewer } from "./components/PriceViewer";

interface IProp extends IBuypagePurchaseCommon {
    handleBackStep: () => void;
}

export const deliveryPriceGet = (
    deliveryInfo: storeFindByCode_StoreFindByCode_buypage_delivery | null,
    priceSum: number
) => {
    const { fee, overFreePrice } = deliveryInfo || {};
    if (!fee) return 0;
    if (overFreePrice) {
        const isOver = priceSum >= overFreePrice;
        if (isOver) return 0;
    }
    return fee;
};

export const getUniqDetails = (details: CapacityInput[]) => {
    let keys: string[] = [];
    let result: CapacityInput[] = [];
    details?.forEach((li) => {
        if (!keys.includes(li.key)) {
            keys.push(li.key);
            result.push(li);
        }
    });
    return result;
};

export const BuyPageShoppingPurchase: React.FC<IProp> = ({
    buypageDetailHook,
    handleBackStep,
}) => {
    const { bookingsInputHook, optionsPrice } = buypageDetailHook;
    const histroy = useHistory();
    const selectedOps = extractKeys(bookingsInputHook?.bookingInputs || []);
    const purchaseProducts = bookingsInputHook?.bookingInputs || [];

    const { store, configure, updateBasket, noPayMethod } =
        useContext(BuypageContext);
    const { deliveryInfo, setDeliveryInfo, deliverValidate } =
        useDeliveryForm();

    const buypage = store.buypage;
    const policies = buypage.policies || [];
    const deliveryConfig = store.buypage.delivery || DEFAULT_DELIVERY;
    const { lowerPrice } = deliveryConfig;

    const basketItems = BASKET.getItems();
    const fullList = basketItems.concat(purchaseProducts || []);
    const fullListDetails = getUniqDetails(extractDetails(fullList));

    const checkTableHook = useCheckBoxTable(
        [...selectedOps.filter((v) => v)],
        extractKeys(fullList)
    );

    const checkedIDs = checkTableHook.checkedIds;
    const selectedItems = fullListDetails.filter((liDetail) =>
        checkedIDs.includes(liDetail.key)
    );
    const checkPriceSum = arraySum(selectedItems.map((item) => item.price));
    const deliveryPrice = deliveryPriceGet(deliveryConfig, checkPriceSum);
    const totalPrice = deliveryPrice + checkPriceSum;

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

    const targetProducts: IBookingInputData[] = [];
    selectedItems.forEach((item) => {
        const targetProduct = getPordByCapcityKey(fullList, item.key);
        if (!targetProduct) return;

        const containedTargetProd = targetProducts.find(
            (tp) => tp.productId === targetProduct._id
        );

        if (containedTargetProd) {
            containedTargetProd.countDetails?.push({ ...item });
        } else {
            const newProd = {
                ...targetProduct,
                countDetails: [{ ...item }],
            } as any;

            targetProducts.push(newProd);
        }
    });

    calcuatePrice(targetProducts);
    deliveryInfo.deliveryPrice = deliveryPrice;

    const usePurchaseHook = usePurchase({
        withBracekt: true,
        buypageDetailHook,
        deliveryInfo,
    });
    const { verificationHook, userInfoHook } = usePurchaseHook;

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

    const toIndex = () => {
        histroy.push(BuyPagePaths.index);
    };

    const delivertInfoAutoFill = () => {
        if (verificationHook.verifiData?.isVerified) {
            if (deliveryInfo.receiverSmaeWithBuyer) {
                setDeliveryInfo({
                    ...deliveryInfo,
                    receiverName: userInfoHook[0].name,
                    receiverPhone: userInfoHook[0].phoneNumber,
                });
            }
        }
    };

    useEffect(delivertInfoAutoFill, [verificationHook.verifiData?.isVerified]);

    return (
        <BuyPagePurchaseBase
            handleBackStep={handleBackStep}
            {...usePurchaseHook}
            hanldePurchase={() => {
                if (validate()) usePurchaseHook.hanldePurchase();
            }}
            SelectViewer={
                <DeliveryInfoForm
                    input={deliveryInfo}
                    setInput={setDeliveryInfo}
                />
            }
            OverPlace={
                <JDcard mb head="선택 상품보기">
                    <BuyPageShoppingTable
                        handleDelete={handleDeleteCD}
                        {...checkTableHook}
                        products={fullList}
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
