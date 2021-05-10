import { arraySum, Validater } from "@janda-com/front";
import { useState } from "react";
import { IBuypageProductData } from "../page/buypageRouter/page/buypageList/helper/productMap";
import { Fattribute, SelectOptionInput } from "../type/api";
import { findUnFilledAttribute } from "../utils/attribute";
import { useBookingsInput } from "./useBookingInput";
import { useCopy } from "./useCopy";

export interface IUseBuypageDetail
    extends ReturnType<typeof useBuypageDetail> {}
interface IUseBuypageDetailProp {
    defaultAttrs: Fattribute[];
}

export const useBuypageDetail = ({ defaultAttrs }: IUseBuypageDetailProp) => {
    const [options, setOptions] = useState<SelectOptionInput[]>([]);
    const [itemAttrs, setItemAttrs] = useCopy(defaultAttrs);
    const [step, setStep] = useState<"pick" | "purchase">("pick");
    const bookingsInputHook = useBookingsInput([]);
    const unFilledForm = findUnFilledAttribute(itemAttrs);

    const { validate, nodes: ValidateNodes } = new Validater([
        {
            value: !unFilledForm,
            failMsg: "필수 입력칸을 채워주세요.",
            id: unFilledForm?.key + "input",
        },
    ]);

    const bookingInputPrice = bookingsInputHook.priceSum;
    const optionsPrice = arraySum(options.map((op) => op.priceOrigin));
    const bookingInputsAndOptionsPrice = bookingInputPrice + optionsPrice;

    return {
        options,
        setOptions,
        validate,
        ValidateNodes,
        step,
        setStep,
        itemAttrs,
        setItemAttrs,
        bookingsInputHook,
        bookingInputPrice,
        optionsPrice,
        bookingInputsAndOptionsPrice,
    };
};
