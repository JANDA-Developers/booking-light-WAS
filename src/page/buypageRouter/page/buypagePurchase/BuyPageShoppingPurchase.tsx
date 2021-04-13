import { JDcheckBox, Col, Flex, Grid, JDbutton, JDcard, JDmodal, JDPrivacyPolicy, Large, useModal, JDhorizen, autoComma, JDtypho, JDradio, s4, isLast, arraySum, Mb } from '@janda-com/front';
import { isEmpty } from 'lodash';
import React, { useContext, useState } from 'react';
import { Router, useHistory } from 'react-router';
import { PollingWatchKind } from 'typescript';
import { BackStepBar } from '../../../../component/backstepBar/BackstepBar';
import { DeliveryInfoForm } from '../../../../component/deliveryInfoForm/DeliveryInfoForm';
import { AttributeInput } from '../../../../component/formCreater/components/AttributeInput';
import { IPrivacyModalInfo, PrivacyModal } from '../../../../component/privacyModal/PrivacyModal';
import { useCheckBoxTable } from '../../../../component/table/hook';
import { IBookingInputData, IUseBookingsInput } from '../../../../hook/useBookingInput';
import { useCopy } from '../../../../hook/useCopy';
import { useDeliveryForm } from '../../../../hook/useDelivery';
import { useIdSelecter } from '../../../../hook/useIdSelecter';
import { usePurchase } from '../../../../hook/usePay';
import NiceElments from '../../../../nice/NiceElments';
import { itemFindById_ItemFindById_ItemBooking_attrs, purchaseBundleCreate_PurchaseBundleCreate_data, storeFindByCode_StoreFindByCode_buypage_delivery, UsageInput } from '../../../../type/api';
import { DEFAULT_DELIVERY } from '../../../../type/const';
import { BASKET, IBasketItem } from '../../../../utils/Basket';
import { payMethodKr } from '../../../../utils/enumConverter';
import { Validater } from '../../../../utils/Validater';
import { BuyPagePaths } from '../../BuyPageRouter';
import { getNiceProperty } from '../../utils/getNiceProperty';
import { BuyPageShoppingTable, getPordByCapcityKey } from '../buypageList/components/BuyPageShoppingTable';
import { BuypageContext, BuypageShoppingContext } from '../buypageList/helper/context';
import { AnonyPurchaseForm } from '../components/AnonyPurchaseForm';

interface IProp {
    handleBackStep?: () => void;
    bookingsInputHook?: IUseBookingsInput
    attributes?: itemFindById_ItemFindById_ItemBooking_attrs[]
}


export const deliveryPriceGet = (deliveryInfo: storeFindByCode_StoreFindByCode_buypage_delivery | null, priceSum: number) => {
    const { fee, overFreePrice } = deliveryInfo || {}
    if (!fee) return 0;
    if (overFreePrice) {
        const isOver = priceSum >= overFreePrice;
        if (isOver)
            return 0
    }
    return fee
}

