import {
    autoComma,
    Bold,
    Col,
    Flex,
    Grid,
    JDbutton,
    JDcard,
    JDhorizen,
    Large,
    Small,
} from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext } from "react";
import { AttributeInputs } from "../../../../component/attributeInputs/AttributeInputs";
import { EditorView } from "../../../../component/editor/EditorView";
import { JDicon } from "../../../../component/icons/Icons";
import { OptionSelecter } from "../../../../component/optionSelecter/OptionSelecter";
import { ThumbsSlider } from "../../../../component/ThumbsSlider/ThumbsSlider";
import { IUseBookingsInput } from "../../../../hook/useBookingInput";
import { IUseBuypageDetail } from "../../../../hook/useBuypageDetail";
import { itemList_ItemList_items_ItemBooking_attrs } from "../../../../type/api";
import { cutStr } from "../../../../utils/cutStr";
import { BuypageContext } from "../buypageList/helper/context";
import { IBuypageProductData } from "../buypageList/helper/productMap";

export interface IBuypagePurchaseCommon {
    buypageDetailHook: IUseBuypageDetail;
}

interface IProp extends CardProps, IBuypagePurchaseCommon {
    CapacitySelectPlace: JSX.Element;
    ButtonPlace?: JSX.Element;
    item: IBuypageProductData;
    handlePurchase: () => void;
    totalPrice: number;
    unitPerPrice?: number;
}

export const BuyPageDetailBase: React.FC<IProp> = ({
    buypageDetailHook,
    CapacitySelectPlace,
    ButtonPlace,
    item,
    totalPrice,
    handlePurchase,
    unitPerPrice,
    ...props
}) => {
    const {
        options,
        setOptions,
        itemAttrs,
        setItemAttrs,
        bookingInputsAndOptionsPrice,
    } = buypageDetailHook;
    const { noPayMethod } = useContext(BuypageContext);
    const {
        descriptionDetail,
        name,
        price,
        description,
        images,
        thumbNail: _thumbNail,
    } = item;

    const Button = ButtonPlace || (
        <Flex>
            <JDbutton
                mode="flat"
                br="square"
                onClick={handlePurchase}
                size="longLarge"
                thema="primary"
            >
                선택완료
            </JDbutton>
        </Flex>
    );

    return (
        <JDcard {...props}>
            <Grid>
                <Col lg={12} full={6}>
                    <ThumbsSlider images={images.map((img) => img.uri)} />
                </Col>
                <Col lg={12} full={6}>
                    <Bold mb size="large">
                        {name}
                    </Bold>
                    <Small>{cutStr(description, 800)}</Small>
                    <Large hide={noPayMethod} mb>
                        {" "}
                        <JDicon icon="won" />
                        {autoComma(unitPerPrice || price)}
                    </Large>
                    {CapacitySelectPlace}
                    <OptionSelecter
                        onChange={setOptions}
                        selectOption={options}
                        optionFilter={{
                            OR: [
                                {
                                    dependentItem__in: [item._id],
                                },
                                { dependentItem__eq: null },
                            ],
                        }}
                    />
                    <JDhorizen margin={3} />
                    <AttributeInputs
                        attrs={itemAttrs}
                        setAttrs={setItemAttrs}
                    />
                    <Flex
                        hide={noPayMethod}
                        mb
                        typho={{ size: "large", weight: 600 }}
                        end
                    >
                        합계 {autoComma(bookingInputsAndOptionsPrice)}
                    </Flex>
                    {Button}
                </Col>
            </Grid>
            <JDhorizen margin={4} />
            <EditorView model={descriptionDetail} />
        </JDcard>
    );
};
