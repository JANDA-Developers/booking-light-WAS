import {
    JDicon,
    autoComma,
    Bold,
    Col,
    Flex,
    Grid,
    JDbutton,
    JDcontainer,
    JDslide,
    JDslider,
    Large,
    Small,
    toast,
    JDcard,
    JDhorizen,
    Mb,
    isEmpty,
} from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React, { useContext, useState } from "react";
import { BackStepBar } from "../../../../component/backstepBar/BackstepBar";
import { useBookingsInput } from "../../../../hook/useBookingInput";
import { useCopy } from "../../../../hook/useCopy";
import { findUnFilledAttribute } from "../../../../utils/attribute";
import { BASKET } from "../../../../utils/Basket";
import { Validater } from "../../../../utils/Validater";
import {
    BuyPageShoppingPurchase,
    deliveryPriceGet,
} from "../buypagePurchase/BuyPageShoppingPurchase";
import { Capacity, ShoppingGoodsSelecters } from "../components/Capacity";
import { BuypageContext } from "../buypageList/helper/context";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import {
    deliverInfoDefault,
    DeliveryPriceInfoViewer,
} from "../buypageList/components/DeliveryInfoView";
import { DetailCapcitySelecter } from "../buypageList/components/productSelecter/DetailCapcitySelecter";
import { BuyPageDetailBase } from "./BuyPageDetailBase";
import { useBuypageDetail } from "../../../../hook/useBuypageDetail";

interface IProp {
    setDetailItem: ISet<IBuypageProductData | undefined>;
    item?: IBuypageProductData;
}

export const BuypageShoppingDetail: React.FC<IProp> = ({
    item,
    setDetailItem,
}) => {
    if (!item) return null;

    const {
        store: { buypage },
        updateBasket,
        configure: { SHOPPING_MALL },
    } = useContext(BuypageContext);
    const { useBasket } = SHOPPING_MALL;
    const deliveryInfo = buypage.delivery;
    const { thumbNail: _thumbNail } = item;

    const buypageDetailHook = useBuypageDetail({ defaultAttrs: item.attrs });
    const {
        bookingsInputHook,
        ValidateNodes,
        setStep,
        step,
        itemAttrs,
    } = buypageDetailHook;
    const priceSum = bookingsInputHook.priceSum;

    const { validate } = new Validater([
        {
            value: !isEmpty(bookingsInputHook.bookingInputs),
            failMsg: "상품을 선택해주세요.",
        },
        ...ValidateNodes,
    ]);

    const handleAddBracket = () => {
        if (!validate()) return;
        const ids = bookingsInputHook.bookingInputs.map((i) => i.productId);
        if (BASKET.hasDuplicated(ids)) {
            if (
                !confirm(
                    "장바구니에 이미 선택된 아이템이 있습니다. 진행하시면 선택된 아이템 대신 들어가게 됩니다."
                )
            ) {
                return;
            }
        }
        BASKET.addItems(
            bookingsInputHook.bookingInputs.map((bk) => {
                return { ...bk, attrs: itemAttrs, _id: bk.productId };
            })
        );
        toast("장바구니에 추가 되었습니다.");
        updateBasket();
    };

    const deliveryPrice = deliveryPriceGet(deliveryInfo, priceSum);
    const totalPrice = deliveryPrice + priceSum;

    const handlePurchase = () => {
        const ids = bookingsInputHook.bookingInputs.map((i) => i.productId);
        if (!validate()) return;
        if (BASKET.hasDuplicated(ids)) {
            if (
                !confirm(
                    "장바구니에 이미 선택된 아이템이 있습니다. 진행하시면 선택된 아이템 대신 들어가게 됩니다."
                )
            ) {
                return;
            }
        }
        BASKET.removeItems(ids);
        setStep("purchase");
        updateBasket();
    };

    return (
        <div>
            {step === "pick" && (
                <BackStepBar
                    mb
                    label="뒤로가기"
                    onClick={() => {
                        setDetailItem(undefined);
                    }}
                />
            )}
            <BuyPageDetailBase
                buypageDetailHook={buypageDetailHook}
                item={item}
                totalPrice={totalPrice}
                handlePurchase={handlePurchase}
                CapacitySelectPlace={
                    <div>
                        <DeliveryPriceInfoViewer
                            mb
                            delivery={deliveryInfo || deliverInfoDefault}
                        />
                        <DetailCapcitySelecter
                            mb
                            selcetedValue={undefined}
                            onChange={(prod, detail) => {
                                if (
                                    !bookingsInputHook.findCpacity(
                                        prod._id,
                                        detail.key
                                    )
                                )
                                    bookingsInputHook.capacityChangeMaster(
                                        prod,
                                        detail,
                                        1
                                    );
                            }}
                            products={item.products}
                        />
                        {bookingsInputHook.bookingInputs.map((bookingInput) => (
                            <ShoppingGoodsSelecters
                                mb
                                key={bookingInput.productId}
                                product={bookingInput.productOrigin as any}
                                bookingsInputHook={bookingsInputHook}
                            />
                        ))}
                    </div>
                }
                ButtonPlace={
                    <Flex>
                        {useBasket && (
                            <JDbutton
                                mode="flat"
                                br="square"
                                onClick={handleAddBracket}
                                size="longLarge"
                                mr
                                thema="black"
                            >
                                장바구니
                            </JDbutton>
                        )}
                        <JDbutton
                            mode="flat"
                            br="square"
                            onClick={handlePurchase}
                            size="longLarge"
                            thema="primary"
                        >
                            구매하기
                        </JDbutton>
                    </Flex>
                }
                hide={step !== "pick"}
            />
            {step === "purchase" && (
                <BuyPageShoppingPurchase
                    handleBackStep={() => {
                        setStep("pick");
                    }}
                    buypageDetailHook={buypageDetailHook}
                />
            )}
        </div>
    );
};