export const BuyPageShoppingPurchase: React.FC<IProp> = ({
    attributes,
    bookingsInputHook,
    handleBackStep
}) => {
    const isInDetail = !!bookingsInputHook;
    const extractKeys = (inputs: (IBookingInputData | IBasketItem)[]) => {
        return inputs.flatMap(bi => bi.countDetails?.flatMap(cd => cd.key)) as string[]
    }
    const extractDetails = (inputs: (IBookingInputData | IBasketItem)[]) => {
        return inputs.flatMap(bi => bi.countDetails?.flatMap(cd => cd)).filter(cd => cd) as UsageInput[]
    }

    const selectedOps = extractKeys(bookingsInputHook?.bookingInputs || []);
    const purchaseProduct = bookingsInputHook?.bookingInputs || [];
    const priceSum = bookingsInputHook?.priceSum || 0;

    const policyModalHook = useModal<IPrivacyModalInfo>();
    const history = useHistory();


    const { store, configure, updateBasket } = useContext(BuypageContext);
    const { deliveryInfo, setDeliveryInfo, deliverValidate } = useDeliveryForm();


    const buypage = store.buypage;
    const policies = buypage.policies || [];
    const policyIdHooks = useIdSelecter(policies.map(p => p._id));
    const deliveryConfig = store.buypage.delivery;
    const { fee, lowerPrice, overFreePrice } = deliveryConfig || DEFAULT_DELIVERY;

    const basketItems = BASKET.getItems();
    const fullList = basketItems.concat(purchaseProduct || []);
    const fullListDetails = extractDetails(fullList);

    const checkTableHook = useCheckBoxTable([...selectedOps.filter(v => v)], extractKeys(fullList));

    const checkedIDs = checkTableHook.checkedIds;
    const selectedItems = fullListDetails.filter(liDetail => checkedIDs.includes(liDetail.key));
    const checkPriceSum = arraySum(selectedItems.map(item => item.count * item.price));
    const deliveryPrice = deliveryPriceGet(deliveryConfig, checkPriceSum);
    const totalPrice = deliveryPrice + checkPriceSum;


    const { validate } = new Validater([{
        value: !isEmpty(selectedItems),
        failMsg: "하나이상의 상품을 선택 해주세요.",
    }, {
        value: !lowerPrice || checkPriceSum > lowerPrice,
        failMsg: "선택 상품 금액이 최소 주문 금액보다 적습니다.",
    },
    ...deliverValidate.nodes
    ])

    const targetProducts: IBookingInputData[] = []
    selectedItems.forEach((item) => {
        const targetProduct = getPordByCapcityKey(fullList, item.key);
        if (!targetProduct) return;
        const containedTargetProd = targetProducts.find(tp => tp.productId === targetProduct._id);
        if (containedTargetProd) {
            containedTargetProd.countDetails?.push({ ...item });
        } else {
            const newProd = {
                ...targetProduct,
                countDetails: [{ ...item }],
            } as any;
            targetProducts.push(newProd)
        }
    })

    function handleSucess(data: purchaseBundleCreate_PurchaseBundleCreate_data) {
        BASKET.removeItems(targetProducts.map(tp => tp.productId));
        history.push(BuyPagePaths.sucess + "/" + data._id);
    }

    const {
        attrs,
        setAttrs,
        verificationHook,
        userInfoHook,
        anonyUserInfo,
        hanldePurchase,
        info,
        niceAuthData,
        openNicePayModal,
        setInfo,
        paymethodHook,
    } = usePurchase({
        buypage,
        attributes: attributes || [],
        configure,
        onSucess: handleSucess,
        purchaseProduct: targetProducts
    });

    const handleDeleteCD = (usageInput: UsageInput, prod: IBasketItem) => {
        if (!prod._id) return;
        if (bookingsInputHook?.findCpacity(prod._id!, usageInput.key))
            bookingsInputHook?.removeCapacity(prod._id!, usageInput.key);
        else {
            const filtered = prod.countDetails?.filter(cd => cd.key !== usageInput.key);
            if (isEmpty(filtered)) {
                BASKET.removeItem(prod._id);
            } else {
                prod.countDetails = filtered;
                BASKET.overrideItem(prod._id, prod)
            }
            updateBasket();
        }
    }


    return <div>
        <BackStepBar onClick={handleBackStep} mb />
        <JDcard mb head="선택 상품보기">
            <BuyPageShoppingTable handleDelete={handleDeleteCD} {...checkTableHook} products={fullList} />
        </JDcard>
        <JDcard >
            <Grid>
                <Col lg={12} full={6}>
                    <NiceElments
                        {...getNiceProperty({
                            anonyUserInfo,
                            niceAuthData,
                            store
                        })}
                    />
                    <DeliveryInfoForm
                        input={deliveryInfo}
                        setInput={setDeliveryInfo}
                    />
                    <JDhorizen margin={3} />
                    <Large mb>구매자정보</Large>
                    <AnonyPurchaseForm
                        userInfoHook={userInfoHook}
                        verificationHook={verificationHook}
                    />
                    {(attrs || []).map(attr => <div key={attr.key}>
                        <AttributeInput onChange={(val) => {
                            attr.value = val;
                            setAttrs([
                                ...(attrs || [])
                            ])
                        }} attribute={attr} />
                        <Mb />
                    </div>
                    )}
                </Col>
                <Col lg={12} full={6}>
                    <Large mb>결제금액</Large>
                    <Flex mb="small">
                        <JDtypho mr>
                            상품금액
                    </JDtypho>
                        <div>
                            {autoComma(checkPriceSum)} 원
                    </div>
                    </Flex>
                    <Flex mb>
                        <JDtypho mr>
                            배송비
                    </JDtypho>
                        <div>
                            {autoComma(deliveryPrice)} 원
                    </div>
                    </Flex>
                    <Flex typho={{ size: "large" }}>
                        <JDtypho mr>
                            최종금액
                    </JDtypho>
                        <JDtypho color="error">
                            {autoComma(totalPrice)} 원
                    </JDtypho>
                    </Flex>
                    <JDhorizen margin={3} />
                    <JDtypho></JDtypho>
                    <JDcheckBox checked={policyIdHooks.isAllSelected} onChange={policyIdHooks.toggleAll} mb label="전체동의" />
                    {policies.map((policy, index) =>
                        <Flex key={policy._id} mb={isLast(index, policies) ? undefined : "small"}>
                            <Flex>
                                <JDtypho mr>{policy.name}</JDtypho>
                                <JDcheckBox checked={policyIdHooks.isChecked(policy._id)}
                                    onChange={
                                        () => {
                                            policyIdHooks.toggle(policy._id)
                                        }}
                                    size="small"
                                />
                            </Flex>
                            <JDbutton onClick={() => {
                                policyModalHook.openModal({
                                    onAgree: () => {
                                        policyIdHooks.check(policy._id)
                                        policyModalHook.closeModal()
                                    },
                                    policy: policy.content,
                                    head: {
                                        title: policy.name + "약관",
                                    }
                                })
                            }} br="square" mode="flat" size="tiny" thema="black">약관보기</JDbutton>
                        </Flex>
                    )}
                    <JDhorizen margin={3} />
                    <JDradio mb onChange={(method) => {
                        paymethodHook.onChange({
                            label: payMethodKr(method),
                            value: method
                        })
                    }} selectedValue={paymethodHook.selectedOption?.value} btns={
                        configure.payMethods.map(paymethod => ({
                            key: paymethod + "radio",
                            label: payMethodKr(paymethod),
                            value: paymethod
                        }))
                    } />
                    <JDbutton mode="flat" onClick={() => {
                        if (!validate()) return;
                        hanldePurchase()
                    }} thema="primary" br="square" size="longLarge">주문하기</JDbutton>
                </Col>
            </Grid>
            <PrivacyModal modalHook={policyModalHook} />
        </JDcard >
    </div>;
};

