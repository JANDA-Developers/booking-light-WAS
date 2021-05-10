import {
    Flex,
    getAllFromUrl,
    JDcard,
    JDcontainer,
    JDhorizen,
    Large,
    Mb,
    toast,
    updateURLParameter,
    WindowSize,
    WindowSizeNumber,
} from "@janda-com/front";
import { cloneDeep, isEmpty } from "lodash";
import React, { useContext, useEffect, useState } from "react";
import { useHistory } from "react-router-dom";
import { ImgSlider } from "../../../../atom/Imgslider";
import { CardBtn } from "../../../../component/btns/ModalBtn";
import { EditorView } from "../../../../component/editor/EditorView";
import { useItemFindById } from "../../../../hook/useItem";
import { TUseProductList } from "../../../../hook/useProduct";
import { _ProductFilter } from "../../../../type/api";
import { Ratio } from "../../../../type/const";
import { BASKET } from "../../../../utils/Basket";
import { BuypageContext } from "../buypageList/helper/context";
import { Capacity } from "../components/Capacity";
import { BackStepBar } from "../../../../component/backstepBar/BackstepBar";
import { ISet } from "@janda-com/front/dist/types/interface";
import { BuyPagePurchase } from "../buypagePurchase/BuyPagePurchase";
import { Validater } from "../../../../utils/Validater";
import { findUnFilledAttribute } from "../../../../utils/attribute";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import { useBuypageDetail } from "../../../../hook/useBuypageDetail";
import { AttributeInputs } from "../../../../component/attributeInputs/AttributeInputs";

type IDetailRouteProp = { itemId?: string };
interface IProp {
    setDetailItemId: ISet<IBuypageProductData | undefined>;
    productListHook: TUseProductList;
    itemId?: string;
}
2;
export const BuyPageDetail: React.FC<IProp> = ({
    setDetailItemId,
    itemId,
    productListHook,
}) => {
    const { location } = useHistory();
    const context = useContext(BuypageContext);
    const { store, configure } = context;
    const {
        RESERVATION_NORMAL: { texts },
    } = configure;

    const { item } = useItemFindById(itemId);

    const { items: _items } = productListHook;

    const items = _items.filter((item) => item._itemId === itemId);
    const history = useHistory();

    const buypageDetailHook = useBuypageDetail({
        defaultAttrs: item?.attrs || [],
    });
    const {
        setStep,
        step,
        bookingsInputHook,
        ValidateNodes,
        setItemAttrs,
        itemAttrs,
    } = buypageDetailHook;
    const { bookingInputs, setBookingInputs } = bookingsInputHook;

    const handleAddBracket = () => {
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
        BASKET.addItems([...bookingsInputHook.bookingInputs]);
        toast("장바구니에 추가 되었습니다.");
    };

    const { validate } = new Validater([
        {
            value: !isEmpty(bookingInputs),
            failMsg: "선택된 상품이 없습니다.",
            id: "ProductSelect",
        },
        ...ValidateNodes,
    ]);

    const handlePurchase = () => {
        if (!validate()) return;
        setStep("purchase");
    };

    useEffect(() => {
        if (item) {
            setBookingInputs([]);
            setItemAttrs(cloneDeep(item?.attrs || []));
        }
    }, [item?._id]);

    const handleBackStep = () => {
        if (step === "pick" && setDetailItemId) setDetailItemId(undefined);
        else {
            setStep("pick");
        }
    };

    return (
        <JDcontainer
            verticalPadding
            className="buyPageSetDetail__container"
            size={WindowSize.lg}
        >
            {step === "pick" && (
                <BackStepBar go={handleBackStep} mb label="뒤로가기" />
            )}
            <div>
                <Flex hide={step !== "pick"} oneone>
                    <JDcard
                        style={{ width: "100%" }}
                        foot={
                            <Flex>
                                <CardBtn
                                    onClick={handlePurchase}
                                    thema="primary"
                                    size="long"
                                >
                                    {texts.purchase.kr}
                                </CardBtn>
                            </Flex>
                        }
                        head={item?.name}
                    >
                        <ImgSlider
                            key={item?._id}
                            photoProps={{ ratio: Ratio["16:9"] }}
                            imgs={item?.images.map((img) => img.uri)}
                        />
                        <Mb mb="large" />
                        <Large mb weight={600}>
                            {item?.name}
                        </Large>
                        <EditorView model={item?.descriptionDetail} />
                        <JDhorizen margin={3} />
                        <Large id="ProductSelect" mb>
                            {texts.productSelectLabel.kr}
                        </Large>
                        <Flex wrap>
                            {items.map((product) => (
                                <Capacity
                                    bookingsInputHook={bookingsInputHook}
                                    key={product._id}
                                    product={product}
                                />
                            ))}
                        </Flex>
                        <JDhorizen margin={3} />
                        <div>
                            <Large mb>{texts.addtionalInput.kr}</Large>
                            <AttributeInputs
                                attrs={itemAttrs}
                                setAttrs={setItemAttrs}
                            />
                        </div>
                    </JDcard>
                </Flex>
            </div>
            {step === "purchase" ? (
                <BuyPagePurchase
                    handleBackStep={handleBackStep}
                    buypageDetailHook={buypageDetailHook}
                />
            ) : undefined}
        </JDcontainer>
    );
};

export default BuyPageDetail;
