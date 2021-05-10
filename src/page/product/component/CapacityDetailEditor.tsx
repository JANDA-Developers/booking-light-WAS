import {
    InputText,
    autoComma,
    JDcard,
    JDtypho,
    Bold,
    JDhorizen,
    Mb,
    JDlabel,
    Small,
    Flex,
    s4,
    JDalign,
} from "@janda-com/front";
import { toNumber } from "lodash";
import React, { useContext, useEffect } from "react";
import { CardBtn } from "../../../component/btns/ModalBtn";
import { JDicon } from "../../../component/icons/Icons";
import { SelectCounter } from "../../../component/selectCounter/SelectCounter";
import AppContext from "../../../context";
import { Fcapacity } from "../../../type/api";

interface IProp {
    mode?: "single";
    defaultPrice?: number;
    defaultLabel?: string;
    usageDetails: Fcapacity[];
    onChange: (usageDetails: Fcapacity[]) => void;
}

export const CapacityDetailEditor: React.FC<IProp> = ({
    defaultPrice,
    defaultLabel,
    usageDetails,
    onChange,
    mode,
}) => {
    const { isDateRangeMall, isTimeMall, isNonProfit } = useContext(AppContext);
    const isSingleMode = mode === "single";

    const handleChange = (detail: Fcapacity, key: keyof Fcapacity) => (
        v: any
    ) => {
        let _v = v;
        if (key === "price") {
            _v = toNumber(v);
        }
        // @ts-ignore
        detail[key] = _v;

        onChange([...usageDetails]);
    };

    const handleAdd = () => {
        usageDetails.push({
            __typename: "Capacity",
            count: 0,
            key: s4(),
            label: defaultLabel || "",
            price: defaultPrice || 0,
        });

        onChange([...usageDetails]);
    };

    const handleDelete = (key: string) => () => {
        const details = usageDetails.filter((ud) => ud.key !== key);
        onChange([...details]);
    };

    useEffect(() => {
        if (!usageDetails.length) {
            handleAdd();
        }
    }, [usageDetails.length]);

    const mono = usageDetails[0];

    if (isSingleMode && mono)
        return (
            <JDalign>
                {!isTimeMall && (
                    <InputText
                        id={CpadityDetailId("name", 0)}
                        mb
                        label={`품명`}
                        onChange={handleChange(mono, "label")}
                        value={mono.label}
                    />
                )}
                {!isNonProfit && (
                    <InputText
                        id={"monoPrice"}
                        mb
                        comma
                        onChange={handleChange(mono, "price")}
                        value={mono.price}
                        label="가격"
                    />
                )}
                <SelectCounter
                    id={"monoSelectCounter"}
                    mb
                    selectProps={{ menuPlacement: "top" }}
                    label="수량"
                    count={mono.count}
                    onChange={handleChange(mono, "count")}
                />
            </JDalign>
        );

    return (
        <JDcard
            mode="border"
            className="capacityDetailEditor"
            head={"가격/수량 설정"}
            foot={
                isDateRangeMall || isTimeMall ? undefined : (
                    <CardBtn br="square" thema="grey4" onClick={handleAdd}>
                        추가항목 만들기
                    </CardBtn>
                )
            }
        >
            <>
                {usageDetails.map((detail, index) => (
                    <JDcard
                        head={
                            <Flex between>
                                <Small>{index ? "추가항목" : "대표항목"}</Small>{" "}
                                {index !== 0 && (
                                    <JDicon
                                        size="superTiny"
                                        onClick={handleDelete(detail.key)}
                                        hover
                                        icon="close"
                                    />
                                )}{" "}
                            </Flex>
                        }
                        className="capacityDetailEditor__detailBox"
                        mb
                        mode="border"
                        key={detail.key}
                    >
                        {/* {index !== 0 && <JDhorizen margin={3} />} */}
                        <InputText
                            id={CpadityDetailId("name", index)}
                            mb
                            label={`품명`}
                            onChange={handleChange(detail, "label")}
                            value={detail.label}
                        />
                        <InputText
                            id={CpadityDetailId("price", index)}
                            mb
                            comma
                            onChange={handleChange(detail, "price")}
                            value={detail.price}
                            label="가격"
                        />
                        <SelectCounter
                            id={CpadityDetailId("selectCounter", index)}
                            mb
                            selectProps={{ menuPlacement: "top" }}
                            label="수량"
                            count={detail.count}
                            onChange={handleChange(detail, "count")}
                        />
                    </JDcard>
                ))}
            </>
        </JDcard>
    );
};

export const CpadityDetailId = (
    fieldKey: "name" | "price" | "selectCounter",
    index: number = 0
) => {
    const id = "usageDetail" + index + fieldKey;
    return id;
};
