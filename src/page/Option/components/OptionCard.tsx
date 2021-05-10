import { autoComma, JDcard } from "@janda-com/front";
import { CardProps } from "@janda-com/front/dist/components/cards/Card";
import React, { useContext } from "react";
import { Info } from "../../../atom/Info";
import AppContext from "../../../context";
import { Foption } from "../../../type/api";
import { yyyymmdd } from "../../../utils/dateFormat";

interface IProp extends CardProps {
    option: Foption;
}

export const OptionCard: React.FC<IProp> = ({ option, ...props }) => {
    const { itemOps } = useContext(AppContext);

    const items = itemOps.filter((itemOp) =>
        option.dependentItem?.includes(itemOp.value)
    );
    const itemNames = items.map((item) => item.label);
    return (
        <JDcard head={option.label} {...props}>
            <Info mr mb label={"가격"} value={autoComma(option.price || 0)} />
            <Info
                mr
                mb
                label={"재고"}
                value={
                    option.count === -1 ? "재고무한" : option.count.toString()
                }
            />
            <Info mr mb label={"생성일"} value={yyyymmdd(option.createdAt)} />
            <Info mr mb label={"종속상품"} value={itemNames.join(", ")} />
        </JDcard>
    );
};
