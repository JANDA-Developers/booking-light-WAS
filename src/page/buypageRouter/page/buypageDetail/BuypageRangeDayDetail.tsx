import { JDhorizen, isEmpty, Validater } from "@janda-com/front";
import { ISet } from "@janda-com/front/dist/types/interface";
import React from "react";
import { BackStepBar } from "../../../../component/backstepBar/BackstepBar";
import { useBuypageDetail } from "../../../../hook/useBuypageDetail";
import { getSumPrice } from "../../../../utils/productBookingUtils";
import { IBuypageProductData } from "../buypageList/helper/productMap";
import BuyPageRangeDayPurchase from "../buypagePurchase/BuyPageRangeDayPurchase";
import { CpacityRangeDateSelecter } from "../components/Capacity";
import { BuyPageDetailBase } from "./BuyPageDetailBase";

interface IProp {
    setDetailItem: ISet<IBuypageProductData | undefined>;
    item?: IBuypageProductData;
}

export const BuypageRangeDayDetail: React.FC<IProp> = ({
    item,
    setDetailItem,
}) => {
    if (!item) return null;
    const buypageDetailHook = useBuypageDetail({ defaultAttrs: item.attrs });
    const {
        bookingsInputHook,
        ValidateNodes,
        setStep,
        step,
    } = buypageDetailHook;
    const priceSum = bookingsInputHook.priceSum;
    const totalPrice = priceSum;

    const { validate } = new Validater([
        {
            value: !isEmpty(bookingsInputHook.bookingInputs),
            failMsg: "상품을 선택해주세요.",
        },
        ...ValidateNodes,
    ]);

    const handlePurchase = () => {
        if (!validate()) return;
        setStep("purchase");
    };

    const priceRangeDay = getSumPrice(item.products);

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
                unitPerPrice={priceRangeDay}
                item={item}
                totalPrice={totalPrice}
                handlePurchase={handlePurchase}
                CapacitySelectPlace={
                    <div>
                        <CpacityRangeDateSelecter
                            products={item.products}
                            bookingsInputHook={bookingsInputHook}
                        />
                        <JDhorizen margin={3} />
                    </div>
                }
                hide={step !== "pick"}
            />
            {step === "purchase" && (
                <BuyPageRangeDayPurchase
                    handleBackStep={() => {
                        setStep("pick");
                    }}
                    item={item!}
                    buypageDetailHook={buypageDetailHook}
                />
            )}
        </div>
    );
};

export default BuypageRangeDayDetail;

// <JDcard hide={step !== "pick"}>
// <Grid>
//     <Col lg={12} full={6}>
//         <ThumbsSlider images={images.map((img) => img.uri)} />
//     </Col>
//     <Col lg={12} full={6}>
//         <Bold mb size="large">
//             {name}
//         </Bold>
//         <Small>{cutStr(description, 800)}</Small>
//         <Large mb>
//             {" "}
//             <JDicon icon="won" />
//             {autoComma(priceRangeDay)}
//         </Large>
//         <CpacityRangeDateSelecter
//             products={item.products}
//             bookingsInputHook={bookingsInputHook}
//         />
//         <JDhorizen margin={3} />
//         <AttributeInputs attrs={attrs} setAttrs={setAttrs} />
//         <Flex mb typho={{ size: "large", weight: 600 }} end>
//             합계 {autoComma(totalPrice)}
//         </Flex>
//         <Flex>
//             <JDbutton
//                 mode="flat"
//                 br="square"
//                 onClick={handlePurchase}
//                 size="longLarge"
//                 thema="primary"
//             >
//                 구매하기
//             </JDbutton>
//         </Flex>
//     </Col>
// </Grid>
// <JDhorizen margin={4} />
// <EditorView model={descriptionDetail} />
// </JDcard>
